import { Component, OnInit } from '@angular/core';
import { getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth';

@Component({
  selector: 'app-private-main',
  templateUrl: './private-main.component.html',
  styleUrls: ['./private-main.component.scss']
})
export class PrivateMainComponent implements OnInit {
  user: User | null = null;

  ngOnInit() {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      this.user = user;

      if (user) {
        // User is signed in
        user.providerData.forEach((profile) => {
          console.log("Sign-in provider: " + profile.providerId);
          console.log("  Provider-specific UID: " + profile.uid);
          console.log("  Name: " + profile.displayName);
          console.log("  Email: " + profile.email);
          console.log("  Photo URL: " + profile.photoURL);
        });
      } else {
        // User is signed out
        console.log("User is signed out");
      }
    });
  }

  async signOutUser() {
    const auth = getAuth();

    try {
      await signOut(auth);
      console.log("Sign-out successful.");
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  }
}
