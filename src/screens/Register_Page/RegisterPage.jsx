import React, { useContext } from 'react'
import { createUser, getUsers } from '../../Apis/MockApi/requestsUsers'
import { myContext } from '../../context/myContext'
import RegisterForm from './RegisterForm/RegisterForm'

import './RegisterPage.css'

function Register({ history }) {
  // Global State
  const state = useContext(myContext);

  const createNewUser = async (user) => {
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
      </div>
    </div>
  )
}

export default Register