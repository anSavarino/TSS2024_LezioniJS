function calcolaProdotto() {
    console.log("Prodotto");
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
  
    let prodotto = num1 * num2;
  
    document.getElementById("prod").innerHTML = `${num1} * ${num2} = ${prodotto}`;
  }
  
  function calcolaDivisione() {
    console.log("Divisione");
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    
    if(num2 == 0){
        document.getElementById("prod").innerHTML = `Mi dispiace, non si può dividere un numero per 0`;
    }else{
    let divisione = num1 / num2;
    document.getElementById("prod").innerHTML = `${num1} / ${num2} = ${divisione}`;
    }
  }
  