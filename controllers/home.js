import { Router } from "express";
var router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home/home', { title: 'Home' });
});

router.get('/calender', function(req, res, next) {
    res.render('home/template', { title: 'Home' });
});

router.get('/calender', function(req, res, next) {
    res.render('home/template', { title: 'Home' });
});

export default router;