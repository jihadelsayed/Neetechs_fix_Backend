## **Auth Module**
### **1. Authentication and Authorization**
- **POST** `/auth/login`
  - **Description**: Log in a user and generate an access token.
  - **Request Body**:
    ```json
    {
      "email": "user@example.com",
      "password": "password123"
    }
    ```
  - **Response**:
    ```json
    {
      "accessToken": "jwt-token"
    }
    ```

- **POST** `/auth/register`
  - **Description**: Register a new user.
  - **Request Body**:
    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "password123",
      "role": "admin"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "User registered successfully"
    }
    ```

---