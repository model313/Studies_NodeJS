// Tasks Controller

const Task = require('../models/task')

// Gets all active tasks
const getAllTasks = (req, res) => {
    res.send('All Tasks')
}

// Create task
const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

// Get single task
const getTask = (req, res) => {
    res.json({id: req.params.id})
}

// Update task
const updateTask = (req, res) => {
    res.send('Update Task')
}

// Delete task
const deleteTask = (req, res) => {
    res.send('Delete Task')
}

// app.js > routes > controllers
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}