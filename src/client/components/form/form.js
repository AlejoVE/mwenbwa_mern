import React, { useState } from "react";
import Login from "./formLogin.js";
import Register from "./formReg.js";

export const Form = () => {


    const [isLog, setIsLog] = useState(true);

    const handleButton = (e) => {
        setIsLog(e);
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




// import React, { useState } from "react";
// import Login from "./formLogin.js";
// import Register from "./formReg.js";

// export const Form = () => {

//     const [isLog, setIsLog] = useState(true);

//     const handleButton = (e) => {
//         setIsLog(e);
//     }

//     return (

//         <div className={"modal-form"}>
//             <button 
//                 onClick={() => setIsLog(false)}>Register</button>
//             <button
//                 onClick={() => setIsLog(true)}>Login</button>
//             {isLog ?
//                 <Login /> :
//                 <Register />
//             }
//         </div>
//     )
// }