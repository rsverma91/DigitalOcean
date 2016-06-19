var express = require('express');
var router = express.Router();

var getRailFare = require('./apiController/getRailFare');
var getTrain = require('./apiController/getTrain');
var getHotels = require('./apiController/getHotels');

router.get('/getRailFare/:tno/:src/:dst/:doj', getRailFare);
router.get('/getTrain/:src/:dst/:dd/:mm', getTrain);
router.get('/getHotels/:dst/:ci/:co', getHotels);

module.exports = router;
