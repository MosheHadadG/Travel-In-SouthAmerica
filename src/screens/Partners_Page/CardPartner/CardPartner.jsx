import React from 'react'
import { Link } from 'react-router-dom'
import ProfileImgCircle from '../../../components/profileImgCircle/profileImgCircle'

import './CardPartner.css'
function CardPartners(
  { id, srcImg, firstName, lastName, age, city, about }
) {

  return (
    <div key={id} className='card-partner'>
      <div className='card-partner-profile'>
        <ProfileImgCircle srcImg={srcImg} />
      </div>
      <div className='card-partner-name'>
        <h3>{`${firstName} ${lastName} `}</h3>
      </div>
      <div className='card-partner-age-city'>
        <h5>{`${age}, ${city}`}</h5>
      </div>
      <div className='card-partner-about'>
        <p>{`${about}...`}</p>
      </div>
      <div className='card-partner-buttons'>
        <Link to={`/profile/${id}`}><button className='button-see-profile'><i class="fa-solid fa-address-card"></i></button></Link>
      </div>
    </div>
  )
}

export default CardPartners