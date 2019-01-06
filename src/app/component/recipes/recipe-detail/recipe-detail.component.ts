import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../../../services/recipe.model';
import { RecipeService } from '../../../services/recipe.service';
import { Store } from '@ngrx/store';
import { Ingredient } from '../../../services/ingredient.model';
import * as ShoppingListAction from '../../../store/actions/shopping-list.action';
import * as fromShoppingList from '../../../store/reducer/shopping-list.reducer';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(
    private recipeService: RecipeService, 
    private router: Router, 
    private route: ActivatedRoute,
    private store: Store<fromShoppingList.AppState>
    ) { }

  ngOnInit() {
    this.route.params
      .subscribe((param: Params) => {
        this.id = +param['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      });
  }
  onAddToShoppingList () {
    this.store.dispatch(new ShoppingListAction.AddIngredients(this.recipe.ingredients));
    // this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
