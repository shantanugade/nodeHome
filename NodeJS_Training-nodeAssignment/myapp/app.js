var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

var allRoutes = require('./routes/allRoutes');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var signUpRouter = require('./routes/signUp');
// var signInRouter = require('./routes/signIn');
// var homeRouter = require('./routes/home');


require('dotenv').config();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

allRoutes(app);
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/signup', signUpRouter);
// app.use('/signin', signInRouter);
// app.use('/home',homeRouter)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;