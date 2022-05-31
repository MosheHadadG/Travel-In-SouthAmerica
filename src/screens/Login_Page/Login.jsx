import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Login.css'

const initialState = {
  inputEmail: '',
  inputPassword: '',
}

function Login({users, setUserSignInUP, setSignInUp }) {
  const [ formLogin , setFormLogin ] = useState(initialState);
  const [ wrongMsg, setWrongMsg ] = useState(false)
  

  const handleChange = (event) => {
    let value = event.target.value;
    let nameInput = event.target.name;
    setFormLogin({...formLogin, [nameInput]: value})
  }
  
  const handleClick = (event) => {
    event.preventDefault()
    checkLoginUser(formLogin.inputEmail, formLogin.inputPassword);
  }

  const checkLoginUser = (userEmail, userPassword) => {
    const isSignUp = users.find((user) => {
      if(user.email === userEmail && user.password === userPassword ) {
        return user;
      }
      return null;
    });
    console.log(isSignUp)

    if(isSignUp) {
      setUserSignInUP(isSignUp);
      setSignInUp(true);
    }
    else{
      setWrongMsg(true)
    }
  }


  return (
    <div className='login-container'>
      <div className='login-title'>
        <h1>Do you have account?</h1>
        <h2>Log in:</h2>
      </div>

      <form className='login-form' action="">
        <div className='login-inputs'>
          <label htmlFor="">Email:</label>
          <input onChange={handleChange} name='inputEmail' value={formLogin.email} type="email" required />

          <label htmlFor="">Password:</label>
          <input onChange={handleChange} name='inputPassword' password={formLogin.password} type="password" required />
        </div>

        <button onClick={handleClick} type='submit'>Login</button>
      </form>
      <div className='login-bottom'>
        {wrongMsg && <h2 style={{color: 'red'}}>Email or Password is incorrect</h2>}
        <h3>Don't have an account yet? <Link to="/signup">Sign Up</Link></h3>
        
      </div>
    </div>
  )
}

export default Login