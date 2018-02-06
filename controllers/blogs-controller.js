const blogModel = require('../models/blog');
const mongoid = require('mongoid-js');

// Display Homepage.
exports.index = (req, res) => res.render('index', {title: 'Homepage', message: 'Site Home Page'});

exports.blogs_list = (req, res) => {
  blogModel.find({}, function (err, blogs) {
    res.send(blogs);
  });
};

// Display detail page for a specific Blog.
exports.blogs_detail = (req, res) => {
  const blogId = req.params.id;

  blogModel.findById(blogId, function (err, blog) {
    if (err) {
      throw err;
    } else if (blog) {
      res.status(200).send(blog);
    } else {
      res.status(404).send(`Blog ${blogId} is not found`);
    }
  });
};

// Add a new Blog.
exports.blogs_add_new = (req, res) => {
  const newBlog = new blogModel({
    blog_id: mongoid(),
    title: 'Some title',
    author: 'Some Author',
    body: 'Some info only interesting to the author',
  });

  newBlog.save((err, newBlog) => {
    if (err) {
      throw err;
    }
    res.send(newBlog);
  });
};

// Handle Blogs on POST.
exports.blogs_post = (req, res) => res.render('index', {title: 'POST Blogs', message: `Blogs are rendered on POST`});

// Handle delete of a Blog.
exports.blogs_delete = (req, res) => {
  const blogId = req.params.id;

  blogModel.findByIdAndRemove(blogId, (err, blog) => {
    if (err) {
      throw err;
    } else if (blog) {
      res.send('delete ' + blogId);
    } else {
      res.status(404).send(`${blogId} Cannot be found and deleted`);
    }
  });
};


// Handle Blogs on PUT.
exports.blogs_put = (req, res) => {
  const {title, author, body} = req.body;
  const blogId = req.params.id;

  blogModel.findById(blogId, function (err, blog) {
    if (err) {
      throw err;
    } else {
      blog.title = title || blog.title;
      blog.description = author || blog.author;
      blog.price = body || blog.body;

      blog.save((err, blog) => {
        if (err) {
          throw err;
        }
        res.send(blog);
      });
    }
  });
};