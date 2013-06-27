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

Install Github for windows [http://windows.github.com/](http://windows.github.com/ "http://windows.github.com/")

login and clone the repository to you local drive mine is `C:\users\denominator\Documents\GitHub\hsbne.github.com\`

##### Install Ruby

For this, you'll want to use [http://rubyinstaller.org/](http://rubyinstaller.org/ "Ruby Installer for Windows"). Just download the latest version of the installer from their site, and run it.

Once installed you'll need to append the newly-created bin directory for Ruby, in my case C:\Ruby200\bin, to your PATH system environment variable. To do this:


1. Right-click **My Computer** and click **Properties**.
2. In the **System Properties** window, click on the **Advanced** tab.
3. In the Advanced section, click the **Environment Variables** button.
4. In the Environment Variables window, highlight the **Path** variable in the **Systems Variable** section and click the Edit button.
5. Append the directory separator, and the relevant Ruby bin directory path to the current value (e.g. `;C:\Ruby193\bin`)

Or

1. Hold down the windows key and press R.
2. type cmd in the command box
3. type set `PATH=%PATH%;C:\Ruby193\bin`


##### Install the Ruby Installer DevKit

Due to some of the dependencies in later steps, you&#8217;ll also need to download and install the RubyInstaller Development Kit. This is [http://rubyinstaller.org/downloads/](http://rubyinstaller.org/downloads/ "available on their download page").

When you run the executable, you'll be asked where to place the setup files. For simplicity, store them in `C:\DevKit` and once the extraction is complete, open up a command prompt window and navigate to that same directory, 
'cd C:\DevKit`.</p>

Execute the command `ruby dk.rb init`

followed by `ruby dk.rb install` to install the development kit.

#####Install Jekyll and its Dependencies

Its pretty simple now, just run the following three commands in windows command line:

1. `gem install jekyll`
2. `gem install RedCloth`
3. `gem install rdiscount`

#####Fire-Up Jekyll

If everything has gone well then you should now be able to navigate to the location of your source files* and start up Jekyll's web server instance with `jekyll serve`. This will then allow you to browse the generated site locally at ![http://localhost:4000](localhost:4000)

**TIP:** To make it easer to startup sever create a shortcut on your desktop pointing to in my case `C:\Ruby200\bin\jekyll.bat -w serve` the -w makes it watch the directory to change the server everytime something changes. Edit the Start In: int the properties of the shortcut to poin it to the directory where the website is 
`C:\users\denominator\Documents\GitHub\hsbne.github.com\`

to close running server just hit ctl-c and it y enter



**Note:** If you get an error when you first try to run jekyll, telling you that RedCloth is not installed, then simply run the following command [http://hblg.info/2011/08/27/RedCloth-fix-Windows-installation.html](http://hblg.info/2011/08/27/RedCloth-fix-Windows-installation.html "as noted here").

    sh C:\Ruby193\bin\redcloth


## This document

I'd love contributions to this readme also, go nuts.
