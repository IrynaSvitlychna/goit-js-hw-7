const form = document.querySelector(".login-form");

const newObj = {};

form.addEventListener("submit", (event) => {
    
event.preventDefault();
 
const formData = new FormData(event.target);
// event.target.element.trim();
formData.forEach((value, key) => { 
    newObj[key] = value;
    // newObj[key].trim();
    if (!newObj[key]) {
        alert `All form fields must be filled in`;
     };
    })

console.log(newObj);
form.reset();

})

// При сабміті в консоль виводиться об’єкт з двома властивостями, де ключі — це ім’я інпутів, 
// а значення — відповідні значення цих інпутів, очищені від пробілів по краях
// Після сабміту елементи форми очищаються