import { useState } from "react";

const useForm = () => {
    const [inputs, setInputs] = useState({});
    
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