let pages = 1;
let limit = 10;

let pagination = `?_page=${pages}&_limit=${limit}`;
const URLEndpoint = "http://localhost:3000/rubrica";

let cards = document.querySelector("#cards");
let btnCarica = document.querySelector("#btnCarica");
class Contatto {
  constructor(nome, email, tel) {
    this.nome = nome;
    this.email = email;
    this.tel = tel;
  }
}

fetch(URLEndpoint + pagination)
  .then((data) => {
    return data.json();
  })
  .then((response) => {
    // in questo caso la response è un array di oggetti
    console.log(typeof response);

    response.forEach((contatto) => {
      cards.appendChild(creaCard(contatto));
    });
    startTooltips();
  });

btnCarica.addEventListener("click", function () {
  pages++;
  pagination = `?_page=${pages}&_per_page=${limit}`;
  fetch(URLEndpoint + pagination)
    .then((data) => {
      return data.json();
    })
    .then((response) => {
      // in questo caso la response è un array di oggetti
      if (pages <= response.last) {
        response.data.forEach((contatto) => {
          cards.appendChild(creaCard(contatto));
        });
      }
      if (response.next == null) {
        btnCarica.setAttribute("aria-disabled", "true");
        btnCarica.classList.add("disabled");
        btnCarica.innerText = "Fine Rubrica";
      }
      startTooltips();
    });
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
  let divP = document.createElement("div");
  divP.setAttribute("class", "card shadow text-bg-light m-3");
  divP.setAttribute("style", "width: 18rem;");
  let divF = document.createElement("div");
  divF.classList.add("card-body");
  let h5 = document.createElement("h5");
  h5.setAttribute("class", "card-title position-relative");
  h5.innerText = contact.nome;
  let h6 = document.createElement("h6");
  h6.setAttribute("class", "card-subtitle mb-2 text-body-secondary text-wrap");
  h6.innerText = contact.email;
  let p = document.createElement("p");
  p.classList.add("card-text");
  p.innerText = contact.tel;
  let btnRemove = document.createElement("button");
  btnRemove.setAttribute(
    "class",
    "align-items-center btn btn-outline-danger d-flex end-0 h-100 position-absolute top-0"
  );
  btnRemove.setAttribute("data-bs-toggle", "tooltip");
  btnRemove.setAttribute("data-bs-title", "Elimina");
  btnRemove.setAttribute("data-bs-custom-class", "custom-tooltip");
  btnRemove.innerHTML = '<i class="bi bi-x-circle"></i>';

  btnRemove.addEventListener("click", function () {
    fetch(`http://localhost:3000/rubrica/${contact.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((json) => displayData(json));
  });

  h5.appendChild(btnRemove);
  divF.append(h5, h6, p);
  divP.appendChild(divF);
  return divP;
}

function startTooltips() {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
}
