import {createContext} from "react";
const AddContext = createContext();
export function useContext(){
  return useContext(AddContext);
}

export function ContextProvider({children}){
  return <AddContext.Provider>{children}</AddContext.Provider>;
}
    
