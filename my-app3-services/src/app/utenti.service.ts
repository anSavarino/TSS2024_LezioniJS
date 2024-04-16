import { Injectable } from '@angular/core';
import { Utente } from './models/utente.model';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  listaUtenti: Utente[] = [
    new Utente(1, 'Mario', 'Rossi', 'Angular'),
    new Utente(2, 'Luigi', 'Verdi', 'React'),
    new Utente(3, 'Paolo', 'Bianchi', 'Vue')
  ];

  constructor() { }

  getAllUtenti(): Utente[] {
    return this.listaUtenti;
  }

  addUtente(utente: Utente) {
    this.listaUtenti.push(utente);
  }

  removeUtenteById(id: number){
    console.log("provo eleiminazione");
    
    this.listaUtenti = this.listaUtenti.filter(utente => utente.id !== id);
    return this.listaUtenti
    // let indice = this.listaUtenti.indexOf(this.listaUtenti.find(utente => utente.id == id));
    // console.log(indice);
    // this.listaUtenti.splice(indice, 1);
  }
}
