'use strict';
var bodyParser = require('body-parser');
var express = require('express');
var jade = require('jade');
var path = require('path');
var models = require('./models/index');

var app = express();
var port = 6500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/*
 Template Engine
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', function (request, response) {
	response.render('index');
});

app.get('/new', function(request,response) {
	response.render('new');
});

app.post('/contacts', function(request, response) {
	var params = request.body;
	console.log(params);
	models.user.create(params)
	.then(function(response){
		response.render('index');
	})
	.catch(function (err) {
		response.render(err.message);
	});
});

app.listen(port, () => {
	console.log("server running at port " + port );
});