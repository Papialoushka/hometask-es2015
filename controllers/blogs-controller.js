// Display Homepage.
exports.index = (req, res) => res.render('index', { title: 'Homepage', message: 'Site Home Page'});

// Display list of all Blogs.
exports.blogs_list = (req, res) => res.render('index', { title: 'GET Blogs', message: 'Blogs are rendered on GET'});

// Display detail page for a specific Blog.
exports.blogs_detail = (req, res) => res.render('index', { title: 'GET Blog', message: `Blog ${req.params.id} is rendered`});

// Handle Blogs on POST.
exports.blogs_post = (req, res) => res.render('index', { title: 'POST Blogs', message: `Blogs are rendered on POST`});

// Handle delete of a Blog.
exports.blogs_delete = (req, res) => res.render('index', { title: 'DELETE Blog', message: `Blog ${req.params.id} is deleted`});

// Handle Blogs on PUT.
exports.blogs_put = (req, res) => res.render('index', { title: 'PUT Blog', message: `Blog ${req.params.id} is updated`});