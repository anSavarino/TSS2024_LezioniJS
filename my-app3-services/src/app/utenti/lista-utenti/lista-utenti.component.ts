import { Component } from '@angular/core';
import { UtentiService } from '../../utenti.service';
import { Utente } from '../../models/utente.model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-utenti',
  templateUrl: './lista-utenti.component.html',
  styleUrl: './lista-utenti.component.css'
})
export class ListaUtentiComponent implements OnInit{

  listaUtenti: Utente[];

// Adesso sfrutto il principio delle dependency injection per iniettare il servizio UtentiService

  constructor(private utentiServ: UtentiService){}

  // ngOnInit è un metodo che viene eseguito automaticamente quando il componente viene creato
  // e fa parte della famiglia dei lifecycle hooks di Angular
  ngOnInit(): void {
    this.listaUtenti = this.utentiServ.getAllUtenti();
  }

  onRemoveUtente(id: number){
    this.listaUtenti=this.utentiServ.removeUtenteById(id);
  }

}
