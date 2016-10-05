// Vendor modules
var express = require('express');
var fs = require('fs');
var http = require('http');
var path = require('path');
var errorhandler = require('errorhandler');
var morgan = require('morgan');
var engine = require('ejs-mate');

// Own modules
var config = require('./config');
var createDb = require('./createDb');
var router = require('./routers');


// Create the exemplar of express
var app = express();

// run the custom router module
app.use('/', router);

// Body and cookie parser
//app.use(express.bodyParser());
//app.use(express.cookieParser('your secret here'));

// set the template engine
app.engine('ejs', engine);
app.set('views', __dirname + '/templates');
app.set('view engine', 'ejs');

// write the log
var accessLogStream = fs.createWriteStream(path.join(__dirname, './logs/access.log'), {flags: 'a'});
if(app.get('env') == 'development') {
	app.use(morgan('common', { skip: function(req, res) { return res.statusCode < 400 }, stream: accessLogStream}));
} else {
	app.use(morgan('dev'));
}


// //Set the static path
app.use(express.static(path.join(__dirname, 'public')));

// set the error handler
app.use(function(err, req, res, next) {
	if (app.get('env') == 'development') {
		var errorHandler = errorhandler();
		errorHandler(err, req, res, next);
	} else {
		res.send(500);
	}
});

// set the port from the config file
app.set("port", config.get("port"));

// run the server on port, taken from config file
http.createServer(app).listen(config.get("port"), function() {
	console.log('Express server listening on port ' + config.get("port"))
});

