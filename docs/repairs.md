## **Repairs Module**
### **3. Repairs Management**
- **GET** `/repairs`
  - **Description**: Fetch all repair tickets.
  - **Response**:
    ```json
    [
      {
        "id": 1,
        "customerName": "Jane Doe",
        "issueDescription": "Screen not working",
        "status": "open",
        "technician": { "id": 1, "name": "Technician A" },
        "partsAndLabor": [
          { "id": 1, "partName": "Screen", "partCost": 50, "laborCost": 20 }
        ],
        "warranty": { "id": 1, "warrantyNumber": "W12345" }
      }
    ]
    ```

- **POST** `/repairs`
  - **Description**: Create a new repair ticket.
  - **Request Body**:
    ```json
    {
      "customerName": "Jane Doe",
      "issueDescription": "Battery not charging",
      "technicianId": 1,
      "warrantyId": 1
    }
    ```
  - **Response**:
    ```json
    {
      "id": 2,
      "customerName": "Jane Doe",
      "issueDescription": "Battery not charging",
      "status": "open",
      "technician": { "id": 1, "name": "Technician A" },
      "warranty": { "id": 1, "warrantyNumber": "W12345" }
    }
    ```

- **PATCH** `/repairs/:id`
  - **Description**: Update a repair ticket's status or details.
  - **Request Body**:
    ```json
    {
      "status": "closed"
    }
    ```
  - **Response**:
    ```json
    {
      "id": 1,
      "status": "closed"
    }
    ```

---