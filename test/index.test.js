const userService = require('../src/userService');
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);
const apiClient = require('../src/axiosInstance');

beforeEach(() => {
  mock.reset();
});

describe('User Service Tests', () => {
  
  describe('getUsers', () => {
    it('should fetch users successfully', async () => {
      mock.onGet('/users').reply(200, { data: [] });

      const data = await userService.getUsers();
      expect(data).toEqual({ data: [] });
    });

    it('should handle errors when fetching users', async () => {
      mock.onGet('/users').reply(500);

      await expect(userService.getUsers()).rejects.toThrow('Request failed with status code 500');
    });
  });

  describe('createUser', () => {
    it('should create a user successfully', async () => {
      const userData = { name: 'John Doe', job: 'Software Developer' };
      mock.onPost('/users', userData).reply(201, { id: 1, ...userData });

      const data = await userService.createUser(userData);
      expect(data).toEqual({ id: 1, ...userData });
    });

    it('should handle errors when creating a user', async () => {
      const userData = { name: 'John Doe', job: 'Software Developer' };
      mock.onPost('/users', userData).reply(500);

      await expect(userService.createUser(userData)).rejects.toThrow('Request failed with status code 500');
    });
  });

  describe('updateUser', () => {
    it('should update a user successfully', async () => {
      const userId = 2;
      const updateData = { name: 'Jane Doe', job: 'Project Manager' };
      mock.onPut(`/users/${userId}`, updateData).reply(200, { id: userId, ...updateData });

      const data = await userService.updateUser(userId, updateData);
      expect(data).toEqual({ id: userId, ...updateData });
    });

    it('should handle errors when updating a user', async () => {
      const userId = 2;
      const updateData = { name: 'Jane Doe', job: 'Project Manager' };
      mock.onPut(`/users/${userId}`, updateData).reply(500);

      await expect(userService.updateUser(userId, updateData)).rejects.toThrow('Request failed with status code 500');
    });
  });

  describe('deleteUser', () => {
    it('should delete a user successfully', async () => {
      const userId = 2;
      mock.onDelete(`/users/${userId}`).reply(204);

      const status = await userService.deleteUser(userId);
      expect(status).toBe(204);
    });

    it('should handle errors when deleting a user', async () => {
      const userId = 2;
      mock.onDelete(`/users/${userId}`).reply(500);

      await expect(userService.deleteUser(userId)).rejects.toThrow('Request failed with status code 500');
    });
  });

});
