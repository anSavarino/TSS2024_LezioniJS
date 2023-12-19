//Operatori di confronto

let num1 = 10;
let num2 = 8;

let cond1 = (num1 == num2); //false
let cond2 = (num1 > num2); //true
let cond3 = (num1 < num2); //false
let cond4 = (num1 != num2); //true

let num3 = 20;
let num4 = "20";

let cond5 = (num3 === num4)//false
let cond6 = (num3 == num4)//true

let etaUser = 18;

if (etaUser>=18) {
    console.log("Benvenuto, puoi entrare");
}else{
    console.log("Mi dispiace, non puoi entrare");
}


let nomeUser = "Angelo"

if(nomeUser == "Angelo"){
    console.log("Ciao "+nomeUser+", bentornato!");
}else{
    console.log("Ciao non so chi sei, "+nomeUser);
}

//AND e OR logici

let punteggio = 20;
let skill = 4;

//HARD MODE
//per passare il livello, punteggio e skill devono essere sopra la soglia

if (punteggio>=15 && skill>=6) {
    console.log("Bravo, hai superato il livello");
}else{
    console.log("Il tuo punteggio totale non è sufficiente");
}

//EASY MODE
//per passare il livello, punteggio o skill devono essere sopra la soglia
if (punteggio>=15 || skill >=6) {
    console.log("Bravo, hai superato il livello");
}else{
    console.log("Il tuo punteggio totale non è sufficiente");
}
