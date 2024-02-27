const URL = "https://dummyjson.com/products";

let elListaProd = document.querySelector("#elListaProd");

fetch(URL)
.then(data=>{return data.json()})
.then(response => {
    // response è l'object intero
    console.log(response);

    //response.products è l'array
    response.products.forEach(prodotto => {
        elListaProd.appendChild(creaItem(prodotto));
    });
});

/**
 * prodotto è il singolo oggetto nell'array products del JSON
 * @param {Object} prodotto 
 * @returns 
 */
function creaItem(prodotto){
    let li = document.createElement("li");
    li.setAttribute("class", "list-group-item");
    
    let img = document.createElement("img");
    img.setAttribute("src", prodotto.thumbnail);
    img.setAttribute("class", "img-responsive dimImg");
    
    li.textContent = prodotto.brand + " " + prodotto.title + " - € " + prodotto.price;
    li.insertBefore(img, li.firstChild);

    let btnAddCarrello = document.createElement("button");
    btnAddCarrello.setAttribute("class", "btn btn-primary position-absolute end-0 me-3");
    btnAddCarrello.innerHTML = "<i class='bi bi-cart'></i>";

    btnAddCarrello.addEventListener("click", function(){
        //Questa funzione salverà l'intero prodotto in local o session storage
        console.log("Id Prodotto: " + prodotto.id);
    })

    li.appendChild(btnAddCarrello);

    return li;
}