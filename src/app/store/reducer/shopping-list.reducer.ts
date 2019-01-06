import * as ShoppingListActions from '../actions/shopping-list.action';
import { Ingredient } from '../../services/ingredient.model';

export interface AppState {
    shoppingList: State;
}
export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;

}
const intialState = {
    ingredients: [
        {
            name: 'Apples',
            amount: 5
        }, {
            name: 'Tomatoes',
            amount: 10
        }
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
};
export function shoppingListReducer(state = intialState, action: ShoppingListActions.ShoppingListAction) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            };
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[state.editedIngredientIndex];
            const updateIngredient = {
                ...ingredient,
                ...action.payload.ingredient
            };
            const ingredients = [...state.ingredients];
            ingredients[state.editedIngredientIndex] = updateIngredient;
            return {
                ...state,
                ingredients: ingredients,
                editedIngredient: null,
                editedIngredientIndex: -1
            };
        case ShoppingListActions.DELETE_INGREDIENT:
            const oldingredients = [...state.ingredients];
            oldingredients.splice(state.editedIngredientIndex, 1);
            return {
                ...state,
                ingredients: oldingredients,
                editedIngredient: null,
                editedIngredientIndex: -1
            };
        case ShoppingListActions.START_EDIT:
            const editedIngredient = {...state.ingredients[action.payload]};
            return {
                ...state,
                editedIngredient: editedIngredient,
                editedIngredientIndex: action.payload
            };
        case ShoppingListActions.STOP_EDIT:
            return {
                ...state,
                editedIngredient: null,
                editedIngredientIndex: -1
            };

        default:
            return state;
    }

}
