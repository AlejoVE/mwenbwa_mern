import React from "react";
import useForm from "../../hooks/hooks";
import {startLogin} from '../../actions/authActions'
import {useDispatch} from 'react-redux'



const formLogin = () => {

    const {inputs, handleChange} = useForm({});
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(startLogin(inputs.username, inputs.password))
    }

     return (

        <form method="POST" action="" onSubmit={handleSubmit}>
            <input
                name="username"
                type="text"
                placeholder={"Username"}
                value={inputs.username || ""}
                onChange={handleChange}
            />
            <input 
                name="password"
                type="password"
                placeholder={"Password"}
                value={inputs.password || ""}
                onChange={handleChange}
            />
            <button type="submit" value="submit" onClick={handleSubmit}>submit</button>
        </form>
     )
}

export default formLogin