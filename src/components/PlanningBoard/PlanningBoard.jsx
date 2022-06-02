import React from 'react'
import './PlanningBoard.css'


function PlanningBoard({ countriesPlan, handleRemovedCountryPlan }) {

  const handleClickRemove = (event) => {
    const removedCountry = event.target.innerText
    return removedCountry;
  }

  const renderedCountriesInPlan = countriesPlan.map((country) => {
    return (
      <div 
      onClick={(event) => handleRemovedCountryPlan(handleClickRemove(event))} 
      key={country} 
      className="country-in-plan">
        <span>
          {country}
          <i className="fa-solid fa-arrow-right"></i>
        </span>
      </div>
    );
  })
  return (
   
    <div className='planning-board'>
      <h4>You can remove a country by clicking on the country circle</h4>
      <div className='countries-in-plan'>
        <h3>Start <i className="fa-solid fa-plane"></i></h3>
        {renderedCountriesInPlan}
        <h3>End <i className="fa-solid fa-house"></i></h3>
      </div>
      
    </div>
  )
}

export default PlanningBoard