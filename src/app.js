// Cargando las variables del ".env"
require('dotenv').config();

// Importando librerías y el router principal.
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes');

// Instanciando la aplicación de Express y guardando el puerto a utilizar desde la variable de entorno.
const app = express();
const port = process.env.PORT || 3050;

// Configurando los middleware.
app.use(bodyParser.json());
app.use('/api', routes);

// Si no entran a la API, los redirijo allí. Otra opción sería tener la documentación en este endpoint.
app.get('/', (req, res) => {
    res.redirect('/api');
});

// Poniendo a correr el servidor vinculando el puerto especificado a la aplicación.
app.listen(port, () => {
    console.log(`API Escuchando en http://localhost:${port}`);
});
