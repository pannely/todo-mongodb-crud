var express = require('express'),
	app = express(),
	port = process.env.port || 3000;

app.get('/', function (req, res){
	res.send("Hi There from express");
});

app.listen(port, function (){
	console.log("app is running on port");
});