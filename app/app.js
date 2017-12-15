var express = require('express');
var app = express();
var dataFile = './data/data.json';

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
    res.send('<h1>Roux Academy Meetups</h1>');
});

var server = app.listen(app.get('port'), function(){
    console.log(`Express Server is Running on port ${app.get('port')}.`);
})


// var http = require('http');
// var myserver = http.createServer(function(req, res){
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.write("<h1>All Done!</h1>");
//     res.end();
// }).listen(3000);
// console.log("Server Running on Port 3000.")