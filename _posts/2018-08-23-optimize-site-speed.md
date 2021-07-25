---
layout: post
title: Optimize site speed
categories: web
---
Lately, I had a strong idea to optimize a page speed for my blog pages. Here are some of methods that I applied:
### Bundle all css files in one and minify it
For now the structure of folder is: 
![css structure](/assets/img/css_structure.png "Css structure")
So in head we link multiples css files to retrieve all styles from server (hyde.css, poole.css etc)
An idea is to convert all css files in sass partials files and to import them in main.sass file.
To convert all css in sass I use [http://css2sass.herokuapp.com/](http://css2sass.herokuapp.com/)
Now I created a partials folder where I put hyde.sass, poole.sass and syntax.sass and after I imported this in the start of main.sass:

{% highlight sass %}
// IMPORT
@import "./partials/poole"
@import "./partials/syntax"
@import "./partials/hyde"
{% endhighlight %}

To compile sass I use vscode extension *Live Sass Compiler*, but we have to clarify config settings. For this we create **.vscode** folder in a root directory of a project and in this directory **settings.json** file. 
Here's the config

{% highlight json %}
{
  "liveSassCompile.settings.excludeList": [
    "**/partials/**"
  ],
  "liveSassCompile.settings.formats":[
    {
        "format": "compressed",
        "extensionName": ".min.css",
        "savePath": "/public/css",
    }
	]
}
{% endhighlight %}

We exclude a partials folder because we want to compile only main.sass. Also compiled css will be minified and put in a /public/css folder. <br>
![new css structure](/assets/img/new_css_structure.jpg "New Css structure")
So in <head> of our .html file we have only one css file to request: 
{% highlight html %}
  <!-- CSS -->
  {% raw %}<link rel="stylesheet" href="{{ site.baseurl }}public/css/main.min.css"> {% endraw %}
{% endhighlight %}

We decreased the number of requests from 4 to 1 and compressed it.

### Customize font-awesome
When I started my blog, I just copied a cdn link to new font-awesome 5 and I used only icon classes that I needed. But this summer I have a slow internet connection and I noticed that request to font awesome cdn is one of the most slowest when I load an index page. Of course it is, because I load all library, there are tons of icons that I don't use on my site. 
I started from locally save a font awesome file and manually deleted all icons from this minified css file. But it's not a best solution (and not fast). <br>
Then I found [http://fontello.com/](http://fontello.com/). You choose only icons you need and save locally the files: css and fonts: I left .eot and .ttf types for old-browser support but you can use only .woff. This should be enough.

![http://fontello.com/](/assets/img/fontello.png "http://fontello.com/")

Yes, we don't use cdn anymore, but even if we store fonts locally on the server it would decrease the size of loading ressources.

### Inline styles

You can go further and compile your css style in **_includes** folder and after put in in your head like inline styles:

{% highlight ruby %}
  <style>
  {%raw%} {% include main.min.css %} {%endraw%}
  </style>
{% endhighlight %}

### Results
I decreased size of index.page from 223kb to 179kb and from 17 requests to 14 requests. <br>
Furthermore I don't use jQuery library, all scripts are on vanilla js. <br>
Also, don't forget to compress your images for web before uploading because images is a 90% of page size in average. That's all, thank you for reading and happy coding!
