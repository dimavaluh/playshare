var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var router = express.Router();

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// router.post('/api/login', function(req, res) {
//     console.log(req.originalUrl);
// });

router.post('/api/login', upload.array(), function (req, res, next) {
    console.log(req.body);
    res.json(req.body);
});
// router.get('/', function(req, res, next) {
//     res.send('hello!');
//     next();
// });
// router.get('/games', function(req, res, next) {
//     res.send('this is games\' page');
//     next();
// });
// router.get('/login', function(req, res) {
//     res.send('please log in');
//     res.end();
// });

module.exports = router;