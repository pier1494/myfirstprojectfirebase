import { Component, OnInit } from '@angular/core';
import { app } from './configurazioneFirebase';
import { getAuth } from 'firebase/auth';
import { RecensioniService } from './features/recensioni/services/recensioni.service';
import { SocialService } from './features/recensioni/services/social.service';
import { DataService } from './cache/dataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
data:any;


constructor(    private dataService: DataService,

    private recensioniService: RecensioniService,
    private socialService: SocialService
  ){}




  ngOnInit(): void {
    const auth = getAuth(app);
    console.log("CURRENT USER", auth.currentUser);
 
   

  
}
}