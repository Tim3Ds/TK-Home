var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Resume/index', {
        title: 'Resume'
    });
});
/* GET home page. */ 
router.get('/portfolio', function(req, res, next) {
    res.render('Resume/Portfolio', {
        title: 'Portfolio'
    });
});
/* GET home page. */
router.get('/letters', function(req, res, next) {
    res.render('Resume/Letters', {
        title: 'Letters'
    });
});

module.exports = router;