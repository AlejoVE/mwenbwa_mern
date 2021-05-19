import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { setActiveTree } from '../actions/treesActions'
import {useBuyTree} from '../hooks/hooks'

const Card = () => {

    const [activeHistory, setActiveHistory] = useState(false)
    const [activeComments, setActiveComments] = useState(false)
    const { trees, auth } = useSelector(state => state)
    const {userName, leaves, trees: userTrees} = auth
    const {activeTree, treeIsLoading} = trees
    const buyTree = useBuyTree()
    let ownerUserName = ""
    
    if(treeIsLoading) {
        return <p>Loading...</p>
    }
    
    const { nom_complet, owner, name, price, link, comments, history, locked } = activeTree
    const handleBuyButton = () => {
        buyTree(activeTree, userName, userTrees, leaves, price)
    }

    const handleHistory = (e) =>{
        e.preventDefault()
        const target = document.querySelector(".container-links")

        if(activeHistory){
            setActiveHistory(false)  
            setActiveComments(false)
            target.classList.remove('active')
            return
        }
        
        setActiveHistory(true)
        setActiveComments(false)
        target.classList.add('active')

    }

    const handleComments = (e) =>{
        e.preventDefault()
        const target = document.querySelector(".container-links")

        if(activeComments){
            setActiveComments(false)
            setActiveHistory(false)
            target.classList.remove('active')
            return
        }
        setActiveComments(true)
        setActiveHistory(false)
        target.classList.add('active')

    }


    if(owner){
        ownerUserName = owner.userName
    }

    return (
        <div className={"container-card"}>
            <h4 className={"card-h4"}>{nom_complet}</h4>
            {owner &&
                <div className={"info-card"}>
                    {owner && 
                        <p className={"owner-card"}>Owner :&nbsp;<span>{owner.userName || owner}</span></p>
                    }
                    {name && 
                        <p className={"name-card"}>Name :&nbsp;<span>{name}</span></p>
                    }
                </div>
            }

            <div className={"container-buttons-card"}>
                <div className= {"handle-button"}>
                    <a href={"#"} id={"link-history"} onClick={handleHistory}>History ({history.length})</a>
                    <a href={"#"} id={"link-comments"} onClick={handleComments}>Comments ({comments.length})</a>
                </div>
                <div className={"container-links"}>
                    {activeHistory &&
                        <h6>History</h6>
                    }
                    {activeComments &&
                        <>
                        <h6>Comments</h6>
                        <div className={"bottom-bar-comments"}>
                            <input type={"text"} maxLength={40} name="comments" id="comments" placeholder={"Add comments ..."}></input>
                            <button className={"btn-add-comments"} type="submit" >Send</button>
                        </div>
                        </>
                    }
                </div>
            </div>
    
            {!locked &&
                <div className={"card-buttons"}>
                    {ownerUserName !== userName && owner !== userName && !locked && 
                        <button className={"btn-card"}onClick={handleBuyButton}>
                            Buy this tree for&nbsp;&nbsp;<span className={"price"}>{price}</span>&nbsp;&nbsp;leaves
                        </button>
                    }
                    {!locked && (owner === userName || ownerUserName === userName) &&
                        <button className={"btn-card locked"}>Lock this tree for&nbsp;&nbsp;<span className={"price"}>{price}</span>&nbsp;&nbsp;leaves</button>
                    }
                </div>
            }
            {ownerUserName !== userName && owner !== userName && locked &&
                <button disabled className={"btn-card islocked"}>This tree is locked ! 🥺</button>
            }
            {locked && (owner === userName || ownerUserName === userName) &&
                <button disabled className={"btn-card owner"}>This tree is yours forever ! ❤️</button>
            }
            {link && link !== "No link for this tree" &&
                <div className={"wikilink"}>
                    <a href={link} target={"_blank"}>Wikipedia link</a>
                </div>
            }
        </div>
        
    )
}

export default Card