import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

import { Recipe } from '../../services/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    console.log( 'app-recipes--------------------' );
    console.log(this.selectedRecipe);
    this.recipeService.recipeSelected.subscribe( (recipe: Recipe) => this.selectedRecipe = recipe );
  }

}
