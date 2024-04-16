import { Component, EventEmitter, Output } from '@angular/core';

import { Gioco } from '../gioco/gioco.model';


@Component({
  selector: 'app-edit-gioco',
  templateUrl: './edit-gioco.component.html',
  styleUrl: './edit-gioco.component.css'
})
export class EditGiocoComponent {

  // qui dentro creo il mio gioco per poterlo emettere verso il parent
  @Output() onGioco=new EventEmitter<Gioco>()
  // creo un evento tipo onGioco di tipo Gioco, il < > porta al suo interno una cosa chiamato generics. l'event emitter è come un treno merci e quello che ci si passa dentro sta dentro le parentesi angolari e quindi prende in ingresso Gioco in questo caso 

  mioNuovoGioco: Gioco= new Gioco("Mastermind", "da tavolo", 1970,2, 'https://www.shutterstock.com/image-photo/mastermind-wooden-brain-teaser-game-260nw-330510416.jpg');



  onCreaGioco(){
    this.onGioco.emit(this.mioNuovoGioco);
  }


}
