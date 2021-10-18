const { Double } = require('mongodb');
const mongoose = require('mongoose');

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
            type: Double,
            required: true,
        },
        lon: {
            type: Double,
            required: true,
        },
    },
});

module.exports = mongoose.model('Task', taskSchema);
