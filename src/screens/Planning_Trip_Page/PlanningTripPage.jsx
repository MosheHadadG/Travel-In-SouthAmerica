import React, { useState, useContext, useEffect } from 'react'
import CountriesBox from '../../components/CountriesBox/CountriesBox'
import PlanningBoard from '../../components/PlanningBoard/PlanningBoard';
import PlanningTripForm from '../../components/PlanningTripForm/PlanningTripForm';
import { myContext } from '../../context/myContext';
import { updateUser } from '../../Apis/MockApi/requestsUsers'

import './PlanningTripPage.css'
function PlanningTripPage() {
  const [countriesPlan, setCountriesPlan] = useState([]);
  const { userSignIn, setUserSignIn } = useContext(myContext);
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
    const { inputBudget, inputDeparture, inputReturn } = formPlanning;
    const updatedUserSignIn = { ...userSignIn };
    updatedUserSignIn.planning = {
      countriesPlan,
      budget: inputBudget,
      departureDate: inputDeparture,
      returnDate: inputReturn
    }
    setUserSignIn(updatedUserSignIn);
  }

  useEffect(() => {
    if (!firstRender) setFirstRender(true);
    if (firstRender) {
      const updateUserDB = async () => {
        await updateUser(userSignIn.id, userSignIn)
      }
      updateUserDB();
    }
    // eslint-disable-next-line
  }, [userSignIn])



  return (
    <div className='planning-trip-page-container'>
      {Object.keys(userSignIn.planning).length > 0 ? 
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