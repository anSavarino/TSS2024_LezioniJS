let name = window.prompt("Inserisci il tuo nome:");

let elNome = document.getElementById("nome"); 
let nome = "Benvenuto " + name + "!";
elNome.innerHTML = nome;