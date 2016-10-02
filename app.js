var express = require('express');
var fs = require('fs');
var http = require('http');
var path = require('path');
var errorhandler = require('errorhandler');
var config = require('config');
var morgan = require('morgan');
var engine = require('ejs-mate');

var app = express();

app.engine('ejs', engine)
app.set('views', __dirname + '/templates');
app.set('view engine', 'ejs');


var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
if(app.get('env') == 'development') {
	app.use(morgan('common', { skip: function(req, res) { return res.statusCode < 400 }, stream: accessLogStream}));
} else {
	app.use(morgan('dev'));
}

app.get('/*/games', function(req, res, next) {
	if (req.url == '/index.html#/games') {
		res.render('index', {
		body: '<b>U try to load games page</b>'
	}); 
	} else {
		next();
	}
});

app.get('/#/games/', function(req, res, next) {
	if (req.url == '/#/games') {
		res.render('index', {
			body: '<b>U try to load games page</b>'
		});
	} else {
		res.end();
	}
})
//app.use(express.favicon());
 //app.use(express.logger('dev'));
 //app.use(express.bodyParser());
 //app.use(express.cookieParser('your secret here'));
 //app.use(express.session());
 //app.use(app.router);
 app.use(express.static(path.join(__dirname, 'public')));

app.use(function(err, req, res, next) {
	if (app.get('env') == 'development') {
		var errorHandler = errorhandler();
		errorHandler(err, req, res, next);
	} else {
		res.send(500);
	}
});
//app.use(function(req, res, next) {
//	if (req.url == '/') {
//		res.end('url - /')
//	} else {
//		next();
//	}
//});
//
//app.use(function(req, res, next) {
//	if (req.url == '/forbidden') {
//		next(new Error('denied'))
//	} else {
//		next();
//	}
//});
//
//app.use(function(req, res) {
//	res.send(404, 'Page not found');
//});
//
//app.use(function(err, req, res, next) {
//	if (app.get('env') == 'development') {
//		var errorHandler = errorhandler();
//		errorHandler(err, req, res, next)
//	} else {
//		res.send(500);
//	}
//});

app.set("port", config.get("port"));

http.createServer(app).listen(config.get("port"), function() {
	console.log('Express server listening on port ' + config.get("port"))
});
