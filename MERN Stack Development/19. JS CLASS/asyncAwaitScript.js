/* =========== You can returns a promise using chaining method then() =========== */
async function f() {
    console.log('Async function.');
    return Promise.resolve(10);
}

f().then(function (result) {
    console.log(result)
});

/*
============== OUTPUT :01 ================
Async function.
10
*/

/* ================ Simple example of async and await promise ================= */
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise resolved')
    }, 4000);
});

async function asyncFunc() {
    let result = await promise;
    console.log(result);
    console.log('hello');
}
asyncFunc();

/*
============== OUTPUT :02 ================
Promise resolved
hello
*/


/* ================ Creation Of Multiple Promises in parallel =============== */

let promise1 = new Promise(function (resolve, reject) {
    resolve(4 + 6);
});

let promise2 = new Promise(function (resolve, reject) {
    resolve(4 * 6);
});

let promise3 = new Promise(function (resolve, reject) {
    resolve(4 - 6);
});

async function asyncFunc1() {
    let result1 = await promise1;
    let result2 = await promise2;
    let result3 = await promise3;

    console.log(result1);
    console.log(result2);
    console.log(result3);
}

asyncFunc1();

/*
============== OUTPUT :03 ================
10
24
-2
*/

/* ============ Error handling with a single promises ============ */

const boolean = false;
let promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if(boolean){
            resolve('Promise resolved 100❤️')
        }
        else{
            reject('Promise rejected 100❤️')
        }
    }, 6000);
});

async function asyncFunc2() {
    try {
        let result = await promise4;
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}

asyncFunc2();

/*
============== OUTPUT :04 ================
Promise rejected 100❤️
*/