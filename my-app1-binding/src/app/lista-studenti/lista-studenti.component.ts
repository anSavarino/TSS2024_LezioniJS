import { Component } from '@angular/core';
import { Studente } from './studente.model';

@Component({
  selector: 'app-lista-studenti',
  templateUrl: './lista-studenti.component.html',
  styleUrl: './lista-studenti.component.css'
})
export class ListaStudentiComponent {

  listaStudenti: Studente[] = [
    new Studente("Eliana", "Bove", 1, true, ["Angular", "Java", "HTML"]),
    new Studente("Luminita", "Scoarta", 2, true, ["Angular", "Java", "HTML"]),
    new Studente("Alessio", "Del Monte", 3, true,["Angular", "Java", "HTML"]),
    new Studente("Pierluigi", "Pierantola", 4, false)
  ];

  onCambiaPresenza(indice: number){
    console.log(indice);
    this.listaStudenti[indice].presenza = !this.listaStudenti[indice].presenza;
  }

}
