import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getCars = async () => {
  const response = await axios.get(`${API_URL}/cars`);
  return response.data;
};

export const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/users`, userData);
  return response.data;
};

export const signin = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/signin`, userData);
  return response.data;
};
