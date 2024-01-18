//NOTAZIONE LETTERALE
let studente = {
    // dichiaro le mie proprietà
    nome: "Pippo",
    cognome: "Pippa",
    eta: 20,
    esami: ["Calcolatori", "Architettura Software", "Basi di Dati"],
    docenti: [
        {
            nome: "Dario",
            cognome: "Mennillo",
            materia: "js"
        },
        {
            nome: "Mauro",
            cognome: "Bogliaccino",
            materia: "java"
        },
        {
            nome: "Oscar",
            cognome: "Vecchione",
            materia: "html, css"
        }
    ],

    computer: {
        marca: "Dell",
        modello: "Vostro",
        ram: 8,
        acceso: true
    },

    presentati: function(){
        let presentazione = "Ciao mi chiamo "+this.nome+" "+this.cognome+". Mi mancano ancora i seguenti esami: ";
        for (let i = 0; i < this.esami.length; i++) {
            presentazione += "<li>"+this.esami[i]+"</li>"
        }
        
        return presentazione;
    }
}

// richiamo delle proprietà, leggo il valore
console.log(studente);
console.log(studente.nome);
console.log(studente.cognome);

// Richiamo il nome del primo docente
console.log(studente.docenti[0].nome);

// richiamo il nome del computer
console.log(studente.computer.marca +" "+studente.computer.modello);
// 
// document.getElementById("demo").innerHTML = "il mio studente si chiama "+studente.nome+" "+studente.cognome;

// richiamo il metodo
document.getElementById("demo").innerHTML = studente.presentati();