let formReg = document.querySelector("#elForm");
let username = document.querySelector("#elUsername");
let message = document.querySelector("#elMessage");
let messageBox = document.querySelector("#messageBox");
let messaggio = document.querySelector("#messaggio");
let btnInvia = document.querySelector("#btnInvia");
let charCont = document.querySelector("#charCont");
let toastContainer = document.querySelector("#toastContainer");
let userConnesso = JSON.parse(this.localStorage.getItem("userConnesso"));
let btnLogout = document.querySelector("#btnLogout");

// Costruttore Oggetto Messaggio
class Messaggio {
  constructor() {
    this.utente = userConnesso.user;
    this.text = message.value;
  }
}

//Funzione per resettare la textarea e il contatore
function resetForm() {
  message.value = "";
  charCont.textContent = 'Caratteri rimanenti: 100';
}

//Aggiorno Array di Messaggi
let arrayMessaggi = JSON.parse(this.localStorage.getItem("messaggi") || "[]");
arrayMessaggi.concat(JSON.parse(this.localStorage.getItem("messaggi")));


function inviaMessaggio(event) {
    let m = new Messaggio();

    arrayMessaggi.push(m);
    createToast(m.utente,m.text);
    localStorage.setItem("messaggi", JSON.stringify(arrayMessaggi));

    resetForm();
    event.preventDefault();
    event.stopImmediatePropagation();
}

formReg.addEventListener("submit", inviaMessaggio);

//Conteggio caratteri rimanenti
message.addEventListener("input", logkey);
function logkey() {
  let caratteri = 100 - this.value.length;
  charCont.textContent = `Caratteri rimanenti: ${caratteri}`
  if (caratteri <= 0 ) {
    message.classList.add("is-invalid");
    let contenutoMsg = document.querySelector("#elMessage").value.substring(0, 100);
    message.value = contenutoMsg;
    charCont.textContent = "Caratteri rimanenti: 0";

  }else{
    message.classList.remove("is-invalid");
  }
}

//Pulsante di Logout
btnLogout.addEventListener("click", logout);
function logout() {
  localStorage.removeItem("userConnesso");
  location.reload();
  window.location = "./login.html"
}


let toastCounter = 0; 
function createToast(user,text) {
  let toastID = user.toLowerCase()+"-toast-"+(toastCounter++);
  let toast = `<div class="toast show align-self-end" role="alert" aria-live="assertive" aria-atomic="true" id="${toastID}">
  <div class="toast-header">
      <strong class="me-auto">${user} dice:</strong>
  </div>
  <div class="toast-body">
      ${text}
  </div>
</div>`;
  toastContainer.innerHTML += toast;
  let toastElem = toastContainer.querySelector("#"+toastID);
  if (user != userConnesso.user ) {
    toastElem.classList.remove("align-self-end");
  }
}


let demo = document.querySelector("#demo");
let pres = document.querySelector("#presentazione");
pres.innerHTML = `Ciao ${userConnesso.user}, questa è la tua password ${userConnesso.password}`;


// let listMessaggi =JSON.parse(this.localStorage.getItem("messaggi") || "[]");

arrayMessaggi.forEach(element => {
  createToast(element.utente, element.text);
});


window.addEventListener("DOMContentLoaded", function () {
  
  if (this.localStorage.length != 0 && this.localStorage.key(0) == "userConnesso") {
      let userConnesso = JSON.parse(this.localStorage.getItem("userConnesso")); //ricevo un JSON formato stringa    
  }
});