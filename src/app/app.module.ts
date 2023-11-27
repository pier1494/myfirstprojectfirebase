import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './core/topbar/topbar.component';
import { PrivateModule } from './core/private/private.module';
import { AuthModule } from './core/auth/auth.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrivateModule,
    AuthModule,
    ProductModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'it',
    })
    
  ],
  exports: [
    ProductModule,
      

  ],
  providers: [
    // Provide Firestore service
    { provide: Firestore, useFactory: () => getFirestore(initializeApp(firebaseConfig)) },
    // Add other services/providers here
    NavigationServiceService  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}