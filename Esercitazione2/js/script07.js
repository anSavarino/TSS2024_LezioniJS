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

function inverti() {
  let parola = document.getElementById("testo8").value;
  console.log(parola);
  let invertita = "";
  // let arrayParola = parola.split();
  for (let i = 0; i < parola.length; i++) {
    invertita += parola.charAt(parola.length - 1 - i);
  }
  document.getElementById("invertedText").innerHTML=`La parola invertita è: ${invertita}`;
}

function inserisciUpperCase() {
  let frase = document.getElementById("testo9").value;
 
  let arrayFrase = frase.split(' ');
  console.log(arrayFrase);
  for (let i = 0; i < arrayFrase.length; i++) {
    arrayFrase[i] = arrayFrase[i].charAt(0).toUpperCase()+arrayFrase[i].slice(1);
  }

  let fraseUpperCase = arrayFrase.join(' ')

  document.getElementById("fraseUC").innerHTML=`${fraseUpperCase}`
}