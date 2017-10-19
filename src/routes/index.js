var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/telegram', function(req, res, next) {
  res.redirect("https://telegram.me/ubports");
});

module.exports = router;
