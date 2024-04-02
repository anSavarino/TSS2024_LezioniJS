import { Component } from '@angular/core';
import { Studente } from '../models/studente.model';

@Component({
  selector: 'app-lista-studenti',
  templateUrl: './lista-studenti.component.html',
  styleUrl: './lista-studenti.component.css'
})
export class ListaStudentiComponent {

  listaStudenti: Studente[]=[
    {
      nome: "Harry",
      cognome: "Potter",
      corsi: [
        "Difesa contro le Arti Oscure", 
        "Pozioni", 
        "Volo"
      ],
      presenza: false,
      img: "https://static.wikia.nocookie.net/harrypotter/images/5/52/Harry_Potter_%28HBP_promo%29_1.jpg"
    },
    {
      nome: "Hermione",
      cognome: "Granger",
      corsi: [ 
        "Trasfigurazione",
        "Incantesimi",
        "Pozioni",
        "Storia della Magia",
        "Difesa contro le Arti Oscure",
        "Astronomia",
        "Erbologia",
        "Volo"
      ],
      presenza: true,
      img: "https://www.potterpedia.it/imagewatermark/immagini/1002-p1bo4p132c1k2m1otfqj1h88u4v4.jpg"
    },
    {
      nome: "Ron",
      cognome: "Weasley",
      corsi: [
        "Difesa contro le Arti Oscure", 
        "Pozioni", 
        "Volo"
      ],
      presenza: false,
      img: "https://www.potterpedia.it/imagewatermark/immagini/1003-Ron_Weasley_poster.jpg"
    },
    {
      nome: "Draco",
      cognome: "Malfoy",
      corsi: [
        "Storia della Magia", 
        "Pozioni", 
        "Incantesimi",
        "Difesa contro le Arti Oscure"
      ],
      presenza: true,
      img: "https://www.potterpedia.it/imagewatermark/immagini/1004-p1br29q2c03mp9321df71dc9tk74.jpg"
    }
  ]
}
