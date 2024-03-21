const URLEndpoint = "http://localhost:3000/viaggi";
let carouselItemsCont = document.querySelector("#carousel-items");
let indicators = document.querySelector("#carousel-indicators")
let btnCart = document.querySelector("#btnCart");



function creaCarouselItem(viaggio) {
  let divCarousel = document.createElement("div");
  divCarousel.setAttribute("class", "carousel-item position-relative");
  divCarousel.setAttribute("style", "height: 400px")
  let img = document.createElement("img");
  img.setAttribute("src", viaggio.locandina);
  img.setAttribute("class", "d-block w-100 img-thumbnail rounded border border-black");
  
  divCarousel.appendChild(img);
  // divCarousel.appendChild(caption);
  divCarousel.appendChild(creaCard(viaggio))
  carouselItemsCont.appendChild(divCarousel);
}

btnCart.addEventListener("click", ()=>{window.location="carrello.html"})

function createIndicators(numSlide) {
  let ind = document.createElement("button");
  ind.setAttribute("type", "button");
  ind.setAttribute("data-bs-target", "#carouselExampleCaptions");
  ind.setAttribute("data-bs-slide-to", numSlide);
  ind.setAttribute("aria-label", "Slide"+numSlide);
  indicators.appendChild(ind);
}

function creaCard(item) {
  let c = document.createElement("div");
  c.setAttribute("class", "card carousel-caption d-md-block d-none h m-md-auto mb-lg-3 position-absolute text-start")
  c.setAttribute("style", "width: 18rem; background: rgba(252, 252, 252, 0.8);");
  let b = document.createElement("div");
  b.setAttribute("class", "card-body text-dark")
  let h5 = document.createElement("h5");
  h5.setAttribute("class", "card-title position-relative");
  h5.innerText = item.tratta;
  let p1 = document.createElement("p");
  p1.classList.add("card-text");
  p1.textContent = item.costo +" €";
  let p2 = document.createElement("p");
  p2.classList.add("card-text");
  p2.textContent = item.data;
  let btn = document.createElement("button");
  btn.setAttribute("id", "btn"+item.id)
  btn.setAttribute("class", "btn btn-success align-items-center d-flex end-0 h-100 position-absolute top-0");
  btn.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
  </svg>`;

btn.addEventListener("click", ()=>{
  viaggi_acquistati.push(item);
  localStorage.setItem("viaggi_acquistati", JSON.stringify(viaggi_acquistati));
  btn.setAttribute("disabled", "");
})

  c.appendChild(b);
  h5.append(btn);
  b.append(h5, p1, p2);
  return c;
}
let viaggi_acquistati = [];

function caricaViaggi() {
  fetch(URLEndpoint)
    .then((data) => {
      return data.json();
    })
    .then((response) => {
      console.log(response);
      let i = 0;
      response.forEach((viaggio) => {
        createIndicators(i++)
        creaCarouselItem(viaggio);
      });
      let f = document.querySelector(".carousel-item");
      f.classList.add("active");
      let ind = document.querySelector(".carousel-indicators button");
      ind.setAttribute("class","active");
      ind.setAttribute("aria-current","true");
      
    });
}


window.addEventListener("DOMContentLoaded", caricaViaggi);

//-------------CAROUSEL ACTIVATOR------------
const myCarouselElement = document.querySelector("#myCarousel");

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false,
});
//---------------------------------------------
