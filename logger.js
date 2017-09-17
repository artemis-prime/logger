'use strict';

/**
Simple per source file logging.

USAGE:

// Logging on
const logger = require("Logger").on();
  OR
const logger = require("Logger").show();

// logging off (except errors)
const logger = require("Logger");
  OR
const logger = require("Logger").off();
  OR
const logger = require("Logger").hide();

EXAMPLE:

logger.newline();
logger.log("simple string");
logger.newline();
let someObject = {
	who: "me",
	what: "something else"
};
logger.dump("My object dump:", someObject);

OUTPUT:

simple string

My object dump:
type: object
{
  "who": "me",
  "what": "something else"
}

*/

class Logger {

	constructor() {

	}

		// return live instance.  See usage above
	static show() {
		return new Logger();
	}
	static on() {
		return new Logger();
	}

		// return class dec only.  See usage above
	static hide() {
		return Logger;
	}
	static off() {
		return Logger;
	}

	log(message) {
		console.log(message);
	};
	static log(message) {
		// no-op
	};

	error(message) {
		console.error(message);
	};
	static error(message) {
		// no-op
	};

	dump(prompt, obj) {
		let message =
			prompt + '\n' +
			"type: " + (typeof obj) + '\n' +
			JSON.stringify(obj, null, 2)
		; // <-
		console.log(message);
	}
	static dump(prompt, obj) {
		// no-op
	};

	newline() {
		console.log('');
	}
	static newline() {
		// no-op
	}

	error(er) {
		console.error(er);
	}
	static error(er) {
		console.error(er);
	}

	remoteError(prompt, error)  {
		_remoteError(prompt, error);
	}
	static remoteError(prompt, error)  {
		_remoteError(prompt, error);
	}

	static _remoteError(prompt, error)  {
		try {
			if (error) {
				if (error.response) {
					if (error.response.data) {
						console.error(prompt + JSON.stringify(error.response.data, null, 2));
					}
					else {
						console.error(prompt + JSON.stringify(error.response, null, 2));
					}
				}
				else {
					console.error(prompt + JSON.stringify(error, null, 2));
				}
			}
			else {
					// usually not possible
				console.error(prompt + " (null error object)");
			}
		}
		catch (e) {}
	}
}

module.exports = Logger;
