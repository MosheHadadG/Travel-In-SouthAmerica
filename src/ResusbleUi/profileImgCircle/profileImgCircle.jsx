import React from 'react'
import './profileImgCircle.css'

function ProfileImgCircle({srcImg}) {
  console.log(srcImg)
  return (
    <div className='profile-img-circle'>
      <img src={srcImg} alt="profile Img" />
    </div>
  )
}

export default ProfileImgCircle