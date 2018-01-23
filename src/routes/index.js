var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/apps', function(req, res, next) {
  res.render('apps');
});

router.get('/features', function(req, res, next) {
  res.render('features')
})

router.get('/install', function(req, res, next) {
  res.render('install')
})

router.get('/convergence', function(req, res, next) {
  res.render('convergence')
})

router.get('/design', function(req, res, next) {
  res.render('design')
})

router.get('/privacy', function(req, res, next) {
  res.render('privacy')
})

router.get('/telegram', function(req, res, next) {
  res.redirect("https://telegram.me/ubports");
});

module.exports = router;
