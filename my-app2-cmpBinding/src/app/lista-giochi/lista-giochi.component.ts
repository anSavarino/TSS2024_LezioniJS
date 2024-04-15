import { Component } from '@angular/core';
import { Gioco } from './gioco/gioco.model';

@Component({
  selector: 'app-lista-giochi',
  templateUrl: './lista-giochi.component.html',
  styleUrl: './lista-giochi.component.css',
})
export class ListaGiochiComponent {
  listaGiochi: Gioco[] = [
    new Gioco(
      'Tetris',
      'videogame',
      1984,
      1,
      'https://m.media-amazon.com/images/I/61M3rDwh4qL.png'
    ),
    new Gioco(
      'Space Invaders',
      'videogame',
      1978,
      1,
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6rxL02p9XKpmGdyHZTr-4AmhAgYtf9ghyXELjlBirBA&s'
    ),
    new Gioco(
      'Minecraft',
      'arcade',
      2011,
      2,
      'https://store-images.s-microsoft.com/image/apps.608.13850085746326678.a9b1e0db-29d0-40f3-a86c-2155353d053c.bc981608-3fa4-4929-82ff-b162b8788784?mode=scale&q=90&h=1080&w=1920'
    ),
    new Gioco(
      'Monopoly',
      'da tavolo',
      1940,
      6,
      'https://cf.geekdo-images.com/9nGoBZ0MRbi6rdH47sj2Qg__opengraph/img/Dm8scRK_5hJrDrv8OPyDHP1WVf8=/0x0:1307x686/fit-in/1200x630/filters:strip_icc()/pic5786795.jpg'
    ),
  ];

  onAggiungiGioco(gioco: Gioco){
    this.listaGiochi.push(gioco);
  }


}
