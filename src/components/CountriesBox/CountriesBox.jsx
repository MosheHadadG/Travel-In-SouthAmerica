import React, { useContext } from 'react'
import { myContext } from '../../context/myContext'
import './CountriesBox.css'


function CountriesBox({ handleClickedCountry }) {
  const { countriesSouthAmerica } = useContext(myContext);

  const handleClickCountry = ({ target: { name } }) => {
    return name;
  }

  const renderedCountries = countriesSouthAmerica.map((country) => {
    return (
        <div key={country} className="list-country">
          <button
            name={country}
            onClick={(event) => handleClickedCountry(handleClickCountry(event))}>
            {country}
          </button>
        </div>

    );
  })

  return (
    <div  className='countries-box'>
      <div className='list-countries'>
        {renderedCountries}

      </div>
    </div>
  )
}

export default CountriesBox