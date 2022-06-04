import React from 'react'

function CheckBox({handleChangeTerm}) {
  const handleChange = ({target}) => {
    const value = target.checked;
    const name = target.name
    return { value, name };
  }

  return (
    <div className='filter-partner-with-plan'>
      <label>Only partners with planning</label>
      <input onChange={(event) => handleChangeTerm(handleChange(event))} type="checkbox" name="onlyPartnerWithPlan" />
    </div>
  )
}

export default CheckBox