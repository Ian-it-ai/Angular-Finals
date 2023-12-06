// auth.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User | null>;
  getAuthState: any;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }

 
  login(email: string, password: string): Promise<firebase.auth.UserCredential> {
      return this.afAuth['signInWithEmailAndPassword'](email, password);
  }

  async register(email: string, password: string) {
    try {
      const result = await this.afAuth['createUserWithEmailAndPassword'](email, password);
      console.log('User registered: ', result.user);
    } catch (error) {
      console.error(error);
    }
}
logout() {
  localStorage.removeItem('currentUser');
}
}
