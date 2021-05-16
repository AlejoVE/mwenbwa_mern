import {combineReducers} from 'redux';
import {authReducer} from "./authReducer";
import {treesReducer} from "./treesReducer";

export const rootReducer = combineReducers(
    {
        auth: authReducer,
        trees: treesReducer
    }
)