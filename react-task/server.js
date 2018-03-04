const express = require('express');
const server = express();
const path = require('path');
const mongoose = require('mongoose');
//const logger = require('./logger');
//const passport = require('passport');
//const session = require('express-session');

//const blogs = require('./routes/blogs');
//const users = require('./routes/users');

//app.use(session({secret: 'my_secret'}));
//app.use(passport.initialize());
//app.use(passport.session());

// View engine setup.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.all('*', (req, res, next) => {
  console.log(json);
  next();
}, (req, res, next) => {
  logger.info(`date: ${new Date().toLocaleTimeString()}, url: ${req.url}, method: ${req.method}`);
  next();
});

app.use('/', blogs);
app.use('/', users);

// Catch 404 and forward to error handler.
app.use((req, res, next) => {
  const err = new Error('The page you are looking for is not found');
  err.status = 404;
  next(err);
});

// Error handler.
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page.
  res.status(err.status || 500);
  res.render('error');
});

module.exports = server;