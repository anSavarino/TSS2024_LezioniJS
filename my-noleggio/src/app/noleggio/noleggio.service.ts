import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Amo } from '../models/amo.model';

@Injectable({
  providedIn: 'root'
})
export class NoleggioService {
  URL: string = 'http://localhost:3000/ami';
  ami: Amo[];
  constructor(private httpServ: HttpClient) { }

  getAmi(){
    return this.httpServ.get<Amo[]>(this.URL);
  }

  postAmo(amo: Amo){
    this.httpServ.post(this.URL, amo).subscribe(response => {
      console.log("hai inserito un amo", response);
    })
  }
}
