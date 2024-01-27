function piuGrande() {
  if (true) {
    let array = [2, 9, 68, 1, 6];
    array.sort((a, b) => a - b);
    let max = array[array.length - 1];
    console.log(max);
    window.alert("Il numero maggiore è "+max)
  }
}

function loop() {
    for (let i = 0; i <= 15; i++) {
        console.log(i%2 === 0 ? `${i} è pari` : `${i} è dispari`);
    }
}

function zoom() {
    for (let i = 1; i <= 100; i++) {
        if (i%3 == 0 && i%5 == 0) {
            console.log(`${i} zoom boom`);
        }else if (i%3 == 0) {
            console.log(`${i} zoom`);
        }else if (i%5 == 0) {
            console.log(`${i} boom`);
        } 
    }
}

function pattern() {
    let string = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i; j++) {
            string += "*";
        }
        string += "\n";
    }
    console.log(string);
}

function sommaMultipli() {
    let somma = 0;
    for (let i = 1; i < 1000; i++) {
        if (i%3 == 0) {
            somma += i;
        }else if (i%5 == 0) {
            somma +=i;
        } 
    }
    console.log(somma);
}
function pattern2() {
    let string = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i; j++) {
            string += `${j}`;
        }
        string += '\n';
    }
    console.log(string);
}

function pattern3() {
    let num = Number(document.getElementById("num1").value);
    let val = 1;
    let stringa = "";
    for (let i = 1; val <= num; i++) {
        for (let j = 1; j <= i && val<= num; j++) {
            stringa += `${val++} `
        }
        stringa += "\n";
    }
    console.log(stringa);
}

function pattern4() {
    let num = document.getElementById("num2").value;
    let stringa = "";
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            stringa += "@"
        }
        stringa += "\n";
    }
    console.log(stringa);
}