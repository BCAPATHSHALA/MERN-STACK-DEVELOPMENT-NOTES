// Function of function calling

function shouting(){
    console.log("Shouting");
}

function talking(){
    console.log("Talking");
    shouting();
}

talking();