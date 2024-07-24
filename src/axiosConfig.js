// axiosConfig.js

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000", // Replace with your API base URL
  timeout: 10000, // Request timeout (optional)
  headers: {
    "Content-Type": "application/json",
    // Add any common headers here
  },
});

// Optional: Interceptors for request and response
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify headers or do other request preprocessing here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
