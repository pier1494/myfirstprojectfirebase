import { Component, ViewEncapsulation } from '@angular/core';
import { LoaderService } from 'src/app/loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
  
})
export class SpinnerComponent {
  constructor(public  loader: LoaderService) { }
  // get isLoading(): boolean {
  //   return this.loaderService.getLoading();
  // }
  
}


// import { Component, ViewEncapsulation } from '@angular/core';
// import { LoadingService } from './../../../loading.service';

// @Component({
//   selector: 'app-spinner',
//   templateUrl: './spinner.component.html',
//   styleUrls: ['./spinner.component.scss'],
//   encapsulation: ViewEncapsulation.ShadowDom

// })
// export class SpinnerComponent {


  
// constructor(public loader: LoadingService){}
// }
