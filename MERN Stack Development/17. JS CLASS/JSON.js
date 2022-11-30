// Convert JSON to Javascript Object using built-in function JSON.parse()

// json object
const jsonobject = '{"name":"John","age":22}';
console.log(jsonobject);

// converting to JavaScript object
const obj = JSON.parse(jsonobject);
console.log(obj);

// Convert Javascript Object to JSON Using built-in function JSON.stringify()

const obj1 = { name: 'John', age: 22, grade: 9 };
console.log(obj1);

const newjsonobject = JSON.stringify(obj1);
console.log(newjsonobject);