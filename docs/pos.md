## **POS Module**
### **4. Point of Sale**
- **POST** `/pos/sales`
  - **Description**: Record a new sale.
  - **Request Body**:
    ```json
    {
      "customerId": 1,
      "items": [
        { "productId": 1, "quantity": 2 },
        { "productId": 2, "quantity": 1 }
      ],
      "paymentMethod": "credit"
    }
    ```
  - **Response**:
    ```json
    {
      "saleId": 1,
      "total": 150,
      "status": "completed"
    }
    ```

---