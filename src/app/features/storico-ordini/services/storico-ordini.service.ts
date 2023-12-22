import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OrdineStorico } from '../models/ordine-storico';
import * as moment from 'moment';
import * as jsons from './mock_storicoOrdini';
import { Prodotto } from '../models/prodotto';


@Injectable({
  providedIn: 'root'
})
export class StoricoOrdiniService {

  constructor() { }

  getUltimoOrdine(): Observable<OrdineStorico> {
    const myMock = <any> jsons.ultimoOrdine;
    const res: OrdineStorico = new OrdineStorico();

    return of(Object.assign(res, myMock) as OrdineStorico);
  }

  getUltimiOrdini(numOrdini: number): Observable<OrdineStorico[]> {
    const myMock = <any[]> jsons.ultimiOrdini;
    return of(myMock.map(m => {
      const res: OrdineStorico = new OrdineStorico();
      return Object.assign( res, m ) as OrdineStorico;
    }).sort((a, b) => {
      // Converti le date in oggetti Date per il confronto
      let dataA = new Date(a.dataAcquisto);
      let dataB = new Date(b.dataAcquisto);

      // Ordina in ordine decrescente (dal più recente al più vecchio)
      return dataB.getTime() - dataA.getTime();
    }).filter((m,i) => i < numOrdini))
  }
}
