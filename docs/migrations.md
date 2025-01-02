# Migrations Documentation

## **Overview**
This document outlines how to manage database migrations in the project, including creation, execution, and rollback of migrations.

---

## **Migration Commands**

### **1. Generate a New Migration**
- **Command**:
  ```bash
  npx typeorm migration:generate -n <MigrationName>
  ```
- **Description**: Creates a new migration file based on changes in your entity files.

### **2. Create an Empty Migration**
- **Command**:
  ```bash
  npx typeorm migration:create -n <MigrationName>
  ```
- **Description**: Creates an empty migration file for manual editing.

### **3. Run Migrations**
- **Command**:
  ```bash
  npx typeorm migration:run
  ```
- **Description**: Applies all pending migrations to the database.

### **4. Revert a Migration**
- **Command**:
  ```bash
  npx typeorm migration:revert
  ```
- **Description**: Rolls back the last applied migration.

---

## **Migration File Structure**
Generated migration files follow this structure:

```typescript
import { MigrationInterface, QueryRunner } from 'typeorm';

export class MigrationNameYYYYMMDDHHMMSS implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Migration logic for applying changes
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Migration logic for reverting changes
    }
}
```

- **`up` Method**: Contains the code to apply the migration.
- **`down` Method**: Contains the code to reverse the migration.

---

## **Best Practices**
1. **Use Descriptive Names**: When generating migrations, use clear and descriptive names (e.g., `AddUsersTable`, `UpdateProductSchema`).
2. **Test Locally**: Always test migrations on a local or staging environment before applying them to production.
3. **Backup Databases**: Ensure that database backups are in place before running migrations in production.
4. **Track Changes**: Use a version control system (e.g., Git) to track migration files.

---

## **Troubleshooting**

### **Error: "No changes detected"**
- **Cause**: TypeORM cannot detect differences between the current database schema and entity definitions.
- **Solution**: Ensure the entity files are up-to-date and synced with the database connection.

### **Error: "Migration file not found"**
- **Cause**: The migration file specified for execution does not exist.
- **Solution**: Verify the migration file name and path.

### **Error: "Cannot apply migration"**
- **Cause**: The database schema does not match the expected state.
- **Solution**: Check the `up` and `down` methods for errors and validate the current schema.

---

## **Documentation Notes**
1. The project uses TypeORM for managing database migrations.
2. Ensure the `ormconfig` is correctly configured with database connection details before running commands.
3. Regularly review migration history to ensure consistency across environments.

