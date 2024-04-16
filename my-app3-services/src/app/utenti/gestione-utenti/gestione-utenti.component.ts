import { Component } from '@angular/core';
import { UtentiService } from '../../utenti.service';
import { Utente } from '../../models/utente.model';

@Component({
  selector: 'app-gestione-utenti',
  templateUrl: './gestione-utenti.component.html',
  styleUrl: './gestione-utenti.component.css'
})
export class GestioneUtentiComponent {

  utente: Utente = {
    id: 4,
    nome: "Gennaro",
    cognome: "Rossi",
    corso: "React"
  };

  constructor(private utentiServ: UtentiService){}

  onAddUtente(){
    this.utentiServ.addUtente(this.utente);
  }

}
