
# API Automation with Axios

## Overview

This project demonstrates how to perform API automation testing using Axios, a popular HTTP client for Node.js. It includes tests for CRUD (Create, Read, Update, Delete) operations on a user service API, ensuring that the API behaves correctly under various scenarios.

## Features

- **CRUD Operations Testing**: Validates Create, Read, Update, and Delete operations.
- **Error Handling**: Ensures proper handling of errors and edge cases.
- **Modular Code**: Organized code structure for maintainability and readability.

## Project Structure

```
/src
  ├── axiosInstance.js      # Configuration for Axios instance
  ├── userService.js        # Functions for user service operations
/test
  ├── index.test.js         # Test cases for user service
.env                      # Environment variables
.gitignore                 # Files to be ignored by Git
package.json               # Project metadata and dependencies
README.md                  # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v20.15.1 or later)
- npm (v9.6.7 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/api-auto-demo-on-axios.git
   cd api-auto-demo-on-axios
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables. Create a `.env` file in the root directory with the following content:

   ```plaintext
   BASE_URL=https://reqres.in/api
   ```

### Running the Tests

To run the test cases, use the following command:

```bash
npm test
```

### Project Details

- **`src/axiosInstance.js`**: Contains the configuration for the Axios instance, including base URL and any necessary headers.
- **`src/userService.js`**: Defines functions for interacting with the user service API.
- **`test/index.test.js`**: Contains Jest test cases for validating CRUD operations.

### Test Scenarios

- **getUsers**: Tests fetching users from the API.
- **createUser**: Tests creating a new user.
- **updateUser**: Tests updating an existing user.
- **deleteUser**: Tests deleting a user.

### Error Handling

The tests also cover various error scenarios to ensure robust error handling in the application. This includes testing for:

- **Network Errors**
- **Server Errors**
- **Client Errors**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Axios Documentation](https://axios-http.com/docs/)
- [ReqRes API Documentation](https://reqres.in/)

## Contact

For any questions or issues, please contact:

- **Your Name**: [your-email@example.com](mailto:your-email@example.com)

Feel free to modify any details such as your GitHub repository URL or contact information as needed.
