import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducres';
import * as AuthAction from '../../store/actions/auth.action';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  constructor(private router: Router, private store: Store<fromApp.AppState>) { }
  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(
      user => {
        this.store.dispatch(new AuthAction.Signup());
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
          .then((token: string) => {
            this.store.dispatch( new AuthAction.SetToken(token));
          })
          .catch(error => console.log(error));
      }
    )
    .catch( error => console.log(error));
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
          this.store.dispatch(new AuthAction.Signin());
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then((token: string) => {
                // this.token = token;
              this.store.dispatch( new AuthAction.SetToken(token));
            })
            .catch(error => console.log(error));
        })
      .catch( error => console.log( 'error------', error));
  }

  logout() {
    firebase.auth().signOut();
    this.store.dispatch(new AuthAction.Logout());
    // this.token = null;
  }

  isAuthenticated() {
    return this.token != null;
    /* if (this.token != null) {
      return;
    } else {
      this.router.navigate(['/signin']);
    }*/
  }
  getToken() {
    firebase.auth().currentUser.getIdToken()
    .then((token: string) => this.token = token)
    .catch( error => console.log('error---------------------', error));
    return this.token;
  }


}
