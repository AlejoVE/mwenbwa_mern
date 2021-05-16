import {type} from '../types/types'

export const setTrees = (trees) => ({
    type: type.setTrees,
    payload: trees
})

export const startLoading = () => ({
    type: type.treesStartLoading
})

export const finishLoading = () => ({
    type: type.treesFinishLoading
})
