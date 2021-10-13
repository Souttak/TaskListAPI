const router = require('express').Router();

// Importando routers.
const taskRouter = require('./task/task.router');

// Endpoint de bienvenida.
router.get('/', (req, res) => {
    res.send('¡Bienvenido a la API de TaskList!');
});

// Vinculando el resto de routers.
router.use('/tasks', taskRouter);

module.exports = router;
