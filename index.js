var app = require('express')();
var http = require('http').createServer(app);

// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
// });

app.get('/', function(req, res){
   res.sendFile(__dirname + '/index.html');
 });


http.listen(3000, function(){
  console.log('listening on *:3000');
});


// var http = require('http'),
//    fs = require('fs'),
//    // NEVER use a Sync function except at start-up!
//    index = fs.readFileSync(__dirname + '/index.html');

// // Send index.html to all requests
// var app = http.createServer(function(req, res) {
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    res.end(index);
// });

// app.listen(3000);
