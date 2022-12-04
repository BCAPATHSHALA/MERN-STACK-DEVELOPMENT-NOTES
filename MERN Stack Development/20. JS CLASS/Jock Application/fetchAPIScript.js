async function fetchData() {
    try {
        const response = await fetch('https://icanhazdadjoke.com/slack');
        console.log(response);

        const jsonData = await response.json();
        console.log(jsonData);

        let jockData = jsonData.attachments[0].fallback;

        let jock = document.getElementById("jock-text");
        jock.innerHTML = jockData;

    } catch (exception) {
        console.log(exception);
    }
}


fetchData();

const nextButton = document.getElementById('btn');

nextButton.addEventListener('click',(event)=>{
    event.onClick= window.location.reload();
});