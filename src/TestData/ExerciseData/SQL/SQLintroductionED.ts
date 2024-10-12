export const SQLintroduction = [{
    "exercise": 1,
    "title": "Create Employees Table",
    "description": "Create a table named `employees` with columns for ID, first name, last name, and email.",
    "requirements": [
      "The `id` should be an INT and the primary key.",
      "The `first_name`, `last_name`, and `email` should be VARCHAR types."
    ],
    "hint": "```sql\nCREATE TABLE employees (\n    id INT PRIMARY KEY,\n    first_name VARCHAR(50),\n    last_name VARCHAR(50),\n    email VARCHAR(100)\n);\n```"
  },
  {
    "exercise": 2,
    "title": "Insert Employee Records",
    "description": "Insert three records into the `employees` table.",
    "requirements": [
      "Insert John Doe, Jane Smith, and Alice Johnson with their email addresses."
    ],
    "hint": "```sql\nINSERT INTO employees (first_name, last_name, email) VALUES\n('John', 'Doe', 'john@example.com'),\n('Jane', 'Smith', 'jane@example.com'),\n('Alice', 'Johnson', 'alice@example.com');\n```"
  },
  {
    "exercise": 3,
    "title": "Select All Employees",
    "description": "Retrieve all records from the `employees` table.",
    "requirements": [
      "Use the SELECT statement to fetch all employee details."
    ],
    "hint": "```sql\nSELECT * FROM employees;\n```"
  },
  {
    "exercise": 4,
    "title": "Update Employee Email",
    "description": "Update the email address of Jane Smith to `jane.smith@example.com`.",
    "requirements": [
      "Write an SQL statement to update her email."
    ],
    "hint": "```sql\nUPDATE employees SET email = 'jane.smith@example.com' WHERE first_name = 'Jane' AND last_name = 'Smith';\n```"
  },
  {
    "exercise": 5,
    "title": "Delete an Employee",
    "description": "Delete the record of Alice Johnson from the `employees` table.",
    "requirements": [
      "Use the DELETE statement to remove Alice's record."
    ],
    "hint": "```sql\nDELETE FROM employees WHERE first_name = 'Alice' AND last_name = 'Johnson';\n```"
  },
  {
    "exercise": 6,
    "title": "Count Employees",
    "description": "Count the total number of employees in the `employees` table.",
    "requirements": [
      "Write a SQL query to return the count of employees."
    ],
    "hint": "```sql\nSELECT COUNT(*) AS total_employees FROM employees;\n```"
  },
  {
    "exercise": 7,
    "title": "Find Employee by Email",
    "description": "Retrieve the first and last name of an employee by their email address.",
    "requirements": [
      "Fetch details for an employee with the email `john@example.com`."
    ],
    "hint": "```sql\nSELECT first_name, last_name FROM employees WHERE email = 'john@example.com';\n```"
  },
  {
    "exercise": 8,
    "title": "Order Employees by Last Name",
    "description": "Select all employees and order them by last name in ascending order.",
    "requirements": [
      "Use ORDER BY clause to sort the results."
    ],
    "hint": "```sql\nSELECT * FROM employees ORDER BY last_name ASC;\n```"
  },
  {
    "exercise": 9,
    "title": "Find Distinct First Names",
    "description": "Retrieve a list of distinct first names from the `employees` table.",
    "requirements": [
      "Use the DISTINCT keyword in your query."
    ],
    "hint": "```sql\nSELECT DISTINCT first_name FROM employees;\n```"
  },
  {
    "exercise": 10,
    "title": "Limit Employee Results",
    "description": "Select the first 2 records from the `employees` table.",
    "requirements": [
      "Use the LIMIT clause to restrict the number of results."
    ],
    "hint": "```sql\nSELECT * FROM employees LIMIT 2;\n```"
  }
  ]