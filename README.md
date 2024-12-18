# Todo List API

This is a Rest API that implements CRUD features for a simple Todo app using NodeJS, Express.js, Prisma, and MySQL and Typescript

## Prerequisites

Ensure you have the following installed on your system:

- Node.js (version 20 or higher) installed locally
- npm (comes with Node.js)
- MySQL (or another supported database)

## Repository Setup

Clone the Repository:

```bash
git clone https://github.com/SeunJay/todo-api
cd todo-api

```

Install Project Dependencies:

```bash
npm install

```

### Environment Variable

Create a `.env` file in the root directory and add the following variable:

```bash
DATABASE_URL=your_mysql_url
```

### Todo Schema Properties

- id
- Title
- Color
- Completed Status

### Database Initialization with Prisma

1. Install Prisma CLI (if not already installed):

   ```bash
   npm install -g prisma
   ```

2. Generate Prisma Client:

   ```bash
   npx prisma generate
   ```

3. Run Database Migrations:

   ```bash
   npx prisma migrate dev --name init
   ```

## Starting the Application

After setting up the database, you can start the application:

```bash
  npm start
```

## API Endpoints

The following section documents the endpoints, including HTTP methods, paths, descriptions, request payloads, and responses.

1. `GET /api/tasks` Fetch all tasks.

   - Response (200 OK)

   ```
   {
    "success": true,
    "todos": [
        {
            "id": 1,
            "title": "Go shopping",
            "color": "red",
            "completed": false,
            "createdAt": "2024-12-17T08:51:06.504Z",
            "updatedAt": "2024-12-17T08:52:15.112Z"
        }
    ]
   }
   ```

   -

2. `POST /api/tasks` Add a new task.

- Request Payload

```
{
    "title": "Study my books",
    "color": "black"
}
```

- Response (201 OK)

```
{
    "success": true,
    "todo": {
        "id": 2,
        "title": "Study my books",
        "color": "black",
        "completed": false,
        "createdAt": "2024-12-17T04:08:10.090Z",
        "updatedAt": "2024-12-17T04:08:10.090Z"
    }
}
```

3. `PUT /api/tasks/:id` Update a task.

- Request Payload

```
{
    "title": "Study my books super well",
    "color": "black",
    "completed": true
}
```

- Response (200 OK)

```
{
    "success": true,
    "todo": {
        "id": 2,
        "title": "Study my books super well",
        "color": "black",
        "completed": true,
        "createdAt": "2024-12-17T04:08:10.090Z",
        "updatedAt": "2024-12-17T04:08:10.090Z"
    }
}
```

4. `DELETE /api/tasks/:id` Delete a task.

- Response (204 No content)

## Author

Oluwaseun Jayeoba

```

```

```

```
