import {type} from '../types/types'

const initialState = {uid: null, userName: null, isAuthenticated: false}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.authLogin:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true
            }
        default:
            return {...state};
    }
}