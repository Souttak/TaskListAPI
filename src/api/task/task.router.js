const router = require('express').Router();
const validator = require('./task.validators');

// Importando los controladores y definiendo los endpoint que los usarán.
const task = require('./task.controller');

router.post('/', validator.createTask, task.createTask);
router.get('/', task.getTasks);
router.get('/:id', validator.getTaskByID, task.getTaskByID);
router.put('/:id', validator.updateTask, task.updateTask);
router.delete('/:id', validator.deleteTask, task.deleteTask);

module.exports = router;
