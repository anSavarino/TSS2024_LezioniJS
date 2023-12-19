/**
 * Costruisci 2 array
 * 1 per i prodotti
 * 1 per i prezzi
 * 
 * crea una funzione che unisce prezzi con prodotti
 * 
 * crea funzione cha calcola il totale dei prezzi
 * 
 * crea la funzione stampaScontrino() che richiama le altre duefunzioni e stampa tutto nella pagina  
 * 
 * Se il totale super i 10€ stampiamo "Hai appena superato i 10€ per ottenere lo sconto"
 */

let listaScontrino = document.getElementById("listaScontrino");
let totaleScontrino = document.getElementById("totaleScontrino");
let totaleArticoli = document.getElementById("totaleArticoli");


let prodotti = ["Pane", "Pasta", "Carne", "Pesce"];
let prezzi = [3, 2, 8, 10];


    
function unisciProdotti(prodArray, prezziArray) {
    
    let prodList = "";
    for (let i = 0; i < prodArray.length; i++) {
        prodList+= "<li>" + prodArray[i] +": "+ prezziArray[i] + "</li>";
        
    }
    listaScontrino.innerHTML += prodList;

}


function unisciPrezziProdotti(prodotto, prezzo) {
    let prezzoProdotto = prodotto + " - " + prezzo;
    return prezzoProdotto;
}


function calcolaTotale3(listaPrezzi) {
    let somma =0;
    listaPrezzi.forEach(prezzo=>{
        somma+=prezzo;
    });
    return somma
}

let totale = 0;
function calcolaTotale(prezzo) {
    totale += prezzo;
}



function stampaScontrino() {

    for (let i = 0; i < prodotti.length; i++){
        
        let voceScont = unisciPrezziProdotti(prodotti[i], prezzi[i]);
        listaScontrino.innerHTML += "<li>" + voceScont + "€ </li>";
        calcolaTotale(prezzi[i]);
    }

    totaleScontrino.innerHTML = "Totale: " + totale.toPrecision(4) + " € ";
    if (totale >=10) {
        totaleScontrino.innerHTML += ". Bravo puoi avere lo sconto!";
    }
    
    
//  unisciProdotti(prodotti, prezzi);
//  calcolaTotale(prezzi);
}