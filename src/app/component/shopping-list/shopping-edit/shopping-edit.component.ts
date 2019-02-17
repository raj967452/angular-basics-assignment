import {Component, OnInit, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {Ingredient} from '../../../services/ingredient.model';
import {NgForm} from '@angular/forms';
import * as ShoppingListAction from '../../../store/actions/shopping-list.action';
import * as fromApp from '../../../store/app.reducres';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']})
export class ShoppingEditComponent implements OnInit,
OnDestroy {
  @ViewChild('nameInput')nameInputRef: ElementRef;
  @ViewChild('amountInput')amountInpurRef: ElementRef;
  @ViewChild('f')slForm: NgForm;
  subscription: Subscription;
  editedItem: Ingredient;
  editMode = false;
  editedItemIndex: number;

  constructor(private store: Store < fromApp.AppState >) {}

  ngOnInit() {
    this.subscription = this
      .store
      .select('shoppingList')
      .subscribe(data => {
        if (data.editedIngredientIndex > -1) {
          this.editMode = true;
          this.editedItem = data.editedIngredient;
          this.slForm.setValue({name: this.editedItem.name, amount: this.editedItem.amount});
        } else {
          this.editMode = false;
        }
      });
  }
  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.store.dispatch(new ShoppingListAction.DeleteIngredient(this.editedItemIndex));
    this.onClear();
  }
  onSubmitItem(form: NgForm) {
    const value = form.value;
    const newIngredient: Ingredient = {
      name: value.name,
      amount: value.amount
    };
    if (this.editMode) {
      this.store.dispatch(new ShoppingListAction.UpdateIngredient({ingredient: newIngredient}));
    } else {
      this.store.dispatch(new ShoppingListAction.AddIngredient(newIngredient));
    }
  }
  ngOnDestroy() {
    this.store.dispatch(new ShoppingListAction.StopEdit());
    this.subscription.unsubscribe();
  }
}
