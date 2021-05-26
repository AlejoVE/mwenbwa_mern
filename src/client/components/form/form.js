import React, { useState } from "react";
import Login from "./formLogin.js";
import Register from "./formReg.js";
import {useDispatch} from 'react-redux'
import {cleanError} from '../../actions/authActions'

export const Form = () => {


    const [isLog, setIsLog] = useState(true);
    const dispatch = useDispatch()
    const handleButton = (e) => {
        setIsLog(e);
        dispatch(cleanError())
    }

    return (
        <div className={"container-form"}>
            <div className={"overlay"}>
                <div className={"logo"}></div>
                <div className={"container-inputs"}>
                    <div className={"inputBox"}>
                        <div className={"container-tabs"}>
                            <button className={isLog ? "tabLog" : "tabReg active"}
                                onClick={() => handleButton(false)}>Register</button>
                            <button className={isLog ? "tabLog active" : "tabReg"}
                                onClick={() => handleButton(true)}>Login</button>
                        </div>
                        {isLog ?
                            <Login /> :
                            <Register />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Form;