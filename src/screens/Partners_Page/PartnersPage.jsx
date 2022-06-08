import React, { useState, useContext, useEffect } from 'react'
import { myContext } from '../../context/myContext';
import CardPartner from './CardPartner/CardPartner'
import SelectBoxAge from './SelectsBoxPartners/SelectBoxAge';
import CheckBox from './SelectsBoxPartners/CheckBox';
import Spinner from '../../components/Spinner/Spinner';
import './PartnersPage.css'
import './PartnersResponsive.css'

function PartnersPage() {
  // Global state
  const state = useContext(myContext)
  const [usersFiltered, setUsersFiltered] = useState(state.users)
  const [term, setTerm] = useState({ age: '', onlyPartnerWithPlan: '' })

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

  const handleChangeTerm = ({ value, name }) => {
    setTerm({ ...term, [name]: value });
  }

  const filterByAge = () => {
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

  const filterPartnerWithPlan = () => {
    if (term.onlyPartnerWithPlan) {
      const filterd = usersFiltered.filter((user) => {
        return Object.keys(user.planning).length > 0
      })
      setUsersFiltered(filterd)
    }
  }

  const filteredPartners = () => {
    filterByAge();
    filterPartnerWithPlan();
  }


  useEffect(() => {
    if (Object.keys(state.users).length > 0) {
      filteredPartners();
    }
    // eslint-disable-next-line
  }, [state.users, term])

  return (

    <div className='partners-page-container'>
      <h1>Partners</h1>
      <div className='partners-filters'>
        <CheckBox handleChangeTerm={handleChangeTerm} />
        <SelectBoxAge handleChangeTerm={handleChangeTerm} />
      </div>
      {!Object.keys(state.users).length > 0 ? (<Spinner />) :
        (
          <div className='cards-partners'>
            {renderedCards}
          </div>
        )}
    </div>
  )
}

export default PartnersPage