var test = require('tape').test;

var blogz = require('../');

var blog = blogz({
    domain     : 'example.com',
    contentDir : __dirname + '/few-posts',
});

test(function(t) {
    t.equal(blog.posts.length, 3, 'There are three posts');
    t.equal(Object.keys(blog.post).length, 3, 'Three posts');
    t.equal(blog.pages.length, 1, 'There is one page');
    t.equal(blog.latest.length, 3, 'There are three latest posts');

    t.equal(Object.keys(blog.archive).length, 2, 'There are two yearly archives');
    t.equal(Object.keys(blog.archive['2013']).length, 1, 'There is one archive for 2013');
    t.equal(Object.keys(blog.archive['2013']['11']).length, 1, 'There is one post in the archives for 2013-11');
    t.equal(typeof blog.archive['2014'], 'undefined', 'There is nothing in 2014');
    t.equal(Object.keys(blog.archive['2015']).length, 2, 'There are two archives for 2015');
    t.equal(Object.keys(blog.archive['2015']['11']).length, 1, 'There is one post in the archives for 2015-11');
    t.equal(Object.keys(blog.archive['2015']['12']).length, 1, 'There is one post in the archives for 2015-12');
    t.equal(Object.keys(blog.tag).length, 2, 'There are two tag archive');
    t.equal(Object.keys(blog.tag['hello-world']).length, 1, 'There is one item in this tag');
    t.equal(Object.keys(blog.tag['cheese']).length, 1, 'There is one item in this tag');
    t.equal(Object.keys(blog.category).length, 2, 'There are two category archives');
    t.equal(Object.keys(blog.category['cat-five']).length, 1, 'There is one item in this category');
    t.equal(Object.keys(blog.category['general']).length, 2, 'There are two items in the general category');

    t.end();
});
