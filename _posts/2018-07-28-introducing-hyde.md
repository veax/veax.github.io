---
layout: post
title: Install Hyde theme on Jekyll version 3
categories: [jekyll]
---

It would be logic to write my first post with talk about how I started my blog by installing the Hyde Theme by [Mark Otto](https://twitter.com/mdo){:target="_blank"}, because I have some troubles with compatibility of this theme on jekyll 3.

So, first of all go to [http://jekyllthemes.org/](http://jekyllthemes.org/){:target="_blank } and find a hyde theme (not hydeout). There is not an search on a site, so you can go directly on [https://github.com/poole/hyde](https://github.com/poole/hyde){:target="_blank"} if you`re lazy to browse all existing themes. I will just included some official documentation here:

### Built on Poole

Poole is the Jekyll Butler, serving as an upstanding and effective foundation for Jekyll themes by [@mdo](https://twitter.com/mdo). Poole, and every theme built on it (like Hyde here) includes the following:

* Complete Jekyll setup included (layouts, config, [404](/404), RSS feed, posts, and [example page](/about))
* Mobile friendly design and development
* Easily scalable text and component sizing with `rem` units in the CSS
* Support for a wide gamut of HTML elements
* Related posts (time-based, because Jekyll) below each post
* Syntax highlighting, courtesy Pygments (the Python-based code snippet highlighter)

### Hyde features

In addition to the features of Poole, Hyde adds the following:

* Sidebar includes support for textual modules and a dynamically generated navigation with active link support
* Two orientations for content and sidebar, default (left sidebar) and [reverse](https://github.com/poole/lanyon#reverse-layout) (right sidebar), available via `<body>` classes
* [Eight optional color schemes](https://github.com/poole/hyde#themes), available via `<body>` classes

[Head to the readme](https://github.com/poole/hyde#readme) to learn more.

### Browser support

Hyde is by preference a forward-thinking project. In addition to the latest versions of Chrome, Safari (mobile and desktop), and Firefox, it is only compatible with Internet Explorer 9 and above.

### Installation

So, clone the project from github: `git clone https://github.com/poole/hyde.git` and cd into downloaded folder. Check out your current version of jekyll (if you didn't installed it yet, go to [https://jekyllrb.com/](https://jekyllrb.com/)) : `jekyll --version` For me it's `jekyll 3.8.3
`

Now if you try to running a server by taping `jekyll serve` you will have a warning: 
<div class="message warning"> Deprecation: You appear to have pagination turned on, but you haven't included the `jekyll-paginate` gem. Ensure you have `plugins: [jekyll-paginate]` in your configuration file.
</div>
and the error: 
<div class="message error"> Since v3.0, permalinks for pages in subfolders must be relative to the site source directory, not the parent directory. Check https://jekyllrb.com/docs/upgrading/ for more info. 
</div>
So, the permalinks are deprecated in version 3 - we can remove a line `relative_permalinks: true` from *_config.yml* and add this in the end of the file: <br>
{% highlight html %}
plugins:
  - jekyll-paginate
  - jekyll-gist
  - redcarpet
{% endhighlight %}

Now check out list of local gems: `gem list`
If you don't have a redcarpet, you need to install it: `sudo gem install redcarpet` 
Finally, try to run a server once again: `jekyll serve` and go to `localhost:4000`. Normally, you must see an index page of hyde theme. 

If you have any troubles, post it in comments and happy coding!

 
