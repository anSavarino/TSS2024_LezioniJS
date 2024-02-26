let username = document.querySelector("#elUsername");
let password = document.querySelector("#elPassword");
let btnLogin = document.querySelector("#btnLogin");

class Utente {
    constructor(user, password) {
        this.user = user;
        this.password = password;
    }
}
let arrayUtenti = JSON.parse(localStorage.getItem("utenti") || "[]");


btnLogin.addEventListener("click", registraUtente);

function registraUtente() {

    let esiste = arrayUtenti.find(utente => utente.user === username.value);
    
    let u = new Utente(username.value, password.value);
    console.log(u.user);
    if (!esiste) {
        arrayUtenti.push(u);   
    }
    localStorage.setItem("userConnesso", JSON.stringify(u));
    localStorage.setItem("utenti", JSON.stringify(arrayUtenti));

}