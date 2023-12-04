
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { finalize } from 'rxjs/operators';
// import { Injectable } from '@angular/core';
// import { LoaderService } from '../loader.service';

// @Injectable()
// export class LoadingInterceptor implements HttpInterceptor {

//   private totalRequests = 0;

//   constructor(
//     private loadingService: LoaderService
//   ) {}

//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     console.log('caught')
//     this.totalRequests++;
//     this.loadingService.setLoading(true);
//     return next.handle(request).pipe(
//       finalize(() => {
//         this.totalRequests--;
//         if (this.totalRequests == 0) {
//           this.loadingService.setLoading(false);
//         }
//       })
//     );
//   }
// }

import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../loader.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  
  constructor(private loader: LoaderService) {}
  intercept(
    Request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loader.showLoader();
    return next.handle(Request).pipe(
      finalize(() => this.loader.hideLoader())
    );
  }
}


// ULTIMO import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { finalize } from 'rxjs/operators';
// import { LoaderService } from '../loading.service';

// @Injectable()
// export class LoaderInterceptor implements HttpInterceptor {
  
//   constructor(private LoaderService: LoaderService) {}

//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     console.log('Interceptor: Request started');
//     this.LoaderService.showLoader();

//     return next.handle(req).pipe(
//       finalize(() => {
//         console.log('Interceptor: Request completed');
//         this.LoaderService.hideLoader();
//       })
//     );
//   }
// }




// import { Injectable } from '@angular/core';
// import {
//   HttpEvent,
//   HttpInterceptor,
//   HttpHandler,
//   HttpRequest,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { finalize } from 'rxjs/operators';
// import { LoaderService } from '../loader.service';

// @Injectable()
// export class LoaderInterceptor implements HttpInterceptor {
  
//   constructor(private loader: LoaderService) {}
//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     this.loaderService.showLoader();
//     return next.handle(request).pipe(
//       finalize(() => this.loaderService.hideLoader())
//     );
//   }
// }