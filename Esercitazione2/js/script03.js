function calcolaProdotto() {
  console.log("Prodotto");
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  let prodotto = num1 * num2;

  document.getElementById("prod").innerHTML = `Il prodotto di ${num1} e ${num2} è ${prodotto}`;
}
