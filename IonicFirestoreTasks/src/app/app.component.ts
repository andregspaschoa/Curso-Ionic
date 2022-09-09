/* eslint-disable no-trailing-spaces */

import { Component } from '@angular/core';
import { User } from 'firebase/auth';
import { AuthService } from './core/services/auth.service';
//import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  pages: { url: string; direction: string; icon: string; text: string }[];
  user: User;  // no curso estava firebase.User
  /*statusBar: any;
  splashScreen: any;  // da forma como está comentada abaixo nao funcionou*/


  constructor(
    private authService: AuthService
    /*
    private platform: Platform,
    //private splashScreen: SplashScreen,
    //private statusBar: StatusBar*/
    )

  {
    this.initializeApp();
  }

  initializeApp() {
    this.pages = [
      { url: '/tasks', direction: 'back', icon: 'checkmark', text: 'Tasks' },
      { url: '/tasks/create', direction: 'forward', icon: 'add', text: 'New Tasks' },
    ];

    this.authService.authState$.subscribe(user => (this.user = user));

    /*this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    })*/;
  }
}
