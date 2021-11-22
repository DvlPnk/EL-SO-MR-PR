import { useContext, useState, createContext, provider, useEffect } from 'react';
import { auth } from '../lib/firebase';

const AddContext = createContext();

export function useLocalContext() {
  return useContext(AddContext);
}

export function ContextProvider({ children }) {
  const [createClassDialog, setCreateClassDialog] = useState(false);
  const [joinClassDialog, setJoinClassDialog] = useState(false);
  const [loggedInUser,setLoggedInUser] = useState(null);
  const [loggedInMail,setLoggedInMail] = useState(null);
  const login = () => {
      auth.signInWithPopup(provider);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setLoggedInMail(authUser.email);
        setLoggedInUser(authUser);
      } else {
        setLoggedInMail(null);
        setLoggedInUser(null);
      }
  });

    return () => {
      unsubscribe();
    };
  }, []);
  const value = {
    createClassDialog,
    setCreateClassDialog,
    joinClassDialog,
    setJoinClassDialog,
    login,
    loggedInUser,
    loggedInMail,
  };
  return <AddContext.Provider value={value}>{children}</AddContext.Provider>;
}

