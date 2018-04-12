var http = require('http'); 

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log(req.url.toString());
    res.end("hello World"+ req.url.toString());
}).listen(3000);