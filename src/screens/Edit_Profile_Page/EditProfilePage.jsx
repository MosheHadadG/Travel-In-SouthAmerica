import React, { useContext } from 'react'
import EditProfileForm from './EditProfileForm/EditProfileForm';
import { updateUser } from '../../Apis/MockApi/requestsUsers';
import './EditProfilePage.css'
import { myContext } from '../../context/myContext';

function EditProfilePage({ history, location: { props } }) {
  // Global State
  const state = useContext(myContext);


  const handleUpdateUser = async (userUpdated) => {
    const updatedUser = {...state.userSignIn, ...userUpdated}
    localStorage.setItem('userSignIn', JSON.stringify(updatedUser));
    state.setUserSignIn(updatedUser);
    const usersWithoutUserUpdated = state.users.filter((user) => user.id !== props.profile.id);
    state.setUsers([...usersWithoutUserUpdated, updatedUser ])
    await updateUser(props.profile.id, updatedUser);
    history.push(`/profile/${props.profile.id}`);
  }

  return (
    <div className="edit-profile-page-container">
      <div className='edit-profile-box'>
        <EditProfileForm handleUpdateUser={handleUpdateUser} profile={props.profile} />
      </div>

    </div>
  )
}

export default EditProfilePage