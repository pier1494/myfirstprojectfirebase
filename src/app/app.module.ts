import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './core/topbar/topbar.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

// Import Firebase modules
import { Firestore, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Import your Firebase configuration
import { firebaseConfig } from './configurazioneFirebase';
import { NavigationServiceService } from './navigation-service.service';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { TranslateLoader, TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ProductModule } from './core/product/product.module';
import { SpinnerComponent } from './core/components/spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderService } from './loader.service';
import { SharedmoudleModule } from './sharedmoudle/sharedmoudle.module';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { StoricoOrdiniModule } from './features/storico-ordini/storico-ordini.module';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
SharedmoudleModule,
    ProductModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'it',
    }),
    BrowserAnimationsModule
    
  ],
  exports: [
    ProductModule,
      SharedmoudleModule,

  ],
  providers: [
    // Provide Firestore service
    { provide: Firestore, useFactory: () => getFirestore(initializeApp(firebaseConfig)) },
    {
      provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true
    } ,
  
    { provide: NavigationServiceService, useClass: NavigationServiceService },
    { provide: LoaderService, useClass: LoaderService },
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}