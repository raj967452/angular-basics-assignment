import {Effect, Actions, ofType} from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, switchMap, mergeMap, tap } from 'rxjs/operators';
import { from } from 'rxjs';

import * as AuthActions from '../actions/auth.action';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
    @Effect()
    authSignUp = this.action$
    .pipe(
        ofType(AuthActions.DO_SIGNUP),
        map((action: AuthActions.DoSignup) => {
            return action.payload;
        }),
        switchMap((authData: {username: string, password: string}) => {
            return from(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
        }),
        switchMap(() => {
            return from(firebase.auth().currentUser.getIdToken());
        }),
        mergeMap((token: string) => {
            this.router.navigate(['/']);
            return [
                {
                    type: AuthActions.SIGNUP
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: token
                }
            ];
        })
    );

    @Effect()
    authSignIn = this.action$
    .pipe(
        ofType(AuthActions.DO_SIGNIN),
        map((action: AuthActions.DoSignin) => {
            return action.payload;
        }),
        switchMap((authData: {username: string, password: string}) => {
            return from(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
        }),
        switchMap(() => {
            return from(firebase.auth().currentUser.getIdToken());
        }),
        mergeMap((token: string) => {
            this.router.navigate(['/']);
            return [
                {
                    type: AuthActions.SIGNIN
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: token
                }
            ];
        })
    );
    @Effect({dispatch: false})
    authLogout = this.action$
    .pipe(
        ofType(AuthActions.LOGOUT),
        tap(() => {
            console.log(this);
            this.router.navigate(['/']);
        })
    );
    // action$: here $ sign means we are useing action type variable as obserable
    constructor(private action$: Actions, private router: Router) {}

}
