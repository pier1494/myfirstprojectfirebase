import { Component, OnInit } from '@angular/core';
import { app } from './configurazioneFirebase';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
title:any



  ngOnInit(): void {
    const auth = getAuth(app);
    console.log("CURRENT USER", auth.currentUser);
  }
}

  

