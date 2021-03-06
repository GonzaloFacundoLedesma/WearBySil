
	

class Producto {
    constructor(nombre, precio, id, imagen = "../img/sinimagen.jpg", talle, color, tipo, favNuevo){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.id = id;
        this.talle = talle;
        this.color = color;
        this.ventas = 0;
        this.tipo = tipo;
        this.favNuevo = favNuevo;
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
    /*Definir constante Enumerales ropa=0 etc */ 
    mostrarProductosYCarrito(productos) {
        console.log("ProductoView::mostrarProductosYCarrito");
        
        // Cargar template de productos


        $("#app").html(TEMPLATE_PRODUCTOS);

        // Hacer que el carrito se pueda abrir y cerrar
        /*$("#carrito").css("display", "none");
        $('#imagenCarrito').click(() => {$('#carrito').slideToggle()});
        $('#cerrarCarrito').click(() => {$('#carrito').slideToggle()});

        $('#verMasRemeras').click(() => {$('#listaRemeras').slideToggle()});
        $('#verMasRemeras').click(() => {$('#listaRemeras').slideToggle()});
        
        /*$('#compraFinal').click(function(){
            
            
                alert("Su compra es un exito el equipo de Wear by Sil se comunicarĂ¡ con usted!"); 
                $("#listacarrito").empty();
                $('#total').empty();
                localStorage.clear();
                
            
            
        });*/ 

        // Agregar productos al DOM
        for(let producto of productos) {
            // Agregar un nodo producto como hijo del nodo "lista"
            

            if(producto.tipo === 0){
            /*ListaRemeras*/
            $("#listaRemeras").append(  
                `
    <div class="">
                    
        <div class="producto mx-3 mb-3" id= "producto_${producto.id}">
            
            <div class="text-center mt-4"><img class="producto--imagen" src="${producto.imagen}" ></div>
            <div class="text-center mt-2  producto--letra ">${producto.nombre}</div> 
            <div class="text-center producto--letra"> $${producto.precio} </div> 
            
            
        
            <!-- Button trigger modal -->
            <div class="row justify-content-center ">
            <button id="botonVer_${producto.id}" type="button" class="btn botonColor hoverBorder justify-content-center mt-2 bi bi-eye" data-toggle="modal" data-target="#verModal_${producto.id}">
                VER
            </button>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="verModal_${producto.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content modalCSS">
                  <!--<div class="modal-header">
                    <h5 class="modal-title" id="verModalLabel"> ${producto.nombre}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>-->
                  
                  <div class="modal-body">
                  
                  <div class="container-fluid">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="row">
                        <div class="col-lg-6">
                            <img class="img-fluid producto--imagen--modal d-none d-lg-block" src="${producto.imagen}" >
                        </div>
                        <div class="col-lg-6">
                                <div class="modal--PrecioTitulo">${producto.nombre}</div>
                                <div class="modal--PrecioTitulo mb-3">$${producto.precio}</div>
                                <div class="modal--Descuento mb-3">Precio abonando en efectivo o transferencia bancaria. </div>
                                <div class="modal--Descuento mb-3">Abonando con tarjeta de crĂ©dito el precio del producto es $${(producto.precio*1.10).toFixed()}</div>
                                <div class="modal--Info"> Colores disponibles:</div>
                                <div class="modal--Info mb-3"> ${producto.color} </div>
                                <div class="modal--Info mb-3"><strong>Talles disponibles: ${producto.talle}</strong></div>
                                <div class="modal--Info navHover mb-3"><a class="modal--Info" target="_blank" href="./guiaTalles.html">GuĂ­a de talles</a> </div>
                                
                                
                                
                                
                        </div>
                    </div>
                  </div>      
                  </div>
                  <div class="modal-footer hoverAccent">
                    <button type="button" class="btn botonVolver hoverBorder modalTipografia " data-dismiss="modal">Volver</button>
                    <button type="button" class="btn botonHacerPedido hoverBorder " title="Ingresando podes encargar todos los productos que necesitas"> <a target="_blank" href="https://wa.me/5492216562492?text=Â¡Hola!%20Quisiera%20encargar%20la%20remera%20${producto.nombre}" class="modalTipografia ">Hacer pedido </a>
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>    
            
        </div>   
    </div>     
       
    `);
    }
    if(producto.tipo === 1){
    /*ListaBuzos*/

    $("#listaBuzos").append(  
        `
<div class="">
            
<div class="producto mx-3 mb-3" id= "producto_${producto.id}">
    
    <div class="text-center mt-4"><img class="producto--imagen" src="${producto.imagen}" ></div>
    <div class="text-center mt-2  producto--letra ">${producto.nombre}</div> 
    <div class="text-center producto--letra"> $${producto.precio} </div> 
    
    

    <!-- Button trigger modal -->
    <div class="row justify-content-center ">
    <button id="botonVer_${producto.id}" type="button" class="btn botonColor hoverBorder justify-content-center mt-2 bi bi-eye" data-toggle="modal" data-target="#verModal_${producto.id}">
        VER
    </button>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="verModal_${producto.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content modalCSS">
          <!--<div class="modal-header">
            <h5 class="modal-title" id="verModalLabel"> ${producto.nombre}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>-->
          
          <div class="modal-body">
          
          <div class="container-fluid">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <div class="row">
                <div class="col-lg-6">
                    <img class="img-fluid producto--imagen--modal d-none d-lg-block" src="${producto.imagen}" >
                </div>
                <div class="col-lg-6">
                        <div class="modal--PrecioTitulo">${producto.nombre}</div>
                        <div class="modal--PrecioTitulo mb-3">$${producto.precio}</div>
                        <div class="modal--Descuento mb-3">El modelo estĂ¡ disponible con cuello redondo $1800 y con capucha $2700</div>
                        <div class="modal--Descuento mb-3">Precio abonando en efectivo o transferencia bancaria. </div>
                        <div class="modal--Descuento--Buzo mb-3">Abonando con tarjeta de crĂ©dito el precio aumenta en un 10% </div>
                        
                        <div class="modal--Info"> Colores disponibles:</div>
                        <div class="modal--Info mb-3"> ${producto.color} </div>
                        <div class="modal--Info mb-3"><strong>Talles disponibles: ${producto.talle}</strong></div>
                        <div class="modal--Info navHover mb-3"><a class="modal--Info" target="_blank" href="./guiaTalles.html">GuĂ­a de talles</a> </div>
                        
                        
                        
                        
                </div>
            </div>
          </div>      
          </div>
          <div class="modal-footer hoverAccent">
            <button type="button" class="btn botonVolver hoverBorder modalTipografia " data-dismiss="modal">Volver</button>
            <button type="button" class="btn botonHacerPedido hoverBorder " title="Ingresando podes encargar todos los productos que necesitas"> <a target="_blank" href="https://wa.me/5492216562492?text=Â¡Hola!%20Quisiera%20encargar%20el%20${producto.nombre}" class="modalTipografia ">Hacer pedido </a>
            </button>
            
          </div>
        </div>
      </div>
    </div>    
    
</div>   
</div>     

`

);
if(producto.favNuevo === 1){
    
    $("#listaFav").append(  
        `
<div class="">
            
<div class="producto mx-3 mb-3" id= "producto_${producto.id}">
    
    <div class="text-center mt-4"><img class="producto--imagen" src="${producto.imagen}" ></div>
    <div class="text-center mt-2  producto--letra ">${producto.nombre}</div> 
    <div class="text-center producto--letra"> $${producto.precio} </div> 
    
    

    <!-- Button trigger modal -->
    <div class="row justify-content-center ">
    <button id="botonVer_${producto.id}" type="button" class="btn botonColor hoverBorder justify-content-center mt-2 bi bi-eye" data-toggle="modal" data-target="#verModal_${producto.id}">
        VER
    </button>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="verModal_${producto.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content modalCSS">
          <!--<div class="modal-header">
            <h5 class="modal-title" id="verModalLabel"> ${producto.nombre}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>-->
          
          <div class="modal-body">
          
          <div class="container-fluid">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <div class="row">
                <div class="col-lg-6">
                    <img class="img-fluid producto--imagen--modal" src="${producto.imagen}" >
                </div>
                <div class="col-lg-6">
                        <div class="modal--PrecioTitulo">${producto.nombre}</div>
                        <div class="modal--PrecioTitulo mb-3">$${producto.precio}</div>
                        <div class="modal--Descuento mb-3">Precio abonando en efectivo o transferencia bancaria. </div>
                        <div class="modal--Info"> Colores disponibles:</div>
                        <div class="modal--Info mb-3"> ${producto.color} </div>
                        <div class="modal--Info mb-3"><strong>Talles disponibles: ${producto.talle}</strong></div>
                        <div class="modal--Info navHover mb-3"><a class="modal--Info" target="_blank" href="./guiaTalles.html">GuĂ­a de talles</a> </div>
                        
                        
                        
                        
                </div>
            </div>
          </div>      
          </div>
          <div class="modal-footer hoverAccent">
            <button type="button" class="btn botonVolver hoverBorder modalTipografia " data-dismiss="modal">Volver</button>
            <button type="button" class="btn botonHacerPedido hoverBorder "> <a target="_blank" href="https://wa.me/5492216562492?text=Â¡Hola!%20Quisiera%20encargar%20la%20prenda%20${producto.nombre}" class="modalTipografia ">Hacer pedido </a>
            </button>
            
          </div>
        </div>
      </div>
    </div>    
    
</div>   
</div>     

`);
    
}
    }


/*ListaUnicas*/

if(producto.tipo === 2){
$("#listaUnicas").append( 
    `
<div class="">
        
<div class="producto mx-3 mb-3" id= "producto_${producto.id}">

<div class="text-center mt-4"><img class="producto--imagen" src="${producto.imagen}" ></div>
<div class="text-center mt-2  producto--letra ">${producto.nombre}</div> 
<div class="text-center producto--letra"> $${producto.precio} </div> 



<!-- Button trigger modal -->
<div class="row justify-content-center ">
<button id="botonVer_${producto.id}" type="button" class="btn botonColor hoverBorder justify-content-center mt-2 bi bi-eye" data-toggle="modal" data-target="#verModal_${producto.id}">
    VER
</button>
</div>
<!-- Modal -->
<div class="modal fade" id="verModal_${producto.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content modalCSS">
      <!--<div class="modal-header">
        <h5 class="modal-title" id="verModalLabel"> ${producto.nombre}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>-->
      
      <div class="modal-body">
      
      <div class="container-fluid">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div class="row">
            <div class="col-lg-6">
                <img class="img-fluid producto--imagen--modal d-none d-lg-block" src="${producto.imagen}" >
            </div>
            <div class="col-lg-6">
                    <div class="modal--PrecioTitulo">${producto.nombre}</div>
                    <div class="modal--PrecioTitulo mb-3">$${producto.precio}</div>
                    <div class="modal--Descuento mb-3">Precio abonando en efectivo o transferencia bancaria. </div>
                                <div class="modal--Descuento mb-3">Abonando con tarjeta de crĂ©dito el precio del producto es $${(producto.precio*1.10).toFixed()}</div>
                    <div class="modal--Info"> Colores disponibles:</div>
                    <div class="modal--Info mb-3"> ${producto.color} </div>
                    <div class="modal--Info mb-3"><strong>Talles disponibles: ${producto.talle}</strong></div>
                    <div class="modal--Info navHover mb-3"><a class="modal--Info" target="_blank" href="./guiaTalles.html">GuĂ­a de talles</a> </div>
                    
                    
                    
                    
            </div>
        </div>
      </div>      
      </div>
      <div class="modal-footer hoverAccent">
        <button type="button" class="btn botonVolver hoverBorder modalTipografia " data-dismiss="modal">Volver</button>
        <button type="button" class="btn botonHacerPedido hoverBorder " title="Ingresando podes encargar todos los productos que necesitas"> <a target="_blank" href="https://wa.me/5492216562492?text=Â¡Hola!%20Quisiera%20encargar%20la%20prenda%20${producto.nombre}" class="modalTipografia ">Hacer pedido </a>
        </button>
        
      </div>
    </div>
  </div>
</div>    

</div>   
</div>     

`);
}   
    
    }
        this.actualizarCarrito(productos);
    }
    
    
    VerProductos(){
        $('#botonVer').click
    }
    actualizarCarrito(productos) {
        console.log("ProductoView::actualizarCarrito");

        $("#listacarrito").html("");
        let total = 0;
       
        
        for(let producto of productos) {
            // Si el producto tiene ventas mostrar en el carrito
            
            if (producto.ventas > 0) {
                total += producto.ventas*producto.precio;
                let talle = document.getElementById("talleSelect_"+producto.id).value;
                let color = document.getElementById("colorSelect_"+producto.id).value;
                $("#listacarrito").append(
                    `
                    
                    <div class="elementoCarrito" >
                        <div class="elementoCarrito--tipografia">${producto.nombre}</div> 
                        
                        <p>Cantidad: ${producto.ventas}</p>
                        <div class="container-fluid mb-1">
                            <div class="row">
                                <div id="mostrarTalle" class="col-4"><strong >Talle: `+talle+` </strong></div>  
                                <div id="mostrarColor" class="col-6"><strong >Color:  `+color+` </strong></div> 
                            </div>
                        </div>
                        <div class=" text-center"><button class="eliminarDelCarrito btn btn-danger  " id="eliminar_${producto.id}">Eliminar</button></div>
                        
                    
                    `
                );
            }
        }
        // Actualizar total del carrito
        $('#total').text(total.toString());
        
    }

    
        
    
    filtrarProductos(productos, busqueda) {
        for (let producto of productos) {
            if( (producto.nombre.toLowerCase().includes(busqueda.toLowerCase())) ) {
                $(`#producto_${producto.id}`).show();
               
            } else {
                $(`#producto_${producto.id}`).hide();
            }
        }
    }

    // Metodos para mostrar las distintas secciones
        
    /*mostrarError() {
        $("#app").html(TEMPLATE_ERROR);
    }*/

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
            $.getJSON('../data/productos.json', (res) => {

                // res es un Array de objetos Producto
                for (let producto of res) {
                    this.crearProducto(producto.nombre,
                        producto.precio,
                        producto.id,
                        producto.imagen,
                        producto.talle,
                        producto.color, 
                        producto.tipo, 
                        producto.favNuevo
                    );
                }
                this.productosCargados = true;
                callback();
            }
            
            )
            
            
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
                const guardar = { id:producto.id, ventas: producto.ventas};
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

    crearProducto(nombre,precio,id,imagen,talle,color,tipo,favNuevo) {
        
        console.log('ProductoModel::crearProducto');
        let nuevoProducto = new Producto(nombre,precio,id,imagen,talle,color,tipo,favNuevo);
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
