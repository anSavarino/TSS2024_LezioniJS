export class Panino{
    nome: string;
    ingredienti: string[];
    prezzo: number;

    constructor(nome: string, ingredienti: string[], prezzo: number){
        this.nome = nome;
        this.ingredienti = ingredienti;
        this.prezzo = prezzo;
    }
}
// Versione compatta
// export class Panino{
//     constructor(public nome: string, ingredienti: string[], prezzo: number){}
// }

