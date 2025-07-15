const express = require('express')
const app = express()

/*
Methods
- app.get
- app.post
- app.put
- app.delete
- app.all
- app.use
- app.listen
*/

app.get('/', (req,res) =>{
    res.send('Home Page')
})

app.get('/about', (req,res) =>{
    res.send('About Page')
})

/*
Express, by default, sends status codes automatically
It is better to explicitly handle status codes
*/

app.all('*', (req,res) => {
    res.status(404).send('<h1>Page Not Found!</h1>')
})

app.listen(8080, () => {
    console.log('Server is listening to 8080')
})


