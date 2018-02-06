exports.users = (req, res) => {
  res.render('login', { title: 'Login', message: 'Please enter your login details' });
};