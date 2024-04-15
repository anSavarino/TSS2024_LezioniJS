export class Studente{

    //Con il ? rendo una prop opzionale: praticamente simulo l'overload del metodo costruttore.
    //ATT: la propr opzionale va messa alla fine del costruttore
    constructor(public nome: string, public cognome: string, public matricola: number, public presenza: boolean,public corsi?: string[] ){}
}