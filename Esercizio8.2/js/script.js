let elDescrizione = document.querySelector('#elDescrizione');
let elScadenza = document.querySelector('#elScadenza');
let btnAdd = document.querySelector('#btnAdd');
let card = document.querySelector('#card');


class Item {
    constructor(descrizione, scadenza) {
        this.descrizione = descrizione;
        this.scadenza = scadenza;
    }
}

let listaItems = [];

function aggiungiItems() {
    let nuovoItem = new Item(elDescrizione.value, elScadenza.value);
    listaItems.push(nuovoItem);

    listaItems.sort((a, b) => a.scadenza - b.scadenza);

    
    card.innerHTML = "";
    listaItems.forEach(item => {
        card.innerHTML+= `<li> ${item.descrizione} - scade tra: ${item.scadenza} giorni`;
    });

    

}

btnAdd.addEventListener("click", aggiungiItems);

elScadenza.addEventListener("keypress", function () {
    console.log(event);
    if(event.keyCode == 13){
        btnAdd.click();
    }
})




//closure
// function stampaItems() {
//     let mioParam = 10;
//     function passaParametro() {
//         return (mioParam * 2);
//     }
//     return passaParametro;
// }