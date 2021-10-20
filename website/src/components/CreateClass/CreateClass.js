import React freom "react";
import { useContext } from "../../context/context";
const CreateClass = () =>{
    const { createClassDialog, setCreateClassDialog } = useContext();
  return(
    <>  
    {createClassDialog &&
    <div>
      <h1>Hello</h1>
    </div>
    }}
    </>
   );
};

export default CreateClass;
