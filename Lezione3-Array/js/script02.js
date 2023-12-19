// metodi per stringhe

let paragrafo = "Questa è la nostra terza lezione di JavaScript";

console.log(paragrafo);

console.log("il paragrafo è formato da " + paragrafo.length + " caratteri.");

console.log("Primo carattere: " + paragrafo.charAt(0));//Q
console.log("Ultimo carattere: " + paragrafo.charAt(paragrafo.length-1));//t

// metodi per ricerca
let search1 = paragrafo.indexOf("a"); // restituisce la prima occorrenza di quella lettera
console.log(search1);

console.log(paragrafo.lastIndexOf("a"));

console.log(paragrafo.indexOf("terza"));

//cerco una parola inesistente
let search2 = paragrafo.indexOf("Angelo");
console.log(search2); //restituisce -1 perchè non esiste

if (paragrafo.indexOf("tra ter") == -1) {
    console.log("Mi dispiace, la parola o il pattern cercata non esiste");
}else{
    console.log("La parola o il pattern cercata esiste");
}


// indexOf e lastIndexOf funzionano anche sugli array
let mioArray = ["Ciao", "come", "stai"];
console.log(mioArray.indexOf("come"));
console.log(mioArray.indexOf("Angelo"));


// Metodo per il taglio

let paragrafo2 = "A breve faremo un'esercitazione sugli array";
console.log(paragrafo2.slice(10, 30));
console.log(paragrafo2.substring(10, 30));
console.log(paragrafo2.split(" ")); // taglia ad ogni spazio ed inserisce tutto in un array

// sostituzione
console.log(paragrafo2.replace("faremo", "svolgeremo")); //sostituisce pattern

console.log(paragrafo2.includes("array"));

//UpperCase e LowerCase
console.log(paragrafo2.toUpperCase());

