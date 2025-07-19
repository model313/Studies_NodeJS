const express = require('express')
const app = express()
// app.js > routes > controllers
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

// Middleware
app.use(express.json())


// Routes
/**
 * Route structure:
 * - Get all active tasks
 * - Create new task
 * - Get single task
 * - Update task (patch instead of put)
 * - Delete task
 */
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)


// DB > Server (order matters)
const port = 8080
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening to port: ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()
