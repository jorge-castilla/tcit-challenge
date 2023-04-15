# TCIT-Challenge 
 
Para ejecutar esta aplicación necesitas tener instalado en tu equipo Node y PostgreSQL.

* Primero debes crear un archivo .env con las variables designadas en env.example, reemplazando sus valores por las del ambiente local.

* Después debes ejecutar el siguiente comando para instalar las dependencias:
```javascript
npm install
```

* Luego ejecutar los siguientes comandos para correr la migración:
```javascript
cd sequelize 
npx sequelize-cli db:migrate
cd .. // para volver a la carpeta raiz
```

* Para iniciar el servidor debes ejecutar:
```javascript
npm run dev
```

* Finalmente, en tu navegador preferido puedes ingresar a la siguiente URL para visualizar la aplicación:
  * http://localhost:3000

## Frontend
* Si deseas levantar el ambiente de desarrollo para frontend, debes ejecutar los siguientes comandos:
```javascript
cd frontend
npm install
npm run dev
```
* Y luego dirigirte a la siguiente URL en tu navegador:
  * http://localhost:5173/

* Recuerda que para que funcione la aplicación correctamente, debes tener levantado el servidor.
