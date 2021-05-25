import {type} from '../types/types'

const initialState = {error: null}

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.setError:
            return {
                ...state,
                error: action.payload
            }
        case type.cleanError:
            return {
                ...state,
                error: null
            }
    
        default:
            return {...state};
    }
}