
import { servicios } from "./conexionJsonServer.js";
import crearCard from "./mostrarProductos.js";



//validaciones

async function buscarProducto(evento){
    evento.preventDefault();
    const datosDeBusqueda=document.querySelector("[data-busqueda]").value;
    const busqueda= await servicios.buscarProductos(datosDeBusqueda);

    const listaDeBusqueda=document.querySelector("[data-lista]");

    while(listaDeBusqueda.firstChild){
        console.log(listaDeBusqueda.firstChild)
        listaDeBusqueda.removeChild(listaDeBusqueda.firstChild)
    } 
    listaDeBusqueda.replaceChildren();

    busqueda.forEach(elemento => listaDeBusqueda.
        appendChild(crearCard(elemento.titulo, elemento.precio, elemento.id, elemento.imagen)));

     if(busqueda.length===0){
        listaDeBusqueda.innerHTML=`<h2 class="mensaje__titulo">No encontramos productos para ese filtro</h2>`;
    } 
    
   
}

const botonBusqueda=document.querySelector("[data-boton-busqueda]");

botonBusqueda.addEventListener("click", evento => buscarProducto(evento));