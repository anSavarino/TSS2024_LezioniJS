var Persona = /** @class */ (function () {
    // metodo costruttore della classe
    function Persona(nome, cognome, eta) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        // this.corsi = corsi;
    }
    Persona.prototype.setCorsi = function (corsi) {
        this.corsi = corsi;
    };
    Persona.prototype.getCorsi = function () {
        return this.corsi;
    };
    Persona.prototype.toString = function () {
        return "".concat(this.nome, " ").concat(this.cognome, ", corsi: ").concat(this.getCorsi());
    };
    return Persona;
}());
var persona1 = new Persona("Pippo", "Rossi", 24);
console.log(persona1.nome);
console.log(persona1.cognome);
var mieiCorsi = ["TSS", "tppw"];
persona1.setCorsi(mieiCorsi);
console.log(persona1.toString());
// Posso avere più classi definite nello stesso file
// esiste un modo abbreviato di scrivere una classe
var Docente = /** @class */ (function () {
    function Docente(nome, cognome, corsoAssegnato) {
        this.nome = nome;
        this.cognome = cognome;
        this.corsoAssegnato = corsoAssegnato;
    } //modificatore d'accesso obbligatorio 
    Docente.prototype.setCorso = function (corso) {
        this.corsoAssegnato = corso;
    };
    Docente.prototype.getCorso = function () {
        return this.corsoAssegnato;
    };
    return Docente;
}());
var mioDocente = new Docente("Darion", "Mennillo");
mioDocente.setCorso("TSS");
console.log(mioDocente.nome, mioDocente.cognome, mioDocente.getCorso());
