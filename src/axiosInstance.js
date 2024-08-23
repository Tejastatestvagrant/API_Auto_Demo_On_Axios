require('dotenv').config();
const axios = require('axios');

const apiClient = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: process.env.API_TIMEOUT || 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

module.exports = apiClient;
