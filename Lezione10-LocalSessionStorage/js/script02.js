// let utenteConnesso = {
//     nome: "Pippo",
//     cognome: "Bianchi",
//     connesso: true,
//     tipo: "admin"
// }


class Utente {
    constructor(nome, cognome, tipo) {
        this.nome = nome;
        this.cognome = cognome;
        this.tipo = tipo;
    }
}

let btn = document.querySelector("#btn");
let demo = document.querySelector("#demo");
let elNome = document.querySelector("#elNome");
let elCognome = document.querySelector("#elCognome");
let elTipo = document.querySelector("#elTipo");
let btnLogout = document.querySelector("#btnLogout");

function registraUser() {
    let utente = new Utente(elNome.value, elCognome.value, elTipo.value);

    localStorage.setItem("userConnesso", JSON.stringify(utente));

    location.reload();
}

btn.addEventListener("click", registraUser);

// Adesso al caricamento della pagina leggo il local storage e stampo le info dell'utente connesso
window.addEventListener("DOMContentLoaded", function () {

    if (this.localStorage.length != 0 && this.localStorage.key(0) == "userConnesso") {
        let userConnesso = JSON.parse(this.localStorage.getItem("userConnesso")); //ricevo un JSON formato stringa
        console.log(userConnesso);
    
        demo.innerHTML = `<p>${userConnesso.nome} ${userConnesso.cognome} - tipo: ${userConnesso.tipo}</p>`
    }else{
        demo.innerHTML = '<p>Nessun Utente connesso</p>';
        
    }
});

function logoutUser() {
    // localStorage.clear(); //cancella tutta la localStorage
    localStorage.removeItem("userConnesso");
    location.reload();
}


btnLogout.addEventListener("click", logoutUser);

// se avessi un array di oggetti

let studenti = [
    {
        nome: "Pippo",
        cognome: "Rossi",
        matricola: 1
    },
    {
        nome: "Paola",
        cognome: "Gialla",
        matricola: 2
    },
    {
        nome: "Anna",
        cognome: "Verdi",
        matricola: 3
    }
]

let studentiJSON = JSON.stringify(studenti);

sessionStorage.setItem("studenti", studentiJSON);


// Errore!
// let studentiJSON = [];
// studenti.forEach(studente =>{
//     studentiJSON.push(JSON.stringify(studente));
// })
// localStorage.setItem("studenti", studentiJSON);