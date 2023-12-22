import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../core/components/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NavigationServiceService } from '../navigation-service.service';
import { LoaderService } from '../loader.service';
import { FcSliderComponent } from '../core/components/fc-slider/fc-slider.component';
import { FcAccordionItemComponent } from '../core/components/fc-accordion-item/fc-accordion-item.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    FcSliderComponent,
    FcAccordionItemComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,

  ],
  exports: [
    SpinnerComponent,
    FcSliderComponent,
    FcAccordionItemComponent
  ],
  providers: [
    NavigationServiceService,
    LoaderService
  ],

})
export class SharedmoudleModule { }
