import React, { useState } from 'react'
import './PlanningTripForm.css'

const initialState = {
  inputBudget: '',
  inputDeparture: '',
  inputReturn: ''
}

function PlanningTripForm({addNewPlanningClick}) {
  const [ formPlanning , setFormPlanning ] = useState(initialState);
  const [ wrongMsg, setWrongMsg ] = useState(false)

  const handleChange = (event) => {
    let value = event.target.value;
    let nameInput = event.target.name;
    setFormPlanning({...formPlanning, [nameInput]: value})
  }

  const handleClick = (event) => {
    event.preventDefault()
    const { inputBudget, inputDeparture, inputReturn } = formPlanning;
    if(inputBudget && inputDeparture && inputReturn) {
      setWrongMsg(false)
      return formPlanning;
    }
    else{
      setWrongMsg(true);
    }
    return null;
  }

  return (
    <>
        <div className='planning-inputs'>
          <label htmlFor="">Budget &#x24;:</label>
          <input onChange={handleChange} name='inputBudget' placeholder='Enter your budget for a trip'
           value={formPlanning.inputBudget} type="number"/>

          <label htmlFor="">departure date:</label>
          <input onChange={handleChange} name='inputDeparture' password={formPlanning.inputDeparture} type="date"/>

          <label htmlFor="">return date:</label>
          <input onChange={handleChange} name='inputReturn' password={formPlanning.inputReturn} type="date"/>
        </div>
        {wrongMsg && <h4 className='wrong-msg'>Please enter all fields</h4>}

        <button onClick={(event) => addNewPlanningClick(handleClick(event))} type='submit'>Add a new planning to profile</button>
    </>
  )
}

export default PlanningTripForm