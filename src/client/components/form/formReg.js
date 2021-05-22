import React from "react";
import {useForm} from "../../hooks/hooks";
import {startRegister} from "../../actions/authActions"
import {useDispatch} from 'react-redux'

const Register = () => {
     const dispatch = useDispatch()
     const {inputs, handleChange} = useForm({
          username: "",
          email: "",
          password: "",
          verifypassword: "",
          color: ""
     });     

     const handleSubmit = (e) => {
          e.preventDefault()
          if(inputs.password !== inputs.verifypassword){
               console.log('Bad password')
               return
          }

          dispatch(startRegister(inputs.username, inputs.password, inputs.email, inputs.color))
      }

     return (

          <form className={"form-register"} method="POST" action="" onSubmit={handleSubmit}>

               <input
                    className={"inputForm"}
                    name="username"
                    type="text"
                    placeholder={"Username"}
                    value={inputs.username}
                    onChange={handleChange}
               />
               <input 
                    className={"inputForm"}
                    name="email"
                    type="email"
                    placeholder={"Email"}
                    value={inputs.email}
                    onChange={handleChange}
               />
               <input 
                    className={"inputForm"}
                    name="password"
                    type="password"
                    placeholder={"Password"}
                    value={inputs.password}
                    onChange={handleChange}
               />
               <input 
                    className={"inputForm"}
                    name="verifypassword"
                    type="password"
                    placeholder={"Confirm password"}
                    value={inputs.confirmPassword}
                    onChange={handleChange}
               />
               <div className={"colors"}>
                    <h3>Color :</h3>
                    <div className={"inputs-color"}>
                    <input
                                   name="color"
                                   type="radio"
                                   id="blue"
                                   value="blue"
                                   onChange={handleChange}

                              />
                         <label className={"blue"} htmlFor={"blue"}></label>
                              <input
                                   name="color"
                                   type="radio"
                                   id="purple"
                                   value="purple"
                                   onChange={handleChange}

                              />
                         <label className={"purple"} htmlFor={'purple'}></label>
                              <input
                                   name="color"
                                   type="radio"
                                   id="green"
                                   value="green"
                                   onChange={handleChange}

                              />
                         <label className={"green"} htmlFor={"green"}></label>
                    </div>
               </div>
               <button  className={"submitButton"} type="submit" value="submit">Sign Up</button>
          </form>
     )
}

export default Register