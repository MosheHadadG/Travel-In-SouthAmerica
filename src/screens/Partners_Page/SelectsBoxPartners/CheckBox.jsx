import React from 'react'

function CheckBox({ handleChangeTerm }) {
  return (
    <div className='filter-partner-with-plan'>
      <label>Only partners with planning</label>
      <input onChange={({ target: { name, checked: value } }) => handleChangeTerm({ value, name })} type="checkbox" name="onlyPartnerWithPlan" />
    </div>
  )
}

export default CheckBox