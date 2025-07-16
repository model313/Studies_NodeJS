const express = require('express')
const app = express()
// Third party middleware
const morgan = require('morgan')

app.use(morgan('tiny'))

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

app.listen(8080, () => {
    console.log('Server is listening on port 8080....')
})
