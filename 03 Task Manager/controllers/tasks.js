// Tasks Controller

// Models
const Task = require('../models/task')

// Middleware
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/customError')

// Gets all active tasks
const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})

    res.status(200).json({tasks})
    // Response options
    // res.status(200).json({tasks, count: tasks.length})
    // res.status(200).json({success: true, data: {tasks, nbHits: tasks.length}})
})

// Create task
const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
})

// Get single task
const getTask = asyncWrapper(async (req, res, next) => {
    const {id: taskID} = req.params
    const task = await Task.findOne({_id:taskID})
    
    // If task does not exist (does not include Cast Error)
    // CastError: an error that Mongoose throws if syntax differs in length
    if(!task){
        return next(createCustomError(`No task with id: ${taskID}`, 404))
    }

    res.status(200).json({task})
})

// Delete task
const deleteTask = asyncWrapper(async (req, res, next) => {
    const {id: taskID} = req.params
    const task = await Task.findOneAndDelete({_id:taskID})
    
    if(!task){
        return next(createCustomError(`No task with id: ${taskID}`, 404))
    }
    
    res.status(200).json({task})
})

// Update task
const updateTask = asyncWrapper(async (req, res, next) => {
    const {id: taskID} = req.params
    const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
        new: true,
        runValidators: true
    })

    if(!task){
        return next(createCustomError(`No task with id: ${taskID}`, 404))
    }

    res.status(200).json({task})
})

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