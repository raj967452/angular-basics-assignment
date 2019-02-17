import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { DataStorageService } from '../../../shared/data-storage.service';
import * as fromAuth from '../../../store/reducer/auth.reducers';
import * as fromApp from '../../../store/app.reducres';
import * as AuthActions from '../../../store/actions/auth.action';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;
  constructor(
    private dataStorageService: DataStorageService,
    private store: Store <fromApp.AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }
  /*onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }*/
  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe((response) => {
      console.log(response);
    });
  }
  onFetchData() {
    this.dataStorageService.getRecipes();
  }
  onLogout() {
    this.store.dispatch( new AuthActions.Logout());
  }
}
