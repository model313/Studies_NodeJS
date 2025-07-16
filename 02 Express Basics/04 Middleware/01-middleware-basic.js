const express = require('express')
const app = express()

// Request => Middleware => Response


// next: passes on to next middleware 
// (required unless terminated by other means)

// It is better to move this function to a seperate module
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()                      // Must be invoked
}

// There are better ways to activate middleware
app.get('/', logger, (req, res) => {
    res.send('Home')
})
app.get('/about', logger, (req, res) => {
    res.send('About')
})

app.listen(8080, () => {
    console.log('Server is listening on port 8080....')
})
