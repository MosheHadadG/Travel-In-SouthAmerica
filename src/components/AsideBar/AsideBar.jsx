import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { myContext } from '../../context/myContext';
import ProfileImgCircle from '../profileImgCircle/profileImgCircle'
import './AsideBar.css'
import './AsideBarResponsive.css'
function AsideBar() {
  // Global State
  const {setUserSignIn, userSignIn} = useContext(myContext); 


  const handleLogout = () => {
    localStorage.setItem('signIn', false)
    // setSignIn(false);
    setUserSignIn({});
    localStorage.removeItem('userSignIn')
    
  
  }

  return (
    <aside className='adise-bar'>
      <nav className='aside-nav'>
        <ul className='aside-ul'>
        <NavLink exact activeClassName="active" to='/' ><i className="fa-solid fa-house-chimney"></i> Home Page</NavLink>
        <NavLink exact activeClassName="active" to='/partners' ><i className="fa-solid fa-handshake"></i> <li>Partners</li></NavLink>
        <NavLink exact activeClassName="active" to='/planning' ><i className="fa-solid fa-plane"></i> <li>Planning Trip</li></NavLink>
  
          {Object.keys(userSignIn).length > 0 &&
            <>
              <NavLink exact activeClassName="active" to={`/profile/${userSignIn.id}`} ><i className="fa-solid fa-user"></i> <li>My Profile</li></NavLink>
              <div className='aside-profile-img'>
              <ProfileImgCircle srcImg={userSignIn.avatar} />
              </div>
              <h3>{`Welcome ${userSignIn.firstName} ${userSignIn.lastname}`}</h3>
              <Link onClick={handleLogout} to="/"><i className="fa-solid fa-arrow-right-from-bracket"></i> Logout</Link>
            </>
          }

        </ul>
      </nav>
    </aside>
  )
}

export default AsideBar