import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoricoOrdiniComponent } from './storico-ordini.component';
import { NavigationServiceService } from 'src/app/navigation-service.service';
import { LoaderService } from 'src/app/loader.service';
import { AuthService } from 'src/app/core/auth/authservice';
import { StoricoOrdiniRoutingModule } from './storicoordiniroutingmodule';




@NgModule({
  declarations: [
    StoricoOrdiniComponent
  ],
  imports: [
    CommonModule,
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
