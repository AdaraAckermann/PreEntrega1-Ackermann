const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito")) ||[] ;
console.log(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");




if (productosEnCarrito) {

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");

    contenedorCarritoProductos.innerHTML = ""; //para que no se repita

    productosEnCarrito.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("carrito-producto");
        div.innerHTML = `
        <div class="col-md-2">
            <img class="carrito-producto-imagen" src="${producto.imagen}" alt=""${producto.titulo}>
            <div class="carrito-producto-titulo">
                <small>Titulo</small>
                <h6>${producto.titulo}</h6>
            </div>

            <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>

            <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>$${producto.precio}</p>
            </div>

            <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>$${producto.precio * producto.cantidad}</p>
            </div>
                
              
            <button id= "${producto.id}" class="carrito-producto-eliminar btn btn-danger">
              <i class="bi bi-trash"></i>
            </button>
        </div>
        
        `;

        contenedorCarritoProductos.append(div);

    })

    
} else {

}

