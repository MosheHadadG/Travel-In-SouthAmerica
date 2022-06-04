import React, { useState, useContext, useEffect } from 'react'
import CountriesBox from '../../components/CountriesBox/CountriesBox'
import PlanningBoard from '../../components/PlanningBoard/PlanningBoard';
import PlanningTripForm from '../../components/PlanningTripForm/PlanningTripForm';
import { myContext } from '../../context/myContext';
import { updateUser } from '../../Apis/MockApi/requestsUsers'

import './PlanningTripPage.css'
function PlanningTripPage() {
  const [countriesPlan, setCountriesPlan] = useState([]);
  const { userSignIn, setUserSignIn, users, setUsers } = useContext(myContext);
  const [firstRender, setFirstRender] = useState(false);
  

  const handleClickedCountry = (countryName) => {
    if (countriesPlan.includes(countryName)) return;
    setCountriesPlan([...countriesPlan, countryName])
  }

  const handleRemovedCountryPlan = (countryRemoved) => {
    const updetedCountriesPlan = countriesPlan.filter((country) => country !== countryRemoved);
    setCountriesPlan(updetedCountriesPlan);
  }

  const updateUserPlanning = (formPlanning) => {
    if (!formPlanning) return;
    if(countriesPlan.length <= 0) return;
    const { inputBudget, inputDeparture, inputReturn } = formPlanning;
    const updatedUserSignIn = { ...userSignIn };
    updatedUserSignIn.planning = {
      countriesPlan,
      budget: inputBudget,
      departureDate: inputDeparture,
      returnDate: inputReturn
    }
    setUserSignIn(updatedUserSignIn);
    localStorage.setItem('userSignIn', JSON.stringify(updatedUserSignIn))
  }
  
  useEffect(() => {
    if (!firstRender) setFirstRender(true);
    if (firstRender && Object.keys(userSignIn.planning).length > 0 ) {
      const usersWithoutUserChange = users.filter((user) => userSignIn.id !== user.id);
      const updateUserDB = async () => {
        await updateUser(userSignIn.id, userSignIn);
        setUsers([userSignIn, ...usersWithoutUserChange]);
      }
      updateUserDB();
    }
    // eslint-disable-next-line
  }, [userSignIn])


  const userSignInLocalStorage = localStorage.getItem('userSignIn');
  const userSignInLocalData = JSON.parse(userSignInLocalStorage);

  return (
  
    <div className='planning-trip-page-container'>
    {Object.keys(userSignInLocalData.planning).length > 0 ? 
      // Component for a edit plan page.
      (<div>You Have a Plan</div>) :
        (
          <>
            <h1>Planning Trip</h1>
            <div className='planning-boards'>
              <CountriesBox handleClickedCountry={handleClickedCountry} />
              <PlanningBoard handleRemovedCountryPlan={handleRemovedCountryPlan}
                countriesPlan={countriesPlan} />
            </div>
            <div className='planning-form'>
              <PlanningTripForm addNewPlanningClick={updateUserPlanning} />
            </div>
          </>
        )
  }
   
    </div>
  )
}

export default PlanningTripPage