let studenti = [
    "Artuso Giulia",
    "Castaldo Leonardo",
    "Ghirardi Sury",
    "Grandis Gabriele",
    "Himollari Mario",
    "Leonte Ionela",
    "Makoumba Best",
    "Mokoko Cedric",
    "Neri Stefania",
    "Rizzo Andrea",
    "Rodella Francesca",
    "Savarino Angelo"
];

// let elencoStud = document.querySelector("#elencoStud")
let elencoStud = document.getElementById("elencoStud");

for (let i = 0; i < studenti.length; i++) {
    console.log(studenti[i]);
    elencoStud.innerHTML += "<li>" + studenti[i] + "</li>";
}

// Stampa in console la somma delle ore del giorno
let somma = 0;

for (let i = 0; i <= 24; i++) {
    somma += i;
}

console.log(somma);
