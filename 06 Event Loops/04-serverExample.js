const http = require('http')

const server = http.createServer((req,res) => {
    console.log('request event')
    res.end('hello world response')
})

server.listen(8080, () => {
    console.log('server listening on port: 8080...')
})