import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicMainComponent } from './public-main/public-main.component';
import { ProductServiceService } from './product-service.service';
import { CartComponent } from './cart/cart.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    PublicMainComponent,
    CartComponent,

    
  ],
  imports: [
    CommonModule,
    TranslateModule
   
  ],
  exports:[
    PublicMainComponent,
    
  ],
  providers: [
    ProductServiceService,
  ],
})
export class ProductModule { }
