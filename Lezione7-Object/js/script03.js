let automobile = {
  marca: "Audi",
  modello: "RS6",
  cilindrata: 3996,
  colore: "nero opaco",
  stripLed: true,
  trasmissione: "automatica",

  marciaAttuale: 0,
  velocita: 0,
  numGiri: 0,
  accesa: false,

  descrivi() {
    let descrizione = `${this.marca} ${this.modello}\nColore: ${this.colore}\nCambio: ${this.trasmissione}\nCilidrata: ${this.cilindrata}`;

    return descrizione;
  },

  calcolaVelocita(numGiri, marciaAttuale) {
    this.numGiri = numGiri;
    this.marciaAttuale = marciaAttuale;

    let velocita = (this.numGiri * this.marciaAttuale) / 100;

    return velocita;
  },

  accendi() {
    if (this.accesa) {
      console.log("Auto già accesa");
    } else {
      this.accesa = true;
      console.log("L'auto si è accesa");
    }
  },
  spegni(){
    if (this.accesa) {
        this.accesa = false;
        console.log("Auto spenta");
    }else{
        console.log("L'auto è già spenta");
}
  },

  guidaAuto() {
    if (this.accesa) {
      console.log("Adesso puoi guidare la tua auto");
      this.velocita = this.calcolaVelocita(3500, 6);
  
      return `L'auto è accesa ${this.accesa} e viaggia a ${this.velocita} km/h`;
    }else{
        return "L'auto è ancora spenta, come guidi?";
    }

  },
};
automobile.accendi();
console.log(automobile.guidaAuto());

automobile.spegni();
console.log(automobile.guidaAuto());

