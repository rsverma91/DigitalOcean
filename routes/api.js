var express = require('express');
var router = express.Router();

var getRailFare = require('./apiController/getRailFare');
var getTrain = require('./apiController/getTrain');

router.get('/getRailFare/:tno/:src/:dst/:doj', getRailFare);
router.get('/getTrain/:src/:dst/:dd/:mm', getTrain);

module.exports = router;
