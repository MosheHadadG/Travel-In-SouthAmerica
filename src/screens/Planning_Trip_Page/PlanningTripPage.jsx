import React, { useState } from 'react'
import CountriesBox from '../../components/CountriesBox/CountriesBox'
import PlanningBoard from '../../components/PlanningBoard/PlanningBoard';

import './PlanningTripPage.css'
function PlanningTripPage() {

  const [countriesPlan, setCountriesPlan] = useState([]);

  const handleClickedCountry = (countryName) => {
    if (countriesPlan.includes(countryName)) return;
    setCountriesPlan([...countriesPlan, countryName])
  }

  const handleRemovedCountryPlan = (countryRemoved) => {
    const updetedCountriesPlan = countriesPlan.filter((country) => country !== countryRemoved);
    setCountriesPlan(updetedCountriesPlan);
  }

  return (
    <div className='planning-trip-page-container'>

      <h1>Planning Trip</h1>
      <div className='planning-instructions'>
      {/* <h4>Arrange the countries on your route</h4>
      <h4>You can remove a country by clicking on the country circle</h4> */}
      </div>
      <div className='planning-boards'>
        <CountriesBox handleClickedCountry={handleClickedCountry} />
        <PlanningBoard handleRemovedCountryPlan={handleRemovedCountryPlan}
          countriesPlan={countriesPlan} />
      </div>

    </div>
  )
}

export default PlanningTripPage