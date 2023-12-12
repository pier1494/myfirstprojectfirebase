import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OrdineStorico } from '../models/ordine-storico';
import * as jsons from './mock_storicoOrdini'
@Injectable({
  providedIn: 'root'
})
export class StoricoOrdiniService {

  constructor() { }

  getUltimoOrdine(): Observable<OrdineStorico> {
    const myMock = <any> jsons.ultimoOrdini;
    return of(myMock as OrdineStorico);
  }

  getUltimiOrdini(numOrdini: number): Observable<OrdineStorico[]> {
    const myMock = <any[]> jsons.ultimiOrdini;
    return of(myMock as OrdineStorico[]);
  }
}
