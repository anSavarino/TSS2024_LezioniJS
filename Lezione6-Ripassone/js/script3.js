let numE = document.getElementById("numE");
function estrai() {

  let numeri = [];

  for (let i = 0; i < 90; i++) {
    numeri[i] = i + 1;
  }

  let numEstratti = [];

  for (let i = 0; i < 6; i++) {
    // let numEstratto = Math.ceil(Math.random() * 90);
    // if (numeri.includes(numEstratto)) {
    //   numeri.splice(numeri.indexOf(numEstratto), 1);
    //   numEstratti.push(numEstratto);
    // } else {
    //   i--;
    // }
    
    console.log(`Estraggo il ${i+1}^ numero...`);
    estraiNumero(numeri, numEstratti);
  }
  
  
  let string = "";
  for (let i = 0; i < numEstratti.length; i++) {
    string += `${i + 1}) <b>${numEstratti[i]}</b> &nbsp;&nbsp;`;
  }
  numE.innerHTML = "<p>"+string+"</p>";

}

function estraiNumero(numeri, numEstratti) {
    let numEstratto = Math.ceil(Math.random() * 90);
    if (numeri.includes(numEstratto)) {
      numeri.splice(numeri.indexOf(numEstratto), 1);
      numEstratti.push(numEstratto);
    } else {
      i--;
    }
}


function estraiProf() {

    let numDaEstrarre = document.getElementById("numDaEstrarre").value;

    if (numDaEstrarre <= 90) {
        
        
        
        
        let numEstratti = [];
        let giri = 0;
        
        // for (let i = 0; i < numDaEstrarre; i++) {
        //     let numero = Math.ceil(Math.random()*90);
            
        //     if(numEstratti.includes(numero)){
        //         i--;
        //     }else{
        //         numEstratti.push(numero);
        //     }
        //     giri++;
        // }

    while(numEstratti.length<5){
            let numero = Math.ceil(Math.random()*90);
        
            if (numEstratti.includes(numero)) {
                    numEstratti.push(numero);
                }
            
            
            console.log(numEstratti);
            console.log(giri);
        else{
            alert("Amico hai messo più numeri di quanti ce ne siano nel gioco del lotto")
        }

        numEstratti.forEach(numero => {
            numE.innerHTML += "<li>"+numero+"</li>"
        });
    }
}

        