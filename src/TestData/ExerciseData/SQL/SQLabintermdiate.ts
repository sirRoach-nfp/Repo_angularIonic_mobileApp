export const SQLabintermediate = [{
    "exercise": 1,
    "title": "Create an Index on a Table",
    "description": "Create an index on the `name` column of the `products` table to improve search performance.",
    "requirements": [
      "The index should be named `idx_product_name`."
    ],
    "hint": "```sql\nCREATE INDEX idx_product_name ON products(name);\n```"
  },
  {
    "exercise": 2,
    "title": "Create a View for Product Prices",
    "description": "Create a view named `product_prices` that shows the name and price of all products.",
    "requirements": [
      "The view should be created from the `products` table."
    ],
    "hint": "```sql\nCREATE VIEW product_prices AS\nSELECT name, price FROM products;\n```"
  },
  {
    "exercise": 3,
    "title": "Use Common Table Expressions (CTE)",
    "description": "Use a Common Table Expression (CTE) to calculate the total price of products in each category.",
    "requirements": [
      "Use the CTE to organize your results before the final SELECT."
    ],
    "hint": "```sql\nWITH category_totals AS (\n    SELECT category, SUM(price) AS total_price\n    FROM products\n    GROUP BY category\n)\nSELECT * FROM category_totals;\n```"
  },
  {
    "exercise": 4,
    "title": "Add a Foreign Key Constraint",
    "description": "Alter the `orders` table to add a foreign key constraint on the `user_id` column referencing the `users` table.",
    "requirements": [
      "Ensure the foreign key ensures referential integrity."
    ],
    "hint": "```sql\nALTER TABLE orders\nADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(id);\n```"
  },
  {
    "exercise": 5,
    "title": "Use Window Functions",
    "description": "Retrieve the top 3 products by price using a window function.",
    "requirements": [
      "Use the ROW_NUMBER() function for this exercise."
    ],
    "hint": "```sql\nSELECT name, price\nFROM (\n    SELECT name, price, ROW_NUMBER() OVER (ORDER BY price DESC) AS row_num\n    FROM products\n) AS ranked\nWHERE row_num <= 3;\n```"
  },
  {
    "exercise": 6,
    "title": "Transactional Operations",
    "description": "Perform a transactional operation that inserts a new product and updates an existing one in one transaction.",
    "requirements": [
      "Ensure that both operations succeed or fail together."
    ],
    "hint": "```sql\nBEGIN;\nINSERT INTO products (name, price, category) VALUES ('New Product', 199.99, 'Category');\nUPDATE products SET price = price * 0.90 WHERE name = 'Laptop';\nCOMMIT;\n```"
  },
  {
    "exercise": 7,
    "title": "Stored Procedure for Product Insertion",
    "description": "Create a stored procedure named `add_product` that takes parameters for name, price, and category and inserts a new product.",
    "requirements": [
      "The procedure should handle errors during insertion."
    ],
    "hint": "```sql\nDELIMITER //\nCREATE PROCEDURE add_product(IN p_name VARCHAR(100), IN p_price DECIMAL(10, 2), IN p_category VARCHAR(50))\nBEGIN\n    DECLARE CONTINUE HANDLER FOR SQLEXCEPTION\n    BEGIN\n        ROLLBACK;\n    END;\n    START TRANSACTION;\n    INSERT INTO products (name, price, category) VALUES (p_name, p_price, p_category);\n    COMMIT;\nEND //\nDELIMITER ;\n```"
  },
  {
    "exercise": 8,
    "title": "Trigger for Automatic Timestamping",
    "description": "Create a trigger that automatically updates the `updated_at` column whenever a product record is modified.",
    "requirements": [
      "The `products` table must have an `updated_at` TIMESTAMP column."
    ],
    "hint": "```sql\nCREATE TRIGGER before_update_product\nBEFORE UPDATE ON products\nFOR EACH ROW\nSET NEW.updated_at = NOW();\n```"
  },
  
  {
    "exercise": 10,
    "title": "Performance Tuning with EXPLAIN",
    "description": "Use the EXPLAIN statement to analyze the performance of a SELECT query on the `products` table.",
    "requirements": [
      "Analyze how indexes are being used in the query."
    ],
    "hint": "```sql\nEXPLAIN SELECT * FROM products WHERE price > 300;\n```"
  }
  ]