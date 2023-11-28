import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicMainComponent } from './public-main/public-main.component';
import { ProductServiceService } from './product-service.service';
import { CartComponent } from './cart/cart.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PublicMainComponent,
    CartComponent,

    
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  exports:[
    PublicMainComponent,
    
  ],
  providers: [
    ProductServiceService,
  ],
})
export class ProductModule { }
