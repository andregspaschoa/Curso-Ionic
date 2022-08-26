/* eslint-disable @typescript-eslint/semi */
import { Injectable, Provider } from '@angular/core';
import { FirebaseApp } from '@angular/fire/compat';
//import { FirebaseApp } from '@angular/fire/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
//import { auth } from 'firebase/app';
import {
  Auth,
  FacebookAuthProvider,
  getAuth,
  ProviderId,
  UserCredential,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}
  //private signInWithEmail({ email, password }): Promise<auth.UserCredential>

  private signInWithEmail({ email, password }): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
  private signUpWithEmail({ email, password, name }): Promise<any> {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((credential) =>
        credential.user
          .updateProfile({ displayName: name, photoURL: null })
          .then(() => credential)
      );
  }
  private signInWithPopup(provider): Promise<any> {
    let signInProvider = null;

    switch (provider) {
      case 'facebook':
        signInProvider = new FacebookAuthProvider();
        break;
    }

    return this.afAuth.signInWithPopup(signInProvider);
  }
}
