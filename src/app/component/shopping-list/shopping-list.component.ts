import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import {Ingredient} from '../../services/ingredient.model';
import * as fromApp from '../../store/app.reducres';
import * as ShoppingListAction from '../../store/actions/shopping-list.action';

@Component({selector: 'app-shopping-list', templateUrl: './shopping-list.component.html', styleUrls: ['./shopping-list.component.css']})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable <{ingredients: Ingredient[]}>;
  private subscription: Subscription;

  constructor(private store: Store <fromApp.AppState>) {}

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  }
  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListAction.StartEdit(index));
  }
}
