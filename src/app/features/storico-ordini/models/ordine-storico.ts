import { Prodotto } from "./prodotto";

export class OrdineStorico {
  id: string = "";
  listaProdotti: Array<Prodotto> = [];
  indirizzoSpedizione: string = "";
  dataAcquisto: Date = new Date();

  get prezzoTotale (){
    let tot = 0;
    this.listaProdotti?.forEach(p => {
      tot += (p.prezzo ? p.prezzo : 0) * (p.quantita ? p.quantita : 1);
    })
    return tot;
  }


}
