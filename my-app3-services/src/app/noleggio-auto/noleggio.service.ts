import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auto } from '../models/auto.model';

@Injectable({
  providedIn: 'root'
})
export class NoleggioService {

  URL: string = 'http://localhost:3000/cars';
  autos: Auto[];

  constructor(private httpServ: HttpClient) { }

  getAutos(){
    return this.httpServ.get<Auto[]>(this.URL);
  }

  postAuto(auto: Auto){
    this.httpServ.post(this.URL, auto).subscribe(response => {
      console.log("hai inserito un'auto", response);
    })
  }
}
