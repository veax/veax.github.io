## How to build project

1. Clone this project on your machine

```
git clone https://github.com/veax/veax.github.io.git
```

2. [Follow jekyll instructions](https://jekyllrb.com/docs/) to install ruby and jekyll

3. Go in project directory

```
cd veax.github.io
```

4. Modify sources according to your needs

5. Remove all content from \_site directory

```
rm -r _site/*
```

6. Create gh-pages branch and clone your repo's gh-pages branch into the \_site directory

```
git clone -b gh-pages `git config remote.origin.url` _site
```

7. run your project in localhost to test

```
jekyll serve
```

8. build jekyll sources in \_site directory

```
jekyll build
```

9. push your src branch changes on git
10. push your gh-pages branch changes on git

```
cd _site
git add .
git commit -am 'Yeah. Built from subdir'
git push
```

11. Configure you github repo settings to serve on web from gh-pages branch:
    Settings -> General -> Code and automation -> Pages -> Build and deployment -> Source : deploy from branch -> branch gh-pages : root -> save
