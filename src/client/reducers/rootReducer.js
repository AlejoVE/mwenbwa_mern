import {combineReducers} from 'redux';
import {authReducer} from "./authReducer";
import {treesReducer} from "./treesReducer";
import {errorReducer} from "./errorReducer"

export const rootReducer = combineReducers(
    {
        auth: authReducer,
        trees: treesReducer,
        errors: errorReducer
    }
)