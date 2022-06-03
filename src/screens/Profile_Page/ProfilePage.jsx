import React, { useContext } from 'react'
import { myContext } from '../../context/myContext';
import { Link } from 'react-router-dom';

import ProfileImgCircle from '../../components/profileImgCircle/profileImgCircle';
import TextBox from '../../components/TextBox/TextBox';
import './ProfilePage.css'

function Profile_Page(props) {
  const { users } = useContext(myContext)

  const findProfile = () => {
    const profileID = props.match.params.id;
    const profile = users.find((user) => user.id === profileID)
    return profile;
  }

  const profilePlanningText = ({ planning }) => {
    const { departureDate, returnDate, budget, countriesPlan } = planning;

    return (
      <>
        <div className='date-budget-left-side'>
          <h4>{`Departue Date: ${departureDate}`}</h4>
          <h4>{`Return Date: ${returnDate}`}</h4>
          <h4>{`Budget: ${budget}$`}</h4>
        </div>
        <div className='countries-button-right-side'>
          <h4>{`Start: ${countriesPlan[0]}`}</h4>
          <h4>{`End: ${countriesPlan[countriesPlan.length - 1]}`}</h4>
        </div>
      </>
    );
  }

  const renderdProfile = () => {
    const profile = findProfile();
    return (
      <div className='profile-box'>
        <div className='profile-top'>
          <div className='profile-image-box'>
            <ProfileImgCircle srcImg={profile.avatar} />
          </div>
          <div className='profile-name'>
            <h3>{`${profile.firstName} ${profile.lastname} `}</h3>
          </div>
          <div className='profile-age-city'>
            <h5>{`${profile.age}, ${profile.city}`}</h5>
          </div>
        </div>
        <div className='profile-bottom'>
          <TextBox title='About:' text={profile.about} />
          <TextBox title='Interests:' text={profile.about} />
          <TextBox title='Planning:'
            text={Object.keys(profile.planning).length > 0 ? 
              (profilePlanningText(profile)) : ('There is no planning yet')
            } />
        </div>
        <div className="profile-buttons">
          <Link to={`/partners`}><button>Back</button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page-container">
      {renderdProfile()}
    </div>
  )

}

export default Profile_Page;