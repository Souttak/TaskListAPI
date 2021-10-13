const { check } = require('express-validator');

const createTask = [
    check('task_desc').exists().isString().trim(),
    check('task_done').exists().isBoolean(),
    check('task_location').exists().isString().trim(),
];

const getTaskByID = [check('task_id').exists().isInt()];

const updateTask = [
    check('task_desc').exists().isString().trim(),
    check('task_done').exists().isBoolean(),
    check('task_location').exists().isString().trim(),
    check('task_id').exists().isInt(),
];

const deleteTask = [check('task_id').exists().isInt()];

module.exports = {
    createTask,
    getTaskByID,
    updateTask,
    deleteTask,
};
