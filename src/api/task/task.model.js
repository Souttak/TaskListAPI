const mongoose = require('mongoose');

// Creando un esquema para las tareas. Sirve para validar los inputs del usuario, definir
// la estructura que tendrán en la propia DB, y controlar los propios datos.

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        required: true,
    },
    location: {
        type: Object,
        required: true,

        lat: {
            type: Number,
            required: true,
        },
        lon: {
            type: Number,
            required: true,
        },
    },
});

module.exports = mongoose.model('Task', taskSchema);
