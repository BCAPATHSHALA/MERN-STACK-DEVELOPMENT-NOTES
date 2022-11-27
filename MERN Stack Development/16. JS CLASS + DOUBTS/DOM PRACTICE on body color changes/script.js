let btnVar = document.getElementsByClassName("btn");
console.log(btnVar);

btnVar.className = "red yellow black";
console.log(btnVar.className);


Array.from(btnVar).forEach((index)=>{
    index.addEventListener("click", (e)=>{
        if(e.target.innerHTML == "Yellow Body"){
            document.body.classList.toggle("yellow");
            document.body.classList.remove("red");
            document.body.classList.remove("black");
        }
        else if(e.target.innerHTML == "Red Body"){
            document.body.classList.toggle("red");
            document.body.classList.remove("yellow");
            document.body.classList.remove("black");
        }
        else{
            document.body.classList.toggle("black");
            document.body.classList.remove("yellow");
            document.body.classList.remove("red");
        }
    })
})








