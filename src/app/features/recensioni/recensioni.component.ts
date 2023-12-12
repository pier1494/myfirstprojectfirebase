import { Component } from '@angular/core';
import { NavigationServiceService } from 'src/app/navigation-service.service';
import { TranslateService } from '@ngx-translate/core';
import { recensioni } from 'src/app/core/product/interfaceproduct/dbmodel';
import { RecensioniService } from './recensioniService';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recensioni',
  templateUrl: './recensioni.component.html',
  styleUrls: ['./recensioni.component.scss']
})
export class RecensioniComponent {
constructor(private NavigationServiceService:NavigationServiceService,
 private TranslateService:TranslateService,
 private recensioniService: RecensioniService){}
 reviews: Observable<recensioni[]> = new Observable<recensioni[]>();
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.reviews= this.recensioniService.getRecensioni();

}



}