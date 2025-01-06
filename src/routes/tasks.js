const express = require('express');
const router = express.Router();

// Simulamos la func de una BD
let tasks = [];

// Crear una tarea
router.post('/', (req, res) => {
    const { title, description } = req.body;
    const id = tasks.length + 1;
    const newTask = { id, title, description };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Leer todas las tareas
router.get('/', (req, res) => {
    res.json(tasks);
});

// Actualizar una tarea
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const task = tasks.find(task => task.id === parseInt(id));
    if(!task){
        return res.status(404).json({ message: 'Task not found' });
    }
    task.title = title;
    task. description = description;
    res.json(task);
});

// Eliminar una tarea
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    tasks = tasks.filter(task => task.id !== parseInt(id));
    res.json({ message: 'Task deleted successfully'});
});

module.exports = router;
