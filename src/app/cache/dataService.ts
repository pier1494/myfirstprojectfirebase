import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, switchMap } from 'rxjs/operators';
import { CacheService } from './cacheService';
import { LoaderService } from '../loader.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient, 
    private cacheService: CacheService,
    private loading: LoaderService
  ) {}

  getHTTPData(url: string): Observable<any> {
    const cacheKey = url;
    return of(cacheKey).pipe(
      switchMap(key => {
        // Controlla se il dato è in cache
        if (this.cacheService.has(key)) {
          return of(this.cacheService.get(key));
        } else {
          // Esegue la chiamata di rete se il dato non è in cache
          return this.http.get(url).pipe(
            tap(data => this.cacheService.set(key, data)), // Salva il dato in cache
            catchError(error => {
              // Gestione degli errori
              console.error('Error fetching data:', error);
              return of(null);
            })
          );
        }
      })
    );
  }

  getGenericData(key: string, callback: any): Observable<any> {
    const cacheKey = key;
    return of(cacheKey).pipe(
      switchMap(key => {
        // Controlla se il dato è in cache
        if (this.cacheService.has(key)) {
          return of(this.cacheService.get(key));
        } else {
          // Esegue la chiamata di rete se il dato non è in cache
          this.loading.showLoader();
          return callback().pipe(
            tap(data => {
              this.cacheService.set(key, data);
              this.loading.hideLoader();
            }), // Salva il dato in cache
            catchError(error => {
              // Gestione degli errori
              console.error('Error fetching data:', error);
              this.loading.hideLoader();
              return of(null);
            })
          );
        }
      })
    );
  }  
}
