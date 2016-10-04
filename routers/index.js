var express = require('express');
var mongoose = require('mongoose');
var User = require('../models/user').User;
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

var router = express.Router();

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

router.post('/api/login', upload.array(), function (req, res, next) {
    var jsoned = JSON.parse(JSON.stringify(req.body));

    var user = new User({
        nickName: jsoned.nickName,
        email: jsoned.email,
        password: jsoned.password
    });

    user.save(function (err, user, affected) {
        if (err) throw err;
        console.log(user + ' was saved');
    });

    //HOW TO FIND IN THE DATABASE:
    //User.findOne({nickName: 'some nickName'}, function (err, us) {
    //    if (err) throw err;
    //    console.log('and u can find it in the db' + us);
    //});

    res.end();
});

module.exports = router;