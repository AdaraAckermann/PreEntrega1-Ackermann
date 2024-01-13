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

  }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");



function cargarProductos() {


  productos.forEach(producto => {

    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
            <div class="producto-container">
              <div class="producto-detalles">
                <img class="producto-img" src="${producto.imagen} " alt="${producto.titulo}">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar btn btn-agregar" id="${producto.id}">Agregar al Carrito</button>
              </div>
            </div>

    `;

    contenedorProductos.append(div);
  })

  actualizarBotonesAgregar();
  console.log(botonesAgregar);

}

cargarProductos();

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
  const productoAgregado = productos.find(producto => producto.id === idBoton);

  if(productosEnCarrito.some(producto => producto.id ===idBoton)){
    const indexRemeras = productosEnCarrito.findIndex(producto => producto.id === idBoton );
    productosEnCarrito[indexRemeras].cantidad++;

  } else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
  }

  actualizarNumerito();

  console.log(productosEnCarrito);

}

//-------------------Que los productos se agreguen efectivamente en el carrito------------------

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0 );
  numerito.innerText = nuevoNumerito;

  console.log(nuevoNumerito);
}


