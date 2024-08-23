const userService = require('../src/userService');

describe('User Service Tests', () => {
  
  describe('getUsers', () => {
    it('should fetch users successfully', async () => {
      const data = await userService.getUsers();
      expect(data).toHaveProperty('data');
      expect(data.data).toBeInstanceOf(Array);
    });
  });

  describe('createUser', () => {
    it('should create a user successfully', async () => {
      const userData = { name: 'John Doe', job: 'Software Developer' };
      const data = await userService.createUser(userData);
      expect(data).toHaveProperty('id');
      expect(data.name).toBe(userData.name);
      expect(data.job).toBe(userData.job);
    });
  });

  describe('updateUser', () => {
    it('should update a user successfully', async () => {
      const userId = 2;
      const updateData = { name: 'Jane Doe', job: 'Project Manager' };
      const data = await userService.updateUser(userId, updateData);
      expect(data).toHaveProperty('updatedAt');
      expect(data.name).toBe(updateData.name);
      expect(data.job).toBe(updateData.job);
    });
  });

  describe('deleteUser', () => {
    it('should delete a user successfully', async () => {
      const userId = 2;
      const status = await userService.deleteUser(userId);
      expect(status).toBe(204);
    });
  });

});
