import { Component, Input } from '@angular/core';

// Definizione dell'interfaccia User
interface User {
  userId: string;
  profileImg: string;
  name: string;
}

@Component({
  selector: 'pm-social-icon',
  // Template HTML inline
  template: `
    <div class="pm-social-icon">
      <img [src]="user.profileImg" alt="Profile image" class="profile-img">
      <p class="user-name">{{ user.name }}</p>
    </div>
  `,
  // Stili CSS inline
  styles: [`
    .pm-social-icon {
      text-align: center;
    }
    .profile-img {
      width: 100px;  // Adatta questa dimensione a seconda delle tue esigenze
      height: 100px;
      border-radius: 50%;
    }
    .user-name {
      font-size: 16px;
      margin-top: 10px;
    }
  `]
})
export class PmSocialIconComponent {
  @Input() user: User = {} as User;
}
