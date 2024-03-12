const URL = "http://localhost:3000/studenti"
function scaricaStudenti() {
    fetch(URL)
        .then(data => {return data.json()})
        .then(res =>{
            console.log(res);
            for (const studente of res) {
                demo.innerHTML += stampaStudente(studente);
            }
        })
}

let demo = document.querySelector("#demo")
function stampaStudente(studente) {
    let rigaStudente = `<li> ${studente.nome} ${studente.cognome} - corso: ${studente.corso}</li>`;
    return rigaStudente;
}

window.addEventListener("DOMContentLoaded", scaricaStudenti);


function salvaStudente() {
    let nuovoStudente = {
        id: "4",
        nome: "Maria",
        cognome: "Gestione",
        corso: "TSS"
    }

    fetch(URL,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(nuovoStudente)
    })
    .then(data => data.json())
}

let btn = document.querySelector("#btn");
btn.addEventListener("click", salvaStudente);
