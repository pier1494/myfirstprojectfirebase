import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicMainComponent } from './public-main/public-main.component';
import { LoginComponent } from '../auth/login/login.component';
import { AppModule } from 'src/app/app.module';
import { ProductServiceService } from './product-service.service';



@NgModule({
  declarations: [
    PublicMainComponent,
    
  ],
  imports: [
    CommonModule,
   
  ],
  exports:[
    PublicMainComponent,
    
  ],
  providers: [
    ProductServiceService,
  ],
})
export class PublicModule { }
