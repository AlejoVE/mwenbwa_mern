import React from "react";
import useForm from "../../hooks/hooks";
import axios from "axios";


const formLogin = () => {

    const {inputs, handleSubmit, handleChange} = useForm();

    const handleLogin = (e) => {
        e.preventDefault()

        axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}`

        })
    }

     return (

        <form method="POST" action="" onSubmit={handleSubmit}>
            <input
                name="Username"
                type="text"
                placeholder={"Username"}
                value={inputs.username}
                onChange={handleChange}
            />
            <input 
                name="Password"
                type="password"
                placeholder={"Password"}
                value={inputs.password}
                onChange={handleChange}
            />
            <button type="submit" value="submit">submit</button>
        </form>
     )
}

export default formLogin