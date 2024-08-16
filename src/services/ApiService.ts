import axios from 'axios';

// Create an instance of axios with default settings
const api = axios.create({
    baseURL: 'https://catfact.ninja',
    timeout: 10000, // Request timeout
    headers: {
        'Content-Type': 'application/json',
        // Add more default headers if needed
    },
});

// Request interceptor
api.interceptors.request.use(
    (config) => {
        // Add authorization or any other request configuration
        const token = 'your_token_here'; // Replace with your method of getting token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);

// Response interceptor
api.interceptors.response.use(
    (response) => {
        // Handle response data
        return response;
    },
    (error) => {
        // Handle response error
        return Promise.reject(error);
    }
);

export default api;
