var express = require('express');
var router = express.Router();

/* GET settings page. */
router.get('/', function(req, res, next) {
  res.render('payment');
});

module.exports = router;