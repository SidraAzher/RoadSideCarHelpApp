import api from './ApiService';
import AsyncStorage from '@react-native-async-storage/async-storage';


const loginUser = async (userData: FormData) => {
  try {
    const response: any = await api.post('/api/user/login', userData);
    const { token, data } = response.data;
    await AsyncStorage.setItem('authToken', token);
    await AsyncStorage.setItem('userData', JSON.stringify(data));

    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
      console.error('Error response headers:', error.response.headers);

    } else if (error.request) {
      // Request was made but no response received
      console.error('Error request: ===>', error.request);
    } else {
      // Something happened in setting up the request
      console.error('Error message:', error.message);
    }
    throw error?.message;
  }
};

const createUser = async (userData: FormData) => {
  try {
    const response = await api.post('/api/user/register', userData);
    const { token, data } = response.data;
    await AsyncStorage.setItem('authToken', token);
    await AsyncStorage.setItem('userData', JSON.stringify(data));

    return response.data;
  }
  catch (error) {
    if (error.response) {
      console.error('Error response data:', error.response.data.message);
      console.error('Error response status:', error.response.status);
      console.error('Error response headers:', error.response.headers);
      throw error.response.data.message;
    } else if (error.request) {
      console.error('Error request: ====>', error.request);
    } else {
      console.error('Error message:', error.response.data.message);
    }
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const response = await api.get(`/api/user/profile/${id}`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error(`Error fetching user with ID ${id}:`, error);
    throw error;
  }
};


const updateUser = async (userData) => {
  try {
    const response = await api.post(`/api/user/profile/update`, userData);
    return response.data;
  } catch (error) {
    // Handle error
    console.error(`Error updating user`, error);
    throw error;
  }
};

const logoutUser = async () => {
  try {
    const response = await api.post('/api/user/logout', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await AsyncStorage.setItem('authToken', '');
    return response.data;
  } catch (error) {
    // Handle error
    console.error(`Error logging out`, error);
    throw error;
  }
};

export { loginUser, getUserById, createUser, updateUser, logoutUser };


