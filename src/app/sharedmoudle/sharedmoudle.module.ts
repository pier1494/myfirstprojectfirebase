import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../core/components/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NavigationServiceService } from '../navigation-service.service';
import { LoaderService } from '../loader.service';
import { FcSliderComponent } from '../core/components/fc-slider/fc-slider.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    FcSliderComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,

  ],
  exports: [
    SpinnerComponent,
    FcSliderComponent
  ],
  providers: [
    NavigationServiceService,
    LoaderService
  ],

})
export class SharedmoudleModule { }
