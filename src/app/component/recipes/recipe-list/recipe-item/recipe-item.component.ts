import { Component, OnInit, Input} from '@angular/core';
// import { RecipeService } from '../../../../services/recipe.service';
import { Recipe } from '../../../../services/recipe.model';

import {Observable, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  numberSubcription: Subscription;
  @Input() recipe: Recipe;
  @Input() index: number;

  // constructor( private recipeService: RecipeService) { }
  ngOnInit() {
    /*const myNumber = interval(1000)
    .pipe(
      map(data: number) => {return data * 2
      }
    );*/
    /*const myNumber = Observable.create((obs: Observer<string>) => {
      setTimeout(() => {
        obs.next('First');
      }, 1000);
      setTimeout(() => {
        obs.next('Second');
      }, 1000);
      setTimeout(() => {
        obs.error('this does not work');
      }, 1000);
    });
    myNumber.subscribe(
      (data: string) => { console.log(data); },
      ( error: string) => { console.log(error); },
      () => { console.log('completed'); }
    );*/
    /*myNumber.subscribe((num: number) => {
      console.log(num);
    });*/
  }
  /*onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }*/

}
