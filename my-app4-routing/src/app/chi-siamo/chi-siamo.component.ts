import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-chi-siamo',
  templateUrl: './chi-siamo.component.html',
  styleUrl: './chi-siamo.component.css'
})
export class ChiSiamoComponent {
  listaPersone: Persona[] = [
    new Persona('Dario', 'Mennillo'),
    new Persona('Anna', 'Rossi'),
    new Persona('Laura', 'Verdi'),
    new Persona('Maria', 'Bianchi'),
  ];
}