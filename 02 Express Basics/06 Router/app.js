// Move to 02 Express Basics before running
const express = require('express')
const app = express()

const people = require('./06 Router/router/people')
const login = require('./06 Router/router/auth')

// Static assets
app.use(express.static('./methods-public'))
// Parse form data
app.use(express.urlencoded({ extended: false}))
// Parse json data
app.use(express.json())

// Split functionality into multiple files
app.use('/api/people', people)

app.use('/login', login)

app.listen(8080, () => {
    console.log('Server is listening on port 8080')
})