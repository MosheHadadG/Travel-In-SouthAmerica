import React, { useEffect, useContext } from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import { myContext } from './context/myContext';

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import AsideBar from './components/AsideBar/AsideBar'
import Login from './screens/Login_Page/Login';
import HomePage from './screens/Home_Page/HomePage';
import PartnersPage from './screens/Partners_Page/PartnersPage'
import PlanningTripPage from './screens/Planning_Trip_Page/PlanningTripPage'
import ProfilePage from './screens/Profile_Page/ProfilePage'
import Register from './screens/Register_Page/Register';
import Destionation_Page from './screens/Destionation_Page/Destionation_Page';
import Attraction_Page from './screens/Attraction_Page/Attraction_Page';

import { getUsers } from './Apis/MockApi/requestsUsers'
import { getDestinations } from './Apis/MockApi/requestDestinations'
import { getAttractions } from './Apis/MockApi/requestAttractions'

import './App.css'


function App() {
  // Global State
  const state = useContext(myContext);

  useEffect(() => {
    const updateUsers = async () => {
      const updetedUsers = await getUsers();
      state.setUsers(updetedUsers);
    }
    const updateDestionation = async () => {
      const updatedDestionation = await getDestinations();
      state.setDestinations(updatedDestionation)
    }
    const updateAttractions = async () => {
      const updatedDestionation = await getAttractions();
      state.setAttractions(updatedDestionation)
    }
    
    updateUsers();
    updateDestionation();
    updateAttractions()
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if(state.destinations.length > 0 && state.attractions.length > 0
      && Object.keys(state.userSignIn).length > 0) {
      state.setSpinner(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.destinations, state.attractions, state.userSignIn])

  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <main>
          <div className='main-container'>
            {!state.signIn ?
              (<>
                <Route exact path="/" component={Login} />
                <Route exact path='/signup' component={Register} />
              </>) :
              (
                <>
                
                  <Route exact path='/' component={HomePage} />
                  <Route exact path='/partners' component={PartnersPage} />
                  <Route exact path='/planning' component={PlanningTripPage} />
                  <Route exact path='/profile/:id' component={ProfilePage} />
                  <Route exact path='/destionation/:id' component={Destionation_Page} />
                  <Route exact path='/attraction/:id' component={Attraction_Page} />
                </>
              )
            }
          </div>
          <AsideBar />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
export default App;