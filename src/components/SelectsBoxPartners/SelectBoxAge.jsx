import React from 'react'



function SelectBoxAge({handleChangeTerm}) {
  
  const handleChange = ({target}) => {
    const value = target.value;
    const name = target.name;
    return { value, name }

  }
  return (
    <div className='filter-partner-by-age'>
    <select name='age' onChange={(event) => handleChangeTerm(handleChange(event))}>
      <option value={'All'}>Choose Age:</option>
      <option value="18-25">18-25</option>
      <option value="26-35">26-35</option>
      <option value="50-45">36-45</option>
      <option value="46-55">46-55</option>
      <option value="56-65">56-65</option>
      <option value="65-80">65-80</option>
    </select>
    </div>
    
  )
}

export default SelectBoxAge