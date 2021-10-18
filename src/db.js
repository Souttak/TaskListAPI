const mongoose = require('mongoose');

const { DB_URI: uri } = process.env;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('¡DB Funcionando correctamente!'));

module.exports = db;
