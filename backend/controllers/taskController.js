
const Task = require('../models/Task');

const getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
};

const addTask = async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
};

const updateTask = async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
};

const deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.status(204).send();
};

module.exports = { getTasks, addTask, updateTask, deleteTask };
