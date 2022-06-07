import React, { useContext } from 'react'
import EditProfileForm from './EditProfileForm/EditProfileForm';
import { updateUser } from '../../Apis/MockApi/requestsUsers';
import './EditProfilePage.css'
import { myContext } from '../../context/myContext';

function EditProfilePage({ history, location: { props } }) {
  // Global State
  const state = useContext(myContext);


  const handleUpdateUser = async (updatedUser) => {
    localStorage.setItem('userSignIn', JSON.stringify({ ...state.userSignIn, ...updatedUser }));
    state.setUserSignIn({ ...state.userSignIn, ...updatedUser });
    const usersWithoutUserUpdated = state.users.filter((user) => user.id !== props.profile.id);
    state.setUsers([...usersWithoutUserUpdated, { ...state.userSignIn, ...updatedUser } ])
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