async function fetchData() {
    try {
        const loadingElement = document.getElementById('loading');
        const phoneBox = document.getElementById('product-box'); 

        loadingElement.style.display = 'block';
        phoneBox.style.display = 'none';

        const response = await fetch('https://dummyjson.com/products/1');
        console.log(response);

        loadingElement.style.display = 'none';
        phoneBox.style.display = 'block';

        const jsonData = await response.json();
        console.log(jsonData);

        loadData(jsonData);

    }catch(exception){
        console.log(exception);
    }
}

function loadData(jsonData){
    let phoneImage = document.getElementById('dummy-image');
    let phoneTitle = document.getElementById('dummy-title');
    let phoneBrand = document.getElementById('dummy-brand');
    let phoneDesc = document.getElementById('dummy-desc');
    let phonePrice = document.getElementById('dummy-price');
    let phoneRating = document.getElementById('dummy-rating');

    let {thumbnail, title, brand, description, price, rating} = jsonData;
    phoneImage.src = thumbnail;
    phoneTitle.innerHTML = title;
    phoneBrand.innerHTML = brand;
    phoneDesc.innerHTML = description;
    phonePrice.innerHTML = price;
    phoneRating.innerHTML = jsonData.rating;
}

fetchData();