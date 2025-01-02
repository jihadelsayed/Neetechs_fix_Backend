# Dashboard API Documentation

## **Overview**

### **1. Get Dashboard Overview**
- **GET** `/dashboard/overview`
  - **Description**: Fetch high-level statistics and metrics for the application.
  - **Response**:
    ```json
    {
      "totalRepairs": 120,
      "totalSales": 5400,
      "inventoryStatus": {
        "lowStock": 15,
        "totalItems": 300
      },
      "activeTechnicians": 8
    }
    ```

### **2. Get Repair Statistics**
- **GET** `/dashboard/repair-statistics`
  - **Description**: Fetch detailed repair-related statistics.
  - **Response**:
    ```json
    {
      "repairsByStatus": {
        "open": 10,
        "inProgress": 5,
        "closed": 105
      },
      "repairsByTechnician": [
        { "technician": "Technician A", "repairs": 50 },
        { "technician": "Technician B", "repairs": 40 }
      ]
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

