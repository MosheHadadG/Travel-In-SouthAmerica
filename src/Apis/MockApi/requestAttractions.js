import axios from 'axios'

const baseURL = 'https://629509fe63b5d108c198f911.mockapi.io';

export const getAttractions = async () => {
  const response = await axios.get(`${baseURL}/attractions`);
  const attractions = response.data;
  return attractions;
}
