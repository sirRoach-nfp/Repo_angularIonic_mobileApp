export const SQLabintermediateQD = [
    {
        "question": "What is the purpose of the SQL WITH clause?",
        "options": {
            "A": "To create a temporary table",
            "B": "To define a Common Table Expression (CTE)",
            "C": "To insert data into a table",
            "D": "To drop a table"
        },
        "correctAnswer": "B",
        "explanation": "The WITH clause is used to define a Common Table Expression (CTE) that can be referenced within a SELECT, INSERT, UPDATE, or DELETE statement."
    },
    {
        "question": "How do you implement a many-to-many relationship in SQL?",
        "options": {
            "A": "Using a single table with foreign keys",
            "B": "Using a junction table to link two tables",
            "C": "By duplicating data in multiple tables",
            "D": "By using the UNION operator"
        },
        "correctAnswer": "B",
        "explanation": "A many-to-many relationship is implemented using a junction table that contains foreign keys referencing the primary keys of the two related tables."
    },
    {
        "question": "What is a trigger in SQL?",
        "options": {
            "A": "A command to execute a query",
            "B": "A stored procedure that is automatically executed in response to certain events on a table",
            "C": "A type of index",
            "D": "A method for data encryption"
        },
        "correctAnswer": "B",
        "explanation": "A trigger is a stored procedure that automatically executes in response to specific events on a table, such as INSERT, UPDATE, or DELETE."
    },
    {
        "question": "What is a stored procedure?",
        "options": {
            "A": "A single SQL statement executed on demand",
            "B": "A precompiled collection of SQL statements that can be executed as a single call",
            "C": "A method for backing up a database",
            "D": "A way to enforce constraints on tables"
        },
        "correctAnswer": "B",
        "explanation": "A stored procedure is a precompiled collection of SQL statements that can be executed as a single call, allowing for complex operations."
    },
    {
        "question": "What is the purpose of indexing in SQL?",
        "options": {
            "A": "To reduce data redundancy",
            "B": "To improve the speed of data retrieval operations",
            "C": "To enforce data integrity",
            "D": "To create relationships between tables"
        },
        "correctAnswer": "B",
        "explanation": "Indexing is used to improve the speed of data retrieval operations on a database table, making searches faster."
    },
    {
        "question": "Which SQL command is used to grant privileges to a user?",
        "options": {
            "A": "ALLOW",
            "B": "GRANT",
            "C": "PERMIT",
            "D": "AUTHORIZE"
        },
        "correctAnswer": "B",
        "explanation": "The GRANT command is used to give specific privileges to a user or role in a database."
    },
    {
        "question": "What is the function of the SQL EXPLAIN command?",
        "options": {
            "A": "To execute a query",
            "B": "To describe the structure of a table",
            "C": "To display the execution plan of a query",
            "D": "To update statistics"
        },
        "correctAnswer": "C",
        "explanation": "The EXPLAIN command is used to display the execution plan of a query, helping to optimize query performance."
    },
    {
        "question": "What is a composite key?",
        "options": {
            "A": "A key that uniquely identifies a record in a table",
            "B": "A combination of two or more columns that can uniquely identify a row in a table",
            "C": "A key used for indexing",
            "D": "A type of foreign key"
        },
        "correctAnswer": "B",
        "explanation": "A composite key is a combination of two or more columns that can uniquely identify a row in a table."
    },
    {
        "question": "How can you improve query performance in SQL?",
        "options": {
            "A": "By using subqueries exclusively",
            "B": "By normalizing data",
            "C": "By creating indexes on frequently queried columns",
            "D": "By avoiding JOIN operations"
        },
        "correctAnswer": "C",
        "explanation": "Creating indexes on frequently queried columns can significantly improve query performance by speeding up data retrieval."
    },
    {
        "question": "What does the SQL statement CREATE TABLE AS do?",
        "options": {
            "A": "Creates a new table with the same structure as an existing table",
            "B": "Creates a new table and populates it with the results of a SELECT query",
            "C": "Creates a temporary table",
            "D": "Creates a view"
        },
        "correctAnswer": "B",
        "explanation": "The CREATE TABLE AS statement creates a new table and populates it with the results of a SELECT query."
    },
    {
        "question": "Which SQL function would you use to get the current date?",
        "options": {
            "A": "CURRENT_DATE()",
            "B": "NOW()",
            "C": "GETDATE()",
            "D": "DATE()"
        },
        "correctAnswer": "B",
        "explanation": "The NOW() function returns the current date and time in SQL."
    },
    {
        "question": "What is normalization in SQL?",
        "options": {
            "A": "The process of converting data into a different format",
            "B": "The process of organizing data to minimize redundancy",
            "C": "The process of creating indexes",
            "D": "The process of writing SQL queries"
        },
        "correctAnswer": "B",
        "explanation": "Normalization is the process of organizing data in a database to minimize redundancy and dependency."
    },
    {
        "question": "What does the SQL UNION ALL operator do?",
        "options": {
            "A": "Combines the results of two or more SELECT statements and removes duplicates",
            "B": "Combines the results of two or more SELECT statements and includes duplicates",
            "C": "Filters records based on a condition",
            "D": "Sorts the results of a query"
        },
        "correctAnswer": "B",
        "explanation": "The UNION ALL operator combines the results of two or more SELECT statements and includes all duplicates."
    },
    {
        "question": "What is the purpose of the SQL CASE statement?",
        "options": {
            "A": "To filter results",
            "B": "To perform conditional logic within a query",
            "C": "To join multiple tables",
            "D": "To define a new table"
        },
        "correctAnswer": "B",
        "explanation": "The CASE statement allows you to perform conditional logic within a query, returning different results based on specified conditions."
    },
    {
        "question": "What is a materialized view?",
        "options": {
            "A": "A virtual table that does not store data",
            "B": "A view that stores data physically and can be refreshed periodically",
            "C": "A view created with the SELECT * syntax",
            "D": "A temporary table"
        },
        "correctAnswer": "B",
        "explanation": "A materialized view is a view that stores data physically and can be refreshed periodically to improve query performance."
    },
    {
        "question": "What is a SQL injection?",
        "options": {
            "A": "A method of optimizing queries",
            "B": "A security vulnerability that allows an attacker to manipulate SQL queries",
            "C": "A type of data encryption",
            "D": "A method of backing up a database"
        },
        "correctAnswer": "B",
        "explanation": "SQL injection is a security vulnerability that allows an attacker to manipulate SQL queries by injecting malicious code."
    },
    {
        "question": "Which SQL command is used to remove a view?",
        "options": {
            "A": "DELETE VIEW",
            "B": "DROP VIEW",
            "C": "REMOVE VIEW",
            "D": "CLEAR VIEW"
        },
        "correctAnswer": "B",
        "explanation": "The DROP VIEW command is used to remove a view from the database."
    },
    {
        "question": "What is a self-join in SQL?",
        "options": {
            "A": "A join between two different tables",
            "B": "A join where a table is joined with itself",
            "C": "A join that retrieves all rows from both tables",
            "D": "A join that uses the UNION operator"
        },
        "correctAnswer": "B",
        "explanation": "A self-join is a join where a table is joined with itself, allowing you to compare rows within the same table."
    },
    {
        "question": "What is the difference between INNER JOIN and LEFT JOIN?",
        "options": {
            "A": "INNER JOIN returns all records from both tables",
            "B": "LEFT JOIN returns all records from the left table and matched records from the right table",
            "C": "LEFT JOIN returns all records from the right table and matched records from the left table",
            "D": "INNER JOIN returns unmatched records from both tables"
        },
        "correctAnswer": "B",
        "explanation": "LEFT JOIN returns all records from the left table and matched records from the right table, while INNER JOIN returns only the matched records from both tables."
    },
    {
        "question": "Which clause is used to specify the conditions for a JOIN operation?",
        "options": {
            "A": "WHERE",
            "B": "ON",
            "C": "JOIN",
            "D": "HAVING"
        },
        "correctAnswer": "B",
        "explanation": "The ON clause is used to specify the conditions for a JOIN operation, determining how tables should be joined."
    },
    {
        "question": "What does the SQL GROUP BY clause do?",
        "options": {
            "A": "Groups rows that have the same values in specified columns",
            "B": "Filters rows based on a condition",
            "C": "Orders the result set",
            "D": "Creates a temporary table"
        },
        "correctAnswer": "A",
        "explanation": "The GROUP BY clause groups rows that have the same values in specified columns, allowing aggregate functions to be applied."
    },
    {
        "question": "What is the purpose of the SQL ROLLUP operator?",
        "options": {
            "A": "To create subtotals in a result set",
            "B": "To filter results based on a condition",
            "C": "To create a view",
            "D": "To join multiple tables"
        },
        "correctAnswer": "A",
        "explanation": "The ROLLUP operator is used to create subtotals in a result set, allowing for hierarchical grouping."
    },
    {
        "question": "Which SQL function would you use to count the number of rows in a result set?",
        "options": {
            "A": "SUM()",
            "B": "COUNT()",
            "C": "TOTAL()",
            "D": "NUMBER()"
        },
        "correctAnswer": "B",
        "explanation": "The COUNT() function is used to count the number of rows in a result set."
    },
    {
        "question": "What is a foreign key constraint?",
        "options": {
            "A": "A rule that enforces uniqueness in a column",
            "B": "A rule that creates a relationship between two tables",
            "C": "A rule that defines a primary key",
            "D": "A rule that deletes rows from a table"
        },
        "correctAnswer": "B",
        "explanation": "A foreign key constraint is a rule that creates a relationship between two tables, ensuring referential integrity."
    },
    {
        "question": "What does the SQL DISTINCT keyword do?",
        "options": {
            "A": "Returns all records including duplicates",
            "B": "Returns unique records only",
            "C": "Filters records based on a condition",
            "D": "Sorts the result set"
        },
        "correctAnswer": "B",
        "explanation": "The DISTINCT keyword is used to return unique records only, removing duplicates from the result set."
    },
    {
        "question": "How do you handle NULL values in SQL?",
        "options": {
            "A": "Use the ISNULL() function",
            "B": "Use the NOT NULL constraint",
            "C": "Use the COALESCE() function",
            "D": "Both A and C"
        },
        "correctAnswer": "D",
        "explanation": "You can handle NULL values in SQL using the ISNULL() function to check for NULLs and the COALESCE() function to return the first non-NULL value."
    },
    {
        "question": "What is the purpose of the SQL HAVING clause?",
        "options": {
            "A": "To filter results before grouping",
            "B": "To filter results after grouping",
            "C": "To sort the result set",
            "D": "To create a view"
        },
        "correctAnswer": "B",
        "explanation": "The HAVING clause is used to filter results after grouping, allowing you to apply conditions on aggregate functions."
    },
    {
        "question": "What is the purpose of the SQL INDEX keyword?",
        "options": {
            "A": "To improve data integrity",
            "B": "To speed up retrieval of rows by creating an index",
            "C": "To create a backup of a table",
            "D": "To enforce constraints on tables"
        },
        "correctAnswer": "B",
        "explanation": "The INDEX keyword is used to speed up retrieval of rows by creating an index on a table."
    },
    {
        "question": "Which SQL statement is used to change existing data in a table?",
        "options": {
            "A": "UPDATE",
            "B": "MODIFY",
            "C": "CHANGE",
            "D": "EDIT"
        },
        "correctAnswer": "A",
        "explanation": "The UPDATE statement is used to change existing data in a table."
    },
    {
        "question": "What is the result of executing a DELETE statement without a WHERE clause?",
        "options": {
            "A": "Deletes the first record only",
            "B": "Deletes all records from the table",
            "C": "Deletes the last record only",
            "D": "Returns an error"
        },
        "correctAnswer": "B",
        "explanation": "Executing a DELETE statement without a WHERE clause deletes all records from the specified table."
    },
    {
        "question": "What is the purpose of the SQL LIKE operator?",
        "options": {
            "A": "To filter results based on exact matches",
            "B": "To filter results based on pattern matching",
            "C": "To sort results",
            "D": "To create a view"
        },
        "correctAnswer": "B",
        "explanation": "The LIKE operator is used to filter results based on pattern matching, allowing for flexible search criteria."
    },
    {
        "question": "How do you create an alias for a table in SQL?",
        "options": {
            "A": "Using the ALIAS keyword",
            "B": "Using the AS keyword",
            "C": "Using the RENAME keyword",
            "D": "Using the CREATE keyword"
        },
        "correctAnswer": "B",
        "explanation": "You create an alias for a table in SQL using the AS keyword, allowing you to refer to the table by a different name in your query."
    },
    {
        "question": "What is the purpose of the SQL COALESCE function?",
        "options": {
            "A": "To count the number of rows",
            "B": "To return the first non-NULL value in a list",
            "C": "To find the maximum value",
            "D": "To calculate the average"
        },
        "correctAnswer": "B",
        "explanation": "The COALESCE function returns the first non-NULL value in a list, making it useful for handling NULL values."
    },
    {
        "question": "What does the SQL SUBSTRING function do?",
        "options": {
            "A": "Replaces a substring within a string",
            "B": "Extracts a substring from a string",
            "C": "Finds the position of a substring in a string",
            "D": "Concatenates two strings"
        },
        "correctAnswer": "B",
        "explanation": "The SUBSTRING function extracts a substring from a string based on specified starting position and length."
    },
    {
        "question": "What is a view in SQL?",
        "options": {
            "A": "A virtual table created from a SELECT query",
            "B": "A physical table that stores data",
            "C": "A method of sorting data",
            "D": "A temporary table"
        },
        "correctAnswer": "A",
        "explanation": "A view is a virtual table created from the results of a SELECT query, allowing you to simplify complex queries."
    },
    {
        "question": "What does the SQL OFFSET clause do?",
        "options": {
            "A": "Skips a specified number of rows in a result set",
            "B": "Limits the number of rows returned",
            "C": "Sorts the result set",
            "D": "Filters records based on a condition"
        },
        "correctAnswer": "A",
        "explanation": "The OFFSET clause is used to skip a specified number of rows in a result set, often used in pagination."
    },
    {
        "question": "What is the function of the SQL CROSS JOIN?",
        "options": {
            "A": "Returns only matched records from both tables",
            "B": "Returns all combinations of rows from two tables",
            "C": "Filters records based on a condition",
            "D": "Creates a temporary table"
        },
        "correctAnswer": "B",
        "explanation": "A CROSS JOIN returns all combinations of rows from two tables, resulting in a Cartesian product."
    }
];