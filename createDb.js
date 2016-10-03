var mongoose = require('libs/mongoose');
var async = require('async');
var User = require('models/user').User;

var db = mongoose.connection.db;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(mongoose.connection.readyState, ' - connecting');
});



// var user = new User({
// 	username: 'Tester2',
// 	password: 'secret'
// });

// user.save(function(err, user, affected) {
// 	if (err) throw err;

// 	User.findOne({username: 'Tester2'}, function(err, tester) {
// 		console.log(tester);
// 	})
// });

