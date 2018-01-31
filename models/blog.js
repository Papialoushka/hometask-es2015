const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/blogs');
const Schema = mongoose.Schema;

const db = mongoose.connection;

const blogSchema = new Schema({
  _id: String,
  title: String,
  author: String,
  body: String
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;