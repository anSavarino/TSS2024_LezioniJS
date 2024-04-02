import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app0-intro';
  autore: string = "Angelo";

  studente: {
    nome: string,
    cognome: string,
    matricola: number
  } = {
    nome: "Angelo",
    cognome: "Savarino",
    matricola: 1
  }

  benvenuto: string = ""

  stampaInConsole(): string{
    let saluto: string = "Ciao";
    console.log(saluto);
    return saluto
  }

  onStampaBenvenuto(){
    this.benvenuto = "Ciao, benvenuto al corso Angular";
  }
}
