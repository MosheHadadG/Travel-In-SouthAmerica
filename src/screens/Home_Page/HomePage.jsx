import React, { useContext } from 'react'
import { myContext } from '../../context/myContext'

import Weather from './Weather/Weather'
import Destionations from './Destionations/Destionations'
import Attractions from './Attractions/Attractions'
import Spinner from '../../components/Spinner/Spinner'
import './HomePage.css'


function HomePage() {
  const state = useContext(myContext)

  return (
    <div className='home-page-container'>
      {state.spinner ? (<Spinner />) :
        (
          <>
          
            <Weather />
            <Destionations />
            <Attractions />
          </>

        )}


    </div>
  )
}

export default HomePage