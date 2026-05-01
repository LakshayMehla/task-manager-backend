// Task controller

const TaskModel = require('../models/taskModel');

const getTasks = (req, res) => res.status(200).json(TaskModel.findAll());

const getTaskById = (req, res) => {
    const task = TaskModel.findById(parseInt(req.params.id));
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.status(200).json(task);
};

const createTask = (req, res) => {
    const { title, description, completed } = req.body;
    if (!title || typeof title !== 'string') {
        return res.status(400).json({ error: 'Title is required and must be a string' });
    }
    res.status(201).json(TaskModel.create({ title, description, completed }));
};

const updateTask = (req, res) => {
    const { title, description, completed } = req.body;
    if (title !== undefined && (typeof title !== 'string' || title.trim() === '')) {
        return res.status(400).json({ error: 'Title cannot be empty' });
    }
    const updatedTask = TaskModel.update(parseInt(req.params.id), { title, description, completed });
    if (!updatedTask) return res.status(404).json({ error: 'Task not found' });
    res.status(200).json(updatedTask);
};

const deleteTaskHandler = (req, res) => {
    if (!TaskModel.delete(parseInt(req.params.id))) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.status(204).send();
};

module.exports = { getTasks, getTaskById, createTask, updateTask, deleteTask: deleteTaskHandler };
