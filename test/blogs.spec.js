const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = require('assert');
const should = chai.should();
const app = require('./../app');
const blogModel = require('../models/blog');
const mongoid = require('mongoid-js');
const path = require('path');

chai.use(chaiHttp);

describe('Blogs', function () {
  it('should render index on / GET', (done) => {
    chai.request(app)
      .get('/')
      .end(function (err, res) {
        res.should.have.status(200);
        done();
      });
  });
  it('should list  ALL blogs on /blogs GET', (done) => {
    chai.request(app)
      .get('/blogs')
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.forEach(element => {
          element.should.have.property('body');
          element.should.have.property('blog_id');
          element.should.have.property('title');
          element.should.have.property('author');
        });
        done();
      });
  });
  it('should list a SINGLE blog on /blogs/<id> GET', function(done) {
    const newBlog = new blogModel({
      blog_id: mongoid(),
      title: 'Some title',
      author: 'Some Author',
      body: 'Some info only interesting to the author',
    });
    newBlog.save(function(err, data) {
      chai.request(app)
        .get('/blogs/'+data.id)
        .end(function(err, res){
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('_id');
          res.body.should.have.property('body');
          res.body.should.have.property('blog_id');
          res.body.should.have.property('author');
          res.body.should.have.property('title');
          res.body._id.should.equal(data.id);
          done();
        });
    });
  });
});