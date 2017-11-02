var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Resume' });
});
router.get('/download/:file', function(req, res) {
    console.log('download', req.params.file);
    var file = './public/downloads/' + req.params.file;
    console.log(file);
    res.download(file); // Set disposition and send it.
});
module.exports = router;