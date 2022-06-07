import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EditProfieCheckBoxes from './EditProfieCheckBoxes'



function EditProfileForm(
  {handleUpdateUser, profile: { firstName, lastname, avatar, city, about, interests, age, id } }) {

  const initialState = {
    firstName,
    lastname,
    avatar,
    city,
    about,
    interests,
    age,
  }

  const [editProfileForm, setEditProfileForm] = useState(initialState)


  const handleChange = ({ target: { name, value } }) => {
    setEditProfileForm({ ...editProfileForm, [name]: value })
  }

  const handleUpdateInterests = (updatedInterests) => {
    setEditProfileForm({...editProfileForm, interests: updatedInterests})
  }

  return (
    <>
      <div className='edit-profile-top'>
        <div className='edit-profile-image-box'>
          <input onChange={handleChange} name="avatar" type="text" defaultValue={avatar} />
        </div>
        <div className='edit-profile-name'>
          <input onChange={handleChange} name="firstName" type="text" defaultValue={firstName} />
          <input onChange={handleChange} name="lastname" type="text" defaultValue={lastname} />
        </div>
        <div className='edit-profile-age-city'>
          <input onChange={handleChange} name="age" type="text" defaultValue={age} />
          <input onChange={handleChange} name="city" type="text" defaultValue={city} />
        </div>
      </div>

      <div className='edit-profile-bottom'>
        <div className='edit-profile-about'>
          <textarea onChange={handleChange} name="about" cols="30" rows="10" placeholder='About...' defaultValue={about} />
        </div>
        <h2>Interests</h2>
      <EditProfieCheckBoxes handleUpdateInterests={handleUpdateInterests} />
      </div>
      <div className="edit-profile-buttons">
        <button onClick={() => handleUpdateUser(editProfileForm)}>Update</button>
        <Link to={`/profile/${id}`}><button>Back</button></Link>
      </div>

    </>
  )
}

export default EditProfileForm