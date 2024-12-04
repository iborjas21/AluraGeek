import { servicios } from "./conexionJsonServer.js";

const lista = document.querySelector("[data-lista]");

//validaciones

export default function crearCard(titulo, precio, id, imagen) {
    const articulo = document.createElement("div");
    articulo.className = "card";
    
    articulo.innerHTML = 
    ` <div class="img-contenedor">
            <img class="imagen-iten" src="${imagen}" alt="${titulo}">
        </div>
        <div class="card-contenedor--info">
            <p>${titulo}</p>
            <div class="card-contenedor--value">
                <p> $ ${precio}</p>
                <button class="boton-borrar" data-boton-busqueda data-id=${id}>
                <img class="papelera" src="./img/papelera.png" alt="Eliminar">
                </button>
            </div>
        </div>
    `;


    // Asigna el evento de eliminación

   
    addDeleteEvent(articulo, id);

    return articulo;

}

// Asigna el evento de eliminar producto a la tarjeta
function addDeleteEvent(articulo, id) {
  const deleteButton = articulo.querySelector(".boton-borrar");
  deleteButton.addEventListener("click", async () => {
    try {
      await servicios.deleteProductos(id);
      articulo.remove();
      console.log(`Producto con id ${id} eliminado`);
        alert(`Producto con id ${id} eliminado`);
    } catch (error) {
      console.error(`Error al eliminar el producto con id ${id}:`, error);
    }
  });
}



async function listaProductos() {
  try{
    const listaAPI = await servicios.listaProductos();
    listaAPI.forEach(element => lista
      .appendChild(crearCard(element.titulo, element.precio, element.id, element.imagen)))

  }catch{
    lista.innerHTML=`<h2 class="mensaje__titulo">No fue posible cargar la lista de productos</h2>`;
  }          
  };

  listaProductos();
        


