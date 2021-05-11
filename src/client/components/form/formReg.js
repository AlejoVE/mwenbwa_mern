import React from "react";
import useForm from "../../hooks/hooks";

const formRegister = () => {
     
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
                    name="Email"
                    type="email"
                    placeholder={"Email"}
                    value={inputs.email}
                    onChange={handleChange}
               />
               <input 
                    name="Password"
                    type="password"
                    placeholder={"Password"}
                    value={inputs.password}
                    onChange={handleChange}
               />
               <input 
                    name="Confirm password"
                    type="password"
                    placeholder={"Confirm password"}
                    value={inputs.confirmPassword}
                    onChange={handleChange}
               />
               <input 
                    name="Color"
                    type="radio"
                    id="red"
                    value="red"
               />
               <input 
                    name="Color"
                    type="radio"
                    id="blue"
                    value="blue"
               />
               <input 
                    name="Color"
                    type="radio"
                    id="yellow"
                    value="yellow"
               />
               <input 
                    name="Color"
                    type="radio"
                    id="purple"
                    value="purple"
               />
               <button type="submit" value="submit">
                submit
            </button>
          </form>
     )
}

export default formRegister