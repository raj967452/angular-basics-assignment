import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { NgForm, FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup;
  subscription: Subscription;
  id: number;
  editMode = false;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private fb: FormBuilder) { }

  ngOnInit() {
    this.route.params
      .subscribe((param: Params) => {
        this.id = +param['id'];
        this.editMode = param['id'] != null;
        this.initForm();
      });
  }
  createItem(): FormGroup {
    return this.fb.group({
      'name': '',
      'amount': ''
    });
  }
  addItem(): void {
   // this.items = this.recipeForm.get('ingredients') as FormArray;
  //  this.items.push(this.createItem());
  }
  private initForm() {
    let recipeName = '', recipeImagePath = '', recipeDescription = '';
    const recipeIngredients =  new FormArray([]);
// (<FormArray>this.recipeForm.get('ingredients'));
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      if (recipe['ingredients']) {
        for ( const ingredient of recipe.ingredients) {
          // console.log(this.recipeForm.get('ingredients') as FormArray);
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                  Validators.required,
                  Validators.pattern(/^[1-9]+[0-9]*$/)
                ])
            })
          );
        }
        console.log(recipeIngredients);
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription),
      'ingredients': recipeIngredients
    });
    console.log(this.recipeForm);
  }
  get ingredients() {
    return <FormArray>this.recipeForm.get('ingredients');
  }
  onSubmit() {
    console.log(this.recipeForm);
  }

}
