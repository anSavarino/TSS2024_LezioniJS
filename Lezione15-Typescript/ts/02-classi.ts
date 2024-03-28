class Persona {

    //proprietà di classe
    public nome: string;
    cognome: string;
    eta: number;
    private corsi: string[]

    // metodo costruttore della classe
    constructor(nome:string,cognome:string, eta:number){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        // this.corsi = corsi;
    }

    public setCorsi(corsi : string[]) {
        this.corsi = corsi;
    }
    
    public getCorsi() : string[] {
        return this.corsi;
    }

    toString(): string{
        return `${this.nome} ${this.cognome}, corsi: ${this.getCorsi()}`
    }
}

const persona1 = new Persona("Pippo", "Rossi", 24);
console.log(persona1.nome);
console.log(persona1.cognome);
let mieiCorsi = ["TSS", "tppw"];
persona1.setCorsi(mieiCorsi);
console.log(persona1.toString());

// Posso avere più classi definite nello stesso file
// esiste un modo abbreviato di scrivere una classe
class Docente {
    constructor(public nome:string,public cognome: string, private corsoAssegnato?: string ) {} //modificatore d'accesso obbligatorio 
    
    
    public setCorso(corso: string) {
        this.corsoAssegnato = corso;
    }
    
    
    public getCorso(){
        return this.corsoAssegnato;
    }
    
}

let mioDocente = new Docente("Darion", "Mennillo");
mioDocente.setCorso("TSS");

console.log(mioDocente.nome, mioDocente.cognome, mioDocente.getCorso());
