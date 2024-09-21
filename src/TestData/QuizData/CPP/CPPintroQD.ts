export const CppIntroQD = [
    {
        "question": "Which of the following is the correct way to include a header file in C++?",
        "options": {
            "A": "#include <header.h>",
            "B": "#include 'header.h'",
            "C": "#include header.h",
            "D": "import header.h"
        },
        "correctAnswer": "B",
        "explanation": "In C++, header files are included using the `#include` directive with angle brackets for standard headers and quotes for user-defined headers."
    },
    {
        "question": "What is the default value of an `int` variable in C++ if not initialized?",
        "options": {
            "A": "0",
            "B": "undefined",
            "C": "null",
            "D": "1"
        },
        "correctAnswer": "B",
        "explanation": "In C++, uninitialized local `int` variables contain garbage values. Default initialization occurs only for global or static variables."
    },
    {
        "question": "Which keyword is used to define a function in C++?",
        "options": {
            "A": "func",
            "B": "function",
            "C": "void",
            "D": "define"
        },
        "correctAnswer": "C",
        "explanation": "In C++, the `void` keyword is used to specify that a function does not return any value."
    },
    {
        "question": "How do you declare a variable of type `float` in C++?",
        "options": {
            "A": "float variable;",
            "B": "float variable = 0;",
            "C": "float variable = 0.0;",
            "D": "Both B and C"
        },
        "correctAnswer": "D",
        "explanation": "You can declare a `float` variable with or without initialization, e.g., `float variable;` or `float variable = 0.0;`."
    },
    {
        "question": "Which operator is used for integer division in C++?",
        "options": {
            "A": "/",
            "B": "div",
            "C": "//",
            "D": "%"
        },
        "correctAnswer": "A",
        "explanation": "In C++, the `/` operator is used for integer division, which discards any remainder."
    },
    {
        "question": "How do you create a comment in C++?",
        "options": {
            "A": "// This is a comment",
            "B": "/* This is a comment */",
            "C": "# This is a comment",
            "D": "Both A and B"
        },
        "correctAnswer": "D",
        "explanation": "C++ supports both single-line comments (`//`) and multi-line comments (`/* ... */`)."
    },
    {
        "question": "What is the output of `cout << 5 + 3 * 2;` in C++?",
        "options": {
            "A": "16",
            "B": "11",
            "C": "26",
            "D": "8"
        },
        "correctAnswer": "B",
        "explanation": "C++ follows the order of operations (PEMDAS). Multiplication is performed before addition, so `3 * 2` is `6`, and then `5 + 6` is `11`."
    },
    {
        "question": "Which keyword is used to create a class in C++?",
        "options": {
            "A": "class",
            "B": "struct",
            "C": "object",
            "D": "define"
        },
        "correctAnswer": "A",
        "explanation": "In C++, the `class` keyword is used to define a class."
    },
    {
        "question": "How do you define a `main` function in C++?",
        "options": {
            "A": "int main() { return 0; }",
            "B": "void main() { return 0; }",
            "C": "main() { return 0; }",
            "D": "int main() { }"
        },
        "correctAnswer": "A",
        "explanation": "The `main` function in C++ is typically defined as `int main() { return 0; }`, where `int` indicates that it returns an integer value."
    },
    {
        "question": "Which operator is used to access members of a class in C++?",
        "options": {
            "A": ".",
            "B": "->",
            "C": "::",
            "D": "&"
        },
        "correctAnswer": "A",
        "explanation": "In C++, the `.` operator is used to access members of a class or structure."
    },
    {
        "question": "What is the purpose of the `public` access specifier in C++?",
        "options": {
            "A": "Members are accessible from outside the class.",
            "B": "Members are accessible only within the class.",
            "C": "Members are accessible only within derived classes.",
            "D": "Members are accessible only within the same package."
        },
        "correctAnswer": "A",
        "explanation": "The `public` access specifier allows members of a class to be accessed from outside the class."
    },
    {
        "question": "How do you declare a pointer to an integer in C++?",
        "options": {
            "A": "int *ptr;",
            "B": "int ptr;",
            "C": "int &ptr;",
            "D": "pointer int ptr;"
        },
        "correctAnswer": "A",
        "explanation": "In C++, a pointer to an integer is declared using `int *ptr;`."
    },
    {
        "question": "Which of the following is used to allocate memory dynamically in C++?",
        "options": {
            "A": "malloc()",
            "B": "alloc()",
            "C": "new",
            "D": "create"
        },
        "correctAnswer": "C",
        "explanation": "In C++, dynamic memory is allocated using the `new` keyword."
    },
    {
        "question": "What does the `return` statement do in a function?",
        "options": {
            "A": "Ends the function and optionally returns a value.",
            "B": "Returns to the start of the function.",
            "C": "Exits the entire program.",
            "D": "Stops the execution of the program."
        },
        "correctAnswer": "A",
        "explanation": "The `return` statement ends the function and optionally returns a value to the caller."
    },
    {
        "question": "What is the default access specifier for members of a class in C++?",
        "options": {
            "A": "public",
            "B": "protected",
            "C": "private",
            "D": "default"
        },
        "correctAnswer": "C",
        "explanation": "The default access specifier for members of a class in C++ is `private`."
    },
    {
        "question": "Which loop is guaranteed to execute at least once in C++?",
        "options": {
            "A": "for loop",
            "B": "while loop",
            "C": "do-while loop",
            "D": "foreach loop"
        },
        "correctAnswer": "C",
        "explanation": "The `do-while` loop is guaranteed to execute at least once because the condition is checked after the loop body."
    },
    {
        "question": "How do you declare a constant variable in C++?",
        "options": {
            "A": "const int var;",
            "B": "constant int var;",
            "C": "static int var;",
            "D": "final int var;"
        },
        "correctAnswer": "A",
        "explanation": "In C++, a constant variable is declared using the `const` keyword, e.g., `const int var;`."
    },
    {
        "question": "Which operator is used to concatenate strings in C++?",
        "options": {
            "A": "+",
            "B": "&&",
            "C": "&",
            "D": "||"
        },
        "correctAnswer": "A",
        "explanation": "In C++, the `+` operator is used to concatenate strings."
    },
    {
        "question": "What is the purpose of the `#include` directive?",
        "options": {
            "A": "To include external files or libraries",
            "B": "To define macros",
            "C": "To declare functions",
            "D": "To handle exceptions"
        },
        "correctAnswer": "A",
        "explanation": "The `#include` directive is used to include the contents of a file or library into a program."
    },
    {
        "question": "Which data type is used to store a single character in C++?",
        "options": {
            "A": "char",
            "B": "int",
            "C": "string",
            "D": "float"
        },
        "correctAnswer": "A",
        "explanation": "In C++, the `char` data type is used to store a single character."
    },
    {
        "question": "How do you declare an array of integers in C++?",
        "options": {
            "A": "int arr[10];",
            "B": "array<int> arr(10);",
            "C": "int arr(10);",
            "D": "int arr = new int[10];"
        },
        "correctAnswer": "A",
        "explanation": "In C++, an array of integers is declared with a specific size using `int arr[10];`."
    },
    {
        "question": "What is the purpose of the `this` pointer in C++?",
        "options": {
            "A": "To access the current object",
            "B": "To return a value from a function",
            "C": "To allocate memory dynamically",
            "D": "To define a new class"
        },
        "correctAnswer": "A",
        "explanation": "`this` is a pointer that points to the current object of a class, allowing access to its members."
    },
    {
        "question": "Which of the following is used to define a function that does not return a value?",
        "options": {
            "A": "void",
            "B": "null",
            "C": "empty",
            "D": "none"
        },
        "correctAnswer": "A",
        "explanation": "The `void` keyword is used to define a function that does not return a value in C++."
    }
];
