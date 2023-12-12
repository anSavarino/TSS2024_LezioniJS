let nome = "Angelo";
let cognome = "Savarino";

// utilizzo + per concatenare le stringhe
let benvenuto = "Benvenuto " + nome + " " + cognome;

console.log(benvenuto);

let num1 = 2;
let num2 = 7;

let valoreDellaSomma = num1+num2;

let somma = "La somma uguale: " + valoreDellaSomma;
let prodotto = "Il prodotto vale: " + (num1 * num2);
let differenza = "La differenza uguale: " + (num1-num2);
let quoziente = "Il quoziente vale: " + num1/num2;

console.log(somma);
console.log(prodotto);
console.log(differenza);
console.log(quoziente);

// ALTRA FACCIA DELLA TIPIZZAZIONE DEBOLE

let num3 = "9";
let num4 = "7";

//Applico il CAST del dato
// let valoreDellaSomma2 = Number(num3) + Number(num4);
let valoreDellaSomma2 = parseInt(num3)+parseInt(num4);
let valoreDelProdotto2 = num3 * num4;
let valoreDelQuoziente2 = num3 / num4;
let valoreDellaDifferenza2 = num3 - num4;

console.log("La somma vale: " + valoreDellaSomma2);
console.log("Il prodotto vale: " + valoreDelProdotto2);
console.log("Il quoziente vale: " + valoreDelQuoziente2);
console.log("La differenza vale: " + valoreDellaDifferenza2);
