import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://hospital-backend-41fl.onrender.com/api', 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
}); 

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    if (config.data instanceof FormData) {
      delete config.headers['Content-Type'];
    } else {
      config.headers['Content-Type'] = 'application/json';
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn('Unauthorized! Redirect to login...');
      // redirect login nếu cần
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
