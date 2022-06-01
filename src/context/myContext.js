import { createContext, useState } from 'react';

export const myContext = createContext();


function ContextProvider({ children }) {
  const [signIn, setSignIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [userSignIn, setUserSignIn] = useState({});

  const value = { signIn, setSignIn, users, setUsers, userSignIn, setUserSignIn }

  return (
    <myContext.Provider value={value}>
      {children}
    </myContext.Provider>
  );
}

export default ContextProvider;
