// ARRAY de. Contenitore di elementi simili tra loro

let colori = ["Giallo", "Verde", "Blu", "Rosso", "Rosa", "Azzurro"]

//0-based
// Voglio recuperare un colore
let primoColore = colori[0];
console.log(primoColore);

let secondoColore = colori[1];
console.log(secondoColore);

let sestoColore = colori[5];
console.log(sestoColore);

// Voglio conoscere la dimensione
let lunghezza = colori.length;
console.log("Il mio array contiene "+ lunghezza +" elementi.");

let coloreInesistente = colori[10];
console.log(coloreInesistente);

let ultimoColore = colori[colori.length-1];
console.log("L'ultimo colore è "+ ultimoColore);

// Dario dice che la frutta fa bene
let frutta = ["mela", "pesca", "banana", "kiwi", "arance"];

// push() aggiunge un elemento
frutta.push("ciliegia");
frutta.push("mandarino")

console.log(frutta);

// pop() elimina l'ultimo elemento
frutta.pop();

//sort() ordina l'array
frutta.sort();

//reverse() ribalta l'ultimo elemento
frutta.reverse();

console.log(frutta);

// unire 2 array
let verdura = ["broccoli", "cavolfiori", "cime di rapa", "lattuga"];

let fruttaEVerdura = frutta.concat(...verdura); //operatore 3dot (spread) dice che l'array ha lo stesso tipo dell'array iniziale

console.log(fruttaEVerdura);


// Unire gli elementi di un array
let mioNome = ["A", "N", "G", "E", "L", "O"];
console.log(mioNome.join("")); //Tra gli apici metto il separatore

// Le stringhe sono da considerarsi array di caratteri
let mioCognome = "Savarino";

//il metodo slit elimina il separatore e divide l'array
let cognomeArr = mioCognome.split("r");

console.log(cognomeArr);

let frase = "Ciao mi chiamo angelo";
let fraseArr = frase.split(" ");
console.log(fraseArr);

let frase2 = "i topi non avevano nipoti";
let fraseArr2 = frase2.split("").reverse().join("");
console.log(fraseArr2);

// Voglio invertire l'ordine delle lettere del mio nome
let nomeUser = "Angelo";
console.log(nomeUser.split("").reverse("").join(""));

//Array Misti "so totalmente inutili"
let docente = ["Dario", "Mennillo", "Javascript", 12, true];

// Per poter leggere in array elem per elem uso il ciclo for
frutta.forEach(frutto => {
    console.log(frutto);
    });


let listaFrutta = document.getElementById("listaFrutta");

console.log("Leggo l'array con un for classico");
for (let index = 0; index < frutta.length; index++) {
    console.log(frutta[index]);
    listaFrutta.innerHTML += "<li>" + frutta[index] + "</li>";
}

// console.log(listaFrutta);

// Qual è la somma delle ore dwel giorno
let sommaOre = 0;
for (let i = 0; i <= 24; i++) {
    sommaOre += i;
    }
console.log(sommaOre);