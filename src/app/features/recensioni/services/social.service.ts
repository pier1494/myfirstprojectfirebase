import { Injectable } from '@angular/core';
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { Observable, catchError, combineLatest, forkJoin, map, switchMap } from "rxjs";
import { db } from "src/app/configurazioneFirebase";
import { LoaderService } from 'src/app/loader.service';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor(private loading: LoaderService) { }

  getUserInfo(userId: string): Observable<any> {
    this.loading.showLoader()    
    return new Observable<any>(observer => {
      getDoc(doc(db, 'users', userId)).then(snapshot => {
        const userData = snapshot.data();
        console.log("PASSO DALL'OBS: ", userData);
        observer.next(userData);
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
