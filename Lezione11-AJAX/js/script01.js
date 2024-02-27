let listaContatti = document.querySelector("#listaContatti");

// fetch è una API che ci mette a disposizione dei metodi per poter chiamare delle API esterne

const URL = "https://reqres.in/api/users?page=2";
let utenti = [];

fetch(URL)
  .then((data) => {
    // Qui raccolgo le info che arrivano dal server
    if (data.status == 404) {
      location.href = "404.html";
    }
    console.log(data);
    return data.json(); // parserizza i dati
  })
  .then((response) => {
    // nella response il json è già stato parserizzato
    console.log(response);
    // voglio vedere gli utenti
    console.log(response.data); // non è il data di prima, ma il data che sta dentro l'oggetto js, dentro la response, si potevano anche chiamare users, dentro ci sono id nome, cognome, email, ecc

    utenti = response.data;
    utenti.forEach((utente) => {
      listaContatti.innerHTML += creaCardUser(utente);
    });
  });
// la fetch apre la connessione, chiamare url, aspettare i dati
// tutte le manipolazioni successive alla ricezione dati si fa nella then

// nel primo then acquisisco ciò che arriva dal server, nel secondo. Prima attendo che il server risponda, poi raccolgo i dati, asincrona per questo

console.log(listaContatti); // questa riga viene eseguita prima della then, perchè il then è asincrono, c'è una promise, la promise deve essere soddisfatta, aspettare che venga soddisfatta la promessa. Quindi riga 27 ritorna un array vuoto. Ora bisogna lavorare nella then
// mettendolo invece in setInterval per es che arriva dopo 2secondi c'è, perchè nel frattempo il server l'ha già ricevuta

/**
 *
 * @param {Object} user
 */
function creaCardUser(user) {
  let card = `<li>${user.first_name} ${user.last_name} <img src="${user.avatar}"></li>`;
  return card;
}

// let promessa = new Promise(success, fail);
// function success() {}
// function fail() {}
// promessa.then();
// il metodo then è una promise. Soddisfatta se arrivano i dati, sennò no. Devo aspettare che il server risponda
