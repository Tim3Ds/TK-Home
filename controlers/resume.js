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
        title: 'Resume Portfolio' 
    });
});

module.exports = router;