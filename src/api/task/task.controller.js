const { validationResult } = require('express-validator');
const taskService = require('./task.service');
const Task = require('./task.model');

const createTask = async (req, res) => {
    // Controlando errores en lo recibido mediante la request.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send(errors.array());
    }

    const task = new Task({
        description: req.body.description,
        done: req.body.done,
        location: {
            lat: req.body.location.lat,
            lon: req.body.location.lon,
        },
    });

    try {
        const results = await taskService.createTask(task);
        res.status(201).send(results);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
};

const getTasks = async (req, res) => {
    try {
        const results = await taskService.getTasks();
        res.status(200).send(results);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
};

const getTaskByID = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send(errors.array());
    }

    const { id } = req.params;
    try {
        const results = await taskService.getTaskByID(id);
        if (results.data) {
            res.status(200).send(results);
        } else {
            res.status(404).send(results);
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
};

const updateTask = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send(errors.array());
    }

    const task = req.body;
    const { id } = req.params;

    try {
        const results = await taskService.updateTask(task, id);
        res.status(200).send(results);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
};

const deleteTask = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send(errors.array());
    }

    const { id } = req.params;
    try {
        const results = await taskService.deleteTask(id);
        res.status(200).send(results);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
};

module.exports = {
    createTask,
    getTasks,
    getTaskByID,
    updateTask,
    deleteTask,
};
