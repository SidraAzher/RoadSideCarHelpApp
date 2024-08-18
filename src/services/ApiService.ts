import AsyncStorage from '@react-native-async-storage/async-storage';
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
    async (config) => {
        // Get token from AsyncStorage
        const token = await AsyncStorage.getItem('authToken');
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
