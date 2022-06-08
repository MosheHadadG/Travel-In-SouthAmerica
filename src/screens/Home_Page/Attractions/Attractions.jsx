import React, { useContext } from 'react'
import { myContext } from '../../../context/myContext'
import CardAttractions from './CardAttractions'

import './Attractions.css'
import './AtrractionsResponsive.css'

function Attractions() {
  const state = useContext(myContext)

  return (
    <>
    <h1 className='attractions-title'>Attractions</h1>
    <CardAttractions attractions={state.attractions} />
  </>
  )
}

export default Attractions