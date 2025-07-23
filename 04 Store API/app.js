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
    res.send('<h1>Store API</h1><a href="/api/v1/products"')
})