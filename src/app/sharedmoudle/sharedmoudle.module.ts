import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../core/components/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NavigationServiceService } from '../navigation-service.service';
import { LoaderService } from '../loader.service';
import { FcSliderComponent } from '../core/components/fc-slider/fc-slider.component';
import { PmSocialIconComponent } from '../core/components/pm-social-icon/pm-social-icon.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    FcSliderComponent,
    PmSocialIconComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    SpinnerComponent,
    FcSliderComponent,
    PmSocialIconComponent
  ],
  providers: [
    NavigationServiceService,
    LoaderService
  ],

})
export class SharedmoudleModule { }
