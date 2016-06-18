var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Home', { title: 'Digital Ocean' });
});
router.get('/main', function(req, res, next) {
  res.render('Main', { title: 'Digital Ocean' });
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Digital Ocean' });
});
module.exports = router;
