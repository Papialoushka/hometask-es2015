const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/blogs');
const Schema = mongoose.Schema;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected'));

const blogSchema = new Schema({
  blog_id: String,
  title: String,
  author: String,
  body: String
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;