import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ShoppingListService } from '../../../services/shopping-list.service';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../../services/ingredient.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInpurRef: ElementRef;
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editedItem: Ingredient;
  editMode = false;
  editedItemIndex: number;
  private ingredients: Ingredient[];

  constructor( private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe( (index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.slService.getIngredient(index);
      console.log(this.slForm);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  onSubmitItem(form: NgForm) {
    const value = form.value;
    const newIngredient: Ingredient = {name: value.name, amount: value.amount};
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
