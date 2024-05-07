import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestioneUtentiComponent } from './utenti/gestione-utenti/gestione-utenti.component';
import { ListaUtentiComponent } from './utenti/lista-utenti/lista-utenti.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UtentiComponent } from './utenti/utenti.component';
import { PizzeriaComponent } from './pizzeria/pizzeria.component';
import { PizzaComponent } from './pizzeria/pizza/pizza.component';
import { BirreriaComponent } from './birreria/birreria.component';
import { BirraComponent } from './birreria/birra/birra.component';
import { BlogComponent } from './blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { NoleggioAutoComponent } from './noleggio-auto/noleggio-auto.component';
import { NoAuthComponent } from './no-auth/no-auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    GestioneUtentiComponent,
    ListaUtentiComponent,
    NavbarComponent,
    HomeComponent,
    UtentiComponent,
    PizzeriaComponent,
    PizzaComponent,
    BirreriaComponent,
    BirraComponent,
    BlogComponent,
    NoleggioAutoComponent,
    NoAuthComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
