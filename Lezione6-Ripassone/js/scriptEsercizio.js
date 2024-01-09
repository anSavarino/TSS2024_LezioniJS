// Creare 100 numeri casuali, verificare quali sono minori di 20 e quanti

let numCasuali = [];
let conDoppioni = 0;

for (let i = 0; i < 100; i++) {
    // Math.ceil() arrotonda all'intero superiore
    // Math.floor() arrotonda all'intero superiore
    let numCasuale = Math.ceil(Math.random()*100)
    if (numCasuali.includes(numCasuale)) {
        conDoppioni++;
        i--; // mi permette di rifare il giro
    }else
        numCasuali.push(numCasuale);
    
}

console.log(numCasuali);

// Stampo i singoli numeri nel div demo

let demo = document.getElementById("demo");
let cont = 0;


for (let i = 0; i < numCasuali.length; i++) {
    if (numCasuali[i]<20) {
        demo.innerHTML += `<p> ${numCasuali[i]} - Questo è minore di 20</p>`
        cont++;
    }else{
        demo.innerHTML += `<p> ${numCasuali[i]} </p>`
    }
}

console.log(`I numeri minori di 20 sono ${cont}`);
let display = document.getElementById("display");
display.innerHTML = `I numeri sotto il 20 sono ${cont}`;
display.innerHTML += `<br>I numeri doppi sono ${conDoppioni}`;

