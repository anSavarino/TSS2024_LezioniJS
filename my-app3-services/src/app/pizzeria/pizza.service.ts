import { Injectable } from '@angular/core';
import { Pizza } from './model/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  listaPizze: Pizza[] = [
    new Pizza(1, 'Margherita', 6.5, 'https://www.finedininglovers.it/sites/g/files/xknfdk1106/files/fdl_content_import_it/margherita-50kalo.jpg'),
    new Pizza(2, 'Diavola', 7.5, 'https://i1.wp.com/www.piccolericette.net/piccolericette/wp-content/uploads/2017/06/3236_Pizza.jpg'),
    new Pizza(3, 'Prosciutto e funghi', 8.5, 'https://www.tasteatlas.com/images/dishes/7b13284763a740db85a2be5ecd8ca024.jpg')
  ];
  constructor() { }

  getPizzaById(id: number) {
    let pizza = this.listaPizze.find((pizza) =>{
      return pizza.id === id;
    });
    return pizza;
    }
}
