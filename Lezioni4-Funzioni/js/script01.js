//dichiaro una funzione
function salutaUtente() {
    //corpo della funzione
    let nomeUtente = "Angelo";
    let congomeUtente = "Savarino"

    // alt96 `` backtick
    console.log(`Ciao ${nomeUtente} ${congomeUtente}`);
}

// Richiamo la funzione
salutaUtente();

let nome = "Pippo"; //Questa qui è una var Globale, visibile "dappertutto"

function salutaDocente() {
       
    let nome = "Dario"; //Questa è una variavile LOCALE, visibile solo all'interno della funzione
    let cognome = "Mennillo";
    
    console.log(`Ciao docente ${nome} ${cognome}`);
}

salutaDocente();

function salutaResp() {
    let nome = "Egle";
    let cognome = "Risola"
    
    console.log(`Ciao responsabile ${nome} ${cognome}`);
}

// UNa funzione può  richiamare altre funzioni

function salutaTutti() {
    console.log(`Saluta tutti`);
    salutaDocente();
    salutaResp();
    salutaUtente();
}


// Voglio richiamare dall'HTML