import { Component, OnInit } from '@angular/core';
import { Amo } from '../models/amo.model';
import { NoleggioService } from './noleggio.service';

@Component({
  selector: 'app-noleggio',
  templateUrl: './noleggio.component.html',
  styleUrl: './noleggio.component.css'
})
export class NoleggioComponent implements OnInit{

  ami: Amo[];

  constructor(private nolServ: NoleggioService){
  }

  ngOnInit(): void {
    this.nolServ.getAmi().subscribe(ami =>{
      this.ami = ami;
    })
  }
}
