BrowserStack Kitchen Sink
=========================

Test browser stack integration

Environment Variables
---------------------

 - ``DEBUG=*`` : print debug message
 - ``BROWSERSTACK_USER=XXX``: Browserstack user
 - ``BROWSERSTACK_KEY=XXXX ``: Browserstack key


Usage
-----

You have 2 options to start the mink tests:

Using ``cucumber-mink``

    node_modules/.bin/cucumber-mink --inject false -- -r features/support/mink.js
     

Using ``cucumber``

    cucumber-js
