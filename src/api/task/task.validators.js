const { check } = require('express-validator');

const createTask = [
    check('description').exists().isString().trim(),
    check('done').exists().isBoolean(),
    check('location').exists().isObject(),
];

const getTaskByID = [check('id').exists()];

const updateTask = [
    check('description').exists().isString().trim(),
    check('done').exists().isBoolean(),
    check('location').exists().isObject(),
    check('id').exists(),
];

const deleteTask = [check('id').exists()];

module.exports = {
    createTask,
    getTaskByID,
    updateTask,
    deleteTask,
};
