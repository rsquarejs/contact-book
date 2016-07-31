'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 6500;

app.use(bodyParser.json());

app.get('/', function (request, response) {
	response.send('hello world');
});

app.listen(port, () => {
	console.log("server running at port " + port );
});