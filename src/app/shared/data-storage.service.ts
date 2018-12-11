import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {RecipeService} from '../services/recipe.service';
import {AuthService} from '../services/auth/auth.service';
import {Recipe} from '../services/recipe.model';

const config = {
  databaseURL: 'https://recipeapp-8a7ab.firebaseio.com'
};

@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    // const token = this.authService.getToken(); return
    // this.httpClient.put(config.databaseURL + '/recipes.json?auth=' + token,
    // this.recipeService.getRecipes());
    const req = new HttpRequest('PUT', config.databaseURL + '/recipes.json', this.recipeService.getRecipes());
    return this
      .httpClient
      .request(req);
  }

  getRecipes() {
    const token = this
      .authService
      .getToken();
    this.httpClient.get < Recipe[] > (config.databaseURL + '/recipes.json', {
      observe: 'body',
      responseType: 'json'
    }).pipe(map((recipes) => {
      // const recipes: Recipe[] = response.json();
      for (const recipe of recipes) {
        if (!recipe['ingredients']) {
          recipe['ingredients'] = [];
        }
      }
      return recipes;
    })).subscribe((recipes: Recipe[]) => {
      this
        .recipeService
        .setRecpies(recipes);
    });
  }

}
