let demo = document.querySelector("#demo");
let btnReg = document.querySelector("#btnReg");
const URLEndpoint = "http://localhost:3000/studenti";

fetch(URLEndpoint)
  .then((data) => {
    return data.json();
  })
  .then((response) => {
    // in questo caso la response è un array di oggetti
    console.log(response);

    response.forEach((studente) => {
      demo.innerHTML += `<li> ID: ${studente.id} - ${studente.nome} ${studente.cognome}</li>`;
    });
  });

btnReg.addEventListener("click", function () {
  let nomeStud = document.querySelector("#nomeStud").value;
  let congomeStud = document.querySelector("#cognomeStud").value;

  if (nomeStud != "" && congomeStud != "") {
    var nuovoStud = new Studente(nomeStud, congomeStud); //var si usa al posto di let per renderla globale

    fetch(URLEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuovoStud),
    }).then((data) => {
      return data.json();
    });
  } else {
    console.log("Non hai inserito nulla");
  }
});

class Studente {
  constructor(nome, congome) {
    this.nome = nome;
    this.cognome = congome;
  }
}


// nome cogmone numero