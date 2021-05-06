
const TEMPLATE_PRODUCTOS = 
`
        <!--<div id="cabecera" class="ml-3 my-3">
            <strong>Buscar </strong><input id="buscarProducto" type="text">
        </div>-->      
        <div id="listaProductos" class="justify-content-center mt-4 mb-2"></div>
        <div  class="col text-center my-3"><!-- Button trigger modal -->
        <button class="btn botonColor btn-lg" id="imagenCarrito"   data-toggle="modal" data-target="#carritoModal" data-backdrop="static" data-keyboard="false">
          Mostrar carrito
        </button>
        </div>
        <div id = "carrito" > 
        
        <div class="modal fade" id="carritoModal" tabindex="-1" role="dialog" aria-labelledby="carritoModalLongTitle" >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h3 class="modal-title" id="carritoModalLongTitle">Tu compra en Wear by Sil</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <div id="listacarrito" >
                    </div>
                    <div class="mt-2 text-center totalTipografia">Total: <strong id="total"></strong></div>
                    </div>
                
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" id="cerrarCarrito">Volver</button>
                    <button id="compraFinal"  type="button" class="btn btn-success " >Confirmar compra</button>
                </div>
                </div>
            </div>
        </div>
`
;


   

/*console.log("Hola");
let confirmarCompra = document.getElementById('confirmarCompra');
confirmarCompra.click = finalizarCompra();
function finalizarCompra(){
    console.log("chau");
    alert("La compra se realizo con exito!!");
    
    
    console.log("Hola");
let confirmarCompra = document.getElementById('confirmarCompra');
confirmarCompra.addEventListener("click", function() {
    console.log("chau");
    alert("La compra se realizo con exito!!");
  }); 
}*/
          
    //<button class="botonCarrito btn btn-success" id="imagenCarrito">Mostrar compra</button>

   