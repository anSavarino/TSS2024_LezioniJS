const URLEndpoint = "http://localhost:3000/bigliettiAcquistati";
let listViaggi = document.querySelector("#viaggiList");
let btnCompra = document.querySelector("#btnCompra");
let viaggi = [];
function caricaAcquisti() {
    if (this.localStorage.length != 0) {
      viaggi = JSON.parse(this.localStorage.getItem("viaggi_acquistati")); //ricevo un JSON formato stringa
      viaggi.forEach(viaggio => {
        listViaggi.innerHTML += `<li>${viaggio.tratta} - ${viaggio.costo}€</li>`
      });
            console.log(viaggi);
    }else{
      listViaggi.innerHTML = '<p>Nessun Viaggio Inserito</p>';
      
    }
  }
  window.addEventListener("DOMContentLoaded", caricaAcquisti);

  class Biglietto {
  constructor(nome, email, pagamento, tratte) {
    this.nome = nome;
    this.email = email;
    this.metodoPagamento = pagamento;
    this.tratte = tratte;
  }
}

  btnCompra.addEventListener("click", ()=>{
    let nome = document.querySelector("#nome").value;
    let email = document.querySelector("#email").value;
    let pagamento = document.querySelector("#pagamento").value;
    let viaggiacq = [];

    viaggi.forEach(viaggio => {
      viaggiacq.push(viaggio.id)
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
      });
    } else {
      console.log("Non hai inserito nulla");
    }
  });
