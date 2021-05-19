import { useState } from "react";
import { getTrees} from '../helpers/getTrees'
import {setTrees, finishLoading, setActiveTree, treeFinishLoading} from "../actions/treesActions"
import {updateDashboardData} from '../actions/authActions'
import {useDispatch, useSelector} from 'react-redux'



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

    return async (id) => {
        try{
            const res = await fetch(`${process.env.REACT_APP_API_URL}trees/${id}`)
            const data = await res.json()
        
            const {nom_complet, owner, name, price, link, comments, history, locked, _id} = data.tree
            dispatch(setActiveTree({nom_complet, owner, name, price, link, comments, history, locked, _id}))
            dispatch(treeFinishLoading())
        } catch(err){
            console.log(err)
        }
    }
}

export const useBuyTree = () =>{
    const dispatch = useDispatch()
    return async (activeTree, userName, userTrees, leaves, price) => {
        const {_id} = activeTree
        
        try{
            
            const res = await fetch(`${process.env.REACT_APP_API_URL}trees/buy/${_id}`,{
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({userName})
            })
            const data = await res.json()
            console.log(data)
            if(data.ok){
                const {nom_complet, name, price: updatedPrice, link, comments, history, locked, _id} = data.tree
                dispatch(setActiveTree({nom_complet, owner: userName, name, price: updatedPrice, link, comments, history, locked, _id}))
                dispatch(updateDashboardData({leaves: leaves-price, trees: userTrees + 1}))
            }
        } catch(err) {
            console.log(err)
        }
    }
}