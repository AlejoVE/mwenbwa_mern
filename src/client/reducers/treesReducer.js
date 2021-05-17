import {type} from '../types/types'

const initialState = {trees: [], activeTree: null, treeIsLoading: true}

export const treesReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.setTrees:
            return {
                ...state,
                trees: [...action.payload]
            }
        case type.treesStartLoading:
            return {
                ...state,
                isLoading: true,
            }
        case type.treesFinishLoading:
            return {
                ...state,
                isLoading: false,
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
        default:
            return {...state};
    }
}