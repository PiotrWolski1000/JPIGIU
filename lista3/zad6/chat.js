var express = require('express')
var http = require('http');
var socket = require('socket.io');

 
var app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

var server = http.createServer(app);
var io = socket(server);


io.on('connection', function(socket) {
  //console.log('client connected:' + socket.id);
  socket.emit('chat message','Witaj');
  
  socket.on('chat message', function(data) {
      io.emit('chat message', data); // do wszystkich
      //socket.emit('chat message', data); tylko do połączonego
  })

});

setInterval(function(){io.emit('time message',Date())},1000)



app.get('/gadka', function(req, res) {
  res.render('gadka.ejs');
});


app.get('/', function(req, res) {
    res.send("Jesteś na stronie głównej zapraszamy na <a href='gadka'>Chat</a>");
  })
   
server.listen(process.env.PORT || 3001)

