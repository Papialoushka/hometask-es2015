const express = require('express');
const app = express();
const path = require('path');
const winston = require('winston');
const json = require('./article.json');

const index = require('./routes/index');
const users = require('./routes/users');

// View engine setup.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({filename: 'combined.log'})
  ]
});

app.all('*', (req, res, next) => {
  console.log(json);
  next();
}, (req, res, next) => {
  logger.info(`date: ${new Date().toLocaleTimeString()}, url: ${req.url}, method: ${req.method}`);
  next();
});

app.use('/', index);
app.use('/users', users);

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

module.exports = app;