# single-file-logger
Simple source file based console logging for javascript (Node, ES6, etc).  
This provides control of console output *per source file.*  
(Circumvents node's singleton model for exported object instances, and provides single-line initialization)  
## Installation
~~~
npm install single-file-logger
~~~
## Usage
~~~
// Logging on

const logger = require("Logger").on();
  OR
const logger = require("Logger").show();

// logging off
const logger = require("Logger");
  OR
const logger = require("Logger").off();
  OR
const logger = require("Logger").hide();

// ...

logger.newline();
logger.log("simple string");
logger.newline();
let someObject = {
	who: "me",
	what: "something else"
};
logger.dump("My object dump:", someObject);

// produces..

simple string

My object dump:
type: object
{
  "who": "me",
  "what": "something else"
}
~~~
## Credits
artemis-prime
## License
GPL-3.0
