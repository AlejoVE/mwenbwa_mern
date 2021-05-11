import {type} from '../types/types'

const initialState = {uid: null, userName: null}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.authLogin:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}