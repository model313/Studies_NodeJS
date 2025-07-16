const express = require('express')
const app = express()
const logger = require('./04 Middleware/logger')
const authorize = require('./04 Middleware/authorize')

// Multiple middleware
app.use([logger, authorize]) // Order in array matters

app.get('/', (req, res) => {
    res.send('Home')
})
app.get('/about', (req, res) => {
    console.log(req.user)
    res.send('About')
})
app.get('/api/products', (req, res) => {
    res.send('Products')
})
app.get('/api/items', (req, res) => {
    res.send('Items')
})

// app.get('/api/items', [logger, authorize], (req, res) => {
//     res.send('Items')
// })

app.listen(8080, () => {
    console.log('Server is listening on port 8080....')
})
