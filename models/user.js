var crypto = require('crypto');

var mongoose = require('../libs/mongoose'),
Schema = mongoose.Schema;

var schema = new Schema({
	nickName: {
		type: String,
		unique: true,
		required: true
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
	avatar: {
		type: String,
		default: 'http://i1.wp.com/www.techrepublic.com/bundles/techrepubliccore/images/icons/standard/icon-user-default.png'
	},
	location: {
		type: String,
		default: ''
	},
	gamesCollection: [],
	hashedPassword: {
		type: String,
		required: true
	},
	salt: {
		type: String,
		required: true
	},
	created: {
		type: Date,
		default: Date.now
	}
});

schema.methods.encryptPassword = function(password) {
	return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

schema.virtual('password')
.set(function(password) {
	this._plainPassword = password;
	this.salt = Math.random() + '';
	this.hashedPassword = this.encryptPassword(password);
})
.get(function() { return this._plainPassword; });

schema.methods.checkPassword = function(password) {
	return this.encryptPassword(password) === this.hashedPassword;
};

exports.User = mongoose.model('User', schema);
