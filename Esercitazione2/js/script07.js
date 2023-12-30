//Esercizio 7
function vicinoCento() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  if (num1 == num2) {
    console.log(`I numeri sono uguali`);
    return false;
  }

  let dist1 = Math.abs(100 - num1);
  let dist2 = Math.abs(100 - num2);

  if (dist1 > dist2) {
    console.log(`${num2} è più vicino a 100 di ${num1}`);
    document.getElementById(
      "risultatoCento"
    ).innerHTML = `Il più vicino al 100 è il numero ${num2}`;
  } else {
    console.log(`${num1} è più vicino a 100 di ${num2}`);
    document.getElementById(
      "risultatoCento"
    ).innerHTML = `Il più vicino al 100 è il numero ${num1}`;
  }
  console.log("Vicino cento");
}

//Esercizio 8 (e 12)
function inverti() {
  let parola = document.getElementById("testo8").value;
  console.log(parola);
  let invertita = "";
  for (let i = 0; i < parola.length; i++) {
    invertita += parola.charAt(parola.length - 1 - i);
  }
  document.getElementById(
    "invertedText"
  ).innerHTML = `La parola invertita è: ${invertita}`;
}

//Esercizio 9
function inserisciUpperCase() {
  let frase = document.getElementById("testo9").value;

  let arrayFrase = frase.split(" ");
  console.log(arrayFrase);
  for (let i = 0; i < arrayFrase.length; i++) {
    arrayFrase[i] =
      arrayFrase[i].charAt(0).toUpperCase() + arrayFrase[i].slice(1);
  }

  let fraseUpperCase = arrayFrase.join(" ");

  document.getElementById("fraseUC").innerHTML = `${fraseUpperCase}`;
}

//Esecizio 10
function generaStringa() {
  let stringaL = document.getElementById("stringL").value;
  let stringaG = "";
  let alfabeto = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < stringaL; i++) {
    stringaG += alfabeto.charAt(Math.floor(Math.random() * alfabeto.length));
  }

  document.getElementById(
    "casualString"
  ).innerHTML = `Stringa casuale: ${stringaG}`;
}

// Esercizio 11
function startProgram() {
  let num1 = Number(window.prompt("Inserisci il primo numero intero"));
  let num2 = Number(window.prompt("Inserisci il secondo numero intero"));

  if (num1 > num2) {
    window.alert(`Il maggiore è ${num1}`);
  } else if (num1 < num2) {
    window.alert(`Il maggiore è ${num2}`);
  } else {
    window.alert(`I due numeri sono uguali!`);
  }
}

// Esercizio 13
function ciaoMondo() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(`${i} Ciao, Mondo!`);
    } else if (i % 5 == 0) {
      console.log(`${i} Mondo`);
    } else if (i % 3 == 0) {
      console.log(`${i} Ciao`);
    } else {
      console.log(`${i}`);
    }
  }
}

// Esercizio 14
function trasformaArray() {
  let frase = [
    "Nel",
    "mezzo",
    "del",
    "cammin",
    "di",
    "nostra",
    "vita",
    "mi",
    "ritrovai",
    "per",
    "una",
    "selva",
    "oscura",
    "che",
    "la",
    "diritta",
    "via",
    "era",
    "smarrita",
  ];

  let htmlArray = "";
  frase.forEach((element) => {
    htmlArray += `"${element}", `;
  });
  document.getElementById("htmlArray").innerHTML = `Array: [${htmlArray}]`;

  let stringa1 = "";

  frase.forEach((element) => {
    stringa1 += `${element} `;
  });

  document.getElementById("fraseUS").innerHTML = `Stringa: ${stringa1}`;
}

// Esercizio 15
function numCasuale() {
  let numC = Math.floor(Math.random() * 10);
  document.getElementById("numPescato").innerHTML = `Numero pescato: ${numC}`;
}

// Esercizio 16
function trovaParola() {
  let testo =
    "Java Lorem ipsum sit dolor Java aliqua clara et pulcra sunt Java";
  let parola = document.getElementById("testo16").value;
  let search = testo.indexOf(parola);

  if (search != -1) {
    document.getElementById("parola16").innerHTML = `${parola}`;
  } else {
    document.getElementById("parola16").innerHTML = `parola non trovata`;
  }
}

// Esercizio 17
function updateSaluto() {
  let data = new Date();
  let ora = data.getHours();

  let saluto = "";

  if (ora >= 0 && ora < 2) {
    saluto = "Buona notte";
  } else if (ora >= 2 && ora < 12) {
    saluto = "Buon giorno";
  } else if (ora >= 12 && ora < 21) {
    saluto = "Buona sera";
  } else {
    saluto = "Buona notte";
  }

  document.getElementById("ora").innerHTML =
    "Sono le ore: " + data.toLocaleTimeString();
  document.getElementById("saluto").innerHTML = saluto;

  setTimeout(updateSaluto, 1000);
  
}

updateSaluto();
