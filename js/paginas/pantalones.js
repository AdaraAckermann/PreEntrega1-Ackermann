import Toastify from "toastify-js"
import "toastify-js/src/toastify.css"


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
    
  
    productosElegidos.forEach(pantalon => {
        
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <div class="producto-container">
                <div class="producto-detalles">
                  <img class="producto-img" src="${pantalon.imagen} " alt="${pantalon.titulo}">
                  <h3 class="producto-titulo">${pantalon.titulo}</h3>
                  <p class="producto-precio">$${pantalon.precio}</p>
                  <button class="producto-agregar btn btn-agregar" id="${pantalon.id}">Agregar al Carrito</button>
                </div>
            </div>
  
        `;
      
       contenedorProductos.append(div);

    })
    actualizarBotonesAgregar();
    console.log(botonesAgregar);
  
}

cargarProductos(pantalones);


botonesCategorias.forEach(boton => {

    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos-inicio") {
            const productoCategoria = pantalones.find(pantalon => pantalon.catergoria.id === e.currentTarget.id);
            console.log(productoCategoria);
            tituloPrincipal.innerText = "Todos los productos";

            const productosBoton = pantalones.filter(pantalon => pantalon.catergoria.id === e.currentTarget.id);
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
  
  
let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

  if(productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();

  } else {
    productosEnCarrito = [];
  }

  
  function agregarAlCarrito(e) {
  
    const idBoton = e.currentTarget.id;
    const productoAgregado = pantalones.find(pantalon => pantalon.id === idBoton);
  
    if(productosEnCarrito.some(pantalon => pantalon.id ===idBoton)){
      const index = productosEnCarrito.findIndex(pantalon => pantalon.id === idBoton );
      productosEnCarrito[index].cantidad++;
  
    } else {
      productoAgregado.cantidad = 1;
      productosEnCarrito.push(productoAgregado);
    }
  
    actualizarNumerito();
  
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    mostrarNotificacion(productoAgregado.titulo);

  
    console.log(productosEnCarrito);
  
  }
  
  //---------------------------------TOASTIFY-------------------------------------
  function mostrarNotificacion(titulo) {
    Toastify({
      text: `Producto "${titulo}" agregado al carrito`,
      duration: 3000,
      gravity: 'bottom', // Posición de la notificación
      position: 'right', // Alineación en la posición elegida
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    
    }).showToast();
  }
  
  //-------------------Que los productos se agreguen efectivamente en el carrito------------------
  
  function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, pantalon) => acc + pantalon.cantidad, 0 );
    numerito.innerText = nuevoNumerito;
  
    console.log(nuevoNumerito);
  }