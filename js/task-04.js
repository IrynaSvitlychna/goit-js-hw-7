const form = document.querySelector(".login-form");

const newObj = {};

form.addEventListener("submit", (event) => {
    
event.preventDefault();

 const { email, password } = event.target.elements;
 email.value.trim();
 password.value.trim();

 if (email.value === "" || password.value === "") {
    alert `All form fields must be filled in`;
      }  else {
        console.log(`email: ${email.value}, password: ${ password.value}`);
      }

      
// const formData = new FormData(event.target);

// formData.forEach((value, key) => { 
//     newObj[key] = value;
  
    
//     if (!newObj[key]) {
//         alert `All form fields must be filled in`;
//      } else {
  // console.log(newObj);
//     })

// 
form.reset();

})

