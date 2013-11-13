var blogz = require('../');
var util  = require('util');
var blog  = blogz({
  contentDir : __dirname + '/blog',
  domain     : 'www.mysite.com',
  base       : '/blog'
});

console.log(util.inspect(blog, null, 5));
