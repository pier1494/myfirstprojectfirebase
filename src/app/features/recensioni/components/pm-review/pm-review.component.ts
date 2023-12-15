import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../../models/review.model';
import { User } from '../../models/user.model';
import { SocialService } from '../../services/social.service';
// Importa qui il tuo service per ottenere i dati dell'utente

@Component({
  selector: 'app-pm-review',
  templateUrl: './pm-review.component.html',
  styleUrls: ['./pm-review.component.scss'] // Se hai stili specifici
})
export class PmReviewComponent implements OnInit {
  @Input() review: Review = {} as Review;
  user: User = {} as User;

  constructor(private socialService: SocialService) { } // Inietta il tuo UserService

  ngOnInit() {
    // Assumendo che hai un metodo nel tuo UserService per ottenere i dati dell'utente
    this.socialService.getUserInfo(this.review.id_utente).subscribe({
      next: (userData) => {
        this.user = {
          userId: userData.id,
          profileImg: userData.img_profilo ? userData.img_profilo : '/assets/profiles/default.png',
          name: userData.nome       
        };
      },
      error: error => {
        console.error('Errore nel recuperare i dati dell\'utente', error);
      }
    });
  }
}
