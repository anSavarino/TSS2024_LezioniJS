let numeriEstratti = [];

let giri = 0;

for (let i = 0; i < 50; i++) {
    let numero = Math.ceil(Math.random()*90);

    if(numeriEstratti.includes(numero)){
        i--;
    }else{
        numeriEstratti.push(numero);
    }
    giri++;
}

console.log(numeriEstratti);
console.log(giri);