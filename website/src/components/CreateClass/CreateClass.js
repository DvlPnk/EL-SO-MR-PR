import React freom "react";
import { useLocalContext } from "../../context/context";
const CreateClass = () =>{
    const { createClassDialog, setCreateClassDialog } = useLocalContext();
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
