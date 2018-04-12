let express = require('express');
let app = express();

let sites  = ['/', 'kontakt']

app.get('/', function (req, res) {
    res.send('hello world');
    console.log(req.url.toString());
    
})

app.get("*", function (req, res) {
    
    console.log('404 error- sie does not exist');
        
 })
 

let server = app.listen(3000, function () {
   let host = server.address().address
   let port = server.address().port
   
   console.log("Server running at http://%s:%s", host, port)
})