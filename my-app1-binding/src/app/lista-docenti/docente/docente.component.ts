import { Component, Input } from '@angular/core';
import { Docente } from './docente.model';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrl: './docente.component.css'
})
export class DocenteComponent {

  //la prop docente sarà ricevuta in Input dal Parent. Posso inviare questa proprietà solo dal parent poiché lì dentro vivono i dati e nel parent renderizzo il child con il selettore
  @Input() docente: Docente

  onModPresenza(){
    this.docente.presenza = !this.docente.presenza;
  }
}

// Costruire un component listaCorsi nel quale vive un array di corsi con le seguenti prop(nome, sede, numIscritti, docente: Docente).
// Al suo interno crea un component Corso. La renderizzazione sarà un li
//Per ogni corso stampare tutte le info nella pagina. Utilizza un pulsante "Chiudi Corso". Al click su questo pulsante verrà barrata l'intera riga del corso e sarà disabilitato anche il pulsante
