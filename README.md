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

```
var blogz = require('blogz');
var util  = require('util');
var blog  = blogz({
  contentDir : __dirname + '/blog',
  domain     : 'www.mysite.com',
  base       : '/blog'
});

console.log(util.inspect(blog, null, 5));
```

# Why is this Module Separate? #

Basically because it is useful in a lot of places:

1. Could be used in a static website generator
2. Used in [connect-blog](http://npm.im/connect-blog)
3. Future: Used as a plugin for my Proximity project (soon to be renamed and released)

# Author #

Written by [Andrew Chilton](http://chilts.org/) - [Blog](http://chilts.org/blog/) - [Twitter](https://twitter.com/andychilton).

# License #

* [Copyright 2013 Andrew Chilton.  All rights reserved.](http://chilts.mit-license.org/2013/)

(Ends)
