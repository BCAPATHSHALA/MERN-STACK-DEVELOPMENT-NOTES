const a = [1, 2, 3, 4, 5, 6];

function isEven(num){
    return num%2==0;
}

function isOdd(num){
    return num%2!=0;
}

const evenNumber = a.filter(isEven);
console.log(evenNumber);

const oddNumber = a.filter(isOdd);
console.log(oddNumber);

const multiOf3 = a.filter((num)=>{
    return num%3==0;
});

console.log(multiOf3);