import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecensioniComponent } from './recensioni.component';
import { NavigationServiceService } from 'src/app/navigation-service.service';
import { LoaderService } from 'src/app/loader.service';
import { AuthService } from 'src/app/core/auth/authservice';
import { RecensioniRoutingmodule } from './recensioniroutingmodule';
import { RecensioniService } from './services/recensioni.service';
import { SharedmoudleModule } from 'src/app/sharedmoudle/sharedmoudle.module';
import { PmReviewComponent } from './components/pm-review/pm-review.component';



@NgModule({
  declarations: [
    RecensioniComponent,
    PmReviewComponent
  ],
  imports: [
    CommonModule,
    SharedmoudleModule,
    RecensioniRoutingmodule
  ],
  exports: [
    RecensioniComponent

  ],
  providers : [ 
    NavigationServiceService,
    LoaderService,
    AuthService,
RecensioniService
  ]
})
  @Injectable({
    providedIn: 'root',


})
export class RecensioniModule { }
