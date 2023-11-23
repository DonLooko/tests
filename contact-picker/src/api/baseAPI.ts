import axios from 'axios';
import config from 'config';

const baseAPI = axios.create({
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

baseAPI.defaults.headers.appKey = config.api.appKey;
baseAPI.defaults.headers.userId = window.user.userId;
baseAPI.defaults.headers.token = window.user.token;
baseAPI.defaults.baseURL = config.api.baseUrl;

export default baseAPI;
