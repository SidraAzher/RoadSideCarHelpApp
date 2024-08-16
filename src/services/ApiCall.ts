import api from './ApiService';

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

const createUser = async (userData) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error creating user:', error);
    throw error;
  }
};

const loginUser = async (userData: any) => {
  console.log('userData ===>', userData)
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error creating user:', error);
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


