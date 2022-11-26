
/* Dark Theme Code In JavaScript */
// const icon=document.getElementById("id-name");

// icon.onclick=()=>{
//     document.body.classList.toggle("class-name")
// }


const eventFun = ()=>{
    document.body.classList.toggle("class-name");
}
const icon=document.getElementById("id-name");
icon.addEventListener("click", eventFun);

// let nav=document.getElementById("ulId");
// nav.style.background="red";

let nav=document.getElementById("ulId");
// nav.classList.add("dynamic")
// nav.classList.remove("dynamic")

// document.getElementById("id-name").innerHTML="light"
// document.getElementById("id-name").style.color="yellow";