const userService = require('./userService');

(async () => {
  try {
    const users = await userService.getUsers();
    console.log('Users:', users);
    
    const createdUser = await userService.createUser({ name: 'John Doe', job: 'Software Developer' });
    console.log('User created:', createdUser);

    const updatedUser = await userService.updateUser(2, { name: 'Jane Doe', job: 'Project Manager' });
    console.log('User updated:', updatedUser);

    const deleteStatus = await userService.deleteUser(2);
    console.log('User deleted:', deleteStatus);
  } catch (error) {
    console.error('Error in operations:', error.message);
  }
})();
