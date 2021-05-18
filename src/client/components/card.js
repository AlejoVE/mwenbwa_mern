import React from 'react'
import { useSelector } from 'react-redux'
import {useBuyTree} from '../hooks/hooks'

const Card = () => {

    const { trees, auth } = useSelector(state => state)
    const {userName, leaves, trees: userTrees, uid} = auth
    const {activeTree, treeIsLoading} = trees
    const buyTree = useBuyTree()
    
    if(treeIsLoading) {
        return <p>Loading...</p>
    }
    
    const { nom_complet, owner, name, price, link, comments, history, locked } = activeTree
    const handleBuyButton = () => {
        buyTree(activeTree, userName, userTrees, leaves, price)
    }

    let isTheSame = false


    if(owner){
        isTheSame = owner === userName
    }


    return (
        <div className={"container-card"}>
            <p>Species: <strong>{nom_complet}</strong></p>
            {owner && 
                <p>Owner: {owner}</p>
            }
            {name && 
                <p>Name: {name}</p>
            }
            <strong>Price: {price}</strong>
            {link !== "No link for this tree" &&
                <p>Link: <a href={link} target={"_blank"}>{link}</a></p>
            }
            {comments && 
                <ul>
                    {comments.forEach(comment => {
                        <li>Pseudo: {comment}</li>
                    })}
                </ul>
            }
            <div className={"card-buttons"}>
                {!isTheSame && 
                <button onClick={handleBuyButton}>
                    Buy this tree for {price} leaves
                </button>
                }
                {!locked &&
                    <button>Lock this tree for {price} leaves</button>
                }
            </div>
        </div>
        
    )
}

export default Card