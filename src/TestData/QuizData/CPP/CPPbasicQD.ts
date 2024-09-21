export const CppBasicQD = [
    {
        "question": "Which of the following is a valid C++ data type?",
        "options": {
            "A": "integer",
            "B": "char",
            "C": "string",
            "D": "float64"
        },
        "correctAnswer": "B",
        "explanation": "In C++, `char`, `int`, `float`, and `double` are valid data types. `string` is used through the `std::string` class, and `float64` is not a standard C++ type."
    },
    {
        "question": "Which symbol is used for comments in C++?",
        "options": {
            "A": "//",
            "B": "#",
            "C": "/*",
            "D": ";;"
        },
        "correctAnswer": "A",
        "explanation": "In C++, `//` is used for single-line comments, and `/* ... */` is used for multi-line comments."
    },
    {
        "question": "What is the output of `cout << 10 % 3;`?",
        "options": {
            "A": "1",
            "B": "3",
            "C": "10",
            "D": "0"
        },
        "correctAnswer": "A",
        "explanation": "The `%` operator computes the remainder of division. `10 % 3` equals `1`."
    },
    {
        "question": "Which function is used to print output to the console in C++?",
        "options": {
            "A": "print()",
            "B": "cout",
            "C": "output()",
            "D": "println()"
        },
        "correctAnswer": "B",
        "explanation": "`cout` is used in C++ for outputting data to the console."
    },
    {
        "question": "How do you declare an integer variable in C++?",
        "options": {
            "A": "int var;",
            "B": "integer var;",
            "C": "int var = 0;",
            "D": "var int;"
        },
        "correctAnswer": "A",
        "explanation": "In C++, an integer variable is declared using `int var;`."
    },
    {
        "question": "What does `return 0;` signify in the `main` function?",
        "options": {
            "A": "Successful program execution",
            "B": "Error in program",
            "C": "End of the program",
            "D": "Pause execution"
        },
        "correctAnswer": "A",
        "explanation": "`return 0;` in the `main` function indicates successful completion of the program."
    },
    {
        "question": "Which operator is used to compare two values for equality in C++?",
        "options": {
            "A": "==",
            "B": "=",
            "C": "!=",
            "D": "<>"
        },
        "correctAnswer": "A",
        "explanation": "The `==` operator is used to compare two values for equality in C++."
    },
    {
        "question": "How do you include a standard library in C++?",
        "options": {
            "A": "#include <library>",
            "B": "#include 'library'",
            "C": "#include library",
            "D": "#include <iostream>"
        },
        "correctAnswer": "D",
        "explanation": "Standard libraries like `<iostream>` are included using the `#include` directive with angle brackets."
    },
    {
        "question": "Which loop will always execute its body at least once?",
        "options": {
            "A": "for loop",
            "B": "while loop",
            "C": "do-while loop",
            "D": "foreach loop"
        },
        "correctAnswer": "C",
        "explanation": "The `do-while` loop executes its body at least once before checking the condition."
    },
    {
        "question": "How do you define a constant in C++?",
        "options": {
            "A": "const int x = 10;",
            "B": "int const x = 10;",
            "C": "constant int x = 10;",
            "D": "Both A and B"
        },
        "correctAnswer": "D",
        "explanation": "Constants in C++ can be defined using `const int x = 10;` or `int const x = 10;`."
    },
    {
        "question": "Which keyword is used to define a class in C++?",
        "options": {
            "A": "class",
            "B": "struct",
            "C": "object",
            "D": "define"
        },
        "correctAnswer": "A",
        "explanation": "The `class` keyword is used to define a class in C++."
    },
    {
        "question": "What does the `sizeof` operator do in C++?",
        "options": {
            "A": "Returns the size of a data type or variable",
            "B": "Returns the length of a string",
            "C": "Returns the size of a class",
            "D": "Returns the size of an array"
        },
        "correctAnswer": "A",
        "explanation": "`sizeof` returns the size in bytes of a data type or variable."
    },
    {
        "question": "How do you declare a pointer to an integer in C++?",
        "options": {
            "A": "int *ptr;",
            "B": "pointer int ptr;",
            "C": "int &ptr;",
            "D": "int ptr*;"
        },
        "correctAnswer": "A",
        "explanation": "To declare a pointer to an integer, you use `int *ptr;`."
    },
    {
        "question": "Which operator is used to access members of a class through a pointer in C++?",
        "options": {
            "A": "->",
            "B": ".",
            "C": "::",
            "D": "&"
        },
        "correctAnswer": "A",
        "explanation": "The `->` operator is used to access members of a class through a pointer."
    },
    {
        "question": "What is the purpose of the `main` function in a C++ program?",
        "options": {
            "A": "It is the entry point of the program.",
            "B": "It defines global variables.",
            "C": "It handles exceptions.",
            "D": "It includes header files."
        },
        "correctAnswer": "A",
        "explanation": "The `main` function is the entry point of a C++ program."
    },
    {
        "question": "How do you perform integer division in C++?",
        "options": {
            "A": "/",
            "B": "div",
            "C": "//",
            "D": "%"
        },
        "correctAnswer": "A",
        "explanation": "The `/` operator performs integer division in C++."
    },
    {
        "question": "How do you create an array of 5 integers in C++?",
        "options": {
            "A": "int arr[5];",
            "B": "int arr(5);",
            "C": "int arr = new int[5];",
            "D": "array<int> arr(5);"
        },
        "correctAnswer": "A",
        "explanation": "In C++, an array of 5 integers is declared with `int arr[5];`."
    },
    {
        "question": "Which access specifier makes members of a class accessible only within the class itself?",
        "options": {
            "A": "public",
            "B": "private",
            "C": "protected",
            "D": "default"
        },
        "correctAnswer": "B",
        "explanation": "The `private` access specifier restricts access to members of a class to only within the class itself."
    },
    {
        "question": "How do you define a function that returns an `int` in C++?",
        "options": {
            "A": "int function() { return 0; }",
            "B": "void function() { return 0; }",
            "C": "int function() { }",
            "D": "function() { return int; }"
        },
        "correctAnswer": "A",
        "explanation": "To define a function that returns an `int`, you use `int function() { return 0; }`."
    },
    {
        "question": "What does the `break` statement do in C++?",
        "options": {
            "A": "Exits the current loop or switch statement",
            "B": "Pauses the execution",
            "C": "Skips to the next iteration",
            "D": "Ends the program"
        },
        "correctAnswer": "A",
        "explanation": "The `break` statement is used to exit the current loop or switch statement."
    },
    {
        "question": "How do you define a constant variable in C++?",
        "options": {
            "A": "const int x = 10;",
            "B": "int x = 10;",
            "C": "constant int x = 10;",
            "D": "int const x = 10;"
        },
        "correctAnswer": "A",
        "explanation": "Constants are defined using `const`, such as `const int x = 10;`."
    },
    {
        "question": "Which operator is used to concatenate strings in C++?",
        "options": {
            "A": "+",
            "B": "&",
            "C": ".",
            "D": "concat"
        },
        "correctAnswer": "A",
        "explanation": "In C++, the `+` operator is used to concatenate strings."
    },
    {
        "question": "What is the purpose of the `return` statement in a function?",
        "options": {
            "A": "To exit the function and optionally return a value",
            "B": "To start a loop",
            "C": "To create a new function",
            "D": "To print output"
        },
        "correctAnswer": "A",
        "explanation": "`return` exits the function and optionally returns a value to the caller."
    },
    {
        "question": "Which operator is used for logical AND in C++?",
        "options": {
            "A": "&&",
            "B": "||",
            "C": "&",
            "D": "AND"
        },
        "correctAnswer": "A",
        "explanation": "The `&&` operator is used to perform a logical AND operation in C++."
    }
];
