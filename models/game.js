var mongoose = require('../libs/mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    api_detail_url: String,
    deck: String,
    id: Number,
    image: {},
    name: String,
    original_release_date: String,
    platforms: [],
    site_detail_url: String,
    images: [],
    videos: [],
    genres: [],
    releases: [],
    owners: {
        type: [],
        default: []
    }
});

var Game = mongoose.model('Game', schema);

module.exports = Game;



