    //------------------PANTALONES--------------------

    const pantalones = [
    

        { 
            id: "pantalon-03", 
            titulo: "Pantalon 03",
            imagen: "/media/pantalon-03.jpg",
            catergoria: {
              nombre: "Pantalon",
              id: "pantalon"
            },
            precio: 31000
        },
        
        
        
        { 
            id: "pantalon-04", 
            titulo: "Pantalon 04",
            imagen: "/media/pantalon-04.jpg",
            catergoria: {
              nombre: "Pantalon",
              id: "pantalon"
            },
            precio: 26900
        
        },
        
        { 
        id: "pantalon-06", 
        titulo: "Pantalon 06",
        imagen: "/media/pantalon-06.jpg",
        catergoria: {
          nombre: "Pantalon",
          id: "pantalon"
        },
        precio: 28000
        },
    
    
    
        { 
        id: "pantalon-05", 
        titulo: "Pantalon 05",
        imagen: "/media/pantalon-05.jpg",
        catergoria: {
          nombre: "Pantalon",
          id: "pantalon"
        },
        precio: 26900
    
        },
      
    
      ];


  const contenedorProductos = document.querySelector("#contenedor-productos");
  const botonesCategorias = document.querySelectorAll(".boton-categoria");
  const tituloPrincipal = document.querySelector("#titulo-principal");


  let botonesAgregar = document.querySelectorAll(".producto-agregar");
  const numerito = document.querySelector("#numerito");
  
  
  
  
  function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";
    
  
    productosElegidos.forEach(pantalones => {
        
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <div class="producto-container">
                <div class="producto-detalles">
                  <img class="producto-img" src="${pantalones.imagen} " alt="${pantalones.titulo}">
                  <h3 class="producto-titulo">${pantalones.titulo}</h3>
                  <p class="producto-precio">${pantalones.precio}</p>
                  <button class="producto-agregar btn btn-agregar" id="${pantalones.id}">Agregar al Carrito</button>
                </div>
            </div>
  
        `;
      
       contenedorProductos.append(div);

    })
  
}

cargarProductos(pantalones);


botonesCategorias.forEach(boton => {

    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos-inicio") {
            const productoCategoria = productos.find(pantalones => pantalones.catergoria.id === e.currentTarget.id);
            console.log(productoCategoria);
            tituloPrincipal.innerText = "Todos los productos";

            const productosBoton = productos.filter(pantalones => pantalones.catergoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);

        }  else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(pantalones);
        }   

    })

})



  
  function actualizarBotonesAgregar () {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
  
    botonesAgregar.forEach(boton => {
      boton.addEventListener("click", agregarAlCarrito);
    });
  
  }
  
  //-------------------Para sumar productos al carrito-----------------------
  
  const productosEnCarrito = [];
  
  function agregarAlCarrito(e) {
  
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(pantalones => pantalones.id === idBoton);
  
    if(productosEnCarrito.some(pantalones => pantalones.id ===idBoton)){
      const indexRemeras = productosEnCarrito.findIndex(producto => producto.id === idBoton );
      productosEnCarrito[indexRemeras].cantidad++;
  
    } else {
      productoAgregado.cantidad = 1;
      productosEnCarrito.push(productoAgregado);
    }
  
    actualizarNumerito();
  
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
  
  
    console.log(productosEnCarrito);
  
  }
  
  //-------------------Que los productos se agreguen efectivamente en el carrito------------------
  
  function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, pantalones) => acc + pantalones.cantidad, 0 );
    numerito.innerText = nuevoNumerito;
  
    console.log(nuevoNumerito);
  }