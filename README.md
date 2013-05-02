# HSNBE.org

## Quick Reference

This uses [Jekyll](http://jekyllrb.com) on [Github Pages](http://pages.github.com). 
There are no plugins, and theres no server back end. Contribute by making pull
requests.

### Markdown vs HTML

Utilise markdown unless HTML is absolutely necessary to get correct
presentation. Ie, all the first level pages are HTML, but the group rules page,
meeting notes etc are in Markdown. Markdown is nice and portable for information
like that.

## About this implementation

This is the github pages version of hsbne.org. We've moved over to this solution
because:

 * It's free to run
 * We have no server to maintain
 * It's fairly accessible, although not WYSIWYG accessible
 * It's leaps and bounds better than google sites

There are some downsides:

 * HTML and Markdown is less accessible than WYSIWYG
 * The process of submitting changes via github is hard if you're not a
   programmer.
 * We're limited to githubs implementation of Jekyll, which means no plugins.

There are some tickets in the github system for features to make contributing
easier. If you feel up for it, that would be an amazing way to help out.

## Contributing

Contribute like you would any other github project. Fork and make a pull
request.

If you become a trusted contributor, I'm happy to give you direct commit rights
to this repo.

For now, all changes are going through pull requests just for visibility.

### The quick and easy way

You can use [Prose.io](http://prose.io/) to contribute to markdown pages. For
html pages, you can go through the github edit button.

### The slower, but more powerful way

1. Fork this repo
2. Clone your fork to a local drive

#### OSX

1. System ruby sucks. Install [RVM](http://rvm.io)
2. Go to your copy of the site, `rvm use 1.9.3 --rvmrc`
    * 1.9.3 is optional, i think anything higher will also work. RVM defaults to
      2.0.0 at the moment.
3. `gem install jekyll`
4. `jekyll`

   The options that jekyll will execute with are specified in config.yml
5. The site is now running on port [4000](http://localhost:4000/), and it's
   watching the directory for changes. Edit things and see how hilariously
   broken everything becomes. Some changes aren't picked up by auto, just
   restart the server.

Once you have changes you like:

1. `git commit -am "My amazing changes"`
2. `git push origin master`
3. Go to your repo on github, make a pull request.
4. Wait for me to accept it.

## This document

I'd love contributions to this readme also, go nuts.
