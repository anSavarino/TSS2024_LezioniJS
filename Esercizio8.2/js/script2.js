class Item {
    constructor(descrizione, scadenza) {
        this.descrizione = descrizione;
        this.scadenza = scadenza;
    }
}



let elDescrizione = document.querySelector("#elDescrizione");
let elScadenza = document.querySelector("#elScadenza");
let btnAdd = document.querySelector('#btnAdd');
let card = document.querySelector('#card');
let lista = document.createElement("ul");
card.appendChild(lista);

// function aggiungiCard() {
//     let descrizione = elDescrizione.value;
//     let scadenza = elScadenza.value;

//     let item = new Item(descrizione, scadenza);
//     let li = document.createElement("li");
//     // li.textContent = `${item.descrizione} in scadenza il <span id="scad">${item.scadenza}</span>`;
    
//     li.innerHTML = item.descrizione + " <span id=\"scad\">"+item.scadenza +"</span>";
//     let scadenze = document.querySelectorAll("#scad");
//     if (scadenze.length!=0) {
//         scadenze.forEach(element => {
//             if ((Number)(element.innerText) > (Number)(scadenza)) {
//                 lista = li.parentNode;
//                 lista.insertBefore(li, element);
//             }else{
//                 lista.appendChild(li);
//             }
//         });
//     }else{
//         lista.appendChild(li);
//     }
//     console.log(scadenze);


// }
let cardArray = [];
function aggiungiCard() {
    let descrizione = elDescrizione.value;
    let scadenza = elScadenza.value;
    let item = new Item(descrizione, scadenza)
    
    // let li = document.createElement("li");
    // li.textContent= item.descrizione + item.scadenza;
    if (cardArray.length != 0 ) {
        for (let i = 0; i <= cardArray.length; i++) {
            if ((Number)(cardArray[i].scadenza) > (Number)(item.scadenza) && i != 0) {
                cardArray.splice(i-1, 0, item);
                break;
            }else{
                cardArray.push(item);
                break;
            }
        }
        
    } else {
        cardArray.push(item);
    }

    for (let i = 0; i < cardArray.length; i++) {
        lista.innerHTML = "";
        let li = document.createElement("li");
        li.textContent= cardArray[i].descrizione + cardArray[i].scadenza;
        lista.appendChild(li);
    }
    
    
    console.log(cardArray);

}

btnAdd.onclick = aggiungiCard;