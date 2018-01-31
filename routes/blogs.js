const express = require('express');
const router = express.Router();
const blogs_controller = require('../controllers/blogs-controller');

// GET request for Homepage.
router.get('/', blogs_controller.index);

// GET request for one Blog.
router.get('/blogs/:id', blogs_controller.blogs_detail);

// GET request for list of all Blogs.
router.get('/blogs', blogs_controller.blogs_list);

// GET request for list of all Blogs.
router.get('/new', blogs_controller.blogs_add_new);

// POST request for list of all Blogs.
router.post('/blogs', blogs_controller.blogs_list);

router.delete('/blogs/:id', blogs_controller.blogs_delete);

router.put('/blogs/:id', blogs_controller.blogs_put);

module.exports = router;