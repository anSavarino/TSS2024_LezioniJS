let listaLibri = ["Harry Potter", "Il guardiano degli Innocenti", "Guida Galattica per Autostoppisti"];
let listaPrezzi = [22, 18, 13];

let elencoLibri = document.getElementById("elencoLibri");

let libroInserito = window.prompt("Inserisci un libro: ");

if (libroInserito != null && libroInserito !="" ) {
    let prezzoInserito = Number(window.prompt("Inserisci il suo prezzo: "));
    listaLibri.push(libroInserito);
    listaPrezzi.push(prezzoInserito);
}



for (let i = 0; i < listaLibri.length; i++) {
    //console.log(listaLibri[i] + " " + listaPrezzi[i]);
    elencoLibri.innerHTML += "<li>" + listaLibri[i] + " - " + listaPrezzi[i] + "€</li>";
}


let sommaPrezzi = 0;
for (let i = 0; i < listaPrezzi.length; i++) {
    sommaPrezzi += listaPrezzi[i];
}

let totaleLibri = document.getElementById("totaleLibri");
totaleLibri.innerHTML = "Il totale dei libri è " + sommaPrezzi + "€";