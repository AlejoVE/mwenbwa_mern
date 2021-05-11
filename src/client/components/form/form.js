import React, { useState } from "react";
import Login from "./formLogin.js";
import Register from "./formReg.js";

const Form = () => {

    const [isLog, setIsLog] = useState(true);

    return (

        <div className={"modal-form"}>
            <button 
                onClick={() => setIsLog(false)}>Register</button>
            <button
                onClick={() => setIsLog(true)}>Login</button>
            {isLog ?
                <Login /> :
                <Register />
            }
        </div>
    )
}

export default Form;