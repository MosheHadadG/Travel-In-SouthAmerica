import React, {useContext} from 'react'
import { createUser, getUsers } from '../../Apis/MockApi/requestsUsers'
import { myContext  } from '../../context/myContext'
import RegisterForm from '../../components/RegisterForm/RegisterForm'

import './RegisterPage.css'

function Register({history}) {
  // Global State
  const state = useContext(myContext);

  const createNewUser = async (user) => {
    const newUser = {
      createdAt: new Date(),
      firstName: user.firstName,
      lastname: user.lastName,
      gender: user.gender,
      email: user.email,
      password: user.password,
      avatar: user.urlAvatar,
      about: '',
      interests: [],
      planning: {},
      age: user.age,
      city: user.city
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