import React, { useContext } from 'react'
// import getWeather from '../../Apis/WeatherApi/requestWeather'
import { myContext } from '../../context/myContext';
import './Weather.css'

function Weather() {
  const { countriesSouthAmerica } = useContext(myContext);
  const randomIndex = Math.floor(Math.random() * countriesSouthAmerica.length);
  const randomCountry = countriesSouthAmerica[randomIndex];

  // const weatherApi = async () => {
  //   const weather = await getWeather(randomCountry);
  //   console.log(weather)
  // }


  return (
    <div className='weather-container'>
      <div className='weather-box'>
        <div className='temp-countryName'>
          <h2>{randomCountry}</h2>
          <h4>33°</h4>
        </div>
        <div className='weather-icon'>
        <i class="fa-solid fa-sun fa-2xl"></i>
        </div>
      </div>


    </div>
  )
}

export default Weather