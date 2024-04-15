import { Component } from '@angular/core';
import { Docente } from './docente/docente.model';

@Component({
  selector: 'app-lista-docenti',
  templateUrl: './lista-docenti.component.html',
  styleUrl: './lista-docenti.component.css'
})
export class ListaDocentiComponent {

  //Questo component è il Parent di docenteComponent. Qui vivranno i dati che verranno smistati al figlio o ai figli
  //Parent -> Child : invio dati dal parent al child

  listaDocenti: Docente[] = [
  {
    nome: "Dario",
    cognome: "Mennillo",
    corso: "Angular e Javascript",
    img: "https://pbs.twimg.com/profile_images/436159667287252993/a_7ilZ-j_400x400.jpeg",
    presenza: true
  },
  {
    nome: "Mauro",
    cognome: "Bogliaccino",
    corso: "Java e Spring",
    img: "https://avatars.githubusercontent.com/u/1922874?v=4",
    presenza: true
  },
  {
    nome: "Luca",
    cognome: "Ceroni",
    corso: "Sicurezza sui luoghi di lavoro ",
    img: "https://media.licdn.com/dms/image/C4D03AQEqJG88lrBVbA/profile-displayphoto-shrink_200_200/0/1516899027796?e=2147483647&v=beta&t=cKoNi8xoWuXjECJBCjbRyNZMVhNOG6asfL-QFLKiPiU",
    presenza: false
  }
  ]


}
