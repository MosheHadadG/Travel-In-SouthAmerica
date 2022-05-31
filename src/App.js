import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from './components/NavBar/NavBar'
import AsideBar from './components/AsideBar/AsideBar'
import Login from './components/Login_Page/Login';
import HomePage from './components/Home_Page/HomePage';
import PartnersPage from './components/Partners_Page/PartnersPage'
import PlanningTripPage from './components/Planning_Trip_Page/PlanningTripPage'
import ProfilePage from './components/Profile_Page/ProfilePage'
import Register from './components/Register_Page/Register';
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

  useEffect(() => {
    console.log(userSignIn)
  },[userSignIn])

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
          <AsideBar userSignIn={userSignIn} />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App