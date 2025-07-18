// Tasks Router

const express = require('express')
const router = express.Router()

// Import tasks controller
// app.js > routes > controllers
const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
} = require('../controllers/tasks')

// Get all active tasks
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


module.exports = router