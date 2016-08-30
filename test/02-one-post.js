var test = require('tape').test;

var blogz = require('../');

var blog = blogz({
    domain     : 'example.com',
    contentDir : __dirname + '/one-post',
});

test(function(t) {
    t.equal(blog.posts.length, 1, 'There is one post');
    t.equal(Object.keys(blog.post).length, 1, 'There is one in post');
    t.equal(blog.pages.length, 1, 'There is one page');
    t.equal(blog.latest.length, 1, 'There is one latest');

    t.equal(Object.keys(blog.archive).length, 1, 'There is one yearly archive');
    t.equal(Object.keys(blog.archive['2013']).length, 1, 'There is one monthly archive in 2013');
    t.equal(Object.keys(blog.tag).length, 1, 'There is one tag archive');
    t.equal(Object.keys(blog.tag['hello-world']).length, 1, 'There is one item in this tag');
    t.equal(Object.keys(blog.category).length, 1, 'There is one category archive');
    t.equal(Object.keys(blog.category['cat-five']).length, 1, 'There is one item in this category');
    t.equal(typeof blog.category['general'], 'undefined', 'There are no general items in category');

    t.end();
});
