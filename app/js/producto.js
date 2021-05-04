class Producto {
    constructor(nombre, precio, id, imagen = "../img/sinimagen.jpg"){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.id = id;
        this.ventas = 0;
        if ( imagen === "") 
            this.imagen="../img/sinimagen.jpg";
    }

    comprar(cant){
        this.ventas = this.ventas+cant;
    }
}

// Vista - Modificacion del DOM y eventos
class ProductoView {

    notificacion(mensaje, color = "green") {
        const randomId = Math.random().toString(36).substring(7);
        $('body').append(`<div class="notificacion" id="${randomId}" style="display: none">${mensaje}</div>`);

        // aparece y desaparece la notificacion
        $(`#${randomId}`).css("background-color", color).fadeIn(600).delay(5000).fadeOut(600, () => {
            $(`#${randomId}`).remove();
        });
    }
    
    mostrarProductosYCarrito(productos) {
        console.log("ProductoView::mostrarProductosYCarrito");
        
        // Cargar template de productos
        $("#app").html(TEMPLATE_PRODUCTOS);

        // Hacer que el carrito se pueda abrir y cerrar
        $("#carrito").css("display", "none");
        $('#imagenCarrito').click(() => {$('#carrito').slideToggle()});
        $('#cerrarCarrito').click(() => {$('#carrito').slideToggle()});
        

        // Agregar productos al DOM
        for(let producto of productos) {
            // Agregar un nodo producto como hijo del nodo "lista"
            $("#listaProductos").append(
                `
                <div class="">
                    
                    <div class="producto mx-2 mb-2" id= "producto_${producto.id}">
                        <div class="text-center producto--titulo mb-1">${producto.nombre}</div> 
                        <div class="row justify-content-center"><img class="producto--imagen" src="${producto.imagen}" ></div>
                        <div class="text-center mb-1"><strong>Precio: ${producto.precio}</strong></div> 
                        <div class="row justify-content-center">
                        <button class="botoncomprar btn btn-success justify-content-center" id="comprar_${producto.id}">Agregar a la compra!</button>
                        </div>
                    </div>
                       
                </div>    
                `
            );
        }

        this.actualizarCarrito(productos);
    }

    actualizarCarrito(productos) {
        console.log("ProductoView::actualizarCarrito");

        $("#listacarrito").html("");
        let total = 0;
        for(let producto of productos) {
            // Si el producto tiene ventas mostrar en el carrito
            if (producto.ventas > 0) {
                total += producto.ventas*producto.precio;
                $("#listacarrito").append(
                    `
                    
                    <div class="elementoCarrito" >
                        <div class="elementoCarrito--tipografia mb-1">${producto.nombre}</div> 
                        
                        <p>Cantidad: ${producto.ventas}</p> 
                        <div class=" text-center"><button class="eliminarDelCarrito btn btn-danger mb-1 " id="eliminar_${producto.id}">Eliminar</button></div>
                        
                    
                    `
                );
            }
        }
        // Actualizar total del carrito
        $('#total').text(total.toString());
    }

    
    /*`
                    <li class="elementoCarrito">
                        <h2>${producto.nombre}</h2> 
                        <p>Cantidad: ${producto.ventas}</p> 
                        <button class="eliminarDelCarrito" id="eliminar_${producto.id}">Eliminar</button>
                    </li>
                    `*/
    
    
    filtrarProductos(productos, busqueda) {
        for (let producto of productos) {
            if(producto.nombre.toLowerCase().includes(busqueda.toLowerCase())) {
                $(`#producto_${producto.id}`).show();
            } else {
                $(`#producto_${producto.id}`).hide();
            }
        }
    }

    // Metodos para mostrar las distintas secciones
    mostrarUsuario() {
        $("#app").html(TEMPLATE_USUARIO);
    }

    
    mostrarError() {
        $("#app").html(TEMPLATE_ERROR);
    }

    mostrarCargando() {
        $("#app").html("<p>Cargando productos</p>");
    }

    // Metodos para agregar handlers de eventos
    agregarHandlerComprar(handler) {
        $('.botoncomprar').click(handler);
    }

