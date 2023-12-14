import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoricoOrdiniComponent } from './storico-ordini.component';
import { NavigationServiceService } from 'src/app/navigation-service.service';
import { LoaderService } from 'src/app/loader.service';
import { AuthService } from 'src/app/core/auth/authservice';
import { StoricoOrdiniRoutingModule } from './storicoordiniroutingmodule';
import { SharedmoudleModule } from 'src/app/sharedmoudle/sharedmoudle.module';




@NgModule({
  declarations: [
    StoricoOrdiniComponent
  ],
  imports: [
    CommonModule,
    SharedmoudleModule,
    StoricoOrdiniRoutingModule
  ],
  exports: [
StoricoOrdiniComponent
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

export class StoricoOrdiniModule { }
