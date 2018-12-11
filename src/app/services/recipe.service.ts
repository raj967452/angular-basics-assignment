import {Injectable, EventEmitter, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from './ingredient.model';
import {ShoppingListService} from '../services/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable({providedIn: 'root'})
export class RecipeService implements OnInit {
  recipeSelected = new Subject < Recipe[] > ();
  private recipes : Recipe[] = [
    {
      'name': 'Tasty Schnitzel',
      'description': 'A super-tasty Schnitzel - just awesome!',
      'imagePath': 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      'ingredients': [
        {
          'name': 'Meat',
          'amount': 1
        }, {
          'name': 'French Fries',
          'amount': 10
        }
      ]
    }, {
      'name': 'Big Fat Burger',
      'description': 'What else you need to say?',
      'imagePath': 'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_' +
          'Cheese_Steak_Burger.jpg',
      'ingredients': [
        {
          'name': 'Buns',
          'amount': 10
        }, {
          'name': 'Meat',
          'amount': 1
        }
      ]
    }
  ];
  constructor(private slService : ShoppingListService) {}

  ngOnInit() {}
  setRecpies(recipes : Recipe[]) {
    this.recipes = recipes;
    this
      .recipeSelected
      .next(this.recipes.slice());
  }
  getRecipes() {
    return this
      .recipes
      .slice();
  }
  getRecipe(index : number) {
    return this.recipes[index];
  }
  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this
      .slService
      .addIngredients(ingredients);
  }
  deleteRecipe(index: number) {
    this
      .recipes
      .splice(index, 1);
    this
      .recipeSelected
      .next(this.recipes.slice());
  }
}
