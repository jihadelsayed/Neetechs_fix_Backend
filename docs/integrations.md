# Integrations API Documentation

## **Overview**
This documentation provides an outline of the API endpoints for managing third-party integrations within the system.

### **1. Get All Integrations**
- **GET** `/integrations`
  - **Description**: Fetch a list of all configured integrations.
  - **Response**:
    ```json
    [
      {
        "id": 1,
        "name": "Slack",
        "status": "active",
        "lastSynced": "2025-01-01T10:00:00Z"
      },
      {
        "id": 2,
        "name": "Google Calendar",
        "status": "inactive",
        "lastSynced": null
      }
    ]
    ```

### **2. Get Integration Details**
- **GET** `/integrations/:id`
  - **Description**: Fetch details of a specific integration by ID.
  - **Response**:
    ```json
    {
      "id": 1,
      "name": "Slack",
      "status": "active",
      "configuration": {
        "webhookUrl": "https://hooks.slack.com/...",
        "channel": "#notifications"
      },
      "lastSynced": "2025-01-01T10:00:00Z"
    }
    ```

### **3. Add New Integration**
- **POST** `/integrations`
  - **Description**: Add a new integration.
  - **Request Body**:
    ```json
    {
      "name": "Slack",
      "configuration": {
        "webhookUrl": "https://hooks.slack.com/...",
        "channel": "#notifications"
      }
    }
    ```
  - **Response**:
    ```json
    {
      "id": 3,
      "name": "Slack",
      "status": "active",
      "configuration": {
        "webhookUrl": "https://hooks.slack.com/...",
        "channel": "#notifications"
      },
      "lastSynced": null
    }
    ```

### **4. Update Integration**
- **PATCH** `/integrations/:id`
  - **Description**: Update configuration for an existing integration.
  - **Request Body**:
    ```json
    {
      "configuration": {
        "webhookUrl": "https://hooks.slack.com/new-url",
        "channel": "#alerts"
      }
    }
    ```
  - **Response**:
    ```json
    {
      "id": 1,
      "name": "Slack",
      "configuration": {
        "webhookUrl": "https://hooks.slack.com/new-url",
        "channel": "#alerts"
      }
    }
    ```

### **5. Delete Integration**
- **DELETE** `/integrations/:id`
  - **Description**: Remove an integration from the system.
  - **Response**:
    ```json
    {
      "message": "Integration deleted successfully."
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

5. Deletion of an integration does not affect historical data generated through the integration.

