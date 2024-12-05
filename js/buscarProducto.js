import { servicios } from "./conexionJsonServer.js";
import crearCard from "./mostrarProductos.js";

async function buscarProducto(evento) {
  evento.preventDefault();
  const datosDeBusqueda = document.querySelector("[data-busqueda]").value;
  console.log("Dato a buscar:", datosDeBusqueda);

  try {
    const busqueda = await servicios.buscarProductos(datosDeBusqueda);
    const listaDeBusqueda = document.querySelector("[data-lista]");

    console.log("Cantidad de datos que coinciden:", busqueda.length); // Cantidad de coincidencias
    console.log("Resultado de la búsqueda:", busqueda); // Mostrar los datos que coinciden

    

    // Limpiar la lista de productos anterior.
    while (listaDeBusqueda.firstChild) {
      listaDeBusqueda.removeChild(listaDeBusqueda.firstChild);
    }

    // Mostrar los resultados o un mensaje si no hay coincidencias.
    if (busqueda.length > 0) {
      busqueda.forEach(elemento => {
        listaDeBusqueda.appendChild(
          crearCard(
            elemento.titulo || elemento.título || "Sin título",
            elemento.precio || "0",
            elemento.identificación || "ID desconocido",
            elemento.imagen || "URL no disponible"
          )
        );
      });
    } else {
      // Mensaje si no hay resultados.
      listaDeBusqueda.innerHTML = `<h2 class="mensaje__titulo">No encontramos productos para ese filtro</h2>`;
    }
  } catch (error) {
    console.error("Error al buscar productos:", error);
    
  }
}

const botonBusqueda = document.querySelector("[data-boton-busqueda]");
botonBusqueda.addEventListener("click", evento => buscarProducto(evento));
