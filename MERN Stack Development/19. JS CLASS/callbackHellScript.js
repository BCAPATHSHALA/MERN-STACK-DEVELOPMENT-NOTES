/* ========== Callbacks Simple Example Syntax Understanding ========== */
function outermethod (a, b, callback){
    let result = a+b;
     callback(result);
}

function callback(result){
    console.log(result);
}
outermethod(4, 4, callback);

function sum(ans){
    console.log(ans);
}
outermethod(4, 4, sum);

/*
OUTPUT OF Callback Example
8
8
*/



/* ========== Callback hell ========== */
function person (callback){
     callback();
}

function wakeup(){
    console.log("Person wakeup fisrt");
    putOnPants();
}
function putOnPants(){
    console.log("Person put on pants");
    putOnShirt()
}
function putOnShirt(){
    console.log("Person put on shirt");
    putOnShoes()
}
function putOnShoes(){
    console.log("Person put on shoes");
    goToSchool()
}
function goToSchool(){
    console.log("Person go to school");
}

person(wakeup);

/*

OUTPUT OF CALLBACK HELL
Person wakeup fisrt
Person put on pants
Person put on shirt
Person put on shoes
Person go to school

*/


/* ========== Callback hell with 3 second delay time========== */

setTimeout(()=>{
    console.log(" After 3 seconds, Person wakeup fisrt");
    setTimeout(()=>{
        console.log(" After 6 seconds, Person put on pants");
        setTimeout(()=>{
            console.log(" After 9 seconds, Person put on shirt");
            setTimeout(()=>{
                console.log(" After 12 seconds, Person put on shoes");
                setTimeout(()=>{
                    console.log(" After 15 seconds, Person go to school");
                }, 3000)
            }, 3000)
        }, 3000)
    },3000)
},3000);


/*
OUTPUT OF Callback Hell Function
After 3 seconds, Person wakeup fisrt
After 6 seconds, Person put on pants
After 9 seconds, Person put on shirt
After 12 seconds, Person put on shoes
After 15 seconds, Person go to school
*/

console.log("hi")

/* ========== Callback Error Handling========== */
function someTask(callback) {
  console.log("something is being done here");
  setTimeout(() => {
    callback(error, "This is your movie");
  }, 0);
}

someTask((error, data) => {
  if (error) {
    console.log("Not found");
    throw error;
  } else {
    console.log(data);
  }
});
