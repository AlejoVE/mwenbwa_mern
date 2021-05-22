import { useState } from "react";
import { getTrees} from '../helpers/getTrees'
import {setTrees, finishLoading, setActiveTree, treeFinishLoading} from "../actions/treesActions"
import {updateDashboardData} from '../actions/authActions'
import {useDispatch} from 'react-redux'
import {calculatePrice} from '../helpers/calculatePrice'
import {calculateLockedPrice} from '../helpers/calculateLockedPrice'



export const useForm = (initialstate) => {
    const [inputs, setInputs] = useState(initialstate);

    const handleChange = (event) => {
        event.persist();
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }
    return {
        handleChange,
        inputs
    };
}

export const useGetTreesPos = () => {
    const dispatch = useDispatch()
    return async () => {
        try{
            const fetchTrees = await getTrees()
            dispatch(setTrees(fetchTrees))
            dispatch(finishLoading())

        } catch(err){
            console.log(err)
        }
    } 
}

export const useFetchTree = () => {
    const dispatch = useDispatch()

    return async (id, uid) => {
        try{
            
            const res = await fetch(`${process.env.REACT_APP_API_URL}trees/${id}`)
            const {tree, treesInRadius} = await res.json()
            const {nom_complet, owner, name, link, comments, history, locked, _id, value} = tree

            let {price} = tree
            let lockPrice = 0

            if(tree.owner){
                price = await calculatePrice(treesInRadius, tree, uid)
                lockPrice = await calculateLockedPrice(treesInRadius, tree, uid)
            }
            
            dispatch(setActiveTree({nom_complet, owner, name, price, link, lockPrice, comments, history, locked, _id, treesInRadius, value}))
            dispatch(treeFinishLoading())
        } catch(err){
            console.log(err)
        }
    }
}

export const useBuyTree = () =>{
    const dispatch = useDispatch()
    return async (activeTree, userName, userTrees, leaves, price, treesInRadius, uid) => {

        const {_id} = activeTree   

        try{
            const res = await fetch(`${process.env.REACT_APP_API_URL}trees/buy/${_id}`,{
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({userName, price})
            })
            const data = await res.json()

            if(data.ok){
                const {nom_complet, name, price: updatedPrice, link, comments, history, locked, _id, value} = data.tree

                const lockPrice = await calculateLockedPrice(treesInRadius, activeTree, uid)
                
                dispatch(setActiveTree({nom_complet, owner: userName, name, price: updatedPrice, link, comments, history, locked, _id, treesInRadius, value, lockPrice}))
                dispatch(updateDashboardData({leaves: leaves-price, trees: userTrees + 1}))
            }
        } catch(err) {
            console.log(err)
        }
    }
}

export const useLockTree = () => {
    const dispatch = useDispatch()
    return async (activeTree, userName, leaves, userTrees) =>{

        const {_id, lockPrice} = activeTree
        const token = localStorage.getItem("authToken")

        try{
            const res = await fetch(`${process.env.REACT_APP_API_URL}trees/lock/${_id}`,{
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'x-token': token
                },
                body: JSON.stringify({price: lockPrice})
            })
            const data = await res.json()
            
            if(data.ok){
                const {nom_complet, name,  link, comments, history, _id} = data.tree
                dispatch(setActiveTree({nom_complet, owner: userName, name,  link, comments, history, locked: true, _id}))
                dispatch(updateDashboardData({leaves: leaves - lockPrice, trees: userTrees}))

            }
        } catch (err) {
            console.log(err)
        }

    }
}

export const useAddComment = () => {
    const dispatch = useDispatch()
    return async (activeTree, comment, username) =>{

        const {_id} = activeTree
        const token = localStorage.getItem("authToken")

        try{
            const res = await fetch(`${process.env.REACT_APP_API_URL}trees/${_id}/comments`,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'x-token': token
                },
                body: JSON.stringify({message: comment})
            })
            const data = await res.json()
            
            if(data.ok){
                const setComment = {username: username, message: comment}
                const {nom_complet, name,  link, comments, history, owner, locked, price, treesInRadius, value, lockPrice} = activeTree
                dispatch(setActiveTree({nom_complet, owner, name,  link, comments: [...comments, setComment], history, locked, _id, price, value, treesInRadius, lockPrice}))
            }

        } catch (err) {
            console.log(err)
        }

    }
}