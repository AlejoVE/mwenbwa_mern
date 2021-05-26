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

export const setActiveTree = (tree) => ({
    type: type.setActiveTree,
    payload: tree
})

export const treeFinishLoading = () => ({
    type: type.treeFinishLoading
})

export const cleanActiveTree = () => ({
    type: type.cleanActiveTree
})
