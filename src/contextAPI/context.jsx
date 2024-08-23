import { createContext, useState } from "react";

export const FormContext=createContext(null);
const FormContextProvider=(props)=>{
    const [data,setData]=useState(null);
    return(
        <FormContext.Provider value={{data,setData}}>
            {props.children}
        </FormContext.Provider>
    )
}
export default FormContextProvider