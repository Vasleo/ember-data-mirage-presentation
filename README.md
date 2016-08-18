# ember-data-mirage-presentation
Ember Data and Ember Cli Mirage Presentation - meetup

This repo consists of a PPT presentation
A server side code for REST points called myserver
And a client side code called myclient

An additional folder called ember-mirage is an Ember Application using direct JS API Calls. [Not part of the presentation - but only to help and explore iTunes API]

How to run the code.

1. Start the REST server
    - This is a node server.
    - cd to myserver
    - execute command inside of terminal> npm install
    - to run the server command> node server.js
    - 
2. Start the ember app
    - cd to myclient
    - execute command> npm install
    - execute command> bower install
    - run ember command> ember s
    - 
    - 
3. To switch between the REST server and Ember Mirage 
    - open file https://github.com/Vasleo/ember-data-mirage-presentation/blob/master/myclient/config/environment.js
    - Find environment === 'development'.,
    
    if (environment === 'development') {
      // ENV.APP.LOG_RESOLVER = true;
      // ENV.APP.LOG_ACTIVE_GENERATION = true;
      // ENV.APP.LOG_TRANSITIONS = true;
      // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
      // ENV.APP.LOG_VIEW_LOOKUPS = true;

      ENV['ember-cli-mirage'] = {
        enabled: false
      };
    }
    
    And flip the enabled: false under ember-cli-mirage to true to bring up the FAKE SERVER instead of the node server.
    ...and vis-a-vis to false if you DO NOT WANT fake server, but instead hit the actual server
    
