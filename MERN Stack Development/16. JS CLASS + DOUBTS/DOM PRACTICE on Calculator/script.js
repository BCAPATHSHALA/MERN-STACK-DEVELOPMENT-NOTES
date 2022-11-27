let string="";
let buttons = document.getElementsByClassName("btn");
let input=document.getElementById("input-field")

console.log(buttons); // HTMLCollections object
console.log(typeof(buttons));
console.log(Array.from(buttons)); // return the arrays object
console.log(typeof(Array.from(buttons)));

Array.from(buttons).forEach((btnIndex)=>{
    btnIndex.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                string = "Invalid Operation";
                input.value = string;
            }
        }
        else if(e.target.innerHTML == 'C'){
            string = " ";
            input.value = string;
        }
        else if(e.target.innerHTML == '←'){
            let len = input.value.length;
            string = input.value.slice(0,len-1);
            // console.log(string);
            input.value = string;
        }
        else{
            // console.log(e.target);
            string = string + e.target.innerHTML;
            input.value = string;
        }
    });
})

// for(let i=0; i<buttons.length; i++){
//     buttons[i].addEventListener('click',(e)=>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'C'){
//             string = " ";
//             input.value = string;
//         }
//         else{
//             console.log(e.target);
//             string = string + e.target.innerHTML;
//             input.value = string;
//         }
//     })
// }