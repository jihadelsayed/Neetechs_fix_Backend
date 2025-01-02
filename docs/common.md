
# Common API Documentation

This API is used to log and retrieve audit logs for various actions.

## Endpoints

### 1. Get Audit Logs
- **Endpoint**: `GET /common/audit-logs`
- **Description**: Retrieves a list of audit logs. Optionally, you can filter the logs by action.
- **Parameters**:
  - `action` (query parameter, optional): The action to filter the audit logs by (e.g., 'USER_LOGIN', 'UPDATE_ROLE').
- **Response**:
  - **Status**: 200 OK
  - **Body**: 
    ```json
    [
      {
        "id": 1,
        "action": "USER_LOGIN",
        "performedBy": "admin",
        "targetEntity": "User",
        "details": "User logged in successfully",
        "timestamp": "2025-01-01T12:00:00Z"
      },
      {
        "id": 2,
        "action": "UPDATE_ROLE",
        "performedBy": "admin",
        "targetEntity": "User",
        "details": "Updated role for user ID 1",
        "timestamp": "2025-01-01T12:30:00Z"
      }
    ]
    ```

---

## Entities Overview

- **AuditLog**: Represents an audit log entry for a particular action. Contains information about the action, who performed it, the target entity affected, and additional details.
  
---

### **AuditLog Entity Fields**
- **id**: Unique identifier for the log entry.
- **action**: The action performed (e.g., 'USER_LOGIN', 'UPDATE_ROLE').
- **performedBy**: The user or actor who performed the action (can be a username or user ID).
- **targetEntity**: The entity that was affected by the action (e.g., 'User', 'Role').
- **details**: Additional information about the action performed.
- **timestamp**: The timestamp when the action occurred.

---

## Error Handling
- **404 Not Found**: Returned if no audit logs match the provided filters (e.g., invalid `action` parameter).
- **400 Bad Request**: Returned when the query parameters are invalid.
  
