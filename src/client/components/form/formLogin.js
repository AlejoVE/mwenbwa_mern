import React from "react";
import useForm from "../../hooks/hooks";

const formLogin = () => {

    const {inputs, handleSubmit, handleChange} = useForm();

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
            <button type="submit" value="submit">
                submit
            </button>
        </form>
     )
}

export default formLogin