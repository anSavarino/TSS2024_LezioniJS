// Esercizio 1
function calcoloOperazioni() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  let molt = num1 * num2;

  if (num2 == 0) {
    document.getElementById("divisione").innerHTML = `Non puoi dividere per 0!`;
  } else {
    let div = num1 / num2;
    document.getElementById("divisione").innerHTML = `${num1}/${num2}=${div}`;
  }
  document.getElementById(
    "moltiplicazione"
  ).innerHTML = `${num1}*${num2}=${molt}`;
}

// Esercizio 2
function stampaURL() {
    let url=window.location.href;
    document.getElementById("pageURL").innerHTML = `URL: ${url}`
}

// Esercizio 4
function differenza() {
    let numero = document.getElementById("num4").value;

    let differenza = Math.abs(numero-19);
    if (numero>19) {
        differenza=differenza*3;
    }

    document.getElementById("risultato4").innerHTML = differenza;
    
}

// Esercizio 5
function controllo() {
  let numero = document.getElementById("num5").value;

  // il controllo qui non mi convinceva perchè non ho capito se, col primo controllo, bisognasse dire che apparteneva anche all'altro range
  // considerato che è il primo è incluso nel secondo
  if (numero>20 && numero <100) {
    document.getElementById("risultato5").innerHTML="Il numero si trova tra 20 e 100";
  }else if (numero > 20 && numero > 100 && numero < 400) {
    document.getElementById("risultato5").innerHTML="Il numero si trova tra 20 e 400";
  } else{
    document.getElementById("risultato5").innerHTML="Il numero non si trova nel range stabilito";
  }
}

// Esercizio 6
let stringa = "L'amor che move il sole e l'altre stelle"
document.getElementById("stringa6").innerHTML="\""+stringa+"\"";
document.getElementById("strlen").innerHTML=stringa.length-1;

let maxChar = document.getElementById("num6");
maxChar.setAttribute("max", stringa.length-1);

function rimuoviCarattere() {
  let pos = document.getElementById("num6").value;
  
  let arrayStringa = stringa.split('');
  arrayStringa.splice(pos, 1)
  let newStringa = arrayStringa.join('');

  document.getElementById("risultato6").innerHTML = newStringa;
}

// Esercizio 7
function inserisciIF() {
  let char = stringa.charAt(0);
  let newStringa = char + stringa + char;
  
  document.getElementById("risultato7").innerHTML = newStringa;
}