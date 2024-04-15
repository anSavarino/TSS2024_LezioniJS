import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaGiochiComponent } from './lista-giochi/lista-giochi.component';
import { GiocoComponent } from './lista-giochi/gioco/gioco.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditGiocoComponent } from './lista-giochi/edit-gioco/edit-gioco.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaGiochiComponent,
    GiocoComponent,
    NavbarComponent,
    EditGiocoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
