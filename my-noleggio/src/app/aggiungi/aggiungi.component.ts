import { Component } from '@angular/core';
import { NoleggioService } from '../noleggio/noleggio.service';
import { Amo } from '../models/amo.model';

@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.component.html',
  styleUrl: './aggiungi.component.css'
})


export class AggiungiComponent {

  marca: string;
  nome: string;
  prezzo: number;
  immagine: string;

  constructor(private nolServ: NoleggioService){
  }
  
  onAdd(){
    console.log('Aggiungi');
    
    const amo = new Amo(this.marca, this.nome, this.prezzo, this.immagine, true);
    this.nolServ.postAmo(amo);
    
  }

}
