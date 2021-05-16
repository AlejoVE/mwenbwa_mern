import { useState } from "react";
import { getTrees } from '../helpers/getTrees'
import {setTrees, finishLoading} from "../actions/treesActions"
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