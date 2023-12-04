import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicMainComponent } from './public-main/public-main.component';
import { ProductServiceService } from './product-service.service';
import { CartComponent } from './cart/cart.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderService } from 'src/app/loader.service';

import { SharedmoudleModule } from 'src/app/sharedmoudle/sharedmoudle.module';



@NgModule({
  declarations: [
    PublicMainComponent,
    CartComponent,
    
    
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    SharedmoudleModule
  ],
  exports:[
    PublicMainComponent,
    
  ],
  providers: [
    ProductServiceService,
    LoaderService
  ],
})
export class ProductModule { }
