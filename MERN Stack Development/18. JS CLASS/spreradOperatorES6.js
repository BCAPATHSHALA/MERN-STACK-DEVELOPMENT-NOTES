function sum(...x) {
    console.log(x);
}

sum(1,2,3,4,5,6);


function spreadOperator(...x) {
    console.log(x);
}

const a = [1,2,3,4,5,6,7,8];
const b = [10,20,30,40,50]
spreadOperator(a,b);

