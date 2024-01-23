let miaString = "Oggi è un martedì di lezione";

//prop lenght
console.log(miaString.length);

//Metodi per la ricerca
console.log(miaString.charAt(12));

console.log(miaString.charCodeAt(12));

console.log(miaString.indexOf("un")); //mi restituisce la prima occorrenza di quel pattern o lettera
console.log(miaString.indexOf("e"));

console.log(miaString.lastIndexOf("e")); // mi restituisce l'ultima occorrenza 

console.log(miaString.indexOf("angelo"));//ritorna -1

if (miaString.indexOf("giulia") == -1) {
    console.log("Mi spiace, la parola giulia non è presente");
}else{
    console.log("La parola che cerchi è presente");
}

if (miaString.includes(" un ")) {
    console.log("La parola che cerchi è presente");
} else {
    console.log("Mi spiace, parola non trovata");
}

//Metodi per il taglio
let miaString2 = "Ciao, come stai? Tutto bene grazie";

let s1= miaString2.slice(11,16);
console.log(s1);

let sub = miaString2.substring(11,16);
console.log(sub);

console.log(miaString2.repeat(2));

// Metodi per la sostituzione
let miaString3 = "Per favore utilizzate solo Internet Explorer !!";

console.log(miaString3.replace("Internet Explorer", "Firefox"));

console.log(miaString3.toLocaleUpperCase());

// Metodi per tradformare le stringhe in array e viceversa

let mioNome = "Angelo";

let mioNomeArr = mioNome.split("");
console.log(mioNomeArr);

mioNomeArr.forEach(lettera => {
    console.log(lettera);
});

console.log(mioNomeArr.reverse());

console.log(mioNomeArr.join(""));

let mioParagrafo = "C'era una volta un programmatore Python, aveva deciso che i numeri erano troppo belli per essere usati così male";

let numParole = mioParagrafo.split(" ").length;

console.log(numParole);

let miaFrase = "i topi non avevano nipoti";

let palindroma = miaFrase.split("").reverse().join("");
console.log(palindroma);