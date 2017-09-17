const logger = require('./simple-logger').on();

logger.newline();
logger.log("simple string");
logger.newline();
let someObject = {
	who: "me",
	what: "something else"
};
logger.dump("My object dump:", someObject);
