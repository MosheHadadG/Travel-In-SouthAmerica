import React, { useContext } from 'react'
import CardPartner from '../../components/CardPartner/CardPartner'
import { myContext } from '../../context/myContext';

import './PartnersPage.css'

function PartnersPage() {
  // Global state
  const state = useContext(myContext)
  
  const renderedCards = state.users.map((user) => {
    if (user.id !== state.userSignIn.id) {
      return (
        <CardPartner
        id={user.id}
        srcImg={user.avatar}
        firstName={user.firstName}
        lastName={user.lastname}
        age={user.age}
        city={user.city}
        about={user.about.slice(0, 25)}
        />
      )
    }
    return null
  })

  return (
    <div className='partners-page-container'>
      <h1>Partners</h1>
      <div className='cards-partners'>
        {renderedCards}
      </div>
    </div>
  )
}

export default PartnersPage