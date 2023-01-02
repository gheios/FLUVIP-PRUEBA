# FLUVIP-PRUEBA

-endpoints del backend

GET y POST
http://localhost:3001/api/personas
DELETE
http://localhost:3001/api/personas/id

tecnologias utilizadas
-este proyecto fue realizado con react,nodejs, express, bootstrap,postgresql, y sequelize

herramientas necesarias
-para poder desplegar el proyecto de manera local se necesita tener descargado nodejs v16

-para  correr el proyecto  se nesecitan descargar postgresql de la pagina oficial
https://www.postgresql.org/download/

-en la opcion de seleccion de componentes seleccion la opcion pg admin
anexo un tutorial de descarga de la  postgresql
https://www.youtube.com/watch?v=n5Ec9bMouWQ&t=523s&ab_channel=Roelcode

pasos para correr de forma local

-para poder correr el back primero hay que inicializar la base de datos
en  abremos pg admin y nos registramos con contraseña y usuario (muy importante guardar estos dos ultimos datos)

-luego creamos una base de datos con el siguiente nombre "personas"

-despues de creada la base de datos  nos dirigimos a nuesto entorno de desarollo con el proyecto abierto
en la carpera api creamos un archivo .env dentro del cual vamos a poner la siguiente estructura

DB_USER=su usuario de postgres
DB_PASSWORD=su contraseña de postgres
DB_HOST=localhost

-luego de eso guardar el archivo

- abrimos el terminal y ejecutamos el comando "npm install" en las carpetas api y cliente una ves por cada carpeta, esto para que
descargue las depencias necesarias para correr el proyecto

-por ultimo ejecutas el comando npm start  en ambas carpetas tambien asi el proyecto sera deplegado en su localhost:3000

