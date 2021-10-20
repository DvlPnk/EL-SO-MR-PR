import {createContext} from "react";
const AddContext = createContext();
export function useContext(){
  return useContext(AddContext);
}

export function ContextProvider({children}){
  const [createClassDialog, setCreateClassDialog] = useState(true);
  const value={createClassDialog , setCreateClassDialog};
  return <AddContext.Provider>{children}</AddContext.Provider>;
}
    
