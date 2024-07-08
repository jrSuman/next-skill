import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Set the base URL from environment variables
  headers: {
    'Content-Type': 'application/json',
  },
});

console.log('called', process.env)

// Add a request interceptor
// api.interceptors.request.use(
//   (config) => {
//     // You can add token or other request configurations here
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle error responses here
    if (error.response && error.response.status === 401) {
      // Redirect to login page or handle unauthorized errors
    }
    return Promise.reject(error);
  }
);

export default api;
