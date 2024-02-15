let elNome = document.querySelector("#elNome");
let elCognome = document.querySelector("#elCognome");
let btn = document.querySelector("#btn");
let demo = document.querySelector("#demo");

function salutaUtente(nome, cognome) {
    return nome + " "+ cognome;
}

btn.addEventListener("click", function () {
    let nome = elNome.value;
    let cognome = elCognome.value;

    demo.innerHTML = salutaUtente(nome, cognome);
});


let feed = document.querySelector("#feed");
feed.addEventListener("mouseenter", () => {
    feed.classList.add("bgGreen");
});

feed.addEventListener("mouseleave", ()=>{
    feed.classList.remove("bgGreen");
    feed.classList.remove("bgRed");
});

feed.addEventListener("dblclick", ()=>{
    if (feed.classList.contains("bgGreen")) {
        feed.classList.remove("bgGreen");
        feed.classList.add("bgRed");
    }
});