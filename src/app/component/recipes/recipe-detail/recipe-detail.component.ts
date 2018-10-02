import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../services/recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  onAddToShoppingList () {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }
}
