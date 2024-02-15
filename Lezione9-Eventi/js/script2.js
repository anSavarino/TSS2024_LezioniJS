function saluta() {
    console.log("Ciao Darion");
}

// Domanda colloquio:
// come posso simulare in js il smodificatore private
// con le closure

let bnt = document.querySelector("#btn");
bnt.onclick = saluta;

// Event Listener
let btn2 = document.querySelector("#btn2");
// la funzione va richiamata senza le parentesi tonde
btn2.addEventListener("click", saluta, false);
