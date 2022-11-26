const myFunction = () => {
    const x = document.getElementById("nav-list");
    const y = document.getElementById("toggle-btn");
    if (x.style.display === "block") {
        x.style.display = "none";
        x.classList.remove("hover-class");
        y.style.color = "white"
    } else {
        x.style.display = "block";
        x.classList.add("hover-class");
        y.style.color = "yellow"
    }
}

// Call the hamburger menu tab
const icon = document.getElementById("toggle-btn");
icon.addEventListener("click", myFunction);