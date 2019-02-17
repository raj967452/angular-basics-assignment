import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import * as fromApp from '../../store/app.reducres';
import * as fromAuth from '../../store/reducer/auth.reducers';
@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private store: Store<fromApp.AppState>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('auth').pipe(
      take(1),
      map((authState: fromAuth.State) => {
        return authState.isAuthenticated;
      })
    );
    /* if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this
        .router
        .navigate(['/signin']);
      return false;
    }*/
    // return this.authService.isAuthenticated();
  }
}
