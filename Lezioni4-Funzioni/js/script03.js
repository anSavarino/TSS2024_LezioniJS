function calcolaArea(base, altezza) {
    let area = base * altezza;
    return area;
}

function calcolaVolume(base, altezza, profondita) {
    let volume = base * altezza * profondita;
    return volume;
}

let area1 = calcolaArea(5, 6);
let volume1= calcolaVolume(7, 2, 3);

console.log("L'area vale: " + area1);
console.log("Il volume vale: " + volume1);

// Sfrutto una funzione dentro l'altra
function calcolaVolumeConArea(base, altezza, profondita) {
    let volume = calcolaArea(base, altezza)*profondita;
    return volume;
}

let volume2 = calcolaVolumeConArea(5, 10, 7.5);
console.log("il volume vale: " + volume2);


// Posso sfruttare ancora un'altra soluzione
function calcolaVolumeConArea2(area, profondita) {
    let volume = area * profondita;
    return volume;
}

let valoreVolume2 = calcolaVolumeConArea2(calcolaArea(5,6), 8); //non usare molto questo tipo, usare riga 18

console.log("Il valore del volume è: " + valoreVolume2);


////Chiederò all'utente di fornirmi 3 numeri
let numeriUser = window.prompt("Inserisci 3 numeri separati da una virgola");
let numeriUserArr = numeriUser.split(","); //[num1, num2, num3]

let valoreArea = calcolaArea(numeriUserArr[0], numeriUserArr[1]);
let valoreVolume3 = calcolaVolumeConArea2(valoreArea, numeriUserArr[2]);

let demoArea = document.getElementById("demoArea");
let demoVolume = document.getElementById("demoVolume");

demoArea.innerHTML = "L'area vale: "+ valoreArea + " m^2";
demoVolume.innerHTML = "Il volume vale: "+ valoreVolume3 + " m^3";

