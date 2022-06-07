import axios from "axios";





const baseURL = 'https://api.weatherapi.com/v1/current.json?key=335a6b876e6248ae846155914220706'


export default async function getWeather(country) {
  const response = await axios.get(`${baseURL}&q=${country}&aqi=no`) 
  const weather = response.data
  // const temp = weather.current.temp_c
  return weather;
}