# Notifications API Documentation

## **Overview**
This documentation provides details of the API endpoints for managing notifications within the system.

---

## **Endpoints**

### **1. Get All Notifications**
- **GET** `/notifications`
  - **Description**: Retrieve a list of all notifications for the authenticated user.
  - **Response**:
    ```json
    [
      {
        "id": 1,
        "title": "New Repair Ticket Assigned",
        "message": "A new ticket has been assigned to you.",
        "type": "repair",
        "isRead": false,
        "createdAt": "2025-01-01T10:00:00Z"
      },
      {
        "id": 2,
        "title": "Stock Alert",
        "message": "Product XYZ is low in stock.",
        "type": "inventory",
        "isRead": true,
        "createdAt": "2025-01-02T08:00:00Z"
      }
    ]
    ```

### **2. Get Notification by ID**
- **GET** `/notifications/:id`
  - **Description**: Retrieve details of a specific notification by ID.
  - **Response**:
    ```json
    {
      "id": 1,
      "title": "New Repair Ticket Assigned",
      "message": "A new ticket has been assigned to you.",
      "type": "repair",
      "isRead": false,
      "createdAt": "2025-01-01T10:00:00Z"
    }
    ```

### **3. Mark Notification as Read**
- **PATCH** `/notifications/:id/mark-as-read`
  - **Description**: Mark a specific notification as read.
  - **Response**:
    ```json
    {
      "id": 1,
      "isRead": true
    }
    ```

### **4. Mark All Notifications as Read**
- **PATCH** `/notifications/mark-all-as-read`
  - **Description**: Mark all notifications for the authenticated user as read.
  - **Response**:
    ```json
    {
      "message": "All notifications marked as read."
    }
    ```

### **5. Delete Notification**
- **DELETE** `/notifications/:id`
  - **Description**: Delete a specific notification by ID.
  - **Response**:
    ```json
    {
      "message": "Notification deleted successfully."
    }
    ```

### **6. Get Unread Notifications Count**
- **GET** `/notifications/unread-count`
  - **Description**: Get the count of unread notifications for the authenticated user.
  - **Response**:
    ```json
    {
      "unreadCount": 5
    }
    ```

---

## **Documentation Notes**

1. **Authentication**: All endpoints require authentication and must include a bearer token in the `Authorization` header.
   - Example:
     ```
     Authorization: Bearer <token>
     ```

2. **Validation Errors**: If a request is invalid, the API will return a `400 Bad Request` with details about the issue.

3. **Error Handling**:
   - Unauthorized access returns `401 Unauthorized`.
   - Requests for non-existent resources return `404 Not Found`.

4. **Performance**: Use pagination when fetching a large number of notifications by providing `?page` and `?limit` query parameters (e.g., `/notifications?page=1&limit=10`).

5. **Real-Time Notifications**: To receive notifications in real-time, subscribe to the WebSocket or push notification service integrated with the system.

