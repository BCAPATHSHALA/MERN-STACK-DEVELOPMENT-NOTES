const text = document.querySelector('p');
text.innerHTML = text.innerText.split("").map((char, i) =>

    `<span style="transform:rotate(${i * 14}deg)">${char}</span>`
).join("");



// const s = text.innerText.split("");

// const f = (char,i)=>{
//     console.log(char);
// }

// s.forEach(f);