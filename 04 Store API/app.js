require('dotenv').config()
// Async errors


const express = require('express')
const app = express()

const notFoundMiddleware = require('./middleware/notFound')
const errorMiddleware = require('./middleware/errorHandler')

// Middleware
app.use(express.json())

// Routes
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">Products Route</a>')
})

// Products route
app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 8080
const start = async () => {
    try {
        // ConnectDB
        app.listen(port, console.log(`Server is listening to port: ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()