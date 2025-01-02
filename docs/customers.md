## **Customers Module**
### **2. Customer Management**
- **GET** `/customers`
  - **Description**: Fetch all customers.
  - **Response**:
    ```json
    [
      {
        "id": 1,
        "name": "Jane Doe",
        "email": "jane.doe@example.com"
      }
    ]
    ```

- **POST** `/customers`
  - **Description**: Add a new customer.
  - **Request Body**:
    ```json
    {
      "name": "Jane Doe",
      "email": "jane.doe@example.com",
      "phone": "1234567890"
    }
    ```
  - **Response**:
    ```json
    {
      "id": 1,
      "name": "Jane Doe",
      "email": "jane.doe@example.com",
      "phone": "1234567890"
    }
    ```

- **PATCH** `/customers/:id`
  - **Description**: Update a customer's information.
  - **Request Body**:
    ```json
    {
      "email": "jane.new@example.com"
    }
    ```
  - **Response**:
    ```json
    {
      "id": 1,
      "name": "Jane Doe",
      "email": "jane.new@example.com",
      "phone": "1234567890"
    }
    ```

---