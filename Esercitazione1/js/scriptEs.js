let nomeCognome = window.prompt("Inserisci il tuo nome completo:");
let annoDiNascita = Number(window.prompt("Inserisci il tuo anno di nascita:"));


let annoCorrente = Number(new Date().getFullYear());
let etaCorrente = annoCorrente - annoDiNascita; 

//stampa in console
console.log(nomeCognome);
console.log(annoDiNascita);
console.log(annoCorrente);


//H1 di benvenuto
let elNome = document.getElementById("nome"); 
let nome = "Benvenuto " + nomeCognome + "!";
elNome.innerHTML = nome;

//p stringa età
let elAnno = document.getElementById("eta");
let eta = "Quest'anno hai "+ etaCorrente + " anni, mi dispiace :( <br>";
elAnno.innerHTML = eta;

console.log(eta);

/*let primoNum = Number(window.prompt("Facciamo una somma. Inserisci il primo numero"));
let secondoNum = Number(window.prompt("Inserisci il secondo numero"));

let somma2 = primoNum + secondoNum;

let elSomma = document.getElementById("somma"); 

let somma = "Somma: " + somma2;
elSomma.innerHTML = somma;*/
