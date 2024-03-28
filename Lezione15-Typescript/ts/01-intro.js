console.log("ciao da Typescript");
// Se non dichiaro il tipo verrà interpretato dal linguaggio
var mioNome = "Dario";
// mioNome = 2; mo se incazza
// In ts posso dichiarare il tipo
var miaEta = 34;
miaEta = 35;
// Posso dichiarare senza assegnare
var corsi;
corsi = [
    "TSS24", "TPPW24", "JAITA116"
];
// Posso volontariamente assegnare più tipi alla stessa variabile
var presenza = true;
presenza = "presente";
presenza = false;
presenza = 1;
var registro;
// tipo any o tipo dinamico
var qualcosa;
qualcosa = 0;
qualcosa = "ciao";
qualcosa = true;
qualcosa = ["cane", "gatto", "scimmia"];
var mioAnimale = "Elefante"; //posso assumere solo unodei due valori
function primaFunz() {
    console.log("ciao");
}
function somma(num1, num2) {
    var somma = num1 + num2;
    return somma;
}
var risultato = somma(5, 8);
function presentati(nome, cognome, eta) {
    var presentazione = "Ciao mi chiamo ".concat(nome, " ").concat(cognome, ".");
    if (eta != null) {
        presentazione += "Ho ".concat(eta, " anni");
    }
    return presentazione;
}
var demo = document.querySelector("#demo");
demo.innerHTML = presentati("Angelo", "Savarino"); //! serve a togliere dalla strict mode
function moltiplica(num1, num2) {
    return num1 * num2;
}
console.log(moltiplica(1, 3));
console.log(moltiplica("1", "3"));
// console.log(moltiplica("1",3)); NO
var divisione = function (x, y) {
    var risultato = x / y;
    return risultato;
};
console.log(divisione(8, 6));
// Arrow function
