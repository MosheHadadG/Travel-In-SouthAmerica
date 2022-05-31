import React from 'react'
import { Link } from 'react-router-dom'
import ProfileImgCircle from '../../ResusbleUi/profileImgCircle/profileImgCircle'
import './AsideBar.css'

function AsideBar({ userSignIn }) {
  return (
    <aside className='adise-bar'>
      <nav className='aside-nav'>
        <ul className='aside-ul'>
          <Link to="/"><i class="fa-solid fa-house-chimney"></i> Home Page </Link>
          <Link to="/partners"><i class="fa-solid fa-handshake"></i> <li>Partners</li></Link>
          <Link to="/planning"><i class="fa-solid fa-plane"></i> <li>Planning Trip</li></Link>
          
          {Object.keys(userSignIn).length > 0 &&
            <>
              <Link to={`/profile/${userSignIn.id}`}><i class="fa-solid fa-user"></i> <li>My Profile</li></Link>
              <ProfileImgCircle srcImg={userSignIn.avatar} />
              <h3>{`Welcome ${userSignIn.firstName} ${userSignIn.lastname}`}</h3>
      
            </>
          }

        </ul>
      </nav>
    </aside>
  )
}

export default AsideBar