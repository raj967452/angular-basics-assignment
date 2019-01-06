import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { CoreModule } from './component/core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './component/auth/auth.module';
import { ShoppingListModule } from './component/shopping-list/shopping-list.module';
import { shoppingListReducer } from './store/reducer/shopping-list.reducer';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule,
    StoreModule.forRoot({shoppingList: shoppingListReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
