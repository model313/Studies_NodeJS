const http = require('http')

/* 
Blocking code will interfere with other 
users that are accessing other endpoints
*/

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome')
        return
    }
    if(req.url === '/about'){
        // Blocking code here! (synchronous code)
        for (let i = 0; i < 1000; i++){
            for (let j = 0; j < 1000; j++){
                console.log(`${i} ${j}`)
            }
        }
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