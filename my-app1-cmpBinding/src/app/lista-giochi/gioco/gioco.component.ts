import { Component, Input } from '@angular/core';
import { Gioco } from './gioco.model';

@Component({
  selector: 'app-gioco',
  templateUrl: './gioco.component.html',
  styleUrl: './gioco.component.css',
})
export class GiocoComponent {
  // con questo decorator dico al component che riceverà in input un gioco singolo(nomeProprietà ) di tipo gioco
  @Input()
  giocoSingolo!: Gioco;

  assegnaColore(gioco: Gioco){
    if (gioco.genere == 'videogame')
     {return 'bg-warning'}
    else if (gioco.genere == 'da tavolo')
     {return 'bg-danger'}
  }



}
