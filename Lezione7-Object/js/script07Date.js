let oggi = new Date();
console.log(oggi);

let annoCorrente = oggi.getFullYear();
let meseCorrente = oggi.getMonth();
let dataCorrente = oggi.getDate();
let giornoCorrente = oggi.getDay();

console.log(annoCorrente);
console.log(meseCorrente); //gennaio parte da 0
console.log(dataCorrente);
console.log(giornoCorrente);

let giorniSettimana = [
  "Domenica",
  "Lunedì",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venerdì",
  "Sabato",
];
let mesiAnno = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

let dataDiOggi =
  giorniSettimana[oggi.getDay()] +
  " " +
  oggi.getDate() +
  " " +
  mesiAnno[oggi.getMonth()] +
  " " +
  oggi.getFullYear();
console.log(dataDiOggi);

// Orologio digitale
let orologio = document.getElementById("orologio");

setInterval(() => {
  let oraEsatta = new Date();
  //operatore ternario
  let ora = (oraEsatta.getHours() < 10 ? "0" : "") + oraEsatta.getHours();
  let min = (oraEsatta.getMinutes() < 10 ? "0" : "") + oraEsatta.getMinutes();
  let sec = (oraEsatta.getSeconds() < 10 ? "0" : "") + oraEsatta.getSeconds();

  let time = ora + ":" + min + ":" + sec;
  orologio.innerHTML = time;
}, 1000);

function saluta() {
  console.log("Ciao Utnte!");
}

setInterval(() => {
  saluta();
}, 2000);
