import { createContext, useState } from 'react';

export const myContext = createContext();


function ContextProvider({ children }) {
  const [ signIn, setSignIn ] = useState(false);
  const [ users, setUsers ] = useState([]);
  const [ userSignIn, setUserSignIn ] = useState({});
  const [destinations, setDestinations] = useState([])
  const [attractions, setAttractions] = useState([])
  const [ spinner, setSpinner ] = useState(true)

  const value = {
    signIn,
    setSignIn,
    users,
    setUsers,
    userSignIn,
    setUserSignIn,
    destinations,
    setDestinations,
    attractions,
    setAttractions,
    spinner,
    setSpinner,
    countriesSouthAmerica:
      ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay",
        "Peru", "Suriname", "Uruguay", "Venezuela"]
  }

  return (
    <myContext.Provider value={value}>
      {children}
    </myContext.Provider>
  );
}

export default ContextProvider;
