let formReg = document.querySelector("#elForm");
let username = document.querySelector("#elUsername");
let message = document.querySelector("#elMessage");
let messageBox = document.querySelector("#messageBox");
let messaggio = document.querySelector("#messaggio");
let btnInvia = document.querySelector("#btnInvia");
let charCont = document.querySelector("#charCont");
let toastContainer = document.querySelector("#toastContainer");
let toastContainerSinistra = document.querySelector("#toastContainerSinistra");
let userConnesso = JSON.parse(this.localStorage.getItem("userConnesso"));


class Messaggio {
  constructor() {
    this.utente = userConnesso.user;
    this.text = message.value;
  }
}
let arrayMessaggi = JSON.parse(this.localStorage.getItem("messaggi") || "[]");

function resetForm() {
  // username.value = "";
  message.value = "";
  charCont.textContent = 'Caratteri rimanenti: 100';
  username.classList.remove("is-valid");
}

arrayMessaggi.concat(JSON.parse(this.localStorage.getItem("messaggi")));
function inviaMessaggio(event) {
    let m = new Messaggio();

    arrayMessaggi.push(m);
    createToast(toastContainer,m.utente,m.text);
    localStorage.setItem("messaggi", JSON.stringify(arrayMessaggi));

    // resetForm();
    event.preventDefault();
    event.stopImmediatePropagation();
}

formReg.addEventListener("submit", inviaMessaggio);

// username.addEventListener("input", ()=>{
//   if (username.value.length < 5) {
//     username.classList.remove("is-valid");
//     username.classList.add("is-invalid");
//   }else{
//     username.classList.remove("is-invalid");
//     username.classList.add("is-valid");
//   }
// })

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

// button clear


function createToast(cont,user,text) {
  let toast = `<div class="toast show " role="alert" aria-live="assertive" aria-atomic="true" id="${user}Toast">
  <div class="toast-header">
      <strong class="me-auto">${user} dice:</strong>
  </div>
  <div class="toast-body">
      ${text}
  </div>
</div>`;
  cont.innerHTML += toast;

}

let toastTimers = document.getElementsByClassName("toast-timer")

setInterval(calcToastTimer, 30*1000);

function calcToastTimer() {
  const now = Date.now();

  for (let i = 0; i < toastTimers.length; i++) {
    const element = toastTimers[i];
    const timestamp = parseInt(element.getAttribute("data-timestamp"));
    let result = "";

    
    let m = ((now-timestamp)/1000/60)%60;
    let o = ((now-timestamp)/1000/60/24)%24;
    
    if (o < 1) {
      result = `${Math.floor(m)} minutes ago`;
    } else {
      result = `${Math.floor(o)} hours ago`;
    }
    element.textContent = result;
  }
}


let demo = document.querySelector("#demo");
let pres = document.querySelector("#presentazione");
pres.innerHTML = `Ciao ${userConnesso.user}, questa è la tua password ${userConnesso.password}`;


let listMessaggi =JSON.parse(this.localStorage.getItem("messaggi") || "[]");

      listMessaggi.forEach(element => {
        if (element.utente != userConnesso.user ) {

          createToast(toastContainerSinistra,element.utente, element.text);
          
          // toastContainer.classList.remove("end-0");
          // toastContainer.classList.add("start-0");
        }else{
          
          createToast(toastContainer,element.utente, element.text);
        }
      });


window.addEventListener("DOMContentLoaded", function () {
  
  if (this.localStorage.length != 0 && this.localStorage.key(0) == "userConnesso") {
      let userConnesso = JSON.parse(this.localStorage.getItem("userConnesso")); //ricevo un JSON formato stringa
      let utenti = JSON.parse(this.localStorage.getItem("utenti") || "[]");
      
      console.log("Ciao "+userConnesso);
      
  }else{
      demo.innerHTML = '<p>Nessun Utente connesso</p>';
      
  }
});