export const SQLbasic = [
    {
        "exercise": 1,
        "title": "Create Users Table",
        "description": "Create a table named `users` with columns for ID, username, and email.",
        "requirements": [
          "The `id` should be an INT and the primary key.",
          "The `username` should be VARCHAR, and `email` should be VARCHAR."
        ],
        "hint": "```sql\nCREATE TABLE users (\n    id INT PRIMARY KEY,\n    username VARCHAR(50),\n    email VARCHAR(100)\n);\n```"
      },
      {
        "exercise": 2,
        "title": "Insert User Records",
        "description": "Insert three records into the `users` table.",
        "requirements": [
          "Insert users with usernames 'john_doe', 'jane_smith', and 'bob_jones' with their respective emails."
        ],
        "hint": "```sql\nINSERT INTO users (username, email) VALUES\n('john_doe', 'john@example.com'),\n('jane_smith', 'jane@example.com'),\n('bob_jones', 'bob@example.com');\n```"
      },
      {
        "exercise": 3,
        "title": "Select All Users",
        "description": "Retrieve all records from the `users` table.",
        "requirements": [
          "Use the SELECT statement to fetch all user details."
        ],
        "hint": "```sql\nSELECT * FROM users;\n```"
      },
      {
        "exercise": 4,
        "title": "Update User Email",
        "description": "Update the email of the user 'john_doe' to `john_doe@example.com`.",
        "requirements": [
          "Write an SQL statement to update his email."
        ],
        "hint": "```sql\nUPDATE users SET email = 'john_doe@example.com' WHERE username = 'john_doe';\n```"
      },
      {
        "exercise": 5,
        "title": "Delete a User",
        "description": "Delete the record of the user 'bob_jones' from the `users` table.",
        "requirements": [
          "Use the DELETE statement to remove the user."
        ],
        "hint": "```sql\nDELETE FROM users WHERE username = 'bob_jones';\n```"
      },
      {
        "exercise": 6,
        "title": "Count Users",
        "description": "Count the total number of users in the `users` table.",
        "requirements": [
          "Write a SQL query to return the total user count."
        ],
        "hint": "```sql\nSELECT COUNT(*) AS total_users FROM users;\n```"
      },
      {
        "exercise": 7,
        "title": "Find User by ID",
        "description": "Retrieve the username and email by a given user ID.",
        "requirements": [
          "Fetch details for the user with ID 1."
        ],
        "hint": "```sql\nSELECT username, email FROM users WHERE id = 1;\n```"
      },
      {
        "exercise": 8,
        "title": "Order Users by Username",
        "description": "Select all users and order them by username in ascending order.",
        "requirements": [
          "Use ORDER BY clause to sort the results."
        ],
        "hint": "```sql\nSELECT * FROM users ORDER BY username ASC;\n```"
      },
      {
        "exercise": 9,
        "title": "Find Distinct Usernames",
        "description": "Retrieve a list of distinct usernames from the `users` table.",
        "requirements": [
          "Use the DISTINCT keyword in your query."
        ],
        "hint": "```sql\nSELECT DISTINCT username FROM users;\n```"
      },
      {
        "exercise": 10,
        "title": "Limit User Results",
        "description": "Select the first 3 records from the `users` table.",
        "requirements": [
          "Use the LIMIT clause to restrict the number of results."
        ],
        "hint": "```sql\nSELECT * FROM users LIMIT 3;\n```"
      }
      
]