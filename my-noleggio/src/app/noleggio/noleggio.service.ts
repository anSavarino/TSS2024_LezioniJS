import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Amo } from '../models/amo.model';
import { Acquisto } from '../models/acquisto.model';

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
  
  updateAmo(amo: Amo) { //TODO modificare la rotta con :id
    this.httpServ.put(this.URL + '/' + amo.id, amo).subscribe(response => {
      console.log("hai modificato un amo", response);
    }) 
  }

  postAmo(amo: Amo){
    this.httpServ.post(this.URL, amo).subscribe(response => {
      console.log("hai inserito un amo", response);
    })
  }

  URL_acquisto: string = 'http://localhost:3000/acquisti';
  
  acquisti: Acquisto[];
  getAcquisti(){
    return this.httpServ.get<Acquisto[]>(this.URL_acquisto);
  }
  postAcquisto(acquisto: Acquisto){
    this.httpServ.post(this.URL_acquisto, acquisto).subscribe(response => {
      console.log("hai inserito un acquisto", response);
    })
  }
}
