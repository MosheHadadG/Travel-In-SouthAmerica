import axios from "axios";





const baseURL = 'https://api.weatherapi.com/v1/current.json?key=b0a1661122344f219f1222545221105'


export default async function getWeather(country) {
  const response = await axios.get(`${baseURL}=${country}&aqi=no`) 
  const weather = response.data
  // const temp = weather.current.temp_c
  return weather;
}