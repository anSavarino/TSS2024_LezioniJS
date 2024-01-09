// ARRAY
let studenti = ["Angelo","Francesca","Best","Mario","Eliana"];

// console.log(studenti[0]);
// console.log(studenti[1]);
// console.log(studenti[2]);
// console.log(studenti[3]);
// console.log(studenti[4]);

studenti.reverse();
studenti.sort();

// Ciclo for per poter leggere gli array
for (let i = 0; i < studenti.length; i++) {
    console.log(studenti[i]);    
}

console.log("Scorro al contrario");

for (let i = studenti.length-1; i >= 0; i--) {
    console.log(studenti[i]);
}

// FOREACH
console.log("Uso il foreach");

studenti.forEach(studente => {
    console.log(studente);
})

// for
let string= "";
for (let i = 0; i < 10; i++) {
    for (let j = 0; j <= i; j++) {
        string += "*"            
    }
    string +="\n"
}

console.log(string);

// for con if innestato
let numeri = [10, 20, 1, 14, 9, 55, 16, 31, 21];

// voglio capire quanti e quali numero sono sopra il venti
for (let i = 0; i < numeri.length; i++) {
    if (numeri[i]>=20) {
        console.log("Questo numero super il 20: "+numeri[i]);
    }else if (numeri[i]<15) {
        console.log("Questo numero è sotto il 15: "+numeri[i]);
        
    }else{
        console.log(numeri[i]);
    }
}

// Stessa cosa con le parole
let parole = ["Ciao", "Come stai", "Tutto", "bene", "Arrivederci"];

for (let i = 0; i < parole.length; i++) {
    if (parole[i].length<7) {
        console.log(`${parole[i]}  ha meno di 7 caratteri`);
    }else{
        console.log(parole[i]);
    }
    
}