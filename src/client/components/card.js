import React from 'react'
import { useSelector } from 'react-redux'

const Card = () => {

    const { activeTree, treeIsLoading } = useSelector(state => state.trees)
    const toto=""

    if(treeIsLoading) {
        return <p>Loading...</p>
    }

    const { nom_complet, owner, name, price, link, comments, history, locked } = activeTree
    
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
                <p>Link: <a href={link}>{link}</a></p>
            }
            {comments && 
                <ul>
                    {comments.forEach(comment => {
                        <li>Pseudo: {comment}</li>
                    })}
                </ul>
            }
            <div className={"card-buttons"}>
                <button>Buy this tree for {price} leaves</button>
                {!locked &&
                    <button>Lock this tree for {price} leaves</button>
                }
            </div>
        </div>
        
    )
}

export default Card