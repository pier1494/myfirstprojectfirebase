import { Prodotto } from "./prodotto";

export class OrdineStorico {
  id: string = "";
  listaProdotti: Array<Prodotto> = [];

  get prezzoTotale (){
    let tot = 0;
    this.listaProdotti?.forEach(p => {
      tot += p.prezzo ? p.prezzo : 0;
    })
    return tot;
  }


}
