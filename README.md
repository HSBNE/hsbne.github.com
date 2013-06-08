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
(If you haven't tried this before goto www.github.com and register an account, then go to our page and click on fork)
If you become a trusted contributor, I'm happy to give you direct commit rights
to this repo.

For now, all changes are going through pull requests just for visibility.

### The quick and easy way

You can use [Prose.io](http://prose.io/) to contribute to markdown pages. For
html pages, you can go through the github edit button.

### The slower, but more powerful way

1. Fork this repo
2. Clone your fork to a local drive (git clone git://git@github.com:YOURUSERNAME/hsbne.github.com.git
3. cd hsbne.github.com.git
4. Tell your local installation of git to track the upstream master (git remote add upstream https://github.com/HSBNE/hsbne.github.com.git)  
5. You can now get the latest version from the original site using (git fetch upstream)
6. Now go ahead and make your changes

#### OSX / Linux

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

*Important:* Jekyll recently upgraded to v1, but github pages uses 0.12. v1 is
an ideal upgrade and the nicest to run on your system, but the commands differ
slightly. To start the server run `jekyll server --watch`. The directions above
are for jekyll pre 1.x.

If you're experiencing weirdness where your changes don't work once up on
github, you can run the site in compatibility mode using the included Gemfile.

1. `gem install bundler`
2. `bundle install`
3. `bundle exec jekyll`

Keep in mind that 0.12 seems to be a bit buggy and the `--auto` option does
not seem to work properly for some people.

Once you have changes you like:

1. `git commit -am "My amazing changes"`
2. `git push origin master`
3. Go to your repo on github, make a pull request.
4. Wait for me to accept it.

If it says that you have no changes, you may have to run git add FILENAME
#### Windows

Instructions coming, maybe from you?

## This document

I'd love contributions to this readme also, go nuts.
