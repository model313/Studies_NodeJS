const express = require('express')
const app = express()
let { people } = require('./data')

// Static assets
app.use(express.static('./methods-public'))
// Parse form data
app.use(express.urlencoded({ extended: false}))
// Parse json data
app.use(express.json())

// Check /methods-public/javascript.html for axios source

// GET 
// Gets list of people
app.get('/api/people', (req,res) => {
    res.status(200).json({success: true, data: people})
})

// POST
// Adds to list of people
app.post('/api/people', (req,res) => {
    const {name} = req.body
    if(!name){
        return res
            .status(400)
            .json({success: false, msg: 'Please provide name value'})
    }
    res.status(201).json({success: true, person: name})
})

app.listen(8080, () => {
    console.log('Server is listening on port 8080')
})