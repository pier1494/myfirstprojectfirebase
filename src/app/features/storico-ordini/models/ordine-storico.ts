import * as moment from "moment";
import { Prodotto } from "./prodotto";
import { FcSliderItem } from "src/app/core/components/fc-slider/fc-slider.component";

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

  get title () {
    const dataAcquistoFormattata = this.dataAcquisto 
      ? moment(this.dataAcquisto).format("DD MMMM 'YY")
      : 'non definita';
    return `Acquisto di ${this.listaProdotti?.length} prodotti - ${this.prezzoTotale} € - ${dataAcquistoFormattata}`;
  }

  get items () {
    return this.listaProdotti.map(prodotto => {
      return {
        title: prodotto.titolo,
        description: `${prodotto.descrizione} <br/> 
        prezzo unitario: <strong>${ prodotto.prezzo } €</strong> <br/> 
        quantità: <strong>${ prodotto.quantita }</strong>`,
        imgThumb: prodotto.thumb,
        id: prodotto.id
      } as FcSliderItem   
    })    
  }

}
