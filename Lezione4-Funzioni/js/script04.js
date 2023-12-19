// funzioni anonime
// IIFE - funzioni autoinvocanti
(function (num1, num2) {
    let somma = Number(num1) + Number(num2);
    console.log(somma);
    return somma
}())

//Arrow (sintassi compatta)
let somma = (num1, num2) => { //variabile funzionale
    return num1+num2;
}

console.log(somma(4, 5));

let colori = ["giallo", "rosso", "blu"];

colori.forEach(colore => { // foreach limitato agli array
    console.log(colore);
});

let nomi = ["Anna", "Jason", "Franco"];

function stampaPowerRangers(nome) {
    return `Il nome del Power Ranger è: ${nome}`;
}

nomi.forEach(nome=>{
    console.log(stampaPowerRangers(nome));;
});
