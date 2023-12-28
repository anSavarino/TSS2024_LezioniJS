function aggiungiJa() {
  // prende il valore della stringa inserita dall'utente
  let inputStringa = document.getElementById("stringa").value;

  // controlla se la stringa inserita non sia vuota
  if (inputStringa.length > 0) {
    // controlla che le prime lettere siano J e A
    if (inputStringa.charAt(0) == "J" && inputStringa.charAt(1) == "a") {
      console.log(inputStringa);
      document.getElementById("stringaJA").innerHTML = inputStringa;
    } else {
      let newStringa = "Ja" + inputStringa.slice(2);
      console.log(newStringa);
      document.getElementById("stringaJA").innerHTML = newStringa;
    }
  } else {
    console.log("Inserisci una stringa!");
    document.getElementById("stringaJA").innerHTML = `Inserisci una stringa!`;
    return false;
  }
}
