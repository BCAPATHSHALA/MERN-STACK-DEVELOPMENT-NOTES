async function fetchData() {
    try {
        const response = await fetch('https://dummyjson.com/quotes');
        console.log(response);

        const jsonData = await response.json();
        console.log(jsonData);

        let nextBtn = document.getElementById("next-btn");
        let presBtn = document.getElementById("previous-btn");
        let count = 0;
        updateCount(jsonData, count);

        if (count < 30) {
            nextBtn.addEventListener("click", () => {
                count++;
                updateCount(jsonData, count);
            })
        }

        presBtn.addEventListener("click", () => {
            if(count > 0) {
            count --;
            updateCount(jsonData, count);
            }
        })




    } catch (exception) {
        console.log(exception);
    }
}

fetchData();


let dummyText = document.getElementById("dummy-text");
let dummyAuthor = document.getElementById("dummy-author");




function updateCount(jsonData, count) {
    dummyText.innerHTML = jsonData.quotes[count].quote;
    dummyAuthor.innerHTML = jsonData.quotes[count].author;
}

