import React, { useContext } from 'react'
import { myContext } from '../../context/myContext'
import CardDestionations from './CardDestionations'

import './Destionations.css'

function Destionations() {
  const state = useContext(myContext)

  return (
    <>
      <h1 className='destionations-title'>Destionations</h1>
      <CardDestionations destinations={state.destinations} />
    </>
  )
}

export default Destionations