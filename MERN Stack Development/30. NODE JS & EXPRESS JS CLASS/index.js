/*📝📝import karne ke liye node js ka syntax: 
require(....NodeJs) common js syntax
instead of import from (...ES6 React JS)

const utils = require("./utils.js");
console.log(utils.multiply(3, 4));

utils.log.warning("This is just an info");
utils.log.error("This is just an info");
*/

/*
📑OUTPUT📑
12
warning This is just an info
error This is just an info
 */

/*📑====Also written as====📑*/
const { multiply, log } = require("./utils.js");
console.log(multiply(3, 4));
log.warning("This is just an info");
log.error("This is just an info");
