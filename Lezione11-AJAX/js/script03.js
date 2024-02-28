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
    li.setAttribute("class", "list-group-item d-flex align-items-center");
    
    let img = document.createElement("img");
    img.setAttribute("src", prodotto.thumbnail);
    img.setAttribute("class", "img-responsive dimImg rounded m-2");
    img.setAttribute("style", "aspect-ratio:auto; object-fit: contain;");
    
    li.textContent = prodotto.brand + " " + prodotto.title + " - € " + prodotto.price;
    li.insertBefore(img, li.firstChild);

    let btnAddCarrello = document.createElement("button");
    btnAddCarrello.setAttribute("class", "btn btn-primary align-self-end  m-auto me-3");
    btnAddCarrello.setAttribute("data-bs-toggle", "tooltip");
    btnAddCarrello.setAttribute("data-bs-title", "Aggiungi");
    btnAddCarrello.setAttribute("data-bs-placement", "right");
    btnAddCarrello.setAttribute("data-bs-custom-class", "custom-tooltip");
    btnAddCarrello.innerHTML = "<i class='bi bi-cart'></i>";

    btnAddCarrello.addEventListener("click", function(){
        //Questa funzione salverà l'intero prodotto in local o session storage
        console.log("Id Prodotto: " + prodotto.id);
    })

    li.appendChild(btnAddCarrello);
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    return li;
}
