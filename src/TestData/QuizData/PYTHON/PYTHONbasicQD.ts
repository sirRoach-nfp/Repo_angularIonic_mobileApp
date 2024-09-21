export const pythonBasicQD = [
    {
        "question": "Which of the following is used to define a variable in Python?",
        "options": {
            "A": "variable = value",
            "B": "let variable = value",
            "C": "var variable = value",
            "D": "set variable = value"
        },
        "correctAnswer": "A",
        "explanation": "In Python, variables are defined using the syntax `variable = value`. There is no need for explicit type declaration."
    },
    {
        "question": "What is the result of `3 * 4` in Python?",
        "options": {
            "A": "12",
            "B": "7",
            "C": "34",
            "D": "43"
        },
        "correctAnswer": "A",
        "explanation": "The `*` operator performs multiplication in Python. `3 * 4` equals `12`."
    },
    {
        "question": "How do you create a dictionary in Python?",
        "options": {
            "A": "{}",
            "B": "[]",
            "C": "()",
            "D": "<>"
        },
        "correctAnswer": "A",
        "explanation": "Dictionaries in Python are created using curly braces `{}` with key-value pairs inside, separated by commas."
    },
    {
        "question": "What is the output of `print('Python' * 3)`?",
        "options": {
            "A": "PythonPythonPython",
            "B": "Python 3",
            "C": "3Python",
            "D": "Python 3 Python"
        },
        "correctAnswer": "A",
        "explanation": "The `*` operator, when used with strings, repeats the string a specified number of times. `print('Python' * 3)` outputs `PythonPythonPython`."
    },
    {
        "question": "Which method would you use to remove an item from a list by index?",
        "options": {
            "A": "remove(index)",
            "B": "pop(index)",
            "C": "delete(index)",
            "D": "discard(index)"
        },
        "correctAnswer": "B",
        "explanation": "The `pop()` method removes an item from a list at the specified index and returns it. For example, `list.pop(2)` removes and returns the item at index 2."
    },
    {
        "question": "What does `str(123)` return in Python?",
        "options": {
            "A": "123",
            "B": "123.0",
            "C": "int",
            "D": "'123'"
        },
        "correctAnswer": "D",
        "explanation": "`str(123)` converts the integer `123` to the string `'123'`."
    },
    {
        "question": "How do you check the length of a list in Python?",
        "options": {
            "A": "len(list)",
            "B": "list.length()",
            "C": "list.size()",
            "D": "length(list)"
        },
        "correctAnswer": "A",
        "explanation": "The `len()` function returns the number of items in a list, e.g., `len(list)` gives the length of the list."
    },
    {
        "question": "What is the output of `print(10 % 3)`?",
        "options": {
            "A": "1",
            "B": "3",
            "C": "10",
            "D": "0"
        },
        "correctAnswer": "A",
        "explanation": "The `%` operator is the modulo operator, which returns the remainder of the division of `10` by `3`. `10 % 3` equals `1`."
    },
    {
        "question": "How do you write a comment in Python?",
        "options": {
            "A": "// This is a comment",
            "B": "<!-- This is a comment -->",
            "C": "# This is a comment",
            "D": "/* This is a comment */"
        },
        "correctAnswer": "C",
        "explanation": "In Python, comments are written using the `#` symbol. Everything following `#` on the same line is a comment."
    },
    {
        "question": "Which of the following is a correct way to import a specific function from a module?",
        "options": {
            "A": "from module import function",
            "B": "import module.function",
            "C": "include module.function",
            "D": "require function from module"
        },
        "correctAnswer": "A",
        "explanation": "To import a specific function from a module, use the syntax `from module import function`."
    },
    {
        "question": "What does the `if` statement do in Python?",
        "options": {
            "A": "Executes a block of code if a condition is true",
            "B": "Repeats a block of code a certain number of times",
            "C": "Defines a new function",
            "D": "Declares a variable"
        },
        "correctAnswer": "A",
        "explanation": "The `if` statement executes a block of code only if a specified condition evaluates to `True`."
    },
    {
        "question": "What is the output of `print(2 + 3 * 4)`?",
        "options": {
            "A": "20",
            "B": "14",
            "C": "11",
            "D": "7"
        },
        "correctAnswer": "B",
        "explanation": "Python follows the order of operations (PEMDAS/BODMAS). Multiplication is performed before addition, so `3 * 4` equals `12`, and `2 + 12` equals `14`."
    },
    {
        "question": "How do you define a list with mixed data types in Python?",
        "options": {
            "A": "[1, 'text', 3.14]",
            "B": "list(1, 'text', 3.14)",
            "C": "list = (1, 'text', 3.14)",
            "D": "{1, 'text', 3.14}"
        },
        "correctAnswer": "A",
        "explanation": "Lists in Python can contain elements of different data types. A list is defined using square brackets `[]`."
    },
    {
        "question": "Which keyword is used to create a class in Python?",
        "options": {
            "A": "class",
            "B": "create",
            "C": "define",
            "D": "new"
        },
        "correctAnswer": "A",
        "explanation": "The `class` keyword is used to define a new class in Python."
    },
    {
        "question": "What does the `input()` function do?",
        "options": {
            "A": "Gets user input from the console",
            "B": "Prints a message to the console",
            "C": "Converts a string to an integer",
            "D": "Reads a file"
        },
        "correctAnswer": "A",
        "explanation": "The `input()` function reads a line of input from the user and returns it as a string."
    },
    {
        "question": "How do you convert a float to an integer in Python?",
        "options": {
            "A": "int(float)",
            "B": "float.to_int()",
            "C": "convert(float)",
            "D": "int(float())"
        },
        "correctAnswer": "A",
        "explanation": "To convert a float to an integer, use the `int()` function. For example, `int(3.14)` returns `3`."
    },
    {
        "question": "What is the purpose of the `else` keyword in Python?",
        "options": {
            "A": "Defines a block of code to execute if the `if` condition is false",
            "B": "Creates a new function",
            "C": "Terminates a loop",
            "D": "Defines a class"
        },
        "correctAnswer": "A",
        "explanation": "`else` provides an alternative block of code that executes when the `if` condition is false."
    },
    {
        "question": "What is the result of `5 == 5`?",
        "options": {
            "A": "True",
            "B": "False",
            "C": "5",
            "D": "Error"
        },
        "correctAnswer": "A",
        "explanation": "`==` is the equality operator. `5 == 5` evaluates to `True` because the values are equal."
    },
    {
        "question": "Which function is used to obtain the maximum value from a list?",
        "options": {
            "A": "max()",
            "B": "maximum()",
            "C": "top()",
            "D": "largest()"
        },
        "correctAnswer": "A",
        "explanation": "The `max()` function returns the largest value from a list or iterable."
    },
    {
        "question": "What is the default value of the `end` parameter in the `print()` function?",
        "options": {
            "A": "newline (`\n`)",
            "B": "space (` `)",
            "C": "tab (`\t`)",
            "D": "empty string (` `)"
        },
        "correctAnswer": "A",
        "explanation": "The default value of the `end` parameter in the `print()` function is a newline character (`\n`), which moves the cursor to the next line."
    },
    {
        "question": "How do you concatenate two strings in Python?",
        "options": {
            "A": "Using the `+` operator",
            "B": "Using `concat()` method",
            "C": "Using `append()` method",
            "D": "Using `merge()` function"
        },
        "correctAnswer": "A",
        "explanation": "Strings in Python can be concatenated using the `+` operator. For example, `'Hello' + ' World'` results in `'Hello World'`."
    },
    {
        "question": "Which of the following is the correct way to define a function in Python?",
        "options": {
            "A": "def function_name():",
            "B": "function function_name():",
            "C": "define function_name():",
            "D": "func function_name():"
        },
        "correctAnswer": "A",
        "explanation": "Functions in Python are defined using the `def` keyword followed by the function name and parentheses, e.g., `def function_name():`."
    },
    {
        "question": "How can you check if a value is in a list?",
        "options": {
            "A": "value in list",
            "B": "list.contains(value)",
            "C": "list.has(value)",
            "D": "in list(value)"
        },
        "correctAnswer": "A",
        "explanation": "To check if a value is present in a list, use the `in` keyword. For example, `value in list` evaluates to `True` if `value` is in `list`."
    },
    {
        "question": "What is the purpose of the `pass` statement in Python?",
        "options": {
            "A": "It acts as a placeholder and does nothing",
            "B": "It exits a loop",
            "C": "It terminates a program",
            "D": "It defines a class"
        },
        "correctAnswer": "A",
        "explanation": "`pass` is a null statement used as a placeholder in blocks where code is required syntactically but where no action is needed."
    }
]
