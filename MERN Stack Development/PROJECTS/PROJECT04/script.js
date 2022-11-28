const eventfun = (events) => {
    if (events.target.innerHTML == '=') {
        try {
            string = eval(string);
            document.querySelector('input').value = string;
        } catch (error) {
            string = "";
            infoParagrah.style.display = 'block';
            infoParagrah.innerHTML = 'Invalid Operation';
            document.querySelector('input').value = string;
        }
    }
    else if (events.target.innerHTML == 'C') { 
        string = "";
        document.querySelector('input').value = string;
    }
    else if(events.target.innerHTML == '←'){
        let len = input.value.length;
        string = input.value.slice(0,len-1);
        // console.log(string);
        input.value = string;
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
let input=document.getElementById("inputfield")
const objects = Array.from(buttons);
objects.forEach(elementFun);
const infoParagrah = document.getElementById('info');


// let buttons = document.querySelectorAll(".btn-box");
// console.log(Array.from(buttons));
// console.log(eval("2+0.3"));
// console.log(eval("2*4"));

// let divs = document.querySelectorAll("div");
// console.log(Array.from(divs));


/*
let string = "";
let buttons = document.querySelectorAll(".btn-box");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

    })
})
*/