try {
    console.log("Before Error Occurrence in try block");
    console.log(x)
    console.log("after Error Occurrence");
} catch (e) {
    console.log("Error Handling Code in catch block");
} finally {
    console.log("This code is running always");
}

// console.log(2/0);