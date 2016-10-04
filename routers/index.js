var express = require('express');
var mongoose = require('mongoose');
var User = require('../models/user').User;
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var errorhandler = require('errorhandler');

var router = express.Router();

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

router.post('/api/login', upload.array(), function (req, res, next) {
    var jsoned = JSON.parse(JSON.stringify(req.body));

    var user = new User({
        nickName: jsoned.nickName,
        email: jsoned.email,
        password: jsoned.password
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

module.exports = router;