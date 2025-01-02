
## **Reports Module**
### **6. Reporting**
- **GET** `/reports`
  - **Description**: Fetch all reports.
  - **Response**:
    ```json
    [
      { "id": 1, "title": "Daily Summary", "content": "Report content..." }
    ]
    ```

- **POST** `/reports`
  - **Description**: Create a new report.
  - **Request Body**:
    ```json
    {
      "title": "Weekly Sales",
      "content": "This week we sold..."
    }
    ```
  - **Response**:
    ```json
    {
      "id": 2,
      "title": "Weekly Sales",
      "content": "This week we sold..."
    }
    ```

---