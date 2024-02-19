let formReg = document.querySelector("#elForm");
let username = document.querySelector("#elUsername");
let message = document.querySelector("#elMessage");
let messageBox = document.querySelector("#messageBox");
let messaggio = document.querySelector("#messaggio");
let btnInvia = document.querySelector("#btnInvia");
let charCont = document.querySelector("#charCont");
let toastContainer = document.querySelector("#toastContainer");

class Messaggio {
  constructor() {
    this.utente = username.value;
    this.text = message.value;
  }
}
let arrayMessaggi = [];

function resetForm() {
  username.value = "";
  message.value = "";
  charCont.textContent = 'Caratteri rimanenti: 100';
}

function inviaMessaggio(event) {
    let m = new Messaggio();
    arrayMessaggi.push(m);
    createToast(m.utente, m.text);
    resetForm();
    event.preventDefault();
    event.stopImmediatePropagation();
}

formReg.addEventListener("submit", inviaMessaggio);

username.addEventListener("input", ()=>{
  if (username.value.length < 5) {
    username.classList.remove("is-valid");
    username.classList.add("is-invalid");
  }else{
    username.classList.remove("is-invalid");
    username.classList.add("is-valid");
  }
})

message.addEventListener("input", logkey);

function logkey() {
  let caratteri = 100 - this.value.length;
  charCont.textContent = `Caratteri rimanenti: ${caratteri}`
  if (caratteri == 0 && !message.classList.contains("borderRed")) {
    message.classList.add("is-invalid");
    
  }else{
    message.classList.remove("is-invalid");
  }
}

// button clear

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  });
}

function createToast(utente, text) {
  toastContainer.innerHTML += 
  `<div class="toast show" role="alert" aria-live="assertive" aria-atomic="true" id="liveToast">
  <div class="toast-header">
      <strong class="me-auto">${utente} dice:</strong>
      <small class="toast-timer" data-timestamp="${Date.now()}">now</small>
  </div>
  <div class="toast-body">
      ${text}
  </div>
</div>`;
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