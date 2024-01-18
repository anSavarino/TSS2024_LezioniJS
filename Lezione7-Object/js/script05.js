//JS DOCS
/**
 * 
 * @param {String} nome 
 * @param {String} cognome 
 * @param {Number} eta 
 * @param {String} codFisc 
 * @param {String[]} materie 
 */
class Persona {
    constructor(nome, cognome, eta, codFisc, materie) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.codFisc = codFisc;
        this.materie = materie;

        this.toString = function () {
            return `Nome: ${this.nome} Cognome: ${this.cognome} Età: ${this.eta} CF: ${this.codFisc}`;
        };
    }
}
// function Persona(nome, cognome, eta, codFisc, materie){
//     this.nome = nome;
//     this.cognome = cognome;
//     this.eta = eta;
//     this.codFisc = codFisc;
//     this.materie = materie;

//     this.toString = function() {
//         return `Nome: ${this.nome} Cognome: ${this.cognome} Età: ${this.eta} CF: ${this.codFisc}`;
//     }
// }

let persona1 = new Persona("Angelo", "Savarino", 31, "ILMIOCODICEFISCALE");

console.log(persona1.toString());

let personeRegistrate = [
    new Persona("Pippo", "Rossi", 32, "bdfsfbsdkfb",["java", "js"]),
    new Persona("Pippa", "Rossi", 31, "bdfsfbsdkfb",["java", "js"]),
    new Persona("Pippi", "Rossi", 33, "bdfsfbsdkfb",["java", "js"]),
    new Persona()
]


personeRegistrate.forEach(persona => {
    console.log(persona.toString());
})