# Employees API Documentation

## **Overview**

### **1. Get All Employees**
- **GET** `/employees`
  - **Description**: Fetch a list of all employees.
  - **Response**:
    ```json
    [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "role": "Technician"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "role": "Manager"
      }
    ]
    ```

### **2. Get Employee by ID**
- **GET** `/employees/:id`
  - **Description**: Fetch details of a specific employee by their ID.
  - **Response**:
    ```json
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "role": "Technician",
      "phone": "1234567890",
      "status": "active"
    }
    ```

### **3. Add New Employee**
- **POST** `/employees`
  - **Description**: Add a new employee to the system.
  - **Request Body**:
    ```json
    {
      "name": "Jane Doe",
      "email": "jane.doe@example.com",
      "role": "Technician",
      "phone": "1234567890"
    }
    ```
  - **Response**:
    ```json
    {
      "id": 3,
      "name": "Jane Doe",
      "email": "jane.doe@example.com",
      "role": "Technician",
      "phone": "1234567890",
      "status": "active"
    }
    ```

### **4. Update Employee**
- **PATCH** `/employees/:id`
  - **Description**: Update details of an existing employee.
  - **Request Body**:
    ```json
    {
      "role": "Manager"
    }
    ```
  - **Response**:
    ```json
    {
      "id": 1,
      "role": "Manager"
    }
    ```

### **5. Delete Employee**
- **DELETE** `/employees/:id`
  - **Description**: Remove an employee from the system.
  - **Response**:
    ```json
    {
      "message": "Employee removed successfully"
    }
    ```

---

## **Documentation Notes**
1. All endpoints require authentication and must include a bearer token in the `Authorization` header.
   - Example:
     ```
     Authorization: Bearer <token>
     ```

2. Validation errors return `400 Bad Request` with details about the validation issue.

3. Unauthenticated requests return `401 Unauthorized`.

4. Requests for resources that do not exist return `404 Not Found`.

