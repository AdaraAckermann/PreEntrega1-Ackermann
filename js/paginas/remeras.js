import Toastify from "toastify-js"
import "toastify-js/src/toastify.css"
// Array de productos disponibles

//----------------------------------------------REMERAS-------------------------------------------------------------------------
const productos = [
    { 
      id: "remera-01", 
      titulo: "Remera 01",
      imagen: "/media/remera-01.jpeg",
      catergoria: {
        nombre: "Remeras",
        id: "remeras"
      },
      precio: 16000
  
    },
    { 
      id: "remera-02", 
      titulo: "Remera 02",
      imagen: "/media/remera-02.jpg",
      catergoria: {
        nombre: "Remeras",
        id: "remeras"
      },
      precio: 15900
  
    },
    { 
      id: "remera-03", 
      titulo: "Remera 03",
      imagen: "/media/remera-03.jpg",
      catergoria: {
        nombre: "Remeras",
        id: "remeras"
      },
      precio: 14000
  
    },
    { 
      id: "remera-04", 
      titulo: "Remera 04",
      imagen: "/media/remera-04.jpg",
      catergoria: {
        nombre: "Remeras",
        id: "remeras"
      },
      precio: 13900
  
    },
    { 
      id: "remera-05", 
      titulo: "Remera 05",
      imagen: "/media/remera-05.jpg",
      catergoria: {
        nombre: "Remeras",
        id: "remeras"
      },
      precio: 14000
  
    },
    { 
      id: "remera-06", 
      titulo: "Remera 06",
      imagen: "/media/remera-06.jpg",
      catergoria: {
        nombre: "Remeras",
        id: "remeras"
      },
      precio: 12000
  
    },
    { 
      id: "remera-07", 
      titulo: "Remera 07",
      imagen: "/media/remera-06.jpg",
      catergoria: {
        nombre: "Remeras",
        id: "remeras"
      },
      precio: 14500
  
    },
    { 
      id: "remera-08", 
      titulo: "Remera 08",
      imagen: "/media/remera-06.jpg",
      catergoria: {
        nombre: "Remeras",
        id: "remeras"
      },
      precio: 16700
  
    },

  ];

  fetch("/data/productos.json")
      .then(  resp => resp.json())
      .then( data => console.log(data))


  
  const contenedorProductos = document.querySelector("#contenedor-productos");
  const botonesCategorias = document.querySelectorAll(".boton-categoria");
  const tituloPrincipal = document.querySelector("#titulo-principal")
  let botonesAgregar = document.querySelectorAll(".producto-agregar");
  const numerito = document.querySelector("#numerito");
  
  
  
  
  function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";
    
  
    productosElegidos.forEach(producto => {
        
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <div class="producto-container">
                <div class="producto-detalles">
                  <img class="producto-img" src="${producto.imagen} " alt="${producto.titulo}">
                  <h3 class="producto-titulo">${producto.titulo}</h3>
                  <p class="producto-precio">$${producto.precio}</p>
                  <button class="producto-agregar btn btn-agregar" id="${producto.id}">Agregar al Carrito</button>
                </div>
            </div>
  
        `;
      
       contenedorProductos.append(div);

    })

    actualizarBotonesAgregar();
    console.log(botonesAgregar);
  
}

cargarProductos(productos);


botonesCategorias.forEach(boton => {

    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos-remeras") {
            const productoCategoria = productos.find(producto => producto.catergoria.id === e.currentTarget.id);
            console.log(productoCategoria);
            tituloPrincipal.innerText = productoCategoria.catergoria.nombre;

            const productosBoton = productos.filter(producto => producto.catergoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);

        }  else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }   

    })

})



  
  function actualizarBotonesAgregar () {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
  
    botonesAgregar.forEach(boton => {
      boton.addEventListener("click", agregarAlCarrito);
    });
  
  }
  
  //-------------------Funcion agregar al carrito:Para sumar productos al carrito-----------------------


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
    const productoAgregado = productos.find(producto => producto.id === idBoton);
  
    if(productosEnCarrito.some(producto => producto.id ===idBoton)){
      const index = productosEnCarrito.findIndex(producto => producto.id === idBoton );
      // console.log(index);
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
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0 );
    numerito.innerText = nuevoNumerito;
  
    console.log(nuevoNumerito);
  }
  
  
  