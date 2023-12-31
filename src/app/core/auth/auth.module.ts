import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PrivateMainComponent } from './private-main/private-main.component';
import { NavigationServiceService } from 'src/app/navigation-service.service';
import { AuthRoutingModule } from './auth-routing-module';
import { LoaderService } from 'src/app/loader.service';
import { AuthService } from './authservice';
import { SharedmoudleModule } from 'src/app/sharedmoudle/sharedmoudle.module';


@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    PrivateMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
SharedmoudleModule,


  ],
  exports: [
    LoginComponent,
    RegistrationComponent,
    PrivateMainComponent,
  ],

  providers: [
    NavigationServiceService,
    LoaderService,
    AuthService
  ],
})
@Injectable({
  providedIn: 'root',
})


export class AuthModule { }
