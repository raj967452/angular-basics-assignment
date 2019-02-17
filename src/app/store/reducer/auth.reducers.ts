import * as AuthActions from '../actions/auth.action';
export interface State {
    token: string;
    isAuthenticated: boolean;
}
const intialState: State = {
    token: null,
    isAuthenticated: false
};

export function authReducer(state = intialState, action: AuthActions.AuthAction) {
    switch (action.type) {
        case AuthActions.SIGNUP:
        case AuthActions.SIGNIN:
            return {
                ...state,
                isAuthenticated: true
            };
        case AuthActions.LOGOUT:
            return {
                ...state,
                token: null,
                isAuthenticated: false
            };
        case AuthActions.SET_TOKEN:
            return {
                ...state,
                token: action.payload
            };
        default:
            return state;
    }
}
