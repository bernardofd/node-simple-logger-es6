const
	chalk  = require('chalk'),
	moment = require('moment');

// Log Levels
const level = {
	debug : chalk.green,
	log : chalk.gray,
	info : chalk.blue,
	warn : chalk.yellow.bold,
	error : chalk.bgRed.white.bold
};

// Timestamp format
const timeFormat = 'DD-MMM-YYYY HH:mm:ss';

function logFactory(lvl) {
	return (message) => console.log(level[lvl](`[${moment().format(timeFormat)}] ${message}`));
}

module.exports = new Proxy({}, {
	get : function(target, name) {
		if (name in level) {
			return logFactory(name);
		} else {
			return logFactory('log');
		}
	}
});
