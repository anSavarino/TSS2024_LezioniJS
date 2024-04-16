import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestioneUtentiComponent } from './utenti/gestione-utenti/gestione-utenti.component';
import { ListaUtentiComponent } from './utenti/lista-utenti/lista-utenti.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UtentiComponent } from './utenti/utenti.component';
import { PizzeriaComponent } from './pizzeria/pizzeria.component';
import { PizzaComponent } from './pizzeria/pizza/pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    GestioneUtentiComponent,
    ListaUtentiComponent,
    NavbarComponent,
    HomeComponent,
    UtentiComponent,
    PizzeriaComponent,
    PizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
