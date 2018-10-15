import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from '../component/recipes/recipes.component';
import { RecipeStartComponent } from '../component/recipes/recipe-start/recipe-start.component';
import { ShoppingListComponent } from '../component/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from '../component/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../component/recipes/recipe-edit/recipe-edit.component';
import { TemplateFormComponent } from '../component/assigments/template-form/template-form.component';

const appRoute: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'  },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent  },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent }
  ]},
  { path: 'shopping-list', component: ShoppingListComponent},
  { path: 'template-form', component: TemplateFormComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
