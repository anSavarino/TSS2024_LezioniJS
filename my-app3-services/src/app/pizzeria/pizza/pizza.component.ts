import { Component, OnInit } from '@angular/core';
import { Pizza } from '../model/pizza.model';
import { PizzaService } from '../pizza.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css'
})
export class PizzaComponent implements OnInit{

  pizza: Pizza;

  constructor(private pizzaServ: PizzaService, private actRoute: ActivatedRoute){}
  
  ngOnInit(): void {
    //recupero id in maniera statica
    let idPizza = +this.actRoute.snapshot.params['id'];
    this.pizza = this.pizzaServ.getPizzaById(idPizza);
  
    this.actRoute.params.subscribe(
      (parmas: Params) => {
        this.pizza = this.pizzaServ.getPizzaById(+parmas['id']);
      }
    )
  }

}
