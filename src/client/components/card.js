import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import {useBuyTree, useLockTree, useAddComment} from '../hooks/hooks'
import moment from 'moment'

const Card = () => {

    const [activeHistory, setActiveHistory] = useState(false)
    const [activeComments, setActiveComments] = useState(false)
    const [userComments, setUserComments] = useState('')
    const { trees, auth } = useSelector(state => state)
    const {userName, leaves, trees: userTrees, uid} = auth
    const {activeTree, treeIsLoading} = trees
    const buyTree = useBuyTree()
    const lockTree = useLockTree()
    const addComment = useAddComment()
    let ownerUserName = ""

    if(treeIsLoading) {
        return <p>Loading...</p>
    }


    
    const { nom_complet, owner, name, price, link, comments, history, locked, lockPrice, treesInRadius} = activeTree

    const toLocaleString = (value) =>{
        return value.toLocaleString('fr-FR');
    }

    const handleBuyButton = (e) => {
        e.stopPropagation()
        buyTree(activeTree, userName, userTrees, leaves, price, treesInRadius, uid)
    }

    const handleLockButton = (e) => {
        e.stopPropagation()
        lockTree(activeTree, userName, leaves, userTrees)
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
    const getCommentsValue = (e) =>{
        setUserComments(e.target.value)
    }

    const handleSendComments = () => {
        addComment(activeTree, userComments, userName)
        setUserComments('')

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
                        <>
                            {history.length >= 1 ?
                                <ul className={"ul-history"}>
                                    {history.map((item, i) => {
                                        return <li key={i}><span>{item.userName}</span>&nbsp;bought this tree {moment(item.date).fromNow()}</li>
                                    })}
                                </ul>
                                :
                                <h6>History</h6>
                            }
                        </>
                    }

                    {activeComments &&
                        <>
                            {comments.length >= 1 ?
                                <>
                                    <ul>
                                        {comments.map((item, i) => {
                                            return (
                                                <li key={i}>
                                                    <span>{item.username}</span>&nbsp;{':'} {item.message}
                                                </li>
                                            )
                                        })}
                                    </ul>

                                    <div className={"bottom-bar-comments"}>
                                        <input type={"text"} value={userComments} onChange={getCommentsValue} minLength={1} maxLength={40} name="comments" id="comments" placeholder={"Add comments ..."}></input>
                                        <button className={"btn-add-comments"} type="submit" onClick={handleSendComments}>Send</button>
                                    </div>
                                </>
                                :
                                <>
                                    <h6>Comments</h6>
                                    <div className={"bottom-bar-comments"}>
                                        <input type={"text"} value={userComments} onChange={getCommentsValue} minLength={1} maxLength={40} name="comments" id="comments" placeholder={"Add comments ..."}></input>
                                        <button className={"btn-add-comments"} type="submit" onClick={handleSendComments}>Send</button>
                                    </div>
                                </>
                            }
                        </>
                    } 
                </div>
            </div>
    
            {!locked &&
                <div className={"card-buttons"}>
                    {ownerUserName !== userName && owner !== userName && !locked && 
                        <button className={"btn-card"} onClick={handleBuyButton}>
                            Buy this tree for&nbsp;&nbsp;<span className={"price"}>{toLocaleString(price)}</span>&nbsp;&nbsp;leaves
                        </button>
                    }
                    {!locked && (owner === userName || ownerUserName === userName) &&
                        <button className={"btn-card locked"} onClick={handleLockButton}>Lock this tree for&nbsp;&nbsp;<span className={"price"}>{toLocaleString(lockPrice)}</span>&nbsp;&nbsp;leaves</button>
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