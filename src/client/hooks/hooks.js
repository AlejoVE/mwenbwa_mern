import { useState } from "react";

const useForm = (initialstate) => {
    const [inputs, setInputs] = useState(initialstate);
    
    const handleChange = (event) => {
      event.persist();
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return {
      handleChange,
      inputs
    };
}

export default useForm;