import axios from 'axios'

const baseURL = 'https://629509fe63b5d108c198f911.mockapi.io';

export const getUsers = async () => {
  const response = await axios.get(`${baseURL}/users`);
  const users = response.data;
  return users;
}

export const getUser = async (id) => {
  const response = await axios.get(`${baseURL}/users/${id}`);
  const user = response.data;
  return user;
}

export const deleteUser = async (id) => {
  await axios.delete(`${baseURL}/users/${id}`);
}

export const updateUser = async (id, updatedProfile) => {
  await axios.put(`${baseURL}/shoes/${id}`, updatedProfile);
}

export const createUser = async (newUser) => {
  await axios.post(`${baseURL}/users/`, newUser);
}
