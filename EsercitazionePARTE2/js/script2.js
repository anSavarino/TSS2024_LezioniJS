function occorrenze(Stringa, char) {
  let string = document.getElementById("stringa").value;
  let carattere = document.getElementById("char").value;

  let numOccorrenze = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == carattere) {
      numOccorrenze++;
    }
  }

  console.log("Numero di occorrenze: " + numOccorrenze);
}

let arg = { Nome: "Angelo" };

function argomento(arg) {
  console.log(typeof arg);
}

function parolaLunga() {
  let stringa = document.getElementById("testo");
  let parole = stringa.split(" ");
  let parolaPiuLunga = "";

  for (let i = 0; i < parole.length; i++) {
    if (parole[i].length > parolaPiuLunga.length) {
      parolaPiuLunga = parole[i];
    }
  }
  console.log("Parola più lunga: " + parolaPiuLunga);
}

function ruota() {
  let stringa = document.getElementById("testo2").value;
  let char = stringa.charAt(stringa.length - 1);
  stringa = char + stringa.slice(0, stringa.length - 1);
  console.log(stringa);

  let cont = 1;
  let intervallo = setInterval(() => {
    let char = stringa.charAt(stringa.length - 1);
    stringa = char + stringa.slice(0, stringa.length - 1);
    console.log(stringa);
    cont++;
    if (cont == stringa.length) {
        clearInterval(intervallo);
    }
  }, 1000);
}

function startDash() {
    let numero = window.prompt("Inserisci un numero lungo");
    let arrayNumeri = numero.slice('');
    let stringa = "";
    for (let i = 0; i < arrayNumeri.length; i++) {
        if (arrayNumeri[i]%2 == 0 && arrayNumeri[i+1]%2 == 0) {
            stringa += arrayNumeri[i] + "-";
        }else{
            stringa += arrayNumeri[i];
        }
    }
    console.log(stringa);
}