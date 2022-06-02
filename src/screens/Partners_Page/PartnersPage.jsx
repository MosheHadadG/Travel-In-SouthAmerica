import React, { useState, useContext, useEffect } from 'react'
import CardPartner from '../../components/CardPartner/CardPartner'
import { myContext } from '../../context/myContext';
import SelectBoxAge from '../../components/SelectsBoxPartners/SelectBoxAge';
import './PartnersPage.css'

function PartnersPage() {
  // Global state
  const state = useContext(myContext)
  const [usersFiltered, setUsersFiltered] = useState(state.users)
  const [term, setTerm] = useState({ age: '' })

  const renderedCards = usersFiltered.map((user) => {
    if (user.id !== state.userSignIn.id) {
      return (
        <CardPartner
          key={user.id}
          id={user.id}
          srcImg={user.avatar}
          firstName={user.firstName}
          lastName={user.lastname}
          age={user.age}
          city={user.city}
          about={user.about.slice(0, 25)}
        />
      )
    }
    return null
  })

  const filteredPartners = () => {
    if (!term.age || term.age === 'All') {
      setUsersFiltered(state.users)
    }
    else {
      const ageStartNum = parseInt(term.age.substring(0, 2));
      const ageEndNum = parseInt(term.age.substring(3, 5));
      const filterd = state.users.filter((user) => {
        return user.age > ageStartNum && user.age < ageEndNum;
      })
      setUsersFiltered(filterd);

    }
  }

  const handleChangeTerm = ({ value, name }) => {
    setTerm({ ...term, [name]: value });
  }

  useEffect(() => {
    filteredPartners()
    // eslint-disable-next-line
  }, [term])

  return (
    <div className='partners-page-container'>
      <h1>Partners</h1>
      <div className='partners-filters'>
        <SelectBoxAge handleChangeTerm={handleChangeTerm} />
      </div>
      <div className='cards-partners'>
        {renderedCards}
      </div>
    </div>
  )
}

export default PartnersPage