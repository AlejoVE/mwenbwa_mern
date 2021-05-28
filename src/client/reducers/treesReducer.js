import {type} from '../types/types'

const initialState = {trees: [], activeTree: null, treeIsLoading: true}

export const treesReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.setTrees:
            return {
                ...state,
                trees: [...action.payload]
            }
        case type.treeStartLoading:
            return {
                ...state,
                treeIsLoading: true,
            }
        case type.setActiveTree:
            return {
                ...state,
                activeTree: action.payload
            }
        case type.treeFinishLoading:
            return {
                ...state,
                treeIsLoading: false
            }
        case type.cleanActiveTree:
            return{
                ...initialState
            }
        default:
            return {...state};
    }
}