console.log('Express Tutorial')

const http = require('http')

const server = http.createServer((req,res) => {
    const url = req.url

    // Home Page
    if (url === '/') {
        // MIME types
        res.writeHead(200,{'content-type':'text/html'})

        // Can consolidate these, but John Smilga prefers to separate
        res.write('<h1>Home Page</h1>')
        res.end()
    }
    // About Page
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>About Page</h1>')
        res.end()
    }
    // 404
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
})

server.listen(8080)