# TCIT-challenge
 Desafío de TCIT para postulantes. 
 
Para ejecutar esta aplicación necesitas tener instalado en tu equipo Node y PostgreSQL.

Crear archivo .env con las variables designadas en env.example, reemplazando sus valores por las del ambiente local.

Luego debes ejecutar el siguiente comando para instalar las dependencias:
npm install

Y los siguientes comandos para ejecutar la migración:
cd sequelize 
npx sequelize-cli db:migrate
cd .. // para volver a la carpeta raiz

Finalmente, para iniciar el servidor debes ejecutar:
npm run dev

Y en tu navegador preferido debes ingresar a la siguiente URL:
http://localhost:3000


Si deseas levantar el ambiente de desarrollo para frontend, debes ejecutar los siguientes comandos:
cd frontend
npm install
npm run dev

Y luego dirigirte a la siguiente URL en tu navegador:
http://localhost:5173/

Recuerda que para que funcione la aplicación correctamente, debes tener levantado el servidor.