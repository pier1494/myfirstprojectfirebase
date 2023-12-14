import { Injectable } from "@angular/core";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { Observable, catchError, combineLatest, forkJoin, map, switchMap } from "rxjs";
import { db } from "src/app/configurazioneFirebase";
import { recensioni } from "src/app/core/product/interfaceproduct/dbmodel";
import { LoaderService } from "src/app/loader.service";
import { NavigationServiceService } from "src/app/navigation-service.service";


@Injectable({
  providedIn: 'root'
})
export class RecensioniService {

  id?: string; // ID generato automaticamente da Firebase per la recensione
  id_utente!: string; // ID del documento dell'utente nel Firestore
  productId!: string;
  

  constructor(private navigationService: NavigationServiceService,
    private loading: LoaderService) { }


  getRecensioni(): Observable<recensioni[]> {
    this.loading.showLoader()
    const reviewsCollection = collection(db, 'recensioni');
    return new Observable<recensioni[]>(observer => {
      getDocs(reviewsCollection).then(snapshot => {
        const reviews = snapshot.docs.map(doc => doc.data() as recensioni);
        console.log("PASSO DALL'OBS: ", reviews);
        observer.next(reviews);
        observer.complete();
      }).catch(error => {
        console.error('Errore durante il recupero dei prodotti da Firebase', error);
        observer.error(error)
      }).finally(() => {
        this.loading.hideLoader();
      });;

    });
  }


  getRecensioniByUserId(userId: string): Observable<recensioni[]> {
    this.loading.showLoader();
    console.log("Cerco le recensioni di " + userId);
    const reviewsByUserQuery = query(collection(db, 'recensioni'), where('id_utente', '==', userId));
    return new Observable<recensioni[]>(observer => {
      getDocs(reviewsByUserQuery).then(snapshot => {
        const reviews = snapshot.docs.map(doc => doc.data() as recensioni);
        observer.next(reviews);
        observer.complete();
      }).catch(error => {
        console.error('Errore durante il recupero delle recensioni dell\'utente da Firebase', error);
        observer.error(error);
      }).finally(() => {
        this.loading.hideLoader();
      });
    });
  }

  getRecensioniByProductId(productId: string): Observable<recensioni[]> {
    this.loading.showLoader();
    const reviewsByProductQuery = query(collection(db, 'recensioni'), where('id_product', '==', productId));
    return new Observable<recensioni[]>(observer => {
      getDocs(reviewsByProductQuery).then(snapshot => {
        const reviews = snapshot.docs.map(doc => doc.data() as recensioni);
        observer.next(reviews);
        observer.complete();
      }).catch(error => {
        console.error('Errore durante il recupero delle recensioni del prodotto da Firebase', error);
        observer.error(error);
      }).finally(() => {
        this.loading.hideLoader();
      });
    });
  }

  
}