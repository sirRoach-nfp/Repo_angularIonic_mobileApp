export const SQLintermediateQD = [
    {
        "question": "What is the purpose of the SQL JOIN clause?",
        "options": {
            "A": "To filter rows from a single table",
            "B": "To combine rows from two or more tables based on a related column",
            "C": "To sort the result set",
            "D": "To group rows with the same values"
        },
        "correctAnswer": "B",
        "explanation": "The JOIN clause is used to combine rows from two or more tables based on a related column."
    },
    {
        "question": "What does the GROUP BY clause do in SQL?",
        "options": {
            "A": "Sorts the results of a query",
            "B": "Aggregates rows that have the same values in specified columns",
            "C": "Filters the results of a query",
            "D": "Limits the number of results returned"
        },
        "correctAnswer": "B",
        "explanation": "The GROUP BY clause aggregates rows that have the same values in specified columns."
    },
    {
        "question": "What is a subquery in SQL?",
        "options": {
            "A": "A query that retrieves data from one table",
            "B": "A query nested within another query",
            "C": "A function that modifies data",
            "D": "A command to create a new database"
        },
        "correctAnswer": "B",
        "explanation": "A subquery is a query nested within another query, used to retrieve data based on results from the outer query."
    },
    {
        "question": "Which SQL statement is used to create a view?",
        "options": {
            "A": "CREATE VIEW",
            "B": "NEW VIEW",
            "C": "DEFINE VIEW",
            "D": "VIEW CREATE"
        },
        "correctAnswer": "A",
        "explanation": "The CREATE VIEW statement is used to create a virtual table based on the result of a SELECT query."
    },
    {
        "question": "What does the HAVING clause do in SQL?",
        "options": {
            "A": "Filters records before aggregation",
            "B": "Filters records after aggregation",
            "C": "Sorts the result set",
            "D": "Creates a temporary table"
        },
        "correctAnswer": "B",
        "explanation": "The HAVING clause is used to filter records after aggregation has taken place."
    },
    {
        "question": "What does the SQL statement INSERT INTO do?",
        "options": {
            "A": "Updates existing records",
            "B": "Deletes records from a table",
            "C": "Adds new records to a table",
            "D": "Retrieves data from a table"
        },
        "correctAnswer": "C",
        "explanation": "The INSERT INTO statement is used to add new records to a table."
    },
    {
        "question": "Which of the following is true about NULL values in SQL?",
        "options": {
            "A": "NULL is equal to zero",
            "B": "NULL is not equal to any value, including itself",
            "C": "NULL represents an empty string",
            "D": "NULL values are ignored in calculations"
        },
        "correctAnswer": "B",
        "explanation": "NULL is not equal to any value, including itself, and represents an unknown or missing value."
    },
    {
        "question": "What does the SQL statement UPDATE do?",
        "options": {
            "A": "Modifies existing records in a table",
            "B": "Removes records from a table",
            "C": "Creates new records",
            "D": "Retrieves data from a table"
        },
        "correctAnswer": "A",
        "explanation": "The UPDATE statement is used to modify existing records in a table."
    },
    {
        "question": "What is the purpose of the SQL DISTINCT keyword?",
        "options": {
            "A": "To combine rows",
            "B": "To return unique values from a column",
            "C": "To limit the number of results",
            "D": "To sort results"
        },
        "correctAnswer": "B",
        "explanation": "The DISTINCT keyword is used to return unique values from a specified column."
    },
    {
        "question": "Which command is used to remove a database in SQL?",
        "options": {
            "A": "DELETE DATABASE",
            "B": "DROP DATABASE",
            "C": "REMOVE DATABASE",
            "D": "CLEAR DATABASE"
        },
        "correctAnswer": "B",
        "explanation": "The DROP DATABASE command is used to remove a database and all of its associated data."
    },
    {
        "question": "What is a primary key in SQL?",
        "options": {
            "A": "A column that can accept NULL values",
            "B": "A column that uniquely identifies each row in a table",
            "C": "A foreign key that links to another table",
            "D": "A key used for indexing"
        },
        "correctAnswer": "B",
        "explanation": "A primary key is a column or a set of columns that uniquely identifies each row in a table."
    },
    {
        "question": "What is the purpose of the SQL UNION operator?",
        "options": {
            "A": "Combines the results of two or more SELECT statements",
            "B": "Filters the results of a query",
            "C": "Joins two tables",
            "D": "Aggregates data"
        },
        "correctAnswer": "A",
        "explanation": "The UNION operator combines the results of two or more SELECT statements, eliminating duplicate rows."
    },
    {
        "question": "What does the COALESCE function do in SQL?",
        "options": {
            "A": "Returns the first non-NULL value in a list",
            "B": "Counts the number of rows",
            "C": "Calculates the average value",
            "D": "Converts values to a different data type"
        },
        "correctAnswer": "A",
        "explanation": "The COALESCE function returns the first non-NULL value from a list of expressions."
    },
    {
        "question": "What is the purpose of indexing in SQL?",
        "options": {
            "A": "To create duplicate records",
            "B": "To improve the speed of data retrieval operations",
            "C": "To enforce data integrity",
            "D": "To sort records"
        },
        "correctAnswer": "B",
        "explanation": "Indexing is used to improve the speed of data retrieval operations on a database table."
    },
    {
        "question": "Which SQL statement is used to create a stored procedure?",
        "options": {
            "A": "CREATE PROCEDURE",
            "B": "NEW PROCEDURE",
            "C": "DEFINE PROCEDURE",
            "D": "PROCEDURE CREATE"
        },
        "correctAnswer": "A",
        "explanation": "The CREATE PROCEDURE statement is used to create a stored procedure in a database."
    },
    {
        "question": "What does the SQL command ROLLBACK do?",
        "options": {
            "A": "Commits the current transaction",
            "B": "Reverts the database to the last committed state",
            "C": "Creates a new transaction",
            "D": "Deletes records from a table"
        },
        "correctAnswer": "B",
        "explanation": "The ROLLBACK command reverts the database to the last committed state, undoing changes made in the current transaction."
    },
    {
        "question": "What is a foreign key constraint?",
        "options": {
            "A": "A rule that uniquely identifies each row in a table",
            "B": "A rule that ensures values in one table match values in another table",
            "C": "A way to speed up data retrieval",
            "D": "A method to encrypt data"
        },
        "correctAnswer": "B",
        "explanation": "A foreign key constraint ensures that values in one table match values in another table, maintaining referential integrity."
    },
    {
        "question": "Which SQL function would you use to round a number to the nearest integer?",
        "options": {
            "A": "ROUND()",
            "B": "CEIL()",
            "C": "FLOOR()",
            "D": "TRUNCATE()"
        },
        "correctAnswer": "A",
        "explanation": "The ROUND() function is used to round a number to the nearest integer."
    },
    {
        "question": "What is the purpose of the SQL JOIN clause?",
        "options": {
            "A": "To filter rows from a single table",
            "B": "To combine rows from two or more tables based on a related column",
            "C": "To sort the result set",
            "D": "To group rows with the same values"
        },
        "correctAnswer": "B",
        "explanation": "The JOIN clause is used to combine rows from two or more tables based on a related column."
    },
    {
        "question": "What does the GROUP BY clause do in SQL?",
        "options": {
            "A": "Sorts the results of a query",
            "B": "Aggregates rows that have the same values in specified columns",
            "C": "Filters the results of a query",
            "D": "Limits the number of results returned"
        },
        "correctAnswer": "B",
        "explanation": "The GROUP BY clause aggregates rows that have the same values in specified columns."
    },
    {
        "question": "What is a subquery in SQL?",
        "options": {
            "A": "A query that retrieves data from one table",
            "B": "A query nested within another query",
            "C": "A function that modifies data",
            "D": "A command to create a new database"
        },
        "correctAnswer": "B",
        "explanation": "A subquery is a query nested within another query, used to retrieve data based on results from the outer query."
    },
    {
        "question": "Which SQL statement is used to create a view?",
        "options": {
            "A": "CREATE VIEW",
            "B": "NEW VIEW",
            "C": "DEFINE VIEW",
            "D": "VIEW CREATE"
        },
        "correctAnswer": "A",
        "explanation": "The CREATE VIEW statement is used to create a virtual table based on the result of a SELECT query."
    },
    {
        "question": "What does the HAVING clause do in SQL?",
        "options": {
            "A": "Filters records before aggregation",
            "B": "Filters records after aggregation",
            "C": "Sorts the result set",
            "D": "Creates a temporary table"
        },
        "correctAnswer": "B",
        "explanation": "The HAVING clause is used to filter records after aggregation has taken place."
    },
    {
        "question": "What does the SQL statement INSERT INTO do?",
        "options": {
            "A": "Updates existing records",
            "B": "Deletes records from a table",
            "C": "Adds new records to a table",
            "D": "Retrieves data from a table"
        },
        "correctAnswer": "C",
        "explanation": "The INSERT INTO statement is used to add new records to a table."
    },
    {
        "question": "Which of the following is true about NULL values in SQL?",
        "options": {
            "A": "NULL is equal to zero",
            "B": "NULL is not equal to any value, including itself",
            "C": "NULL represents an empty string",
            "D": "NULL values are ignored in calculations"
        },
        "correctAnswer": "B",
        "explanation": "NULL is not equal to any value, including itself, and represents an unknown or missing value."
    },
    {
        "question": "What does the SQL statement UPDATE do?",
        "options": {
            "A": "Modifies existing records in a table",
            "B": "Removes records from a table",
            "C": "Creates new records",
            "D": "Retrieves data from a table"
        },
        "correctAnswer": "A",
        "explanation": "The UPDATE statement is used to modify existing records in a table."
    },
    {
        "question": "What is the purpose of the SQL DISTINCT keyword?",
        "options": {
            "A": "To combine rows",
            "B": "To return unique values from a column",
            "C": "To limit the number of results",
            "D": "To sort results"
        },
        "correctAnswer": "B",
        "explanation": "The DISTINCT keyword is used to return unique values from a specified column."
    },
    {
        "question": "Which command is used to remove a database in SQL?",
        "options": {
            "A": "DELETE DATABASE",
            "B": "DROP DATABASE",
            "C": "REMOVE DATABASE",
            "D": "CLEAR DATABASE"
        },
        "correctAnswer": "B",
        "explanation": "The DROP DATABASE command is used to remove a database and all of its associated data."
    },
    {
        "question": "What is a primary key in SQL?",
        "options": {
            "A": "A column that can accept NULL values",
            "B": "A column that uniquely identifies each row in a table",
            "C": "A foreign key that links to another table",
            "D": "A key used for indexing"
        },
        "correctAnswer": "B",
        "explanation": "A primary key is a column or a set of columns that uniquely identifies each row in a table."
    },
    {
        "question": "What is the purpose of the SQL UNION operator?",
        "options": {
            "A": "Combines the results of two or more SELECT statements",
            "B": "Filters the results of a query",
            "C": "Joins two tables",
            "D": "Aggregates data"
        },
        "correctAnswer": "A",
        "explanation": "The UNION operator combines the results of two or more SELECT statements, eliminating duplicate rows."
    },
    {
        "question": "What does the COALESCE function do in SQL?",
        "options": {
            "A": "Returns the first non-NULL value in a list",
            "B": "Counts the number of rows",
            "C": "Calculates the average value",
            "D": "Converts values to a different data type"
        },
        "correctAnswer": "A",
        "explanation": "The COALESCE function returns the first non-NULL value from a list of expressions."
    },
    {
        "question": "What is the purpose of indexing in SQL?",
        "options": {
            "A": "To create duplicate records",
            "B": "To improve the speed of data retrieval operations",
            "C": "To enforce data integrity",
            "D": "To sort records"
        },
        "correctAnswer": "B",
        "explanation": "Indexing is used to improve the speed of data retrieval operations on a database table."
    },
    {
        "question": "Which SQL statement is used to create a stored procedure?",
        "options": {
            "A": "CREATE PROCEDURE",
            "B": "NEW PROCEDURE",
            "C": "DEFINE PROCEDURE",
            "D": "PROCEDURE CREATE"
        },
        "correctAnswer": "A",
        "explanation": "The CREATE PROCEDURE statement is used to create a stored procedure in a database."
    },
    {
        "question": "What does the SQL command ROLLBACK do?",
        "options": {
            "A": "Commits the current transaction",
            "B": "Reverts the database to the last committed state",
            "C": "Creates a new transaction",
            "D": "Deletes records from a table"
        },
        "correctAnswer": "B",
        "explanation": "The ROLLBACK command reverts the database to the last committed state, undoing changes made in the current transaction."
    },
    {
        "question": "What is a foreign key constraint?",
        "options": {
            "A": "A rule that uniquely identifies each row in a table",
            "B": "A rule that ensures values in one table match values in another table",
            "C": "A way to speed up data retrieval",
            "D": "A method to encrypt data"
        },
        "correctAnswer": "B",
        "explanation": "A foreign key constraint ensures that values in one table match values in another table, maintaining referential integrity."
    },
    {
        "question": "Which SQL function would you use to round a number to the nearest integer?",
        "options": {
            "A": "ROUND()",
            "B": "CEIL()",
            "C": "FLOOR()",
            "D": "TRUNCATE()"
        },
        "correctAnswer": "A",
        "explanation": "The ROUND() function is used to round a number to the nearest integer."
    }
];