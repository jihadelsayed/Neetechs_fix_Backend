
# Users API Documentation

This API is used to manage users and their associated profiles and settings.

## Endpoints

### 1. Get all users
- **Endpoint**: `GET /users`
- **Description**: Retrieves a list of all users, including their profile and settings.
- **Response**:
  - **Status**: 200 OK
  - **Body**: 
    ```json
    [
      {
        "id": 1,
        "profile": {
          "firstName": "John",
          "lastName": "Doe",
          "avatarUrl": "http://example.com/avatar.jpg",
          "phoneNumber": "1234567890"
        },
        "settings": {
          "emailNotifications": true,
          "smsNotifications": true,
          "language": "en",
          "theme": "dark"
        }
      }
    ]
    ```

### 2. Get user by ID
- **Endpoint**: `GET /users/:id`
- **Description**: Retrieves the details of a user by their ID, including their profile and settings.
- **Parameters**:
  - `id` (path parameter): The ID of the user to retrieve.
- **Response**:
  - **Status**: 200 OK
  - **Body**: 
    ```json
    {
      "id": 1,
      "profile": {
        "firstName": "John",
        "lastName": "Doe",
        "avatarUrl": "http://example.com/avatar.jpg",
        "phoneNumber": "1234567890"
      },
      "settings": {
        "emailNotifications": true,
        "smsNotifications": true,
        "language": "en",
        "theme": "dark"
      }
    }
    ```
  - **Status**: 404 Not Found
  - **Body**:
    ```json
    {
      "message": "User with ID 1 not found"
    }
    ```

### 3. Create a new user
- **Endpoint**: `POST /users`
- **Description**: Creates a new user with the associated profile and settings.
- **Request Body**:
  ```json
  {
    "email": "john.doe@example.com",
    "password": "securepassword123",
    "profile": {
      "firstName": "John",
      "lastName": "Doe",
      "avatarUrl": "http://example.com/avatar.jpg",
      "phoneNumber": "1234567890"
    },
    "settings": {
      "emailNotifications": true,
      "smsNotifications": true,
      "language": "en",
      "theme": "dark"
    }
  }
  ```
- **Response**:
  - **Status**: 201 Created
  - **Body**:
    ```json
    {
      "id": 1,
      "email": "john.doe@example.com",
      "profile": {
        "firstName": "John",
        "lastName": "Doe",
        "avatarUrl": "http://example.com/avatar.jpg",
        "phoneNumber": "1234567890"
      },
      "settings": {
        "emailNotifications": true,
        "smsNotifications": true,
        "language": "en",
        "theme": "dark"
      }
    }
    ```

### 4. Update user by ID
- **Endpoint**: `PATCH /users/:id`
- **Description**: Updates the details of an existing user, including profile and settings.
- **Parameters**:
  - `id` (path parameter): The ID of the user to update.
- **Request Body**:
  ```json
  {
    "email": "new.email@example.com",
    "profile": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "settings": {
      "emailNotifications": false,
      "smsNotifications": true
    }
  }
  ```
- **Response**:
  - **Status**: 200 OK
  - **Body**:
    ```json
    {
      "id": 1,
      "email": "new.email@example.com",
      "profile": {
        "firstName": "John",
        "lastName": "Doe",
        "avatarUrl": "http://example.com/avatar.jpg",
        "phoneNumber": "1234567890"
      },
      "settings": {
        "emailNotifications": false,
        "smsNotifications": true,
        "language": "en",
        "theme": "dark"
      }
    }
    ```

## Entities Overview

- **User**: Contains basic information about the user, including email, password, etc.
- **Profile**: Contains detailed personal information about the user, including their first and last name, avatar, and phone number.
- **UserSettings**: Contains user preferences like notifications settings, language, and theme.

## Error Handling
- **404 Not Found**: Returned when the requested user does not exist.
- **400 Bad Request**: Returned when the provided data is invalid (e.g., missing required fields in the request body).
  
