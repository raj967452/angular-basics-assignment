import { ActionReducerMap } from '@ngrx/store';

import * as fromShoppingList from './reducer/shopping-list.reducer';
import * as fromAuth from './reducer/auth.reducers';

export interface AppState {
    shoppingList: fromShoppingList.State;
    auth: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
    shoppingList: fromShoppingList.shoppingListReducer,
    auth: fromAuth.authReducer
};
