let app, router;

// Mostrar los productos al inicio
$(() => {
    // Crear controller/app
    app = new ProductoController(new ProductoModel(), new ProductoView());

    // Crear Router
    router = new Router(app);
    router.route("")
} );

// En cada cambio del hash, llamar al router
$( window ).on( 'hashchange', function() {
    const nuevoPath = location.hash.split('/')[1];
    router.route(nuevoPath);
});