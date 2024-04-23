import { Component } from '@angular/core';
import { NoleggioService } from '../noleggio/noleggio.service';
import { Amo } from '../models/amo.model';
import { Acquisto } from '../models/acquisto.model';

@Component({
  selector: 'app-acquista',
  templateUrl: './acquista.component.html',
  styleUrl: './acquista.component.css'
})
export class AcquistaComponent {

  email: string;
  amo: Amo;
  pagamento: string;

  constructor(private nolServ: NoleggioService){
  }

  onAcquista(){
    console.log('Acquista');
    
    const acquisto = new Acquisto(this.email, this.amo, this.pagamento);
    this.nolServ.postAcquisto(acquisto);
    this.amo.disponibilita = false;
    this.nolServ.updateAmo(this.amo);
    
  }
}

