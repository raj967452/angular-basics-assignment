import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { RecipesComponent } from './component/recipes/recipes.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './component/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeDetailComponent } from './component/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './component/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './component/recipes/recipe-list/recipe-item/recipe-item.component';
import { DropdownDirective } from './directive/dropdown.directive';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RecipeStartComponent } from './component/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './component/recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './component/auth/signup/signup.component';
import { SigninComponent } from './component/auth/signin/signin.component';
import { AuthService } from './services/auth/auth.service';
import { AuthGuardService } from './services/auth/auth-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
