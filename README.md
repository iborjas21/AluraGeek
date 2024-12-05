
AluraGeek es una aplicación web que permite a los usuarios gestionar una lista de productos. 

Corresponde a un  desafio Challenge de Alura Latam, en donde los usuarios pueden visualizar , agregar y eliminar productos, utilizando tecnologías frontend modernas y un servidor JSON simulado.

Características:

Con esta aplicacion usted podrá

1- Visualizar Productos : Los productos se cargan automáticamente desde el servidor simulado al abrir la página.

![image](https://github.com/user-attachments/assets/85d9633f-7350-47c4-9b46-c8a403885502)

2- Agregar Producto : Completa el formulario con nombre, precio y URL de la imagen, luego haz clic en "Enviar" .

![image](https://github.com/user-attachments/assets/566c03c9-c68d-44c5-94be-4ace8658bbc3)


3- Eliminar Producto : Haga clic en el ícono de la papelera para eliminar un producto.

![image](https://github.com/user-attachments/assets/c2335b6f-9da0-415f-804f-2b4a725e2dcd)

4- Buscar productos, mediante palabra clave

![image](https://github.com/user-attachments/assets/ba69ce7a-ed86-44a4-8728-90bd3ef4d8c9)


5- Editaar productos (proximamente, en construcion)




💻Tecnologías utilizadas

HTML5/CSS3
JavaScript
json-serverlada.
Fetch API

Instalación
Requisitos previos
Node.js instalado.
Pasos

npm install


npm start
Abre index.htmlen tu navegador.



🗂️ Estructura del Proyecto
-css
  -estilos.css
  -reset.css
-img
-js
  -buscarProducto.js
  -conexionJsonServer.js
  -editarProductos.js
  -mostrarProductos.js
  -nuevoProducto.js
-pages
-db.json
-index.html
-node_modules
-package-lock.json
-package.json





Consideraciones generales del proyecto. ⚠️


El repositorio actual, archivo conexionJsonServer.js apunta al servidor ps://674cea5454e1fca9290ddc68.mockapi.io/productos";
el cual se encuentra en un server fake haciendo uso del recurso MockAPI,      https://mockapi.io/projects

por lo tanto al visitar cualquie4ra de los dos sitios disponibles pueden hacer las pruebas necesarias.

https://iborjas21.github.io/AluraGeek/index.html
  o  

https://alura-geek-two-sooty.vercel.app/index.html

Al ser un recurso free, contamos con limitaciones. Por ejemplo, en tiempo de respuesta.


En el entorno de desarrollo, para prueba de uso local, nos serviremos de archivo db.json utilizando json-server para simular el uso de servidor remoto.
para lo cual se debe cambiar la direccion al que apunta el archivo conexionJsonServer.js y colocar http://localhost:3001/productos/

Consideraciones iniciales 📝
Important

En este proyecto trabajamos instalando Node.js para poder hacer uso de la herramienta npm. Se recomienda su previa instalación. Revise las versiones compatibles.

Revise el formato recomendado para el ingreso de datos, por ejemplo: url de imágenes deben ser url válida ej: http://ejemploUrl.com, el formato de precio es solo numeros con el '.' como simbolo decimal.

El proyecto se encuentra en desarrollo, por lo que puede haber errores o problemas que no se han detectado aun. Sientase libre de comentarlos por dm o mail si lo necesita.

Instalación y Uso 💻
1- Clona el repositorio:

git clone https://github.com/alizunega/proyecto_tienda.git

2- Navega al directorio del proyecto:

cd proyecto_tienda

3- Instala dependencias necesarias segun package.json

npm install

4- Selecciona la rama develop para trabajar con entorno local

git checkout develop

5- Inicia el servidor

npm run start

6- Levanta el archivo index.html con la Extensión Live Server para ver la página en funcionamiento.

7- Puedes interactuar con la aplicación y ver en funcionamiento la página. Comprobaras la carga de items desde db.json, podras agregar items y eliminarlos. Comprueba también la busqueda por palabra clave.

8- En conectionAPI.js, puedes modificar la constante url para trabajar localmente con el servidor simulado en mockAPI. Para ello, simplemente comenta la URL de desarrollo (la que tiene el formato localhost:3000) y descomenta la de producción. Por defecto, la aplicación utiliza la URL del archivo db.jsonlocal.

Es importante destacar que, aunque estés ejecutando la página desde tu entorno local, la aplicación puede estar configurada para consumir datos desde una API remota (en este caso, mockAPI). Esto permite simular interacciones con un servidor real mientras desarrollas y pruebas tu aplicación.

En ese caso el paso 6 no será necesario.

9- Consideración especial: si trabajas en la rama main no funcionará correctamente, recomiendo usar develop para trabajar en local. main es exclusivo para entorno de producción.

Estructura de carpetas 📂
proyecto_tienda
├── src
|   ├── css
│   └── js
├── pages
