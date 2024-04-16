import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UtentiComponent } from './utenti/utenti.component';
import { PizzeriaComponent } from './pizzeria/pizzeria.component';
import { PizzaComponent } from './pizzeria/pizza/pizza.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'utenti', component: UtentiComponent},
  {path: 'pizzeria', component: PizzeriaComponent, children: [
    // il :id indica che quel frammento è dinamicos
    {path:':id', component: PizzaComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
