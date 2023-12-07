import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecensioniComponent } from './recensioni.component';
import { NavigationServiceService } from 'src/app/navigation-service.service';
import { LoaderService } from 'src/app/loader.service';
import { AuthService } from 'src/app/core/auth/authservice';
import { RecensioniRoutingmodule } from './recensioniroutingmodule';



@NgModule({
  declarations: [
    RecensioniComponent
  ],
  imports: [
    CommonModule,
  RecensioniRoutingmodule
  ],
  exports: [
    RecensioniComponent

  ],
  providers : [ 
    NavigationServiceService,
    LoaderService,
    AuthService
  ]
})
  @Injectable({
    providedIn: 'root',


})
export class RecensioniModule { }
