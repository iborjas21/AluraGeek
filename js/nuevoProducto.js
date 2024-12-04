import { servicios } from "./conexionJsonServer.js";

const formulario = document.querySelector("[data-formulario]");

//validaciones

async function crearProducto(evento){
    evento.preventDefault();
    const titulo = document.querySelector("[data-titulo]").value;    
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    //const descripcion = Math.floor(Math.random*10).toString();

    try{
        await servicios.crearProductos(titulo, precio, imagen);    
        alert("Producto creado con exito");          
        window.location.href="./index.html";
        
    }catch(e){
        alert(e);
    }
    form.reset();
}

formulario.addEventListener("submit", evento => crearProducto(evento));
