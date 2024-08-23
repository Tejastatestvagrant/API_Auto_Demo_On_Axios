const axiosInstance = require('./axiosInstance');

// Function to get all users
async function getUsers() {
  try {
    const response = await axiosInstance.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error getting users:', error.message);
    throw error;
  }
}

// Function to create a user
async function createUser(userData) {
  try {
    const response = await axiosInstance.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error.message);
    throw error;
  }
}

// Function to update a user
async function updateUser(userId, updateData) {
  try {
    const response = await axiosInstance.put(`/users/${userId}`, updateData);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error.message);
    throw error;
  }
}

// Function to delete a user
async function deleteUser(userId) {
  try {
    const response = await axiosInstance.delete(`/users/${userId}`);
    return response.status;
  } catch (error) {
    console.error('Error deleting user:', error.message);
    throw error;
  }
}

module.exports = { getUsers, createUser, updateUser, deleteUser };
