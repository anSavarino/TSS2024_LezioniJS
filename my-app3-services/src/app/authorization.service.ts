import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  // recupera un utente in qualche modo da una api esterna e mi arriva fatto così

  utente: {
    id: number,
    nome: string,
    role: string
  } = {
      id: 0,
      nome: 'Pippo Rossi',
      role: 'base'
    }

  constructor() { }

  checkRole() {
    if (this.utente.role === 'admin') {
      return true;
    } else {

      return false;
    }
  }
}
