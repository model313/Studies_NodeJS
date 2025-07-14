const express = require('express')
// Absolute path
const path = require('path')

const app = express()

// Setup static and middleware
app.use(express.static('./public'))


// There are other ways to do this
// 1. adding to static assets
// 2. SSR (server-side rendering)
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(8080, () => {
  console.log('server is listening on port 8080...')
})
