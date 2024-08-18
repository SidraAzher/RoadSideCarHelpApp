import axios from 'axios';

// Create an instance of axios with default settings
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 120000, // Request timeout
    headers: {
        'Content-Type': 'multipart/form-data',
        // Add more default headers if needed
    },
});

// Request interceptor
api.interceptors.request.use(
    (config) => {
        // Add authorization or any other request configuration
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3VzZXIvbG9naW4iLCJpYXQiOjE3MjM5ODQ0MzIsImV4cCI6MTcyMzk4ODAzMiwibmJmIjoxNzIzOTg0NDMyLCJqdGkiOiJUQm1DdTNvenAzZ0xmbm0wIiwic3ViIjoiNCIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.jd3BYh1w0PwSqvujSeIOuaJmErc-a_xLvNDxK7HRbkE'; // Replace with your method of getting token
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
