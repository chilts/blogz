var test = require('tape').test;

var blogz = require('../');

var blog = blogz({
    domain      : 'example.com',
    contentDir  : __dirname + '/many-posts',
    latestCount : 20,
});

test(function(t) {
    t.equal(blog.posts.length, 50, 'There are 50 posts');
    t.equal(Object.keys(blog.post).length, 50, 'There are 50 in post');
    t.equal(blog.pages.length, 5, 'There is 5 pages page');
    t.equal(blog.latest.length, 20, 'There are 20 in latest');

    t.equal(Object.keys(blog.archive).length, 1, 'There is one yearly archive');
    t.equal(Object.keys(blog.archive['2013']).length, 1, 'There is one monthly archive');
    t.equal(Object.keys(blog.tagged).length, 50, 'There are 50 tags');

    t.end();
});
