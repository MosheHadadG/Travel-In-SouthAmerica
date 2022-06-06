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
import RegisterPage from './screens/Register_Page/RegisterPage';
import Destionation_Page from './screens/Destionation_Page/Destionation_Page';
import Attraction_Page from './screens/Attraction_Page/Attraction_Page';
import EditProfilePage from './screens/Edit_Profile_Page/EditProfilePage';
import TripPage from './screens/Trip_Page/TripPage';

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

    // Local Storage User
    const userSignInLocalStorage = localStorage.getItem('userSignIn')
    if (userSignInLocalStorage) state.setUserSignIn(JSON.parse(userSignInLocalStorage));
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (state.destinations.length > 0 && state.attractions.length > 0) {
      state.setSpinner(false);
    }
    // eslint-disable-next-line
  }, [state.destinations, state.attractions])
 

  const signInLocalStorage = localStorage.getItem('signIn')

  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <main>
          <div className='main-container'>
            {!JSON.parse(signInLocalStorage) ?
              (<>
                <Route exact path="/" component={Login} />
                <Route exact path='/signup' component={RegisterPage} />
              </>) :
              (
                <>

                  <Route exact path='/' component={HomePage} />
                  <Route exact path='/partners' component={PartnersPage} />
                  <Route exact path='/planning' component={PlanningTripPage} />
                  <Route exact path='/planning/:id' component={TripPage} />
                  <Route exact path='/profile/:id' component={ProfilePage} />
                  <Route exact path='/profile/edit/:id' component={EditProfilePage} />
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