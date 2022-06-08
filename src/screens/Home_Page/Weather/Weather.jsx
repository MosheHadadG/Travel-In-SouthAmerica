import React, { useContext, useEffect, useState } from 'react'
import getWeather from '../../../Apis/WeatherApi/requestWeather';
import { myContext } from '../../../context/myContext';
import Spinner from '../../../components/Spinner/Spinner'
import './Weather.css'

function Weather() {
  const { countriesSouthAmerica } = useContext(myContext);
  const [weatherInfo, setWeatherInfo] = useState({})
  const randomIndex = Math.floor(Math.random() * countriesSouthAmerica.length);
  const randomCountry = countriesSouthAmerica[randomIndex];

  const weatherApi = async () => {
    const weather = await getWeather(randomCountry);
    const capital = weather.location.name;
    const tempCelsius = weather.current.temp_c;
    const weatherIcon = weather.current.condition.icon
    console.log(weather)
    setWeatherInfo({ capital, tempCelsius, randomCountry, weatherIcon })
  }

  useEffect(() => {
    weatherApi();
    // eslint-disable-next-line
  }, [])


  return (

    <div className='weather-container'>
      {!Object.keys(weatherInfo).length > 0 ? (<Spinner />) :
      ( <div className="widget">
        <div className="weatherIcon">
          <img src={`https:${weatherInfo.weatherIcon}`} alt="weather icon" />
        </div>
        <div className="weatherInfo">
          <h1 className="temperature">{weatherInfo.tempCelsius}&deg;</h1>
          <h2 className="city">{weatherInfo.capital}, {weatherInfo.randomCountry}</h2>
        </div>
      </div>
      )}
    </div>

  )
}

export default Weather