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
    t.equal(blog.pages.length, 5, 'There are 5 pages in total');
    t.equal(blog.latest.length, 20, 'There are 20 in latest');

    t.equal(Object.keys(blog.archive).length, 1, 'There is one yearly archive');
    t.equal(Object.keys(blog.archive['2013']).length, 1, 'There is one monthly archive');
    t.equal(Object.keys(blog.tag).length, 50, 'There are 50 tags');
    t.equal(Object.keys(blog.category).length, 3, 'There are three categories in this archive');
    t.equal(Object.keys(blog.category['thoughts']).length, 17, 'Correct number of thoughts in category');
    t.equal(Object.keys(blog.category['family']).length, 15, 'Correct number of family in category');
    t.equal(Object.keys(blog.category['code']).length, 18, 'Correct number of code in category');
    t.equal(typeof blog.category['unknown'], 'undefined', 'There are no unknown items in category');
    t.equal(typeof blog.category['general'], 'undefined', 'There are no general items in category');

    t.end();
});
