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
      return Object.assign(
        res, m, {listaProdotti: m.listaProdotti as Prodotto[]}
      ) as OrdineStorico;      
    }).filter((m,i) => i < numOrdini))
  }
}
