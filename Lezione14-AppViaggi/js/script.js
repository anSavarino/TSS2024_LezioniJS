const URLEndpoint = "http://localhost:3000/viaggi";
let carouselItemsCont = document.querySelector("#carousel-items");

function creaCarouselItem(viaggio) {
  let divCarousel = document.createElement("div");
  divCarousel.setAttribute("class", "carousel-item");
  let img = document.createElement("img");
  img.setAttribute("src", viaggio.locandina);
  img.setAttribute("class", "d-block w-100 img-thumbnail rounded");
  let caption = document.createElement("div");
  caption.setAttribute("class", "carousel-caption d-none d-md-block");
  caption.innerHTML = `<h5>${viaggio.tratta}</h5>
    <p>Some representative placeholder content for the first slide.</p>`;
  divCarousel.appendChild(img);
  divCarousel.appendChild(caption);
  carouselItemsCont.appendChild(divCarousel);
}

//!!CREARE BUTTON IN FONDO A SLIDE

function caricaViaggi() {
  fetch(URLEndpoint)
    .then((data) => {
      return data.json();
    })
    .then((response) => {
      console.log(response);
      response.forEach((viaggio) => {
        creaCarouselItem(viaggio);
      });
      let f = document.querySelector(".carousel-item");
      f.classList.add("active");
      
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
