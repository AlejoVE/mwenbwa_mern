import { useState } from "react";
import { getTrees} from '../helpers/getTrees'
import {setTrees, finishLoading, setActiveTree} from "../actions/treesActions"
import {useDispatch} from 'react-redux'



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
        
            const {nom_complet, owner, name, price, link, comments, history, locked} = data
            console.log(id)
            dispatch(setActiveTree({nom_complet, owner, name, price, link, comments, history, locked}))
        
        } catch(err){
            console.log(err)
        }
    }
}