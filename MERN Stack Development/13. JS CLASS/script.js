console.log("Hello JavaScript");


//Program: for each loop
let arr=[1,2,3,4,5,6,7,8,9];

// let arr1= (a,b) =>{ 
//     console.log(a,b) 0
// };

arr.forEach((a,b) =>{
    console.log(a,b)
});

//program: arrow fonction
let a=prompt("hi!  What\'s your age");
a=Number.parseInt(a);

if(a>0){
    alert("This is valid age");
}
else{
    alert("not valid age");
}