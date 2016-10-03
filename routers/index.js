var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('hello!');
    next();
});
router.get('/games', function(req, res, next) {
    res.send('this is games\' page');
    next();
});
router.get('/login', function(req, res) {
    res.send('please log in');
    res.end();
});

module.exports = router;