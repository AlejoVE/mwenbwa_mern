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
        case type.updateDashboardData:
            return {
                ...state,
                leaves: action.payload.leaves,
                trees: action.payload.trees
            }   
        case type.setColor:
            return {
                ...state,
                color: action.payload.color,
            }   
        default:
            return {...state};
    }
}