import React from "react";
import {useForm} from "../../hooks/hooks";
import {startLogin} from '../../actions/authActions'
import {useDispatch} from 'react-redux'



const Login = () => {

    const {inputs, handleChange} = useForm({});
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(startLogin(inputs.username, inputs.password))
    }

     return (

        <form className={"form-login"} method="POST" action="" onSubmit={handleSubmit}>
            <input
                className={"inputForm"}
                name="username"
                type="text"
                placeholder={"Username"}
                value={inputs.username || ""}
                onChange={handleChange}
            />
            <input 
                className={"inputForm"}
                name="password"
                type="password"
                placeholder={"Password"}
                value={inputs.password || ""}
                onChange={handleChange}
            />
            <button type="submit" className={"submitButton"} value="submit" onClick={handleSubmit}>Sign In</button>
        </form>
     )
}

export default Login