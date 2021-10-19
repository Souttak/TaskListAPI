// Instanciando un router de Express.
const router = require('express').Router();

// Importando routers secundarios.
const taskRouter = require('./task/task.router');

// Endpoint de bienvenida.
router.get('/', (req, res) => {
    res.send('¡Bienvenido a la API de TaskList!');
});

// Vinculando los router secundarios al principal.
router.use('/tasks', taskRouter);

module.exports = router;
