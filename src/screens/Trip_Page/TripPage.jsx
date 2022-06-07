import React, { useContext } from 'react'
import { myContext } from '../../context/myContext'
import './TripPage.css'


function TripPage(props) {
  const { users } = useContext(myContext)

  const findProfile = () => {
    const profileID = props.match.params.id;
    const profile = users.find((user) => user.id === profileID)
    return profile;
  }

  const renderedPlanning = () => {
    const profile = findProfile();
    const planning = profile.planning;
    const { departureDate, returnDate, budget} = planning;
    const countriesInPlan = planning.countriesPlan.map((country) => {
      return (
        <div key={country} className="trip-page-country-in-plan">
          <span>
            {country}
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </div>
      )
    });
    return (
      <>
        <h1>Trip Page</h1>
        <h2>Details of {profile.firstName} {profile.lastname} trip</h2>
        <div className='trip-board'>
          <div className='trip-page-planning-board'>
            <div className='trip-page-countries-in-plan'>
              <h3>Start <i className="fa-solid fa-plane"></i></h3>
              {countriesInPlan}
              <h3>End <i className="fa-solid fa-house"></i></h3>
            </div>
          </div>
        </div>
        <div className='trip-info'>
          <h3>Departue Date: <span className='orangeColor'>{departureDate}</span></h3>
          <h3>Return Date: <span className='orangeColor'>{returnDate}</span></h3>
          <h3>Budget: <span className='orangeColor'>{budget}$</span></h3>
        </div>
      </>
    )
  }

  return (

    <div className='trip-page-container'>
      {renderedPlanning()}
    </div>


  )

}

export default TripPage;