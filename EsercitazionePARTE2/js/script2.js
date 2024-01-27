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
  let arrayNumeri = numero.slice("");
  let stringa = "";
  for (let i = 0; i < arrayNumeri.length; i++) {
    if (arrayNumeri[i] % 2 == 0 && arrayNumeri[i + 1] % 2 == 0) {
      stringa += arrayNumeri[i] + "-";
    } else {
      stringa += arrayNumeri[i];
    }
  }
  console.log(stringa);
}

let array = [];
function startElementi() {
  let numElementi = prompt("Quanti elementi voi inserire?");

  for (let i = 0; i < Number(numElementi); i++) {
    let elem = prompt("Inserisci l'elemento:");
    array[i] = elem;
  }
  document.getElementById("newButton").innerHTML =
    '<button type="button" onclick="stampaElementi(); return false">Stampa Elementi</button>';
}

function stampaElementi() {
  array.forEach((element) => {
    console.log(element);
  });
}

function rimuoviDuplicati() {
  let arrayNoDuplicati = [];
  for (let i = 0; i < array.length; i++) {
    let elem = array[i];
    if (arrayNoDuplicati.indexOf(elem) === -1) {
      arrayNoDuplicati.push(elem);
    }
  }
  console.log(arrayNoDuplicati);
}
function sommaElementi() {
  let array1 = [1, 0, 2, 4, 6];
  let array2 = [0, 4, 5, 8, 7];
  let arraysomma = [];

  for (let i = 0; i < array1.length; i++) {
    arraysomma[i] = array1[i] + array2[i];
  }
  console.log(arraysomma);
}

function unisciArray() {
  let array1 = [1, 0, 2, 4, 6];
  let array2 = [0, 4, 5, 8, 7];
  let arrayUnico = array1.concat(array2);

  let noDuplicati = new Set(arrayUnico);
  let arrayNoDuplicati = Array.from(noDuplicati);
  console.log(arrayNoDuplicati);
}
