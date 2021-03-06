import React, { useContext } from 'react'
import { myContext } from '../../../context/myContext'
import './CountriesBox.css'
import './CountriesBoxResponsive.css'


function CountriesBox({ handleClickedCountry }) {
  const { countriesSouthAmerica } = useContext(myContext);


  const renderedCountries = countriesSouthAmerica.map((country) => {
    return (
      <div key={country} className="list-country">
        <button
          name={country}
          onClick={({ target: { name } }) => handleClickedCountry(name)}>
          {country}
        </button>
      </div>

    );
  })

  return (
    <div className='countries-box'>
      <h4>Arrange the countries on your route</h4>
      <div className='list-countries'>
        {renderedCountries}

      </div>
    </div>
  )
}

export default CountriesBox