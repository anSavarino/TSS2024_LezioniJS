import { Component, OnInit } from '@angular/core';
import { Auto } from '../models/auto.model';
import { NoleggioService } from './noleggio.service';

@Component({
  selector: 'app-noleggio-auto',
  templateUrl: './noleggio-auto.component.html',
  styleUrl: './noleggio-auto.component.css'
})
export class NoleggioAutoComponent implements OnInit{
  autos: Auto[];

  constructor(private nolServ: NoleggioService){ 
  }
  ngOnInit(): void{
    this.nolServ.getAutos().subscribe(autos =>{
      this.autos = autos;
    })
  }

  onAddAuto(){
    const nuovaAuto = new Auto('Ford', 'Puma');
    this.nolServ.postAuto(nuovaAuto);
    this.ngOnInit();// tecnica tamarrissima
  }
}
