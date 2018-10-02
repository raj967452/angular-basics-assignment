import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../services/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    {
      name: 'Apples',
      amount: 5
    },
    {
      name: 'Tomatoes',
      amount: 10
    }
  ];
  constructor() { }
  getIngredients() {
    console.table(this.ingredients);
    // return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient[]) {
    console.table(...ingredient);
    // this.ingredients.push(...ingredient);
    console.table(this.ingredients.slice());
    // this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
