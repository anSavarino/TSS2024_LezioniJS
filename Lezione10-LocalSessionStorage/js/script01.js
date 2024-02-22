// Notazione letterale JS
let studente = {
    nome: "Anna",
    cognome: "Rossi",
    matricola: 1,
    email: "annarossi@gmail.com",
    presenza: true
}

console.log(typeof studente);
console.log(studente.nome);

let studenteJSON ="{ 'nome': 'Anna', 'cognome':'Rossi', 'matricola':1}";

console.log(typeof studenteJSON);

// /////////////////////
class Docente {
    constructor(nome, cognome, materia) {
        this.nome = nome;
        this.cognome = cognome;
        this.materia = materia;

    }
}

let docente = new Docente("Dario", "Mennillo", "JS");

console.log(typeof docente, "Questo è il docente", docente);

// Traduco l'oggetto in un json

let docenteJSON = JSON.stringify(docente);
console.log("Questo è il miodocente json", docenteJSON);

// ////////////////
let respoCorsoJSON = '{"nome":"Egle", "cognome":"Risola", "corso": ["TSS", "TPPW", "SR24"]}';

// traduco la stringa in oggetto

let respoCorso = JSON.parse(respoCorsoJSON);

console.log(respoCorso);