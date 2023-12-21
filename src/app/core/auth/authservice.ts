import { Injectable } from "@angular/core";
import { NavigationServiceService } from "src/app/navigation-service.service";
import { LoaderService } from './../../loader.service';
import { getAuth, signInWithEmailAndPassword, UserCredential, signOut } from "firebase/auth";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private navigationService: NavigationServiceService,
    private loading: LoaderService,
  ) {
  }



  async signInUser(email: string, password: string): Promise<UserCredential> {
    try {
      this.loading.showLoader();
      const auth = getAuth();
      return await signInWithEmailAndPassword(auth, email, password);
    } finally {
      this.loading.hideLoader();
    }
  }

  async signOutUser(): Promise<void> {
    const auth = getAuth();
    return signOut(auth);
  }
}
