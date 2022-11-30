const y = {
    name: "MANOJ",
    age: 23,
    hobbies: ["coding", "teaching", "traveling"],
    foods: {
        sunday: "pizza",
        monday: "apple"
    },
    talk: function () {
        console.log(`My Name Is ${this.name}`);
        console.log("My Age Is " + this.age);
    },
    arrow: () => {
        console.log("Hi! I'm arrow function in side object y.")
    },
    returnObj: () => {
        return {
            name: "XYZ",
            age: 24
        }
    }

}

console.log(y);
y.talk();
y.arrow();
console.log(y.returnObj());

let {returnObj} = y;
const myFun = returnObj();
myFun.age = 20;
console.log(myFun);
console.log(returnObj());




// Acces and print key and value name: "MANOJ"
console.log(y.name);

console.log(y["name"]);

const myName = y.name;
console.log(myName);

const { name: myName1 } = y;
console.log(myName1);

const { name } = y;
console.log(name);

// Add new key and value
y.subjects = "Mathematics";

y.marks = [20, 70, 50];

y.method = function () {
    console.log("Hi! I'm function");
}

y.method(); // Calling inner function

y.newObjects = {
    name: "Harish",
    age: 25,
    class: 12
}

// Update keys's value
y.name = "SANOJ"
console.log(y["name"]);


// Access and print using for in loop
for (let key in y) {
    console.log("Keys: " + key);
    console.log("Values: " + y[key]);
}

// Function return object

function getVichle() {
    return {
        name: "Harish",
        age: 25,
        class: 12
    }
}

const myVichle = getVichle();
console.log(myVichle);
console.log(myVichle["name"]);

//update key's value
myVichle.name = "GRISH";
console.log(myVichle["name"]);