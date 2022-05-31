import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from './components/NavBar/NavBar'
import AsideBar from './components/AsideBar/AsideBar'
import Login from './screens/Login_Page/Login';
import HomePage from './screens/Home_Page/HomePage';
import PartnersPage from './screens/Partners_Page/PartnersPage'
import PlanningTripPage from './screens/Planning_Trip_Page/PlanningTripPage'
import ProfilePage from './screens/Profile_Page/ProfilePage'
import Register from './screens/Register_Page/Register';
import { getUsers } from './Apis/MockApi/requestsUsers'


import './App.css'

function App() {
  const [ signIn, setSignIn ] = useState(false);
  const [ users, setUsers ] = useState([]);
  const [ userSignIn, setUserSignIn ] = useState({});

  const setSignInUp  = (newState) =>{
    setSignIn(newState);
  }
  const setUserSignInUP  = (newState) =>{
    setUserSignIn(newState);
  }

  useEffect(() => {
    const updateUsers = async () => {
      const updetedUsers = await getUsers();
      setUsers(updetedUsers);
    }
    updateUsers();
  }, [])
  useEffect(()=> {
    console.log(signIn, userSignIn)

  },[signIn, userSignIn]) 

  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <main>
          <div className='main-container'>
            {!signIn ? 
            ( <>
            <Route exact path="/"
             render={(props) => <Login {...props} users={users} 
             setUserSignInUP= {setUserSignInUP} setSignInUp={setSignInUp} />} /> 
             <Route exact path='/signup' component={Register} />
             </>) :
              (
                <>

                  <Route exact path='/' component={HomePage} />
                  <Route exact path='/partners' component={PartnersPage}/>
                  <Route exact path='/planning' component={PlanningTripPage}/>
                  <Route exact path='/profile/:id' component={ProfilePage}/>
              
                </>
              )
            }
          </div>
          <AsideBar userSignIn={userSignIn} setSignInUp={setSignInUp} setUserSignInUP={setUserSignInUP} />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App