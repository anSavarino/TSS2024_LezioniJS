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

function stampaURL() {
    let url=window.location.href;
    document.getElementById("pageURL").innerHTML = `URL: ${url}`
}

function differenza() {
    let numero = document.getElementById("num4").value;

    let differenza = Math.abs(numero-19);
    if (numero>19) {
        differenza=differenza*3;
    }

    document.getElementById("risultato4").innerHTML = differenza;
    
}