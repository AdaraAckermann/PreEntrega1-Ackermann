console.log("Bienvenidos!")


   // Funcion para mostrar los productos disponibles
   function mostrarProductos() {
    alert("Productos disponibles:\n1. Camiseta ($15000)\n2. Pantalón ($40000)\n3. Zapatos ($60000)\n4. Salir");
  }
  
  // Funcion para calcular el total de la compra
  function calcularTotal(carrito) {
    let total = 0;
    for (const producto of carrito) {
      total += producto.precio * producto.cantidad;
    }
    return total;
  }
  
  // Inicializacion del carrito
  const carrito = [];
  
  alert("Bienvenido a la tienda online! Comencemos con tus compras");
  
  
  while (true) {
    mostrarProductos();
  
    const opcion = parseInt(prompt("Ingrese el número del producto que desea comprar (1-4):"));
  
    if (opcion === 4) {
      alert("Gracias por visitarnos, hasta la proxima!");
      break;
    }
  
    if (opcion < 1 || opcion > 3) {
      alert("Opción inválida. Por favor, elija un número valido.");
      continue;
    }
  
    const productoSeleccionado = {
      nombre: "",
      precio: 0,
      cantidad: 0
    };
  
    if (opcion === 1) {
      productoSeleccionado.nombre = "Camiseta";
      productoSeleccionado.precio = 15000;
    } else if (opcion === 2) {
      productoSeleccionado.nombre = "Pantalón";
      productoSeleccionado.precio = 40000;
    } else if (opcion === 3) {
      productoSeleccionado.nombre = "Zapatos";
      productoSeleccionado.precio = 60000;
    }
  
    productoSeleccionado.cantidad = parseInt(prompt(`Ingrese la cantidad de ${productoSeleccionado.nombre} que desea comprar:`));
  
    if (isNaN(productoSeleccionado.cantidad) || productoSeleccionado.cantidad <= 0) {
      alert("Cantidad inválida. Por favor, ingrese una cantidad válida.");
      continue;
    }
  
    carrito.push(productoSeleccionado);
  
    const continuarComprando = prompt("¿Desea seguir comprando? (Sí/No)").toLowerCase();
  
    if (continuarComprando !== "si" && continuarComprando !== "sí") {
      break;
    }
  }
  
  if (carrito.length > 0) {
    const totalCompra = calcularTotal(carrito);
  
    let descuento = 0;
    if (totalCompra >= 100000) {
      descuento = totalCompra * 0.1;
      alert("¡Felicidades! Obtuviste un 10% de descuento.");
    }
  
    const totalAPagar = totalCompra - descuento;
  
    let resumenCompra = `Resumen de la compra:\n${carrito.length} productos en el carrito\n`;
  
    for (const producto of carrito) {
      resumenCompra += `${producto.cantidad} ${producto.nombre}\n`;
    }
  
    resumenCompra += `Total a pagar: $${totalAPagar.toFixed(2)}`;
  
    if (descuento > 0) {
      resumenCompra += `\nDescuento aplicado: $${descuento.toFixed(2)}`;
    }
  
    // Mostrar metodos de envio si el total es menor a $100000
    if (totalAPagar < 100000) {
      let metodoEnvio = prompt("Seleccione el método de envío:\n1. Retiro en sucursal ($300)\n2. Envío a domicilio ($1800)");
      while (metodoEnvio !== "1" && metodoEnvio !== "2") {
        alert("Opción inválida. Por favor, seleccione 1 o 2.");
        metodoEnvio = prompt("Seleccione el método de envío:\n1. Retiro en sucursal ($300)\n2. Envío a domicilio ($1800)");
      }
      
      metodoEnvio = parseInt(metodoEnvio);
      
      let costoEnvio = 0;
      if (metodoEnvio === 2) {
        costoEnvio = 1800;
        resumenCompra += `\nMétodo de envío: Envío a domicilio`;
        resumenCompra += `\nCosto de envío: $${costoEnvio.toFixed(2)}`;
      } else if (metodoEnvio === 1) {
        costoEnvio = 300;
        resumenCompra += `\nMétodo de envío: Retiro en sucursal`;
        resumenCompra += `\nCosto de envío: $${costoEnvio.toFixed(2)}`;
      }
    } else {
      // Envio gratis si el total es igual o mayor a $100000
      resumenCompra += "\nEnvío gratis por compra igual o mayor a $100000!";
    }

      // Agregar métodos de pago
      let metodoPago = prompt("Seleccione el método de pago:\n1. Tarjeta de crédito\n2. Tarjeta de débito");
      while (metodoPago !== "1" && metodoPago !== "2") {
          alert("Opción inválida. Por favor, seleccione 1 (Tarjeta de crédito) o 2 (Tarjeta de débito).");
          metodoPago = prompt("Seleccione el método de pago:\n1. Tarjeta de crédito\n2. Tarjeta de débito");
      }
  
      metodoPago = parseInt(metodoPago);
  
      // Datos de la tarjeta y el titular
      let datosTarjeta = {};
      datosTarjeta.numero = prompt("Ingrese el número de la tarjeta:");
      datosTarjeta.fechaVencimiento = prompt("Ingrese la fecha de vencimiento de la tarjeta (MM/AA):");
      datosTarjeta.codigoSeguridad = prompt("Ingrese el código de seguridad de la tarjeta:");
      datosTarjeta.titular = prompt("Ingrese el nombre del titular de la tarjeta:");
  
      // Mostrar el resumen de la compra, metodo de pago y datos de la tarjeta usando alert()
      resumenCompra += `\nMétodo de pago: ${metodoPago === 1 ? "Tarjeta de crédito" : "Tarjeta de débito"}`;
      resumenCompra += `\nNúmero de tarjeta: ${datosTarjeta.numero}`;
      resumenCompra += `\nFecha de vencimiento: ${datosTarjeta.fechaVencimiento}`;
      resumenCompra += `\nCódigo de seguridad: ${datosTarjeta.codigoSeguridad}`;
      resumenCompra += `\nTitular de la tarjeta: ${datosTarjeta.titular}`;
  

   // Mostrar el resumen de la compra usando alert()
    alert(resumenCompra);


   // mostrar el resumen de la compra con console.log()
 console.log(resumenCompra);
} else {
    alert("No se ha agregado ningún producto al carrito.");
}