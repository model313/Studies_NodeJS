const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome')
        return
    }
    if(req.url === '/about'){
        res.end('About Page')
        return
    }
    
    res.end(`
        <h1>Oops</h1>
        <p>Can't Find Page</p>
        <a href="/">Back Home</a>
    `)
    
})

server.listen(8080)