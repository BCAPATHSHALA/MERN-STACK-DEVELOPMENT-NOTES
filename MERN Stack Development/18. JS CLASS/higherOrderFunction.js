// Find the even number from the array
const a = [1, 2, 3, 4, 5, 6];

function filterNumber(conditionFunction) {

    console.log(`filterNumber ${conditionFunction}`);
    
    const b = [];
    for (let i = 0; i < a.length; i++) {
        if (conditionFunction(a[i])) {
            b.push(a[i]);
        }
    }
    return b;
}

function isEven(num){
    console.log(`isEven ${num}`);
    return num%2==0;
}

function isOdd(num){
    console.log(`isOdd ${num}`);
    return num%2!=0;
}



const evenNumber = filterNumber(isEven);
console.log(evenNumber);

const oddNumber = filterNumber(isOdd);
console.log(oddNumber);