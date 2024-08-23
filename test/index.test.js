const axios = require('axios');

// Base URL for ReqRes API
const apiUrl = 'https://reqres.in/api';

// Function to get all users
async function getUsers() {
  try {
    const response = await axios.get(`${apiUrl}/users`);
    console.log('Users:', response.data);
  } catch (error) {
    console.error('Error getting users:', error);
  }
}

// Function to create a user
async function createUser(userData) {
  try {
    const response = await axios.post(`${apiUrl}/users`, userData);
    console.log('User created:', response.data);
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

// Function to update a user
async function updateUser(userId, updateData) {
  try {
    const response = await axios.put(`${apiUrl}/users/${userId}`, updateData);
    console.log('User updated:', response.data);
  } catch (error) {
    console.error('Error updating user:', error);
  }
}

// Function to delete a user
async function deleteUser(userId) {
  try {
    const response = await axios.delete(`${apiUrl}/users/${userId}`);
    console.log('User deleted:', response.status);
  } catch (error) {
    console.error('Error deleting user:', error);
  }
}

// Example usage
(async () => {
  await getUsers();
  await createUser({ name: 'John Doe', job: 'Software Developer' });
  await updateUser(2, { name: 'Jane Doe', job: 'Project Manager' });
  await deleteUser(2);
})();
