const express = require('express')
const app = express()
let { people } = require('./data')

// Static assets
app.use(express.static('./methods-public'))
// Parse form data
app.use(express.urlencoded({ extended: false}))

// GET 
app.get('/api/people', (req,res) => {
    res.status(200).json({success: true, data: people})
})

// POST
app.post('/login', (req,res) => {
    // console.log(req.body)
    const {name} = req.body
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }

    res.status(401).send('Please provide credentials')
})


app.listen(8080, () => {
    console.log('Server is listening on port 8080')
})