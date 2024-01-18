let studente = {
    nome: "Angelo",
    cognome: "Savarino",
    matricola: "12",
    materie:[ {
            nomeMat: "JavaScript",
            docente: "Dario Mennillo",
            ore: 50
        },
        {
            nomeMat: "Java",
            docente: "Mauro Bogliaccino",
            ore: 60
        },
        {
            nomeMat: "HTML & CSS",
            docente: "Oscar Vecchione",
            ore: 30
        },
    ],

    studia(ore){
        return `Hai studiato per ${ore} ore`
    },

    descriviStudente(){
        let descrizione = `Lo studente si chiama ${this.nome} ${this.cognome}.\nIl suo numero di matricola è ${this.matricola} e studia le seguenti materie:\n`
        // for (let i = 0; i < this.materie.length; i++) {
        //     descrizione += `${this.materie[i].nomeMat}, insegnata dal docente ${this.materie[i].docente}. Il corso sarà di ${this.materie[i].ore} ore totali.\n`
        //     }

        this.materie.forEach(materia => {
            descrizione += `<li>${materia.nomeMat}, insegnata dal docente ${materia.docente}. Il corso sarà di ${materia.ore} ore totali.</li>`
        });
        return descrizione;
    },

    giornataDiStudio(){
        let studio = "Oggi è una giornata di studio!\n"
        for (let i = 0; i < this.materie.length; i++) {
            studio+= `Hai studiato ${this.materie[i].nomeMat}\n`;
            
        }
        return studio;
    }

}

let demo = document.getElementById("demo");
function descriviStudente() {
    demo.innerHTML = studente.descriviStudente();
}

console.log(studente.descriviStudente());
console.log(studente.studia(5));
console.log(studente.giornataDiStudio());
