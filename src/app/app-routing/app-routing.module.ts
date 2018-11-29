import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { ShoppingListComponent } from '../component/shopping-list/shopping-list.component';
import { HomeComponent } from '../component/core/home/home.component';

const appRoute: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: '../component/recipes/recipes.module#RecipesModule'},
  { path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoute, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