    agregarHandlerEliminarDelCarrito(handler) {
        $('.eliminarDelCarrito').click(handler);
    }

    agregarHandlerBusqueda(handler) {
        $('#buscarProducto').on("change",handler);
    }
}

// Modelo - Agregado, modificado, eliminado y filtrado de datos
class ProductoModel {
    constructor() {
        this.productos = [];
        this.productosCargados = false;
    }

    cargarProductos(callback) {

        if ( this.productosCargados ) {
            callback();
        } else {

            console.log('ProductoModel::cargarProductos');

            // cargar productos con getJson
            $.getJSON('../data/productos.json', (res, estado) => {

                // res es un Array de objetos Producto
                for (let producto of res) {
                    this.crearProducto(producto.nombre,
                        producto.precio,
                        producto.id,
                        producto.imagen
                    );
                }
                this.productosCargados = true;
                callback();
            })
        }
    }

    cargarCarrito() {
        // Cargar carrito del localStorage
        console.log('ProductoModel::cargarCarrito');
        
        if( localStorage.getItem("carrito") ) {
            const cargarCarrito = JSON.parse(localStorage.getItem("carrito"));

            cargarCarrito.forEach(v => {
                this.productos.find(p => p.id == v.id).comprar(v.ventas);
            });
        }
    }

    guardarCarrito() {
        console.log('ProductoModel::guardarCarrito');

        // guardar carrito en el localstorage
        const carrito = [];
        for (let producto of this.productos) {
            if(producto.ventas > 0) {
                const guardar = { id:producto.id, ventas: producto.ventas };
                carrito.push(guardar);
            }
        }
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    eliminarDelCarrito(idProducto) {
        this.productos.find(p => p.id === idProducto).comprar(-1);
        this.guardarCarrito();
    }

    agregarAlCarrito(idProducto) {
        this.productos.find(p => p.id === idProducto).comprar(1);
        this.guardarCarrito();
    }

    crearProducto(nombre,precio,id,imagen) {
        console.log('ProductoModel::crearProducto');
        let nuevoProducto = new Producto(nombre,precio,id,imagen);
        this.productos.push(nuevoProducto);
    }
}

// Controller - Acciones del usuario - Usa un modelo y vista
class ProductoController {
    constructor(model,view) {
        this.model = model;
        this.view = view;
    }

    // Mostrar seccion de productos
    productos() {
        // Cargar y mostrar productos y carrito
        this.model.cargarProductos(() => {
            this.model.cargarCarrito();
            this.view.mostrarProductosYCarrito(this.model.productos, "");

            this.view.agregarHandlerComprar((e) => this.agregarAlCarrito(e.target));
            this.view.agregarHandlerEliminarDelCarrito((e) => this.eliminarDelCarrito(e.target));
            this.view.agregarHandlerBusqueda((e) => this.busqueda(e.target));

        })
    }

    agregarAlCarrito(target) {
        console.log("ProductoController::agregarAlCarrito");

        // Conseguir id del producto que se agrega al carrito
        const idProducto = target.id.split('_')[1];
        this.model.agregarAlCarrito(idProducto);

        // Actualizar carrito
        this.view.actualizarCarrito(this.model.productos);
        this.view.agregarHandlerEliminarDelCarrito((e) => this.eliminarDelCarrito(e.target));
        this.view.notificacion("Se agrego el producto al carrito", "green");
    }

    busqueda(target) {
        console.log("ProductoController::busqueda");
        this.view.filtrarProductos(this.model.productos, target.value);
    }

    eliminarDelCarrito(target) {
        console.log("ProductoController::eliminarDelCarrito");

        // Conseguir id del producto que se agrega al carrito
        const idProducto = target.id.split('_')[1];
        this.model.eliminarDelCarrito(idProducto);

        // Actualizar carrito
        this.view.actualizarCarrito(this.model.productos);
        this.view.agregarHandlerEliminarDelCarrito((e) => this.eliminarDelCarrito(e.target));
        this.view.notificacion("Se elimino el producto al carrito", "red");
    }

    // Mostrar seccion de error     
    error() {
        this.view.mostrarError();
    }
}

