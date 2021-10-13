const router = require('express').Router();
const validator = require('./task.validators');

const task = require('./task.controller');

router.post('/', validator.createTask, task.createTask);
router.get('/', task.getTasks);
router.get('/:task_id', validator.getTaskByID, task.getTaskByID);
router.put('/:task_id', validator.updateTask, task.updateTask);
router.delete('/:task_id', validator.deleteTask, task.deleteTask);

module.exports = router;
