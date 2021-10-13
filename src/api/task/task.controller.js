const { validationResult } = require('express-validator');
const taskService = require('./task.service');

const createTask = async (req, res) => {
    // Controlando errores en lo recibido mediante la request.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send(errors.array());
    }

    // Guardando en una variable el objeto recibido.
    const task = req.body;

    try {
        const results = await taskService.createTask(task);
        res.status(200).send(results);
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

    const { task_id } = req.params;
    try {
        const results = await taskService.getTaskByID(task_id);
        res.status(200).send(results);
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
    const { task_id } = req.params;

    try {
        const results = await taskService.updateTask(task, task_id);
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

    const { task_id } = req.params;
    try {
        const results = await taskService.deleteTask(task_id);
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
