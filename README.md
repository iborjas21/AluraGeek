
AluraGeek es una aplicación web que permite a los usuarios gestionar una lista de productos. 

Corresponde a un  desafio Challenge de Alura Latam, en donde los usuarios pueden visualizar , agregar y eliminar productos, utilizando tecnologías frontend modernas y un servidor JSON simulado.



_________________________________________________________________________________________________________________
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


5- Editar productos (proximamente, en construcion)




_________________________________________________________________________________________________________________
💻Tecnologías utilizadas

HTML5

CSS3

JavaScript

json-server.

Fetch API

Node.js

Visual Studio Code

Extension Live Server

ChatGpt



_________________________________________________________________________________________________________________

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




____________________________________________________________________________________________________________________________


Consideraciones generales del proyecto. ⚠️


El repositorio actual, archivo conexionJsonServer.js apunta al servidor ps://674cea5454e1fca9290ddc68.mockapi.io/productos";
el cual se encuentra en un server fake haciendo uso del recurso MockAPI,      https://mockapi.io

por lo tanto al visitar cualquiera de los dos sitios disponibles pueden hacer las pruebas necesarias.

https://iborjas21.github.io/AluraGeek/index.html
  o  
https://alura-geek-two-sooty.vercel.app/index.html

Al ser un recurso free, contamos con limitaciones. Por ejemplo, en tiempo de respuesta.

Las imagenes deben tener una url, para lo cual se utilizó un recurso free llamado Postimage https://postimages.org/

imagenes de ejemplo

https://i.postimg.cc/d1cn1Htj/IMG-5154.jpg

https://i.postimg.cc/cCtRmZbG/IMG-5157.jpg

https://i.postimg.cc/xqrKp7wJ/IMG-5158.jpg

https://i.postimg.cc/VsJpTtym/IMG-5159.jpg

https://i.postimg.cc/2jgMf5mv/IMG-5160.jpg

https://i.postimg.cc/NjkzT7X7/IMG-5161.jpg

https://i.postimg.cc/FH467nYH/IMG-5162.jpg

https://i.postimg.cc/vH9j8dHK/IMG-5163.jpg

https://i.postimg.cc/J7cXjH5L/IMG-5182.jpg

https://i.postimg.cc/sDc15jvc/IMG-5249.jpg

https://i.postimg.cc/x118RwmS/IMG-5250.jpg




_________________________________________________________________________________________________________________
En el entorno de desarrollo, para prueba de uso local, nos serviremos de archivo db.json utilizando json-server para simular el uso de servidor remoto.
para lo cual se debe cambiar la direccion al que apunta el archivo conexionJsonServer.js y modificar la direccion actual por  http://localhost:3001/productos/


Se debe iniciar el servidor mediante los siguientes comandos

npm init -y

npm install json-server@0.17.3 --save-dev

npx json-server --watch db.json --port 3001





 
