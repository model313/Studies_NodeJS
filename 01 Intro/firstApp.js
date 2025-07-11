//Hello Word Web Server
/*
1. open terminal
2. navigate to this file
3. node FirstApp.js
*/

let http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);