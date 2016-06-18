var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Home', { title: 'Express' });
});
router.get('/main', function(req, res, next) {
  res.render('Main', { title: 'Express' });
});
module.exports = router;
