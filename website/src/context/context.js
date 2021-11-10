import { createContext } from "react";
import { useContext, useState } from 'react';

const AddContext = createContext();

export function useLocalContex() {
  return useContext(AddContext);
}

export function ContextProvider({ children }) {
  const [createClassDialog, setCreateClassDialog] = useState(false);
  const [joinClassDialog, setJoinClassDialog] = useState(false);
  const value = { createClassDialog, 
                 setCreateClassDialog 
                joinClassDialog,
                 setJoinClassDialog,
                };
  return <AddContext.Provider value={value}>{children}</AddContext.Provider>;
}

