const mysql = require('mysql');

// Trayendo variables de entorno.
const { DB_HOST: host, DB_PORT: port, DB_USER: user, DB_PASSWORD: password, DB_DATABASE: database } = process.env;

// Instanciando la DB.
const db = mysql.createConnection({
    host: host,
    port: port,
    user: user,
    password: password,
    database: database,
});

// Revisando la conexión.
db.connect((error) => {
    if (error) throw error;
    console.log('¡DB Funcionando correctamente!');
});

module.exports = db;
