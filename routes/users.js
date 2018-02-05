const express = require('express');
const router = express.Router();
const users_controller = require('../controllers/users-controller');

/* GET users listing. */
rooter.get('/login', users_controller.users);

module.exports = router;