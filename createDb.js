var mongoose = require('./libs/mongoose'),
    _ = require('underscore'),
    gamesArr = require('./db/games/games.json');

// here we parse the games.json from ./db/games/games.json
gamesArr = JSON.parse(JSON.stringify(gamesArr));

// here we pull the model of the game
var Game = require('./models/game');

// here we pull the model of the user
var User = require('./models/user').User;

// here we check mongoose connection to DB
var db = mongoose.connection.db;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Mongoose connection status is ' + mongoose.connection.readyState, '- connecting');
});

// here we upload the games collection into the DB
_.each(gamesArr, function (el) {
    var game = new Game({
        api_detail_url: el.api_detail_url,
        deck: el.deck,
        id: el.id,
        image: el.image,
        name: el.name,
        original_release_date: el.original_release_date,
        platforms: el.platforms,
        site_detail_url: el.site_detail_url,
        images: el.images,
        videos: el.videos,
        genres: el.genres,
        releases: el.releases
    });
    game.save(function(err, doc, ass) {
        if (err) console.log(err);
    });
});

