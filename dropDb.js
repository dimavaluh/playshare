var mongodb = require('mongodb');
var config = require('./config');

// here we connect native mongodb driver, because latest ver. of mongoose does not want to drop collections
// P.S. We drop the collection of games, to prevent multiplication of the this collection after server reload
mongodb.connect(config.get('mongoose:uri'), function(err, db) {
    if (err) console.log(err);
    var games = db.collection('games');
    // here we drop games collection if it already exists
    games.drop(function(err) {
        if(err) console.log(err);
    });
});