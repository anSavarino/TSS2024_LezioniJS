console.log("ciao da Typescript");

// Se non dichiaro il tipo verrà interpretato dal linguaggio
let mioNome = "Dario";
// mioNome = 2; mo se incazza

// In ts posso dichiarare il tipo
let miaEta: number = 34;
miaEta = 35;

// Posso dichiarare senza assegnare
let corsi: string[];

corsi = [
    "TSS24", "TPPW24", "JAITA116"
]

// Posso volontariamente assegnare più tipi alla stessa variabile
let presenza: boolean | string | number = true;
presenza = "presente"; 
presenza = false;
presenza = 1;

let registro: string | string[] | undefined;

// tipo any o tipo dinamico
let qualcosa: any;
qualcosa = 0;
qualcosa = "ciao";
qualcosa = true;
qualcosa = ["cane", "gatto", "scimmia"];

// tipi CUSTOM, creo una specie di tipo primitivo limitando il set di valori che può assumere
type Animale = "Leone" | "Elefante";
let mioAnimale: Animale = "Elefante"; //posso assumere solo unodei due valori

function primaFunz(): void{
    console.log("ciao");
}

function somma(num1: number, num2: number): number{
    let somma = num1+num2;
    return somma;
}

let risultato = somma(5,8);

function presentati(nome: string, cognome: string, eta?: number) { //punto interrogativo per rendere paramentro opzionale
    let presentazione = `Ciao mi chiamo ${nome} ${cognome}.`

    if (eta!=null) {
        presentazione += `Ho ${eta} anni`
    }
    return presentazione;
}


let demo = document.querySelector("#demo")
demo!.innerHTML = presentati("Angelo", "Savarino"); //! serve a togliere dalla strict mode

// Esiste un workaround per fare l'overload delle funzioni

function moltiplica(num1:number, num2:number): number;

function moltiplica(num1:string, num2:string): string;

function moltiplica(num1: any, num2: any): any {
    return num1*num2;
}

console.log(moltiplica(1,3));
console.log(moltiplica("1","3"));
// console.log(moltiplica("1",3)); NO

const divisione = (x: number, y:number)=>{
    let risultato = x / y;
    return risultato;
}

console.log(divisione(8, 6));

// Arrow function