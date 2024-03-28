interface Veicolo {
    numRuote: number;
    alimentazione: string;

    descriviVeicolo(): void;

}

class Auto implements Veicolo {
    numRuote: number;
    alimentazione: string;

    colore: "rossa" | "bianca" | "blu";

    constructor(numRuote: number, alimentazione: string, colore: "rossa" | "bianca" | "blu") {
        this.numRuote = numRuote;
        this.alimentazione = alimentazione;
        this.colore = colore;
    }
    descriviVeicolo(): void {
        console.log(this.numRuote, this.colore, this.alimentazione);

    }
}

class AutoDaCorsa extends Auto {
    motore: string;
    modello: string;
    marca: string;

    constructor(numRuote: number, alimentazione: string, colore: "rossa" | "bianca" | "blu", motore: string, modello: string, marca: string) {
        super(numRuote, alimentazione, colore);
        this.motore = motore
        this.modello = modello
        this.marca = marca
    }
}

let autoF1 = new AutoDaCorsa(4, "benzina", "rossa", "f24", "sf24", "ferrari");
autoF1.descriviVeicolo();