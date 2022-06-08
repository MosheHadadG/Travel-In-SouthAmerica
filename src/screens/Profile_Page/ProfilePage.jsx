import React, { useContext } from 'react'
import { myContext } from '../../context/myContext';
import { Link } from 'react-router-dom';

import ProfileImgCircle from '../../components/profileImgCircle/profileImgCircle';
import TextBox from '../../components/TextBox/TextBox';
import Spinner from '../../components/Spinner/Spinner';
import './ProfilePage.css'

function Profile_Page(props) {
  const { users, userSignIn } = useContext(myContext)

  const findProfile = () => {
    const profileID = props.match.params.id;
    const profile = users.find((user) => user.id === profileID)
    return profile;
  }

  const profilePlanningText = (profile) => {
    const { departureDate, returnDate, budget, countriesPlan } = profile.planning;

    return (
      <>
        <div className='date-budget-left-side'>
          <h4>Departue Date: <span className='orangeColor'>{departureDate}</span></h4>
          <h4>Return Date: <span className='orangeColor'>{returnDate}</span></h4>
          <h4>Budget: <span className='orangeColor'>{budget}$</span></h4>
        </div>
        <div className='countries-button-right-side'>
          <h4>Start: <span className='orangeColor'>{countriesPlan[0]}</span></h4>
          <h4>End: <span className='orangeColor'>{countriesPlan[countriesPlan.length - 1]}</span></h4>
          <Link to={`/planning/${profile.id}`}><button>Trip Page</button></Link>
        </div>
      </>
    );
  }

  const profileInterestsText = ({ interests }) => {
    const interestsText = interests.map((interest) => <div key={interest}>{interest}</div>)
    return (
      <div className='profile-interests'>
        {interestsText}
      </div>

    );
  }


  const renderdProfile = () => {
    const profile = findProfile();
    return (
      <div className='profile-box'>
        <div className='profile-top'>
          {profile.id === userSignIn.id && <div className='profile-edit-button'>
            <Link to={{ pathname: `/profile/edit/${userSignIn.id}`, props: { profile } }}>
              <button><i className="fa-solid fa-pen-to-square"></i> Edit Profile</button>
            </Link>
          </div>}
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
          <TextBox title='About:' text={profile.about ?
            (profile.about) : ("There is no about yet...")} />
          <TextBox title='Interests:'
            text={profile.interests.length > 0 ?
              (profileInterestsText(profile)) : ("There is no interests yet...")} />
          <TextBox title='Planning:'
            text={Object.keys(profile.planning).length > 0 ?
              (profilePlanningText(profile)) : ('There is no planning yet...')
            } />
        </div>
        <div className="profile-buttons">
          <Link to={`/partners`}><button>Back</button></Link>
        </div>
        <div className='profie-created'>
          <h4>This profile was created At {profile.createdAt.substring(0,10)}</h4>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page-container">
      {!Object.keys(users).length > 0 ? (<Spinner />) : (renderdProfile())}
    </div>
  )

}

export default Profile_Page;