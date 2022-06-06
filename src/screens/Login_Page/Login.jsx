import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../../context/myContext';



import './Login.css'

const initialState = {
  inputEmail: '',
  inputPassword: '',
}


function Login() {
  const [formLogin, setFormLogin] = useState(initialState);
  const [wrongMsg, setWrongMsg] = useState(false)
  // Global State
  const { setSignIn, setUserSignIn, users } = useContext(myContext);

  const handleChange = ({ target: { name: nameInput, value } }) => {
    setFormLogin({ ...formLogin, [nameInput]: value })

  }

  const handleClick = (event) => {
    event.preventDefault()
    checkLoginUser(formLogin.inputEmail, formLogin.inputPassword);
  }

  const checkLoginUser = (userEmail, userPassword) => {

    const isSignIn = users.find((user) => {
      if (user.email.toLowerCase() === userEmail.toLowerCase() && user.password === userPassword) {
        return user;
      }
      return null;
    });

    localStorage.setItem('userSignIn', JSON.stringify(isSignIn))

    if (isSignIn) {
      setUserSignIn(isSignIn)
      setSignIn(true);
      localStorage.setItem('signIn', true);
    }

    else {
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

          <input onChange={handleChange} placeholder="Email"
            name='inputEmail' value={formLogin.email} type="email" required />

          <input onChange={handleChange} placeholder="Password"
            name='inputPassword' autoComplete="true" password={formLogin.password} type="password" required />
        </div>

        <button onClick={handleClick} type='submit'>Login</button>
      </form>
      <div className='login-bottom'>
        {wrongMsg && <h2 style={{ color: 'red' }}>Email or Password is incorrect</h2>}
        <h3>Don't have an account yet? <Link to="/signup">Sign Up</Link></h3>

      </div>
    </div>
  )
}

export default Login