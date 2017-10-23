var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('resume/index', {
        title: 'Resume'
    });
});
/* GET home page. */
router.get('/portfolio', function(req, res, next) {
    res.render('resume/Portfolio', {
        title: 'Portfolio'
    });
});
/* GET home page. */
router.get('/Portfolio/TCMdb', function(req, res, next) {
    res.render('resume/portfolio/TCMdb', {
        title: 'Portfolio'
    });
});
/* GET home page. */
router.get('/portfolio/PDS', function(req, res, next) {
    res.render('resume/portfolio/PDS', {
        title: 'Portfolio'
    });
});
/* GET home page. */
router.get('/letters', function(req, res, next) {
    res.render('resume/Letters', {
        title: 'Letters'
    });
});

module.exports = router;