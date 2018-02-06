const express = require('express');
const router = express.Router();
const users_controller = require('../controllers/users-controller');
const passport = require('passport');

router.get('/login', users_controller.users);
router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/blogs',
  failureRedirect: '/login'
}));

module.exports = router;