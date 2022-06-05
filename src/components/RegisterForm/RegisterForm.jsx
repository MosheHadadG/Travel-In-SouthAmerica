import React, { useState } from 'react'
import './RegisterForm.css'
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  gender: '',
  interests: '',
  age: '',
  city: '',
  urlAvatar: ''
}

function RegisterForm({createNewUser}) {
  const [formRegister, setRegisterForm] = useState(initialState)

  const handleChange = (event) => {
    let value = event.target.value;
    let nameInput = event.target.name;
    setRegisterForm({ ...formRegister, [nameInput]: value })
  }

  //! Need to create function check valid form


  const handleClick = (event) => {
    event.preventDefault()
    return formRegister;
  }

  return (

    <form className='register-form' action="">
      <div className='register-inputs'>

        <div className='register-first-last-name'>
          <input onChange={handleChange} placeholder="First Name"
            name='firstName' value={formRegister.firstName} type="text" />

          <input onChange={handleChange} placeholder="Last Name"
            name='lastName' value={formRegister.lastName} type="text" />
        </div>

        <div className='register-email'>
          <input onChange={handleChange} placeholder="Email"
            name='email' value={formRegister.email} type="email" />
        </div>

        <div className='register-password'>
          <input onChange={handleChange} placeholder="Password"
            name='password' autoComplete='true' password={formRegister.password} type="password" />
        </div>

        <div className='register-age-city'>
          <input onChange={handleChange} placeholder="Age (In Years)"
            name='age' value={formRegister.age} type="number" />


          <input onChange={handleChange} placeholder="City"
            name='city' value={formRegister.city} type="text" />
        </div>

        <div className='register-profile-img'>
          <input onChange={handleChange} placeholder="Profile Image (URL)"
            name='urlAvatar' value={formRegister.urlAvatar} type="text" />
        </div>

        <div className='register-gender'>
          <select onChange={handleChange}
            name="gender" defaultValue='Default'>
            <option value="Default" disabled>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>


      </div>

      <button onClick={(event) => createNewUser(handleClick(event))} type='submit'>Sign Up</button>
    </form>
  )
}

export default RegisterForm