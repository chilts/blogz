```
 ______   _        _______  _______  _______ 
(  ___ \ ( \      (  ___  )(  ____ \/ ___   )
| (   ) )| (      | (   ) || (    \/\/   )  |
| (__/ / | |      | |   | || |          /   )
|  __ (  | |      | |   | || | ____    /   / 
| (  \ \ | |      | |   | || | \_  )  /   /  
| )___) )| (____/\| (___) || (___) | /   (_/\
|/ \___/ (_______/(_______)(_______)(_______/
                                             
```

Read a directory of files, get a blog data structure. Used in [connect-blog](https://www.npmjs.com/package/connect-blog).

# Directory Layout #

All you need to do is create two files for each post: `first-post.json` and `first-post.md`.

e.g. first-post.json:

```js
{
  "title"    : "Intro to JavaScript, React and Redux",
  "date"     : "2016-08-10T22:05:56Z",
  "category" : "deep-dive",
  "tags"     : [ "javascript", "react", "redux" ]
}
```

The minimal amount of data you need to provide just consists of `title` and `date`.

e.g. first-post.md:

```md
This is a deep-dive into JavaScript, React and Redux.
```

You can put any field you like into the JSON file and it will appear in the `meta` info of each post (see below for
each posts structure once it has been processed).

# Synopsis #

This will return a data structure of the content from the local `blog` directory (the `dir` option, required). The
`domain` option is also required so that we can provide full URLs inside the RSS and Atom feeds.

```
var blogz = require('blogz');

var blog  = blogz({
    dir    : __dirname + '/blog',
    domain : 'example.com',
});

console.log(blog);
```

If you want to see all levels in the returned data structure, do this:

```
var util = require('util');
console.log(util.inspect(blog, { depth : null }));
```

# Default Options #

```
var defaults = {
    title       : '',
    description : '',
    base        : '',
    latestCount : 10,
    authorName  : '',
    authorEmail : '',
};
```

You may override any of these defaults in the options.

* `title` : used in the RSS and Atom feeds
* `description` : used in the RSS feed
* `base` : where the blog will be mounted on the server (e.g. `/blog` or `/misc`). If left blank it defaults to the
  empty string, which means at the root of the server. Don't add a trailing slash.
* `latestCount` : the number of posts to store in the `latest` list returned
* `authorName` : used in the Atom feed
* `authorEmail` : used in the Atom feed

## Overall Layout ##

```js
{
    posts : [ ... an array of posts ... ],
    post : {
        ... an object of posts, using the base filename as the key ...
    },
    pages : [
        ... an array of arrays (each of `latestCount` long) containing posts ...
    ],
    latest : [
        ... an array of posts containing at most, `latestCount` posts ...
    ],
    archive : {
        '2013' : {
            '01' : [
                ... an array of posts published in this year/month ...
            ],
            ...etc...
        },
        ...etc...
    ],
    tag : {
        'my-tag' : [ ... an array of posts ... ],
        ...etc...
    },
    category : {
        'my-category' : [ ... an array of posts ... ],
        ...etc...
    },
    rss : '...', // The RSS feed for this blog
    atom : '...', // The Atom feed for this blog
    json : '...', // The JSONFeed for this blog
}
```

## Post Layout ##

Each post looks like this:

```js
{
    'name' : '...', // The basename of the file
    'meta' : {
        // ... any fields you put in `$name.json`, including title, tags and category
        moment : ..., // a MomentJS object with the published date
        year : '2016', // the year in string format
        month : '03', // the month as a two digit string
        day : '12', // the day as a two digit string
        monthname : 'March', // the month as a string
        day : ..., // a MomentJS object with the published date
    },
    content : '...', // the plain text content from `$name.md`
    html : '...', // the HTML markup generated from `$name.md`
    next : ..., // a var pointing to the next post
    prev : ..., // a var pointing to the prev post
}
```

# Author #

Written by [Andrew Chilton](https://chilts.org/) - [Twitter](https://twitter.com/andychilton) - [GitHub](https://github.com/chilts/).

# License #

* [Copyright 2013-2019 Andrew Chilton.  All rights reserved.](http://chilts.mit-license.org/2013/)

(Ends)
