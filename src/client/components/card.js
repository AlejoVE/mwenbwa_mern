import React from 'react'
import { useSelector } from 'react-redux'

const Card = () => {

    const { activeTree, treeIsLoading } = useSelector(state => state.trees)

    if(treeIsLoading) {
        return <p>Loading...</p>
    }

    const { nom_complet, owner, name, price, link, comments, history, locked } = activeTree
    
    return (
        <p>Species: {nom_complet}</p>
        
    )
}

export default Card