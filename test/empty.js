var test = require('tape').test;

var blogz = require('../');

var blog = blogz({
    contentDir : __dirname + '/empty',
});

test(function(t) {
    t.equal(blog.posts.length, 0, 'There are no posts');
    t.equal(Object.keys(blog.post).length, 0, 'There is nothing in post');
    t.equal(blog.pages.length, 0, 'There are no pages');
    t.equal(blog.latest.length, 0, 'There are no latest');

    t.equal(Object.keys(blog.archive).length, 0, 'There are no yearly archives');
    t.equal(Object.keys(blog.tagged).length, 0, 'There are no tags');

    t.end();
});
