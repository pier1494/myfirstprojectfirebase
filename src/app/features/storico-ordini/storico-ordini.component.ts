import { Component } from '@angular/core';
import { StoricoOrdiniService } from './services/storico-ordini.service';
import { FcSliderItem } from 'src/app/core/components/fc-slider/fc-slider.component';
import { OrdineStorico } from './models/ordine-storico';

@Component({
  selector: 'app-storico-ordini',
  templateUrl: './storico-ordini.component.html',
  styleUrls: ['./storico-ordini.component.scss']
})
export class StoricoOrdiniComponent {
  myItems: FcSliderItem[] = [];
  ultimoOrdine: OrdineStorico = new OrdineStorico();

  constructor(
    private storicoOrdiniService: StoricoOrdiniService
  ){
  }

  ngOnInit(){
    this.storicoOrdiniService.getUltimoOrdine().subscribe((ultimoOrdine) => {
      this.ultimoOrdine = ultimoOrdine;
      this.myItems = ultimoOrdine.listaProdotti.map(prodotto => {
        return {
          title: prodotto.titolo,
          description: `${prodotto.descrizione} <br/> 
          prezzo unitario: <strong>${ prodotto.prezzo } €</strong> <br/> 
          quantità: <strong>${ prodotto.quantita }</strong>`,
          imgThumb: prodotto.thumb,
          id: prodotto.id
        } as FcSliderItem   
      })    
    })
  }


  handleItemClicked(itemId: string): void {
    console.log('Item clicked:', itemId);
    // Qui puoi gestire l'evento, per esempio effettuando il routing o un'altra logica.
  }
  
}
