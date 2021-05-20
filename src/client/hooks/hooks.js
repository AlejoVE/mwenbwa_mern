import { useState } from "react";
import { getTrees} from '../helpers/getTrees'
import {setTrees, finishLoading, setActiveTree, treeFinishLoading} from "../actions/treesActions"
import {updateDashboardData} from '../actions/authActions'
import {useDispatch, useSelector} from 'react-redux'
import {getTreesInRadius} from '../helpers/getTreesInRadius'
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
            console.log('test')

            if(tree.owner){
                price = await calculatePrice(treesInRadius, tree, uid)
                lockPrice = await calculateLockedPrice(treesInRadius, tree)
                
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
    return async (activeTree, userName, userTrees, leaves, price, treesInRadius) => {
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
                let lockPrice = 0
                lockPrice = await calculateLockedPrice(treesInRadius, activeTree)
                lockPrice -= activeTree.value
                const valueActiveTree = activeTree.value
                console.log({valueActiveTree})

                dispatch(setActiveTree({nom_complet, owner: userName, name, price: updatedPrice, link, comments, history, locked, _id, treesInRadius, value, lockPrice}))
                dispatch(updateDashboardData({leaves: leaves-price, trees: userTrees + 1}))
            }
        } catch(err) {
            console.log(err)
        }
    }
}