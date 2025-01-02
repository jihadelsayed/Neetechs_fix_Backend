## **Inventory Module**
### **5. Inventory Management**
- **GET** `/inventory/products`
  - **Description**: Fetch all products in the inventory.
  - **Response**:
    ```json
    [
      { "id": 1, "name": "Screen", "price": 50, "stock": 10 }
    ]
    ```

- **POST** `/inventory/products`
  - **Description**: Add a new product.
  - **Request Body**:
    ```json
    {
      "name": "Battery",
      "price": 20,
      "stock": 50
    }
    ```
  - **Response**:
    ```json
    {
      "id": 2,
      "name": "Battery",
      "price": 20,
      "stock": 50
    }
    ```

- **PATCH** `/inventory/products/:id`
  - **Description**: Update product details or stock.
  - **Request Body**:
    ```json
    {
      "stock": 45
    }
    ```
  - **Response**:
    ```json
    {
      "id": 2,
      "stock": 45
    }
    ```

---