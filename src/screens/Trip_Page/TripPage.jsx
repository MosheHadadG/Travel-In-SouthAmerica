import React, { useContext } from 'react'
import { myContext } from '../../context/myContext'
import { updateUser } from '../../Apis/MockApi/requestsUsers'
import Spinner from '../../components/Spinner/Spinner'
import './TripPage.css'


function TripPage(props) {
  const { users, setUsers, userSignIn, setUserSignIn } = useContext(myContext)

  const findProfile = () => {
    const profileID = props.match.params.id;
    const profile = users.find((user) => user.id === profileID)
    return profile;
  }

  const handleDeleteTrip = async (userId) => {
    const updatedUser = {...userSignIn, planning: []}
    localStorage.setItem('userSignIn', JSON.stringify(updatedUser));
    setUserSignIn(updatedUser);
    const usersWithoutUserUpdated = users.filter((user) => user.id !== userId);
    setUsers([...usersWithoutUserUpdated, updatedUser ])
    props.history.push(`/planning`);
    await updateUser(userId, updatedUser);
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
        <div className='trip-buttons'>
        {profile.id === userSignIn.id && <div className='trip-delete-button'>
            <button onClick={() => handleDeleteTrip(profile.id)}><i className="fa-solid fa-trash"></i> Delete Trip</button>
          </div>}
        </div>
      </>
    )
  }

  return (

    <div className='trip-page-container'>
      {!Object.keys(users).length > 0 ? (<Spinner />) : (renderedPlanning())}
    </div>


  )

}

export default TripPage;