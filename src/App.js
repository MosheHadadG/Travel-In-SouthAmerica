import React, { useEffect, useState, useContext } from 'react'
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
import { myContext } from './context/myContext';

function App() {
 // Global State
  const state = useContext(myContext); 

  useEffect(() => {
    const updateUsers = async () => {
      const updetedUsers = await getUsers();
      state.setUsers(updetedUsers);
    }
    updateUsers();
  }, [])

  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <main>
          <div className='main-container'>
            {!state.signIn ? 
            ( <>
            <Route exact path="/" component={Login} /> 
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
          <AsideBar/>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;