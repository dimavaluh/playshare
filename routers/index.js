var express = require('express');
//var connect = require('connect');
var session = require('express-session');
var mongoose = require('mongoose');
var async = require('async');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var multer = require('multer');
var upload = multer();

var config = require('../config');
var User = require('../models/user').User;


var router = express.Router();

router.use(bodyParser.json());// for parsing application/json
router.use(bodyParser.urlencoded({extended: true}));// for parsing application/x-www-form-urlencoded
router.use(cookieParser()); //Cookie parser

var MongoStore = require('connect-mongo')(session);

router.use(session({ // for working with user's sessions
    secret: config.get("session:secret"),
    key: config.get("session:key"),
    cookie: config.get("session:cookie"),
    store: new MongoStore({mongooseConnection: mongoose.connection})
}));




router.post('/api/login', upload.array(), function (req, res, next) {
    var user = new User({
        nickName: req.body.nickName,
        email: req.body.email,
        password: req.body.password
    });

    user.save(function (err, user) {
        if (!err) {
            res.status(200).send('Accounts creation - successful');
        }

        if (err && err.message.includes('nickName')) {
            res.status(403).send('This nickname already exists, try another');
        } else if (err && err.message.includes('email')) {
            res.status(403).send('This email already exists, try another');
        }
    });
});

router.post('/api/signin', upload.array(), function (req, res, next) {
    var email = req.body.email;
    var password = req.body.password;

async.waterfall([
    function(callback) {
        User.findOne({email: email}, callback);
    },
    function(user, callback) {
        if(user) {
            if (user.checkPassword(password)) {
                req.session.user = user._id;
                console.log(user);
                res.status(200)
                    .json({"nickName": user.nickName, "email": user.email, "dateOfCreation": user.created, 'avatar': user.avatar})
                    .send();
            } else {
                res.status(403).send('Wrong password');
            }
        } else {
            res.status(403).send('The account was not found, maybe you are not yet registered');
        }
        callback(null, user);
    }
    ], function(err, user) {
    if (err) return next(err);
    });
});

router.post('/api/logout', upload.array(), function(req, res, next) {
    var nickname = req.body.nickName;

    req.session.destroy();
    res.redirect('/');
    res.send('Successfully logged out');
});

module.exports = router;