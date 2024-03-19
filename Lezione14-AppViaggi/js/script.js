const URLEndpoint = "http://localhost:3000/viaggi";
let carouselItemsCont = document.querySelector("#carousel-items");
let indicators = document.querySelector("#carousel-indicators")

function creaCarouselItem(viaggio) {
  let divCarousel = document.createElement("div");
  divCarousel.setAttribute("class", "carousel-item position-relative");
  let img = document.createElement("img");
  img.setAttribute("src", viaggio.locandina);
  img.setAttribute("class", "d-block w-100 img-thumbnail rounded");
  
  divCarousel.appendChild(img);
  // divCarousel.appendChild(caption);
  divCarousel.appendChild(creaCard(viaggio))
  carouselItemsCont.appendChild(divCarousel);
}

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
  h5.classList.add("card-title");
  h5.innerText = item.tratta;
  let p1 = document.createElement("p");
  p1.classList.add("card-text");
  p1.textContent = item.costo +" €";
  let p2 = document.createElement("p");
  p2.classList.add("card-text");
  p2.textContent = item.data;
  

  c.appendChild(b);
  b.appendChild(h5);
  b.appendChild(p1);
  b.appendChild(p2);
  return c;
}

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
