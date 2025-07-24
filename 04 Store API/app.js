require('dotenv').config()
// Async errors


const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/notFound')
const errorMiddleware = require('./middleware/errorHandler')

// Middleware
app.use(express.json())

// Routes
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">Products Route</a>')
})

app.use('/api/v1/products', productsRouter)

// Products route
app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 8080
const start = async () => {
    try {
        // ConnectDB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening to port: ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()