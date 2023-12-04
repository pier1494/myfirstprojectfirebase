import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

//   private loading: boolean = false;

//   constructor() { }

//   setLoading(loading: boolean) {
//     console.log('Show loader');
//     this.loading = loading;
//   }

//   getLoading(): boolean {
//     console.log('close loader');
//     return this.loading;
//   }
// }


private apiCount = 0;
private isLoadingSubject = new BehaviorSubject<boolean>(false);
isLoading$ = this.isLoadingSubject.asObservable();

constructor() { }

showLoader() {
  if (this.apiCount === 0) {
    console.log('Show loader');
    this.isLoadingSubject.next(true);
  }
  this.apiCount++;
}

hideLoader() {
  this.apiCount--;
  if (this.apiCount === 0) {
    console.log('hide loader');
    this.isLoadingSubject.next(false);
  }
}

// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';


// @Injectable({ 
//   providedIn: 'root' })
//  export class LoadingService { 
//   private apiCount = 0 ; 
//   private isLoadingSubject = new BehaviorSubject<boolean>( false ); 
//   isLoading$ = this .isLoadingSubject.asObservable(); 

//   constructor() { }

//   showLoader() { 
//     if ( this.apiCount === 0 ) { 
//       console.log('Show loader');

//       this.isLoadingSubject.next(true); 
//     } 
//     this.apiCount++; 
//   } 

//   hideLoader() { 
//     this .apiCount--; 
//     if ( this .apiCount === 0 ) { 
//           console.log('Show loader');

//       this .isLoadingSubject.next( false ); 
//     } } 
  }
