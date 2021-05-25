import React from "react";
import {useForm} from "../../hooks/hooks";
import {startRegister} from "../../actions/authActions"
import {useDispatch, useSelector} from 'react-redux'

const Register = () => {

     const dispatch = useDispatch()
     const state = useSelector((state) => state)

     const {inputs, handleChange} = useForm({
          username: "",
          email: "",
          password: "",
          verifypassword: "",
          color: "blue"
     });
 

     const handleSubmit = (e) => {
          e.preventDefault()

          const passwordErr = document.querySelector('.password-err')
          const usernameErr = document.querySelector('.username-err')
          passwordErr.innerHTML = ""
          usernameErr.innerHTML = ""

          if(inputs.username.length < 4 || inputs.username.length > 10){
               usernameErr.innerHTML = "Your username must contain between 4 and 10 characters"
          }
          if(inputs.password !== inputs.verifypassword){
               passwordErr.innerHTML = "Passwords do not match"
          }
          if(inputs.password.length < 6 || inputs.verifypassword.length < 6) {
               passwordErr.innerHTML = "Your password must contain at least 6 characters"
          }

          if(passwordErr.innerHTML || usernameErr.innerHTML){
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
                    required
               />
               <input 
                    className={"inputForm"}
                    name="email"
                    type="email"
                    placeholder={"Email"}
                    value={inputs.email}
                    onChange={handleChange}
                    required
               />
               <input 
                    className={"inputForm"}
                    name="password"
                    type="password"
                    placeholder={"Password"}
                    value={inputs.password}
                    onChange={handleChange}
                    required
               />
               <input 
                    className={"inputForm"}
                    name="verifypassword"
                    type="password"
                    placeholder={"Confirm password"}
                    value={inputs.confirmPassword}
                    onChange={handleChange}
                    required
               />
               <div className={"inputs-errors"}>
                    <p className={"password-err"}></p>
                    <p className={"username-err"}></p>
                    {state.errors && 
                         <p className={"username-err"}>{state.errors.error}</p>
                    }
               </div>
               <div className={"colors"}>
                    <h3>Color :</h3>
                    <div className={"inputs-color"}>
                    <input
                                   name="color"
                                   type="radio"
                                   id="blue"
                                   value="blue"
                                   onChange={handleChange}
                                   defaultChecked={"checked"}

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