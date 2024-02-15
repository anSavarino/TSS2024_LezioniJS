let formReg = document.querySelector("#formReg");

let username = document.querySelector("#elUsr");
let email = document.querySelector("#elEmail");
let password = document.querySelector("#elPassword");
let demo = document.querySelector("#demo");

function validate() {
    let inputs = document.querySelectorAll("#formReg input");
    inputs.forEach(input =>{
        if (input.classList.contains("borderRed") || input.classList.length === 0) {
            demo.innerHTML = "Controlla i dati in rosso!"
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    });
}
function checkUsername() {
    if (username.value.length < 8) {
        username.classList.add("borderRed");
        username.classList.remove("borderGreen");
    }else{
        username.classList.remove("borderRed");
        username.classList.add("borderGreen");
    }
}
function checkEmail() {
    let mailFormat =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,5}$/;
    
    if (!email.value.match(mailFormat)) {
        email.classList.add("borderRed");
        email.classList.remove("borderGreen");
    }else{
        email.classList.remove("borderRed");
        email.classList.add("borderGreen");
    }
}
function checkPassword() {
    let passwordFormat =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!password.value.match(passwordFormat)) {
        password.classList.add("borderRed");
        password.classList.remove("borderGreen");
    }else{
        password.classList.remove("borderRed");
        password.classList.add("borderGreen");
    }
}

formReg.addEventListener("submit", validate);

username.addEventListener("blur", checkUsername);
email.addEventListener("blur", checkEmail);
password.addEventListener("blur", checkPassword);