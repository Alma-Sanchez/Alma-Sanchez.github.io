var express = require('express');
var app = express();
var reload = require('reload');
var path = require('path');


app.use(express.static('public'));

app.disable('x-powered-by');

app.get('/', function (req, res) {
	res.sendFile(__dirname + "/index.html");
});

var server = app.listen(8081, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listening at http://localhost:%s", port);
});
// nodemon server.js - t restart server
// 
// node server.js