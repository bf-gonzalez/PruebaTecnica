# Prueba Técnica - Backend y Frontend

Este proyecto consiste en una prueba técnica donde se utiliza una API externa y se consume en una aplicación web. La API ofrece una variedad de bebidas y permite crear nuevas bebidas, además de mostrar detalles de las existentes. 

La arquitectura es tanto backend como frontend: el backend consume la API externa y guarda la información en una base de datos MongoDB, mientras que el frontend muestra la información de manera interactiva utilizando React.

## Tecnologías utilizadas:

### Backend:
- **Node.js** con **Express**
- **TypeScript**
- **MongoDB** (base de datos)
- **Mongoose** (ODM para MongoDB)
- **CORS** (para permitir solicitudes entre dominios)

### Frontend:
- **React**
- **TailwindCSS**

---

## Instrucciones para ejecutar el backend y el frontend

### Backend:

1. **Clonar el repositorio dentro esta tanto el backend como el frontend :**
   ```bash
   git clone <URL_DEL_REPOSITORIO_BACKEND>
   cd <nombre_del_directorio_backend>

2. **Instalar las dependencias del backend:
    ```bash
    npm install
3. **Configurar las variables de entorno del backend:
   - Crea un archivo .env en la raíz del proyecto.
   - Añade las siguientes variables:
    ```bash
    PORT=3000
    MONGO_URI=mongodb+srv://<USUARIO>:<CONTRASEÑA>@<CLUSTER>.mongodb.net/PruebaTecnica

  **Explicación de las variables:
  - PORT: El puerto en el que se ejecutará el servidor (puedes cambiar el valor si el puerto 3000 está ocupado).
  - MONGO_URI: La URI de conexión a MongoDB proporcionada por MongoDB Atlas. Asegúrate de reemplazar <USUARIO>, <CONTRASEÑA>, y <CLUSTER> con tus credenciales y el     nombre del cluster de MongoDB.

4. **Ejecutar el servidor backend:
    ```bash
    npm run dev
  El backend debería estar disponible en http://localhost:3000 (o en http://localhost:3001 si el puerto 3000 está ocupado).

  
## Frontend:

1. **Instalar las dependencias del frontend:

    ```bash
    npm install
2. **Ejecutar el servidor frontend:
    
    ```bash
    npm run dev
El frontend debería estar disponible en http://localhost:5173.

## Descripcion de las funcionalidades

El proyecto ofrece una aplicación web en la que se pueden realizar las siguientes acciones:

  - Ver la lista de bebidas disponibles: El frontend muestra una lista de bebidas almacenadas en la base de datos MongoDB, obtenidas a través del backend que las         consume desde una API externa.
  - Crear nuevas bebidas: Se puede agregar nuevas bebidas a través de un formulario en el frontend. Estos datos se envían al backend, que los almacena en la base         de datos.
  - Ver los detalles de una bebida: Al seleccionar una bebida de la lista, se pueden ver detalles adicionales sobre ella.


## Variables de entorno solo para el backend

   Es necesario configurar las siguientes variables de entorno para ejecutar el proyecto correctamente:
   1. PORT: Define el puerto en el que se ejecuta el servidor backend. El valor predeterminado es 3000.
   2. MONGO_URI: La URI de conexión a la base de datos MongoDB. Debes usar la URL proporcionada por MongoDB Atlas, y asegurarte de que la base de datos se llama          PruebaTecnica.
  **Ejemplo de archivo.env:
      ```bash
      PORT=3000
      MONGO_URI=mongodb+srv://<USUARIO>:<CONTRASEÑA>@<CLUSTER>.mongodb.net/PruebaTecnica

  ## Pasos adicionales
  1. Instalar las dependencias: Asegúrate de instalar las dependencias tanto para el backend como para el frontend usando npm install antes de ejecutar el proyecto.
  2. Asegurarse de tener MongoDB configurado: El proyecto depende de una base de datos MongoDB, por lo que debes tener configurado MongoDB Atlas o un servidor             MongoDB localmente para poder almacenar y recuperar la información.

## Comandos útiles
1. Para ejecutar el servidor backend en desarrollo:
    ```bash
    npm run dev
2. Para ejecutar el servidor frontend en desarrollo:
    ```bash
    npm run dev




   
