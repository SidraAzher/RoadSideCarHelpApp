import api from './ApiService';


const loginUser = async (userData: FormData) => {
  try {
    const response = await api.post('/api/user/login', userData);
    return response.data;
  } catch (error) {
    if (error.response) {

      // Server responded with a status other than 2xx
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
      console.error('Error response headers:', error.response.headers);

    } else if (error.request) {
      // Request was made but no response received
      console.error('Error request:', error.request);
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
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error response data:', error.response.data.message);
      console.error('Error response status:', error.response.status);
      console.error('Error response headers:', error.response.headers);
      throw error.response.data.message;
    } else if (error.request) {
      console.error('Error request:', error.request);
    } else {
      console.error('Error message:', error.response.data.message);
    }
    throw error;
  }
};




const getUsers = async () => {
  try {
    const response = await api.get('/fact');
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching users:', error);
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error(`Error fetching user with ID ${id}:`, error);
    throw error;
  }
};


const updateUser = async (id, userData) => {
  try {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  } catch (error) {
    // Handle error
    console.error(`Error updating user with ID ${id}:`, error);
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error(`Error deleting user with ID ${id}:`, error);
    throw error;
  }
};

export { getUsers, loginUser, getUserById, createUser, updateUser, deleteUser };


