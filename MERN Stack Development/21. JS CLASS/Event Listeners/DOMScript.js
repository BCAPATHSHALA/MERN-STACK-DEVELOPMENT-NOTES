/* =============== FINDING THE HTML ELEMENT =============== */
const a = document.getElementById("outer-box").children[0];
const b = document.getElementById("outer-box").firstElementChild;
const c = document.getElementById("outer-box").lastElementChild;
console.log(a); // ul
console.log(b); // ul
console.log(c); // ul

const d = document.getElementById("outer-box").children[0].firstElementChild.innerHTML;
const e = document.getElementById("outer-box").firstElementChild.firstElementChild.innerHTML;
const f = document.getElementById("outer-box").lastElementChild.lastElementChild.innerHTML;
console.log(d); // item1
console.log(e); // item1
console.log(f); // item6

const arr = Array.from(d);
console.log(arr); // ['i', 't', 'e', 'm', '1']

const g = document.getElementById("listing").children;
console.log(g);
console.log(Array.from(g));

const h = document.querySelector(".list")
console.log(h);

const i = document.querySelectorAll(".list")
console.log(i);


/* =============== CHANGING THE HTML =============== */
document.getElementById("list").innerHTML = "Hello Bhaiya kaise ho aap?";
document.getElementById("list1").src = "https://via.placeholder.com/200";

/* =============== CHANGING THE HTML STYLING =============== */
document.getElementById("list1").style.color = "orange";

/* =============== CREATING AND APPENDING THE NEW HTML =============== */
const newPara = document.createElement("p");
const newParaText = document.createTextNode("This is new paragraph");
newPara.appendChild(newParaText);

const container = document.getElementById("div1");
container.appendChild(newPara);

/* =============== ADDING THE CLASS IN HTML =============== */
const container1 = document.getElementById("div1");
container1.classList.add("mystyle");
// container1.classList.remove("mystyle");
// container1.classList.toggle("mystyle");