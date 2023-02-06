const form = document.querySelector('.login-form');
console.log(form);
form.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();
  const {
      elements: { email, password } } = event.currentTarget;
    if (email.value == "" || password.value == "") {
        return alert("Error, all fields must be filled!");
    } 
    else {
         console.log({ "Email": email.value, "Password": password.value });
         event.currentTarget.reset();
    }
}
