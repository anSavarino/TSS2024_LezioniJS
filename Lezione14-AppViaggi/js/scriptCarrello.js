const URLEndpoint = "http://localhost:3000/bigliettiAcquistati";
let listViaggi = document.querySelector("#viaggiList");
let btnCompra = document.querySelector("#btnCompra");
let totale = document.querySelector("#totale");
let viaggi = [];
let cost=0;

function caricaAcquisti() {
  if (this.localStorage.length != 0) {
    viaggi = JSON.parse(this.localStorage.getItem("viaggi_acquistati")); //ricevo un JSON formato stringa
    console.log(viaggi);
    viaggi.forEach((viaggio) => {
      let li = document.createElement("li");
      li.innerHTML = `${viaggio.tratta} - ${viaggio.costo}€`;
      let select = document.createElement("select");
      select.setAttribute("class", "form-select");
      select.setAttribute("id", "typeSelect"+viaggio.id);
      viaggio.tipologia.forEach((costo) => {
        let option = document.createElement("option");
        option.setAttribute("value", costo.costo);
        option.innerText = `${costo.nome} +${costo.costo}€`;
        select.prepend(option);
      });
      li.append(select);
      listViaggi.append(li);
      let selection = Number(document.querySelector("#typeSelect"+viaggio.id).value);
      cost+= viaggio.costo;
      let first = document.querySelector("#typeSelect"+viaggio.id+" option");
      first.setAttribute("selected", "");
      
      select.addEventListener("change", ()=>{
        
        selection = Number(document.querySelector("#typeSelect"+viaggio.id).value);
        cost+=selection;
        totale.innerHTML = `${cost}€`;
        cost-=selection;
      })
    });
    totale.innerHTML = `${cost}€`;


  } else {
    listViaggi.innerHTML = "<p>Nessun Viaggio Inserito</p>";
  }
}
window.addEventListener("DOMContentLoaded", ()=>{
  caricaAcquisti()
});



class Biglietto {
  constructor(nome, email, pagamento, tratte) {
    this.nome = nome;
    this.email = email;
    this.metodoPagamento = pagamento;
    this.tratte = tratte;
  }
}

btnCompra.addEventListener("click", () => {
  let nome = document.querySelector("#nome").value;
  let email = document.querySelector("#email").value;
  // let pagamento = document.querySelector("#pagamento").value;
  let viaggiacq = [];
  let pagamento = document.querySelector(
    'input[name="flexRadioDefault"]:checked'
  ).value;
  viaggi.forEach((viaggio) => {
    viaggiacq.push(viaggio.id);
  });

  if (nome != "" && email != "" && pagamento != "" && viaggiacq != "") {
    let biglietto = new Biglietto(nome, email, pagamento, viaggiacq);

    fetch(URLEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(biglietto),
    }).then((data) => {
      return data.json();
    }).finally(()=>{
      localStorage.clear();
      window.location.href = "thank.html";
  });
  } else {
    console.log("Non hai inserito nulla");
  }
});
