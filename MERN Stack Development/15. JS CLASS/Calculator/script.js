const eventfun = (events) => {
    if (events.target.innerHTML == '=') {
        string = eval(string);
        document.querySelector('input').value = string;
    }
    else if (events.target.innerHTML == 'C') {
        string = "";
        document.querySelector('input').value = string;
    }
    else {
        console.log(events.target);
        string = string + events.target.innerHTML;
        document.querySelector('input').value = string;
    }

}

const elementFun = (element) => {
    element.addEventListener('click', eventfun);
}

let string = "";
const buttons = document.querySelectorAll(".btn-box");
const objects = Array.from(buttons);
objects.forEach(elementFun);


// let buttons = document.querySelectorAll(".btn-box");
// console.log(Array.from(buttons));
// console.log(eval("2+0.3"));
// console.log(eval("2*4"));

// let divs = document.querySelectorAll("div");
// console.log(Array.from(divs));