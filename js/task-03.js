const userName = document.querySelector("#name-input");
const newValue = document.querySelector("#name-output");

let username = "";

userName.addEventListener("input", (event) => {
    username = event.target.value.trim();
    if (!event.target.value) {
        newValue.textContent = "Anonymous"; 
    } else  {
        newValue.textContent = username;
    }
})

userName.addEventListener("blur", (event) => {
    if (!event.target.value) {
        newValue.textContent = "Anonymous"; 
    }
})