import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { AuthService } from '../../services/auth/auth.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { RecipeService } from '../../services/recipe.service';
import { ShoppingListService } from '../../services/shopping-list.service';
import { SharedModule } from '../../shared/shared.module';
import { LoggingInterceptor } from '../../shared/logging.interceptor';
import { AuthInterceptor } from '../../shared/auth.interceptor';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    AuthService,
    DataStorageService,
    RecipeService,
    ShoppingListService,
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
})
export class CoreModule { }
