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

