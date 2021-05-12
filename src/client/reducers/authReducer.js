import {type} from '../types/types'

const initialState = {uid: null, userName: null, isAuthenticated: false}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.authLogin:
            return {
                ...state,
                uid: action.payload.uid,
                userName: action.payload.userName,
                isAuthenticated: true
            }
        default:
            return {...state};
    }
}