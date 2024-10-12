export const SQLintermediate = [{
    "exercise": 1,
    "title": "Create Products Table",
    "description": "Create a table named `products` with columns for ID, name, price, and category.",
    "requirements": [
      "The `id` should be an INT and the primary key.",
      "The `name` should be VARCHAR, `price` should be DECIMAL, and `category` should be VARCHAR."
    ],
    "hint": "```sql\nCREATE TABLE products (\n    id INT PRIMARY KEY,\n    name VARCHAR(100),\n    price DECIMAL(10, 2),\n    category VARCHAR(50)\n);\n```"
  },
  {
    "exercise": 2,
    "title": "Insert Product Records",
    "description": "Insert three records into the `products` table.",
    "requirements": [
      "Insert products with names 'Laptop', 'Smartphone', and 'Tablet' with their respective prices and categories."
    ],
    "hint": "```sql\nINSERT INTO products (name, price, category) VALUES\n('Laptop', 999.99, 'Electronics'),\n('Smartphone', 499.99, 'Electronics'),\n('Tablet', 299.99, 'Electronics');\n```"
  },
  {
    "exercise": 3,
    "title": "Select Products Above a Price",
    "description": "Retrieve all products with a price greater than 300.",
    "requirements": [
      "Use the SELECT statement with a WHERE clause."
    ],
    "hint": "```sql\nSELECT * FROM products WHERE price > 300;\n```"
  },
  {
    "exercise": 4,
    "title": "Update Product Price",
    "description": "Increase the price of the product 'Smartphone' by 10%.",
    "requirements": [
      "Write an SQL statement to update the product price."
    ],
    "hint": "```sql\nUPDATE products SET price = price * 1.10 WHERE name = 'Smartphone';\n```"
  },
  {
    "exercise": 5,
    "title": "Delete Product by Category",
    "description": "Delete all products in the 'Electronics' category from the `products` table.",
    "requirements": [
      "Use the DELETE statement with a WHERE clause."
    ],
    "hint": "```sql\nDELETE FROM products WHERE category = 'Electronics';\n```"
  },
  {
    "exercise": 6,
    "title": "Count Products by Category",
    "description": "Count the total number of products in each category.",
    "requirements": [
      "Use GROUP BY clause to aggregate results."
    ],
    "hint": "```sql\nSELECT category, COUNT(*) AS total_products FROM products GROUP BY category;\n```"
  },
  {
    "exercise": 7,
    "title": "Find Products with Substring in Name",
    "description": "Retrieve all products whose names contain the substring 'top'.",
    "requirements": [
      "Use the LIKE operator in your query."
    ],
    "hint": "```sql\nSELECT * FROM products WHERE name LIKE '%top%';\n```"
  },
  {
    "exercise": 8,
    "title": "Join Users and Orders",
    "description": "Assuming an `orders` table exists, retrieve user information along with their orders.",
    "requirements": [
      "Join the `users` table with the `orders` table on the user ID."
    ],
    "hint": "```sql\nSELECT u.username, o.order_id, o.order_date\nFROM users u\nJOIN orders o ON u.id = o.user_id;\n```"
  },
  {
    "exercise": 9,
    "title": "Find Average Product Price",
    "description": "Calculate the average price of all products in the `products` table.",
    "requirements": [
      "Use the AVG() function in your query."
    ],
    "hint": "```sql\nSELECT AVG(price) AS average_price FROM products;\n```"
  },
  {
    "exercise": 10,
    "title": "Retrieve Products with Row Number",
    "description": "List products along with their row numbers.",
    "requirements": [
      "Use the ROW_NUMBER() function to assign row numbers to the results."
    ],
    "hint": "```sql\nSELECT name, price, ROW_NUMBER() OVER (ORDER BY price) AS row_num FROM products;\n```"
  }
  ]