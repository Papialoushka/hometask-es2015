const login = require('../views/login.pug');

exports.users = (req, res) => {
  res.render(login, { message: 'Please enter your login details' });
};