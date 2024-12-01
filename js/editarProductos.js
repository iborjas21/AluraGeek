import editarProducto from './conexionJsonServer';



  editarProducto(1, "Nuevo Título", "5000", "https://nueva-imagen.jpg")
  .then(producto => {
    console.log("Producto actualizado:", producto);
  })
  .catch(error => {
    console.error("Error al actualizar el producto:", error);
  });


window.editarProducto = function(index) {
    const producto = productos[index];
    const precioSinFormato = parseFloat(producto.precio.replace(/[$,]/g, ''));
    const precioConFormato = precioSinFormato.toLocaleString('de-DE', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    document.getElementById("productName").value = producto.nombre;
    document.getElementById("productPrice").value = precioConFormato;
    document.getElementById("productImage").value = producto.imagen;
    editando = true;
    productoIndex = index;
    productModalLabel.innerText = "Editar Producto";
    productModal.show();
};