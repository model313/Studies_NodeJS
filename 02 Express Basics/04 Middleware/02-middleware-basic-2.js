const express = require('express')
const app = express()
// Seperate logger module
const logger = require('./04 Middleware/logger')

// Utilize app.use to apply middleware
// app.use(logger)          // Order matters
app.use('/api', logger)     // Applies to /api only    

app.get('/', (req, res) => {
    res.send('Home')
})
app.get('/about', (req, res) => {
    res.send('About')
})
app.get('/api/products', (req, res) => {
    res.send('Products')
})
app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.send('Items')
})

app.listen(8080, () => {
    console.log('Server is listening on port 8080....')
})
