// con il prompt registro nella variabile il valore che inserisce l'utente

let primoNum = Number(window.prompt("Inserisci il primo numero"));
let secondoNum = Number(window.prompt("Inserisci il secondo numero"));

let somma = primoNum + secondoNum;
let differenza = primoNum - secondoNum;
let prodotto = primoNum * secondoNum;
let quoziente = primoNum / secondoNum;

console.log("La somma dei due numeri è: " + somma);
console.log("La differenza dei due numeri è: " + differenza);
console.log("Il prodotto dei due numeri è: " + prodotto);
console.log("Il quoziente dei due numeri è: " + quoziente.toFixed(2)); //to.Precision(3)

// Voglio stamparre qusti risultati nella pagina
// 1. Recupero l'elemento nel quale stampare

let elRisultati = document.getElementById("risultati"); 

let risultati = "Somma: " + somma + " <br> Differenza: " + differenza + "<br> Prodotto: "
+ prodotto + "<br> Quoziente: " + quoziente;

// 2. Inietto la stringa dei risltati nell'elemento
 elRisultati.innerHTML = risultati;