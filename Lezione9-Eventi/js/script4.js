// function validate() {
//     let username = document.querySelector("#elUsr").value;
//     let email = document.querySelector("#elEmail").value;
//     let password = document.querySelector("#elPassword").value;

//     if (username.length >= 8 && email.length >= 8 && password.length >= 10) {
//         console.log("Registrazione avvenuta con successo");
//     }else{
//         document.querySelector("#demo").innerHTML = "Mi dispiace, non hai compilato i campi in modo correto";
//         event.preventDefault();
//         event.stopImmediatePropagation();
//     }
// }
let formReg = document.querySelector("#formReg");
let demo = document.querySelector("#demo");

function validate() {
    demo.innerHTML = "";
    let username = document.querySelector("#elUsr").value;
    let email = document.querySelector("#elEmail").value;
    let password = document.querySelector("#elPassword").value;
    
    if (username.length < 8) {
        demo.innerHTML += "<p>Il tuo username non è corretto</p>";
        event.preventDefault();
        event.stopImmediatePropagation();
    }

    let mailFormat =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,5}$/;
    if (!email.match(mailFormat)) {
        demo.innerHTML += "<p>La tua email non è corretta</p>";
        event.preventDefault();
        event.stopImmediatePropagation();
    }
    let passwordFormat =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!password.match(passwordFormat)) {
        demo.innerHTML += "<p>La tua password non è corretta</p>";
        event.preventDefault();
        event.stopImmediatePropagation();
    }

}

formReg.addEventListener("submit", validate);