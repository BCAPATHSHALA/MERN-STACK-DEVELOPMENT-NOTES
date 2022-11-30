// Default constructor
class person{
    constructor(){
        this.name="manoj";
        this.age=23;
    }
}

const person1 = new person();
let {name, age} = person1;
for(let key in person1){
    console.log(key+": "+person1[key])
}

// Argumented Constructor with difining a function in class

class Human{
    constructor(name, age){
        this.name = name;
        this.age  = age;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

const human1 = new Human("sanoj",20);
console.log(human1.name, human1.age, human1);

human1.greet();