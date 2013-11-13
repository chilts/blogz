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

Read a directory of files, get a blog data structure.

# Synopsis #

This will return a data structure of the content from the local `blog` directory (the `dir` option, required). The
`domain` option is also required so that we can provide full URLs inside the RSS and Atom feeds.

```
var util  = require('util');

var blogz = require('blogz');

var blog  = blogz({
    dir    : __dirname + '/blog',
    domain : 'example.com',
});

console.log(util.inspect(blog, null, 5));
```

# Default Options #

```
var defaults = {
    title       : '',
    description : '',
    base        : '',
    latestCount : 10,
};
```

You may override any of these defaults in the options.

* `title` : used in the RSS and Atom feeds
* `description` : used in the RSS feed
* `base` : where the blog will be mounted on the server (e.g. `/blog` or `/misc`). If left blank it defaults to the
  empty string, which means at the root of the server. Don't add a trailing slash.
* `latestCount` : the number of posts to store in the `latest` list returned

# Options #

##  ##

# Author #

Written by [Andrew Chilton](http://chilts.org/) - [Blog](http://chilts.org/blog/) - [Twitter](https://twitter.com/andychilton).

# License #

* [Copyright 2013 Andrew Chilton.  All rights reserved.](http://chilts.mit-license.org/2013/)

(Ends)
