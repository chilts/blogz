var test = require('tape').test;

var blogz = require('../');

var blog = blogz({
    title      : 'Empty Blog',
    domain     : 'example.com',
    contentDir : __dirname + '/empty',
});

test(function(t) {
    t.equal(blog.posts.length, 0, 'There are no posts');
    t.equal(Object.keys(blog.post).length, 0, 'There is nothing in post');
    t.equal(blog.pages.length, 0, 'There are no pages');
    t.equal(blog.latest.length, 0, 'There are no latest');

    t.equal(Object.keys(blog.archive).length, 0, 'There are no yearly archives');
    t.equal(Object.keys(blog.tag).length, 0, 'There are no tags');
    t.equal(Object.keys(blog.category).length, 0, 'There are no categories');

    let json = {
      version       : 'https://jsonfeed.org/version/1',
      title         : 'Empty Blog',
      home_page_url : 'http://example.com',
      description   : '',
      items         : [],
    };
    t.deepEqual(blog.json, json, "the JSON Feed is correct");

    t.end();
});
