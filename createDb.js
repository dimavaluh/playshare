var mongoose = require('libs/mongoose');
var async = require('async');
var User = require('models/user').User;

var db = mongoose.connection.db;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose connection status is ' + mongoose.connection.readyState, '- connecting');
});


