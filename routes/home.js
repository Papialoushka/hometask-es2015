const express = require('express');
const router = express.Router();

// GET request for Homepage.
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/edit/:id', (req, res) => {
  res.render('index');
});

module.exports = router;