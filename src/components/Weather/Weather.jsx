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
      <article class="widget">
        <div class="weatherIcon"></div>
        <div class="weatherInfo">
          <h1 class="temperature">25&deg;</h1>
          <h2 class="city">Tirana, {randomCountry}</h2>
        </div>
      </article>
    </div>

  )
}

export default Weather