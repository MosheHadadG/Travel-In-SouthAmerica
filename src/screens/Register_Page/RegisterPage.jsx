import React, { useContext, useState } from 'react'
import { createUser, getUsers } from '../../Apis/MockApi/requestsUsers'
import { myContext } from '../../context/myContext'
import RegisterForm from './RegisterForm/RegisterForm'

import './RegisterPage.css'
import './RegisterPageResponsive.css'

function Register({ history }) {
  // Global State
  const state = useContext(myContext);
  const [wrongMsg, setWrongMsg] = useState(false)

  const createNewUser = async (user) => {
    const { firstName, lastname, email, password, gender, age, city, urlAvatar} = user;
    if(!firstName || !lastname || !email || 
      !password || !gender || !age || !city || !urlAvatar) {
        setWrongMsg(true)
        return;
      }

    delete user.id
    const newUser = {
      ...user,
      createdAt: new Date(),
      avatar: user.urlAvatar,
      about: '',
      interests: [],
      planning: {},
    }

    await createUser(newUser);
    const usersIncludeNewUser = await getUsers();
    // update State
    state.setUsers(usersIncludeNewUser);
    history.push('/')
  }

  return (
    <div>
      <div className='register-container'>
        <div className='register-title'>
          <h2>Create a new account</h2>
        </div>
        <RegisterForm createNewUser={createNewUser} />
        {wrongMsg && <h2 style={{color: 'red'}}>Please enter all fields</h2> }
      </div>
    </div>
  )
}

export default Register