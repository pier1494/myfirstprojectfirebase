import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { prodotti } from './interfaceproduct/dbmodel';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../configurazioneFirebase';
import { LoaderService } from 'src/app/loader.service';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
 


  constructor(private http: HttpClient, private loading: LoaderService) {}

  getProducts(): Observable<prodotti[]> {
    const productsCollection = collection(db, 'prodotti');
    return new Observable<prodotti[]>(observer => {
      this.loading.showLoader()
      getDocs(productsCollection).then(snapshot => {
        const products = snapshot.docs.map(doc => doc.data() as prodotti);
        observer.next(products);
        observer.complete();
       }).catch(error => {
        console.error('Errore durante il recupero dei prodotti da Firebase', error);
        observer.error(error)
       }).finally(() => {
        this.loading.hideLoader();
      });;
     
    });
  } 


}
