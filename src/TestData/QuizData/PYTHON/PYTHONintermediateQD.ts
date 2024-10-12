export const pythonintermediateQD = [
    {
        "question": "What will be the output of the following code?\n```python\nx = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)\n```",
        "options": {
            "A": "[1, 2, 3]",
            "B": "[1, 2, 3, 4]",
            "C": "Error",
            "D": "None"
        },
        "correctAnswer": "B",
        "explanation": "Both `x` and `y` reference the same list, so appending to `y` also modifies `x`."
    },
    {
        "question": "What does the `enumerate()` function do?",
        "options": {
            "A": "Adds a counter to an iterable and returns it as an enumerate object.",
            "B": "Returns a list of tuples from a list.",
            "C": "Counts the number of occurrences of an item in a list.",
            "D": "Removes duplicates from a list."
        },
        "correctAnswer": "A",
        "explanation": "`enumerate()` adds a counter to an iterable and returns it as an enumerate object."
    },
    {
        "question": "How can you convert a list to a tuple in Python?",
        "options": {
            "A": "tuple(list)",
            "B": "list(tuple)",
            "C": "convert(list)",
            "D": "None of the above"
        },
        "correctAnswer": "A",
        "explanation": "You can convert a list to a tuple using the `tuple()` function."
    },
    {
        "question": "What will be the output of the following code?\n```python\nx = 'Python'\ny = x.replace('P', 'J')\nprint(y)\n```",
        "options": {
            "A": "'Jython'",
            "B": "'Python'",
            "C": "'Jython'",
            "D": "Error"
        },
        "correctAnswer": "A",
        "explanation": "The `replace()` method returns a new string with the specified substring replaced."
    },
    {
        "question": "Which of the following statements is used to handle exceptions in Python?",
        "options": {
            "A": "try-except",
            "B": "catch",
            "C": "finally",
            "D": "throw"
        },
        "correctAnswer": "A",
        "explanation": "The `try-except` block is used to catch and handle exceptions in Python."
    },
    {
        "question": "What will be the output of the following code?\n```python\ndef add(a, b=5):\n    return a + b\nprint(add(3))\n```",
        "options": {
            "A": "8",
            "B": "5",
            "C": "3",
            "D": "Error"
        },
        "correctAnswer": "A",
        "explanation": "The default value of `b` is 5, so `add(3)` returns 3 + 5 = 8."
    },
    {
        "question": "What will be the output of the following code?\n```python\nx = [1, 2, 3]\nprint(x * 2)\n```",
        "options": {
            "A": "[1, 2, 3, 1, 2, 3]",
            "B": "[2, 4, 6]",
            "C": "[3, 3, 3]",
            "D": "Error"
        },
        "correctAnswer": "A",
        "explanation": "The `*` operator repeats the list, resulting in `[1, 2, 3, 1, 2, 3]`."
    },
    {
        "question": "Which of the following is not a valid way to define a function in Python?",
        "options": {
            "A": "def my_function():",
            "B": "function my_function():",
            "C": "lambda x: x + 1",
            "D": "None of the above"
        },
        "correctAnswer": "B",
        "explanation": "'function' is not a valid keyword in Python; functions are defined using 'def'."
    },
    {
        "question": "What will the following code output?\n```python\nfor i in range(5):\n    if i == 3:\n        break\n    print(i)\n```",
        "options": {
            "A": "0 1 2",
            "B": "0 1 2 3 4",
            "C": "0 1 2 3",
            "D": "Error"
        },
        "correctAnswer": "A",
        "explanation": "The loop breaks when `i` equals 3, so it only prints 0, 1, and 2."
    },
    {
        "question": "What will be the output of the following code?\n```python\nx = {1, 2, 3}\ny = {2, 3, 4}\nprint(x | y)\n```",
        "options": {
            "A": "{1, 2, 3, 4}",
            "B": "{2, 3}",
            "C": "{1, 2, 3}",
            "D": "Error"
        },
        "correctAnswer": "A",
        "explanation": "The `|` operator performs a union of two sets, resulting in `{1, 2, 3, 4}`."
    },
    {
        "question": "Which method is used to add an element to the end of a list?",
        "options": {
            "A": "append()",
            "B": "add()",
            "C": "extend()",
            "D": "insert()"
        },
        "correctAnswer": "A",
        "explanation": "The `append()` method adds an element to the end of a list."
    },
    {
        "question": "What is the output of this code?\n```python\nx = {'a': 1, 'b': 2}\nprint(x.get('c', 0))\n```",
        "options": {
            "A": "None",
            "B": "0",
            "C": "Error",
            "D": "c"
        },
        "correctAnswer": "B",
        "explanation": "`get()` returns the default value (0) when the key 'c' does not exist in the dictionary."
    },
    {
        "question": "How can you remove duplicates from a list while preserving order?",
        "options": {
            "A": "Using a set",
            "B": "Using dict.fromkeys()",
            "C": "Using list comprehension",
            "D": "None of the above"
        },
        "correctAnswer": "B",
        "explanation": "`dict.fromkeys()` can be used to remove duplicates and preserve order."
    },
    {
        "question": "What will the output of the following code be?\n```python\nprint(3 ** 2 ** 2)\n```",
        "options": {
            "A": "81",
            "B": "9",
            "C": "27",
            "D": "Error"
        },
        "correctAnswer": "A",
        "explanation": "The expression evaluates as 3 raised to the power of (2 raised to the power of 2), which is 3^4 = 81."
    },
    {
        "question": "What does the `filter()` function do?",
        "options": {
            "A": "Filters out elements from an iterable based on a function.",
            "B": "Applies a function to every item in an iterable.",
            "C": "Generates a sequence of numbers.",
            "D": "None of the above"
        },
        "correctAnswer": "A",
        "explanation": "`filter()` filters elements from an iterable for which a function returns True."
    },
    {
        "question": "What will the following code output?\n```python\nclass MyClass:\n    def __init__(self):\n        self.value = 42\nobj = MyClass()\nprint(obj.value)\n```",
        "options": {
            "A": "None",
            "B": "42",
            "C": "Error",
            "D": "0"
        },
        "correctAnswer": "B",
        "explanation": "The `__init__` method initializes the instance variable `value` to 42."
    },
    {
        "question": "What is the result of this code?\n```python\nmy_list = [1, 2, 3]\nmy_list += [4, 5]\nprint(my_list)\n```",
        "options": {
            "A": "[1, 2, 3, 4, 5]",
            "B": "[1, 2, 3]",
            "C": "Error",
            "D": "[4, 5]"
        },
        "correctAnswer": "A",
        "explanation": "The `+=` operator extends the list with additional elements, resulting in `[1, 2, 3, 4, 5]`."
    },
    {
        "question": "Which of the following can be used to create a virtual environment in Python?",
        "options": {
            "A": "virtualenv",
            "B": "venv",
            "C": "pipenv",
            "D": "All of the above"
        },
        "correctAnswer": "D",
        "explanation": "All the options are valid ways to create a virtual environment in Python."
    },
    {
        "question": "What will the output of the following code be?\n```python\nx = [1, 2, 3, 4]\ny = x.copy()\ny.append(5)\nprint(x)\n```",
        "options": {
            "A": "[1, 2, 3, 4]",
            "B": "[1, 2, 3, 4, 5]",
            "C": "[1, 2, 3, 4, 5, 5]",
            "D": "Error"
        },
        "correctAnswer": "A",
        "explanation": "The `copy()` method creates a shallow copy of the list, so modifying `y` does not affect `x`."
    },
    {
        "question": "Which of the following is the correct way to read a file in Python?",
        "options": {
            "A": "open('file.txt', 'r')",
            "B": "file.read('file.txt')",
            "C": "read('file.txt')",
            "D": "file.open('file.txt')"
        },
        "correctAnswer": "A",
        "explanation": "The `open()` function is used to open a file, where 'r' stands for reading mode."
    },
    {
        "question": "What will the following code output?\n```python\nprint([1, 2, 3] + [4, 5])\n```",
        "options": {
            "A": "[1, 2, 3, 4, 5]",
            "B": "[5, 4, 3, 2, 1]",
            "C": "[1, 2, 3] + [4, 5]",
            "D": "Error"
        },
        "correctAnswer": "A",
        "explanation": "The `+` operator concatenates two lists."
    },
    {
        "question": "What is the purpose of the `with` statement when opening files in Python?",
        "options": {
            "A": "To ensure proper resource management and automatically close the file.",
            "B": "To open a file in write mode only.",
            "C": "To catch exceptions while opening files.",
            "D": "None of the above"
        },
        "correctAnswer": "A",
        "explanation": "The `with` statement ensures that the file is properly closed after its suite finishes."
    },
    {
        "question": "What will be the output of the following code?\n```python\nx = [1, 2, 3]\nprint(x[::-1])\n```",
        "options": {
            "A": "[3, 2, 1]",
            "B": "[1, 2, 3]",
            "C": "[1]",
            "D": "Error"
        },
        "correctAnswer": "A",
        "explanation": "The `[::-1]` slice notation creates a reversed copy of the list."
    },
    {
        "question": "What is a generator in Python?",
        "options": {
            "A": "A function that returns an iterable set of items one at a time.",
            "B": "A function that creates a new list.",
            "C": "A type of class.",
            "D": "None of the above"
        },
        "correctAnswer": "A",
        "explanation": "A generator is a function that uses `yield` to produce a series of values, one at a time."
    },
    {
        "question": "Which of the following is a valid way to raise an exception in Python?",
        "options": {
            "A": "raise Exception('Error')",
            "B": "throw Exception('Error')",
            "C": "raise Exception",
            "D": "A and C only"
        },
        "correctAnswer": "D",
        "explanation": "Both `raise Exception('Error')` and `raise Exception` are valid ways to raise an exception."
    },
    {
        "question": "What will be the output of the following code?\n```python\nx = {1, 2, 3}\nprint(x.add(4))\n```",
        "options": {
            "A": "None",
            "B": "{1, 2, 3, 4}",
            "C": "Error",
            "D": "4"
        },
        "correctAnswer": "A",
        "explanation": "The `add()` method modifies the set in place and returns `None`."
    },
    {
        "question": "What does the `*args` and `**kwargs` syntax allow you to do in a function definition?",
        "options": {
            "A": "Pass a variable number of arguments.",
            "B": "Pass keyword arguments.",
            "C": "Both A and B.",
            "D": "None of the above."
        },
        "correctAnswer": "C",
        "explanation": "`*args` allows passing a variable number of non-keyword arguments, while `**kwargs` allows passing keyword arguments."
    },
    {
        "question": "What will the output of the following code be?\n```python\nmy_dict = {'a': 1, 'b': 2}\nprint(my_dict.get('c', 'Not Found'))\n```",
        "options": {
            "A": "Not Found",
            "B": "None",
            "C": "Error",
            "D": "'c'"
        },
        "correctAnswer": "A",
        "explanation": "The `get()` method returns the default value 'Not Found' when the key 'c' is not found."
    },
    {
        "question": "What will the following code output?\n```python\nx = [1, 2, 3]\ny = iter(x)\nprint(next(y))\n```",
        "options": {
            "A": "1",
            "B": "2",
            "C": "3",
            "D": "Error"
        },
        "correctAnswer": "A",
        "explanation": "The `next()` function returns the next item from the iterator `y`, which is 1."
    },
    {
        "question": "Which of the following is true about the `__str__` method in Python?",
        "options": {
            "A": "It returns a string representation of an object.",
            "B": "It is called when the object is printed.",
            "C": "Both A and B.",
            "D": "None of the above."
        },
        "correctAnswer": "C",
        "explanation": "`__str__` is used to define how an object is represented as a string, particularly for printing."
    },
    {
        "question": "What will the following code output?\n```python\nmy_list = [1, 2, 3]\nprint(my_list[1:3])\n```",
        "options": {
            "A": "[1, 2]",
            "B": "[2, 3]",
            "C": "[1, 2, 3]",
            "D": "[3, 2]"
        },
        "correctAnswer": "B",
        "explanation": "The slice `my_list[1:3]` returns the elements from index 1 to 2."
    },
    {
        "question": "How do you define a class in Python?",
        "options": {
            "A": "class MyClass():",
            "B": "MyClass() class:",
            "C": "def MyClass:",
            "D": "class MyClass"
        },
        "correctAnswer": "A",
        "explanation": "The correct syntax for defining a class in Python is `class ClassName():`."
    },
    {
        "question": "Which of the following is a valid method to sort a list in Python?",
        "options": {
            "A": "list.sort()",
            "B": "sorted(list)",
            "C": "Both A and B",
            "D": "None of the above"
        },
        "correctAnswer": "C",
        "explanation": "Both `list.sort()` and `sorted(list)` can be used to sort a list."
    },
    {
        "question": "What will the following code output?\n```python\nx = 'Hello'\nprint(x[1:4])\n```",
        "options": {
            "A": "Hel",
            "B": "ell",
            "C": "llo",
            "D": "Error"
        },
        "correctAnswer": "B",
        "explanation": "The slice `x[1:4]` returns characters from index 1 to 3, which is 'ell'."
    },
    {
        "question": "How can you reverse a string in Python?",
        "options": {
            "A": "string.reverse()",
            "B": "string[::-1]",
            "C": "reversed(string)",
            "D": "None of the above"
        },
        "correctAnswer": "B",
        "explanation": "You can reverse a string using slicing with `[::-1]`."
    },
    {
        "question": "What will the following code output?\n```python\nx = [1, 2, 3]\ny = x\ny[0] = 99\nprint(x)\n```",
        "options": {
            "A": "[99, 2, 3]",
            "B": "[1, 2, 3]",
            "C": "[1, 99, 3]",
            "D": "Error"
        },
        "correctAnswer": "A",
        "explanation": "Both `x` and `y` refer to the same list in memory, so modifying `y` also modifies `x`."
    }
];