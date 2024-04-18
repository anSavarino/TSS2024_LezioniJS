import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UtentiComponent } from './utenti/utenti.component';
import { PizzeriaComponent } from './pizzeria/pizzeria.component';
import { PizzaComponent } from './pizzeria/pizza/pizza.component';
import { BirreriaComponent } from './birreria/birreria.component';
import { BlogComponent } from './blog/blog.component';
import { NoleggioAutoComponent } from './noleggio-auto/noleggio-auto.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'utenti', component: UtentiComponent},
  {path: 'pizzeria', component: PizzeriaComponent, children: [
    // il :id indica che quel frammento è dinamicos
    {path:':id', component: PizzaComponent}
  ]},
  {path: 'birreria', component: BirreriaComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'noleggio', component: NoleggioAutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
