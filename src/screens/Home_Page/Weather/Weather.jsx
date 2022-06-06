import React, { useContext } from 'react'
// import getWeather from '../../Apis/WeatherApi/requestWeather'
import { myContext } from '../../../context/myContext';
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
      <div className="widget">
        <div className="weatherIcon"></div>
        <div className="weatherInfo">
          <h1 className="temperature">25&deg;</h1>
          <h2 className="city">Tirana, {randomCountry}</h2>
        </div>
      </div>
    </div>

  )
}

export default Weather