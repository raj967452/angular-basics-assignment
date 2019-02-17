import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducres';
import * as AuthAction from '../../../store/actions/auth.action';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor( private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm) {
    const email = form.value.email;
    const pass = form.value.password;
    console.log('onSignIn');

    // this.authService.signinUser(email, pass);
    this.store.dispatch(new AuthAction.DoSignin({username: email, password: pass}));
  }

}
