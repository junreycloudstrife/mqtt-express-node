var app = require('express')();
var express = require('express');
var http = require('http').createServer(app);
// var mqtt = require('mqtt');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
 });

app.use(express.static('public'));

http.listen(3000, function(){
  console.log('listening on *:3000');
});
