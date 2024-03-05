const URLEndpoint = "http://localhost:3000/rubrica";
let cards = document.querySelector("#cards");
class Contatto {
    constructor(nome, email, tel) {
        this.nome = nome;
        this.email = email;
        this.tel = tel;
    }
}

fetch(URLEndpoint)
  .then((data) => {
    return data.json();
  })
  .then((response) => {
    // in questo caso la response è un array di oggetti
    response.forEach((contatto) => {
        cards.innerHTML += creaCard(contatto);
      });
    console.log(response);
  });

  btnReg.addEventListener("click", function () {
    let nome = document.querySelector("#nomecognome").value;
    let email = document.querySelector("#email").value;
    let tel = document.querySelector("#tel").value;

    if (nome != "" && email != "" && tel != "") {
        let contact = new Contatto(nome, email, tel);

      fetch(URLEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      }).then((data) => {
        return data.json();
      });

    } else {
      console.log("Non hai inserito nulla");
    }
  });

  function creaCard(contact) {
    let card = `<div class="card" style="width: 18rem;"'
    <div class="card-body">
        <h5 class="card-title">${contact.nome}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${contact.email}</h6>
        <p class="card-text">${contact.tel}</p>
    </div>
    </div>`
    return card;
  }