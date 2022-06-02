import React from 'react'



function SelectBoxAge({handleChangeTerm}) {
  
  const handleChange = ({target}) => {
    const value = target.value;
    const name = target.name;
    return { value, name }

  }
  return (
    <select name='age' onChange={(event) => handleChangeTerm(handleChange(event))}>
      <option value={'All'}>Choose Age:</option>
      <option value="18-30">18-30</option>
      <option value="30-50">30-50</option>
      <option value="50-70">50-70</option>
    </select>
  )
}

export default SelectBoxAge