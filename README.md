#HotelSever:

Esta aplicación tiene dos archivos de configuración:
/config/dev.json
/config/prod.json

En este archivo se puede configurar la url de conexión a la base de datos y el puerto donde se corre el servidor.
Como este código esta en un repositorio público el password de conexión no esta en el archivo porfavor antes de correr la 
aplicación entrar a estos archivos de configuración y modificar la sección [PASSWORD] con la contraseña de la base de datos.

#Ejecución:
Para ejecutar el proyecto primero:
Instalar librerias con el comando: npm i
Correr aplicación en dev en linux: npm start
Correr aplicación en dev en windows: npm run startWindows
Correr aplicación en prod en linux: npm run prod
Correr aplicación en prod en windows: npm run prodWindows

Como se trabajo en typescript si se quiere compilar el codigo en linux: npm run build
Como se trabajo en typescript si se quiere compilar el codigo en windows: npm run buildWindows
Para ejecutar el código compilado dentro de la carpeta dist:
Instalar librerias con el comando: npm i
Correr aplicación en dev en linux: npm runBuildDev
Correr aplicación en dev en windows: npm run runBuildDevWindows
Correr aplicación en prod en linux: npm run runBuildProd
Correr aplicación en prod en windows: npm run runBuildProdWindows

#Endpoints:
El servidor queda corriendo en el puerto 3000: incluir http://localhost:3000 al incio de cada url

GET /api/hotel                      Obtiene todos hoteles del archivo json sin ningun filtro
GET /api/hotel?name=ra&stars=1,4    El anterior endpoint tiene dos parametros opcionales name donde únicamente se obtiene los hoteles
                                    que tienen en su nombre lo especificado por parámetro. Y el parametro stars que trae el número de estrellas
                                    separados por coma de los hoteles que se quieren visualizar.

#Punto extra Base de datos:
GET    /api/db/hotel                   Obtiene todos los hoteles de la base de datos
GET    /api/db/hotel/:id               Obtiene un hotel con el id especificado
POST   /api/db/hotel                   Crea un hotel en la base de datos, el cuerpo debe la petición debe incluir el json del hotel, incluido el id único.
PUT    /api/db/hotel/:id               Modificado un hotel con el id especificado.
DELETE /api/db/hotel/:id               Elimina el hotel con el id especificado.

