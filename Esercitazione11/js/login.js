let formLogin = document.querySelector("#formLogin");
let username = document.querySelector("#elUsername");
let password = document.querySelector("#elPassword");
let btnLogin = document.querySelector("#btnLogin");

class Utente {
    constructor(user, password) {
        this.user = user;
        this.password = password;
    }
}
let arrayUtenti = JSON.parse(localStorage.getItem("utenti") || "[]");;

btnLogin.addEventListener("click", registraUtente);

function registraUtente() {
    arrayUtenti.forEach(element => {
        let esiste = false;
        if(!esiste){
            if (!(element.user != username.value)  ) {
                let u = new Utente(username.value, password.value);
                console.log(u.user);
                arrayUtenti.push(u);
                esiste=true;
            }else{
                console.log("Esiste");
                esiste= true;
            }
        }
    });
    
    localStorage.setItem("userConnesso", JSON.stringify(u));
    
    localStorage.setItem("utenti", JSON.stringify(arrayUtenti));
    
    location.reload();


}