const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const stylus = require('stylus');
const cors = require('cors');
const cluster = require("cluster");

const routes = require('./src/routes/index');
const app = express();

app.locals.deployVersion = (new Date).getTime();

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 864000000}));

if (process.env.DEBUG) {
  routes.get('/debug', function(req, res, next) {
    res.send("Worked id "+cluster.worker.id);
  })
}

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    if (process.env.SIMULATE_CRASH === "true" && req.originalUrl === "/crash")
      delete err.status;
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  if (process.env.SIMULATE_CRASH === "true" && req.originalUrl === "/crash")
    delete err.status;
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
