const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// Create a new task
router.post('/', async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update task completion status
router.put('/:id', async (req, res) => {
    try {
        const taskId = req.params.id;
        const updatedTask = await Task.findByIdAndUpdate(taskId, { completed: req.body.completed }, { new: true });
        res.json(updatedTask);
        console.log(JSON.stringify(updatedTask));
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a task
router.delete('/:id', async (req, res) => {
    try {
        const taskId = req.params.id;
        await Task.findByIdAndDelete(taskId);
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
