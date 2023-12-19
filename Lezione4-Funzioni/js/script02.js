function calcolaArea() {
    let base = 10;
    let altezza = 7;

    let area = base*altezza;

    return area;
}

// console.log(calcolaArea());
// Salvo nella variabile valoreArea il valore restituito dalla funzione calcolaArea()
let valoreArea = calcolaArea();

console.log(valoreArea);


// Voglio passare dei parametri alla mia funzione
function calcolaSuperficie(base, altezza) {

    let area = base*altezza;

    return area;
    
}

let valoreSuperficie = calcolaSuperficie(8, 5);

console.log(valoreSuperficie);
console.log(calcolaSuperficie(12, 21.3));

function salutami(nome, cognome) {
    console.log(`Ciao ${nome} ${cognome}`);
    return `Ciao ${nome} ${cognome}`
}

salutami("Angelo", "Savarino");