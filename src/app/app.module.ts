import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './core/topbar/topbar.component';
import { PublicModule } from './core/product/product.module';
import { PrivateModule } from './core/private/private.module';
import { AuthModule } from './core/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';

// Import Firebase modules
import { Firestore, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Import your Firebase configuration
import { firebaseConfig } from './configurazioneFirebase';
import { NavigationServiceService } from './navigation-service.service';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { CartComponent } from './core/product/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    DashboardComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    PrivateModule,
    AuthModule,
    HttpClientModule,
  ],
  exports: [
    PublicModule,
      

  ],
  providers: [
    // Provide Firestore service
    { provide: Firestore, useFactory: () => getFirestore(initializeApp(firebaseConfig)) },
    // Add other services/providers here
    NavigationServiceService  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
