const dummyCard = document.getElementById("profile-card-tamplet");
const container = document.getElementById('container');

async function fetchData(){
    const responseData = await fetch('https://dummyjson.com/users');
    const jsonData = await responseData.json();
    const users = jsonData.users;

    console.log(users);
    bindData(users);
}

function bindData(users) {
    users.forEach((user) => {
       
        const dummyCardClone = dummyCard.content.cloneNode(true);
        const dummyImage = dummyCardClone.querySelector('#user-img');
        const dummyName = dummyCardClone.querySelector('#user-name');
        const dummyEmail = dummyCardClone.querySelector('#user-email');
        // const profileCard = dummyCardClone.querySelector('#profile-card');

        dummyImage.src = user.image;
        dummyName.innerHTML = `${user.firstName} ${user.lastName}`
        dummyEmail.innerHTML = user.email;

        container.appendChild(dummyCardClone);
    })
}

fetchData();