# Marketing API Documentation

## **Overview**
This documentation outlines the API endpoints for managing marketing campaigns and related operations.

### **1. Get All Campaigns**
- **GET** `/marketing/campaigns`
  - **Description**: Fetch a list of all marketing campaigns.
  - **Response**:
    ```json
    [
      {
        "id": 1,
        "name": "Holiday Discounts",
        "status": "active",
        "startDate": "2025-01-01",
        "endDate": "2025-01-15"
      },
      {
        "id": 2,
        "name": "Summer Sale",
        "status": "inactive",
        "startDate": "2024-06-01",
        "endDate": "2024-06-30"
      }
    ]
    ```

### **2. Get Campaign by ID**
- **GET** `/marketing/campaigns/:id`
  - **Description**: Fetch details of a specific marketing campaign by ID.
  - **Response**:
    ```json
    {
      "id": 1,
      "name": "Holiday Discounts",
      "description": "Discounts on all products for the holiday season.",
      "status": "active",
      "startDate": "2025-01-01",
      "endDate": "2025-01-15",
      "audience": "All Customers"
    }
    ```

### **3. Create New Campaign**
- **POST** `/marketing/campaigns`
  - **Description**: Create a new marketing campaign.
  - **Request Body**:
    ```json
    {
      "name": "Spring Sale",
      "description": "Up to 50% off for the spring season.",
      "startDate": "2025-03-01",
      "endDate": "2025-03-31",
      "audience": "Loyal Customers"
    }
    ```
  - **Response**:
    ```json
    {
      "id": 3,
      "name": "Spring Sale",
      "status": "active",
      "startDate": "2025-03-01",
      "endDate": "2025-03-31",
      "audience": "Loyal Customers"
    }
    ```

### **4. Update Campaign**
- **PATCH** `/marketing/campaigns/:id`
  - **Description**: Update the details of an existing marketing campaign.
  - **Request Body**:
    ```json
    {
      "description": "Up to 60% off for the spring season."
    }
    ```
  - **Response**:
    ```json
    {
      "id": 1,
      "name": "Holiday Discounts",
      "description": "Up to 60% off for the spring season.",
      "status": "active",
      "startDate": "2025-01-01",
      "endDate": "2025-01-15"
    }
    ```

### **5. Delete Campaign**
- **DELETE** `/marketing/campaigns/:id`
  - **Description**: Remove a marketing campaign from the system.
  - **Response**:
    ```json
    {
      "message": "Campaign deleted successfully."
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

5. Deleting a campaign does not affect historical marketing analytics generated through it.

