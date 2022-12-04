/* ========== JS code for Tab Button ========== */
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

/* ========== JS code for Hamburger Menu Button ========== */
const sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right = "0";
}
function closemenu(){
    sidemeu.style.right = "-200px";
}



/* ========== JS code for Contact Form ========== */
const scriptURL = 'https://script.google.com/macros/s/AKfycbyYJhE0YbDwNNNsRxFuUOxh8QflkNKOeKVA2OFdj-yrEChQRQanijMvYc_7H2QtgbRAGA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(function(){
            msg.innerHTML = "";
        }, 5000);
        form.reset();
      })
      
      .catch(error => console.error('Error!', error.message))
  })