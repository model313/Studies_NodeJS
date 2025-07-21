// Tasks Controller

const Task = require('../models/task')

// Gets all active tasks
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})

        res.status(200).json({tasks})

        // Reponse options
        // res.status(200).json({tasks, count: tasks.length})
        // res.status(200).json({success: true, data: {tasks, nbHits: tasks.length}})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

// Create task
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

// Get single task
const getTask = async (req, res) => {
    try {
        const {id: taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        
        // If task does not exist (does not include Cast Error)
        // CastError: an error that Mongoose throws if syntax differs in length
        if(!task){
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }

        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

// Delete task
const deleteTask = async (req, res) => {
    try {
        const {id: taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        
        if(!task){
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }
        
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

// Update task
const updateTask = async (req, res) => {
    try {
        const {id: taskID} = req.params

        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidators: true
        })

        if(!task){
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }

        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

/**
 * PUT vs PATCH requests
 * - put: will update omitted values by removing them
 * - patch: will only update matching values, and ignore omitted values
 */


// app.js > routes > controllers
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}