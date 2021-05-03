



function cargarProductos() {
    
    $.getJSON('./data/productos.json', (res, estado) => {
      if (estado === "success") {
        console.log(res);
        res.map(p=>peliculas.push(p));
      } else {
        console.log('Error al cargar productos.')
      }
    });
  }

cargarProductos();