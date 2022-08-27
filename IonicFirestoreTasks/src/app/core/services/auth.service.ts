/* eslint-disable @typescript-eslint/semi */
import { Injectable, Provider } from '@angular/core';
//import { FirebaseApp } from '@angular/fire/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
//import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FacebookAuthProvider, UserCredential } from 'firebase/auth';
import { AuthOptions, AuthProvider, User } from './auth.types'


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authState$: Observable<any>;  //firebase.User nao esta aceitando
  constructor(private afAuth: AngularFireAuth) {
    this.authState$ = this.afAuth.authState;
  }
  //private signInWithEmail({ email, password }): Promise<auth.UserCredential>

  get isAuthenticated(): Observable<boolean> {
    return this.authState$.pipe(map(user => user !== null));
  }

  authenticate({ isSignIn, provider, user }: AuthOptions): Promise<any> {
    let operation: Promise<any>;

    if (provider !== AuthProvider.Email){
      operation = this.signInWithPopup(provider);
    } else {
      operation = isSignIn ? this.signInWithEmail(user) : this.signUpWithEmail(user);
    }

    return operation;
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }

  private signInWithEmail({ email, password }: User): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
  private signUpWithEmail({ email, password, name }: User): Promise<any> {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((credential) =>
        credential.user
          .updateProfile({ displayName: name, photoURL: null })
          .then(() => credential)
      );
  }
  private signInWithPopup(provider: AuthProvider): Promise<any> {
    let signInProvider = null;

    switch (provider) {
      case AuthProvider.Facebook:
        signInProvider = new FacebookAuthProvider();
        break;
    }

    return this.afAuth.signInWithPopup(signInProvider);
  }
}
