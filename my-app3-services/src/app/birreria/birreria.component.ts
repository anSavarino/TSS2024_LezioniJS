import { Component } from '@angular/core';
import { Birra } from './model/birra.model';

@Component({
  selector: 'app-birreria',
  templateUrl: './birreria.component.html',
  styleUrl: './birreria.component.css'
})
export class BirreriaComponent {

  listaBirre: Birra[] = [
    new Birra(0, 'Peroni', 5, 33, 2.5),
    new Birra(1, 'Heineken', 5, 33, 3),
    new Birra(2, 'Moretti', 5, 33, 2.5),
    new Birra(3, 'Corona', 5, 33, 3)
  ];

  marcaBirra: String;

  onNomeBirra(marca: String){
    console.log("Birra selezionata: " + marca);
    this.marcaBirra = marca
    
  }

}
