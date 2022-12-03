/* ================ Creation Of a Single Promise =============== */
let completed = true;
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(completed){
            resolve('success');
        }
        else{
            reject('fail'); 
        } 
    }, 5000);
}); 

console.log(myPromise);
 
/*
============== OUTPUT When completed = false ================

Prototype: Promise
PromiseState: pending 
PromiseResult: undefined
Uncaught (in promise) fail
 
============== OUTPUT When completed = true ================

Prototype: Promise
PromiseState: fulfilled
PromiseResult: succes
*/

/* ============ Error handling with a single promises ============ */
let completed1 = false;
const myPromise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(completed1){
            resolve('success');
        }
        else{
            reject('fail'); 
        } 
    }, 5000);
}); 

console.log(myPromise1);

myPromise1.then((message)=>{
    console.log(message);
})
.catch((errorMessage)=>{
    console.log(errorMessage);
});


/*
============== OUTPUT When completed = false ================

Prototype: Promise
PromiseState: pending 
PromiseResult: undefined
fail
 
============== OUTPUT When completed = true ================

Prototype: Promise
PromiseState: fulfilled
PromiseResult: succes
succes
*/



/* ================ Creation Of Multiple Promises in parallel =============== */

// Sum of two number
const sum = (a, b) => new Promise((resolve) => resolve(a + b));

// Difference of two numbers
const diff = (a, b) => new Promise((resolve) => resolve(a - b));

// Promise.all()
Promise.all([sum(2,6), diff(2,6)]).then(result => console.log(result));
// [8, -4]


// Promise.allSettled()
Promise.allSettled([sum(2,6), diff(2,6)]).then(result => console.log(result));
// [{status: 'fulfilled', value: 8}, {status: 'fulfilled', value: -4}]

// Promise.race()
Promise.race([sum(8,6), diff(6,2)]).then(result => console.log(result));
// 14

// Promise.any()
Promise.any([sum(80,6), diff(1,2)]).then(result => console.log(result));
// 86


