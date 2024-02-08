let btnAdd = document.querySelector("#btnAdd");
let elLista = document.querySelector("#elLista");
let item = document.querySelector("#item");
let btnRemAll = document.querySelector("#btnRemAll");

function add() {
    let todo = item.value;

    let li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("class","txtBlue");

    li.onclick= function () {
        li.classList.toggle("txtBarrato");
    }

    let bntRem = document.createElement("button");
    bntRem.textContent = " X ";
    li.appendChild(bntRem);

    bntRem.onclick= function () {
        elLista.removeChild(li);
    }


    //parentNode.appendChild(child)
    elLista.appendChild(li);
}

btnAdd.onclick = add;

function remAll() {
    elLista.innerHTML = "";
}

btnRemAll.onclick = remAll;