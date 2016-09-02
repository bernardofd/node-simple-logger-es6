# node-simple-logger
Really simplistic log system for node v6 using ES6 Proxies

## Yet another log system?

Yes. I made this because other log systems like [Winston](https://github.com/flatiron/winston) or [Bunyan](https://github.com/trentm/node-bunyan) felt so overwhelmingly complicated for really small projects. I wanted just something to print colored messages in the stdout. Besides, I wanted to play with ES6 and proxies, so this was the perfect opportunity.

## Pre-requisites

* Node v6 (ES6 proxies are not implemented in node version 5 or lower ([Source](http://kangax.github.io/compat-table/es6/))). There is a `.nvmrc` file if you use [nvm](https://github.com/creationix/nvm)


## How to use

### Basic usage
```javascript
const logger = require('node-simple-logger-es6');

logger.log('Log Message'); // Output (in gray): [12-Jul-2016 16:57:46] Log Message
```

### Log Levels
```javascript
logger.debug('Debug message');
logger.info('Info message');
logger.log('Log message');
logger.warn('Warning message');
logger.error('Error message');
```

Output:

![Screenshot of log levels](https://cloud.githubusercontent.com/assets/2365802/16782604/ae31de7e-4856-11e6-9acf-832d2428567b.png)

Since it uses ES6 Proxy, any other member function call will default to `log()`:

![Screenshot of default behaviour of undefined log levels](https://cloud.githubusercontent.com/assets/2365802/16782647/e1748b38-4856-11e6-82b4-d37eb3ee4fe3.png)

### Using with [pm2](http://pm2.keymetrics.io/)

`pm2` by default ignores the colors set by this library, so all one would see when calling `pm2 logs` would be white (and ugly) text. To ensure that the logs show with colors, use `pm2 start app.js -- --color`.
