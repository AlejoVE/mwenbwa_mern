import React from "react";
import {useForm} from "../../hooks/hooks";
import {startRegister} from "../../actions/authActions"
import {useDispatch} from 'react-redux'

const formRegister = () => {
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

          <form method="POST" action="" onSubmit={handleSubmit}>
               <input
                    name="username"
                    type="text"
                    placeholder={"Username"}
                    value={inputs.username}
                    onChange={handleChange}
               />
               <input 
                    name="email"
                    type="email"
                    placeholder={"Email"}
                    value={inputs.email}
                    onChange={handleChange}
               />
               <input 
                    name="password"
                    type="password"
                    placeholder={"Password"}
                    value={inputs.password}
                    onChange={handleChange}
               />
               <input 
                    name="verifypassword"
                    type="password"
                    placeholder={"Confirm password"}
                    value={inputs.confirmPassword}
                    onChange={handleChange}
               />
               <input 
                    name="color"
                    type="radio"
                    id="red"
                    value="red"
                    onChange={handleChange}
               />
               <input 
                    name="color"
                    type="radio"
                    id="blue"
                    value="blue"
                    onChange={handleChange}
               />
               <input 
                    name="color"
                    type="radio"
                    id="yellow"
                    value="yellow"
                    onChange={handleChange}
               />
               <input 
                    name="color"
                    type="radio"
                    id="purple"
                    value="purple"
                    onChange={handleChange}
               />
               <button type="submit" value="submit">
                submit
            </button>
          </form>
     )
}

export default formRegister