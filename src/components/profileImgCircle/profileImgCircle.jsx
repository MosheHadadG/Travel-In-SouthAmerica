import React from 'react'
import './profileImgCircle.css'
import './profileImgResponsice.css'

function ProfileImgCircle({srcImg}) {
  return (
    <div className='profile-img-circle'>
      <img src={srcImg} alt="profile Img" />
    </div>
  )
}

export default ProfileImgCircle