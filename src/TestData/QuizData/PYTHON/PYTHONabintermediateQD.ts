export const pythonabintermediateQD = [
    {
        "question": "What is the output of the following code?\n```python\nclass A:\n    def __init__(self):\n        self.value = 5\n\nclass B(A):\n    def __init__(self):\n        super().__init__()\n        self.value += 10\n\nobj = B()\nprint(obj.value)\n```",
        "options": {
            "A": "5",
            "B": "10",
            "C": "15",
            "D": "20"
        },
        "correctAnswer": "C",
        "explanation": "The constructor of `B` calls the constructor of `A`, setting `value` to 5, and then adds 10, resulting in 15."
    },
    {
        "question": "Which of the following methods can be used to convert a string to a list in Python?",
        "options": {
            "A": "split()",
            "B": "list()",
            "C": "Both A and B",
            "D": "None of the above"
        },
        "correctAnswer": "C",
        "explanation": "Both `split()` and `list()` can convert a string to a list, depending on how they are used."
    },
    {
        "question": "What does the `@staticmethod` decorator do?",
        "options": {
            "A": "Defines a method that doesn't require a class instance.",
            "B": "Defines a method that requires a class instance.",
            "C": "Defines a method that can access the class instance.",
            "D": "None of the above."
        },
        "correctAnswer": "A",
        "explanation": "`@staticmethod` allows a method to be called on the class itself without needing an instance."
    },
    {
        "question": "What will be the output of the following code?\n```python\ndef func(x, y=[]):\n    y.append(x)\n    return y\n\nprint(func(1))\nprint(func(2))\n```",
        "options": {
            "A": "[1]\n[2]",
            "B": "[1]\n[1, 2]",
            "C": "[2]\n[1, 2]",
            "D": "Error"
        },
        "correctAnswer": "B",
        "explanation": "The default mutable argument retains its value between function calls, leading to the second call appending to the list from the first call."
    },
    {
        "question": "What is the output of the following code?\n```python\nx = [1, 2, 3]\ny = x\nx = [4, 5, 6]\nprint(y)\n```",
        "options": {
            "A": "[1, 2, 3]",
            "B": "[4, 5, 6]",
            "C": "Error",
            "D": "None of the above"
        },
        "correctAnswer": "A",
        "explanation": "Reassigning `x` to a new list does not affect `y`, which still refers to the original list."
    },
    {
        "question": "What will be the output of the following code?\n```python\ntry:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('Division by zero!')\nfinally:\n    print('Done')\n```",
        "options": {
            "A": "Division by zero!\nDone",
            "B": "Done",
            "C": "Error",
            "D": "None of the above"
        },
        "correctAnswer": "A",
        "explanation": "The `except` block catches the `ZeroDivisionError`, and the `finally` block always executes afterward."
    },
    {
        "question": "Which of the following methods can be used to combine two dictionaries in Python 3.9 or later?",
        "options": {
            "A": "dict.update()",
            "B": "dict.merge()",
            "C": "Both A and B",
            "D": "None of the above"
        },
        "correctAnswer": "D",
        "explanation": "In Python 3.9 or later, you can use the merge operator (`|`) or the `update()` method to combine dictionaries."
    },
    {
        "question": "What is the output of the following code?\n```python\nx = {1, 2, 3}\ny = {2, 3, 4}\nprint(x & y)\n```",
        "options": {
            "A": "{1, 2, 3}",
            "B": "{2, 3}",
            "C": "{2, 3, 4}",
            "D": "Error"
        },
        "correctAnswer": "B",
        "explanation": "The `&` operator computes the intersection of two sets, returning elements present in both."
    },
    {
        "question": "What does the `enumerate()` function do in Python?",
        "options": {
            "A": "Adds a counter to an iterable and returns it as an enumerate object.",
            "B": "Counts the occurrences of each element in an iterable.",
            "C": "Creates a list from a string.",
            "D": "None of the above."
        },
        "correctAnswer": "A",
        "explanation": "The `enumerate()` function adds a counter to the iterable, allowing access to both the index and value."
    },
    {
        "question": "Which of the following is true about the `super()` function?",
        "options": {
            "A": "It returns a temporary object of the superclass.",
            "B": "It allows you to call methods of the superclass.",
            "C": "Both A and B.",
            "D": "None of the above."
        },
        "correctAnswer": "C",
        "explanation": "`super()` allows access to methods and properties of the superclass, facilitating method overriding."
    },
    {
        "question": "What is the output of the following code?\n```python\nclass MyClass:\n    def __init__(self):\n        self.value = 10\n\n    def get_value(self):\n        return self.value\n\nobj = MyClass()\nprint(obj.get_value())\n```",
        "options": {
            "A": "10",
            "B": "None",
            "C": "Error",
            "D": "0"
        },
        "correctAnswer": "A",
        "explanation": "The `get_value()` method returns the instance variable `value`, which is set to 10."
    },
    {
        "question": "What is a closure in Python?",
        "options": {
            "A": "A function that returns another function.",
            "B": "A function that captures the local variables from its enclosing scope.",
            "C": "Both A and B.",
            "D": "None of the above."
        },
        "correctAnswer": "C",
        "explanation": "A closure is a nested function that remembers the values of the variables from its enclosing scope."
    },
    {
        "question": "What will be the output of the following code?\n```python\nx = {1, 2, 3}\nx.add([4, 5])\n```",
        "options": {
            "A": "{1, 2, 3, [4, 5]}",
            "B": "{1, 2, 3}",
            "C": "Error",
            "D": "None of the above"
        },
        "correctAnswer": "C",
        "explanation": "Sets can only contain hashable (immutable) items, and lists are mutable, causing a TypeError."
    },
    {
        "question": "What does the `map()` function do in Python?",
        "options": {
            "A": "Applies a function to all items in an iterable.",
            "B": "Creates a new list.",
            "C": "Filters elements from an iterable.",
            "D": "None of the above."
        },
        "correctAnswer": "A",
        "explanation": "`map()` applies a specified function to each item in the given iterable and returns a map object."
    },
    {
        "question": "What is the output of the following code?\n```python\nfor i in range(5):\n    print(i, end=' ')\n```",
        "options": {
            "A": "0 1 2 3 4",
            "B": "1 2 3 4 5",
            "C": "0 1 2 3 4 ",
            "D": "0 1 2 3 4 5"
        },
        "correctAnswer": "A",
        "explanation": "The `range(5)` function generates numbers from 0 to 4, which are printed on the same line due to `end=' '."
    },
    {
        "question": "Which of the following statements is true about Python's `*args` and `**kwargs`?",
        "options": {
            "A": "*args is for passing a variable number of positional arguments, while **kwargs is for keyword arguments.",
            "B": "Both can be used in the same function.",
            "C": "Both can be used for any number of arguments.",
            "D": "All of the above."
        },
        "correctAnswer": "D",
        "explanation": "`*args` and `**kwargs` allow functions to accept a variable number of positional and keyword arguments, respectively."
    },
    {
        "question": "What is the purpose of the `self` keyword in a class method?",
        "options": {
            "A": "It refers to the class itself.",
            "B": "It refers to the instance of the class.",
            "C": "It is used to define class variables.",
            "D": "None of the above."
        },
        "correctAnswer": "B",
        "explanation": "`self` is a reference to the current instance of the class, allowing access to its attributes and methods."
    },
    {
        "question": "What will be the output of the following code?\n```python\nx = [1, 2, 3]\ny = x.copy()\n\nx.append(4)\nprint(y)\n```",
        "options": {
            "A": "[1, 2, 3, 4]",
            "B": "[1, 2, 3]",
            "C": "[4]",
            "D": "Error"
        },
        "correctAnswer": "B",
        "explanation": "The `copy()` method creates a shallow copy of the list. Changes to `x` do not affect `y`."
    },
    {
        "question": "What is the output of the following code?\n```python\nprint(type([]) is list)\n```",
        "options": {
            "A": "True",
            "B": "False",
            "C": "Error",
            "D": "None of the above"
        },
        "correctAnswer": "A",
        "explanation": "The `type([])` returns `list`, and the comparison with `is` checks for identity, which is `True`."
    },
    {
        "question": "What will be the output of the following code?\n```python\nx = {1, 2, 3}\ny = {3, 4, 5}\nprint(x | y)\n```",
        "options": {
            "A": "{1, 2, 3, 4, 5}",
            "B": "{1, 2, 3}",
            "C": "{3, 4, 5}",
            "D": "Error"
        },
        "correctAnswer": "A",
        "explanation": "The `|` operator computes the union of two sets, returning all unique elements."
    },
    {
        "question": "Which of the following statements about list comprehensions is true?",
        "options": {
            "A": "They are always faster than traditional for-loops.",
            "B": "They can only be used with numeric data.",
            "C": "They create a new list based on existing iterables.",
            "D": "None of the above."
        },
        "correctAnswer": "C",
        "explanation": "List comprehensions provide a concise way to create lists by iterating over an iterable."
    },
    {
        "question": "What will be the output of the following code?\n```python\nfor i in range(3):\n    for j in range(2):\n        print(i, j)\n```",
        "options": {
            "A": "0 0\n0 1\n1 0\n1 1\n2 0\n2 1",
            "B": "0 0\n0 1\n1 0\n1 1\n2 0",
            "C": "0 0\n0 1\n1 0\n2 0\n2 1",
            "D": "Error"
        },
        "correctAnswer": "A",
        "explanation": "The nested loops iterate through the ranges, printing each combination of `i` and `j`."
    },
    {
        "question": "What will be the output of the following code?\n```python\nclass Parent:\n    def show(self):\n        print('Parent')\n\nclass Child(Parent):\n    def show(self):\n        print('Child')\n\nobj = Child()\nobj.show()\n```",
        "options": {
            "A": "Parent",
            "B": "Child",
            "C": "Error",
            "D": "None of the above"
        },
        "correctAnswer": "B",
        "explanation": "The `show()` method in the `Child` class overrides the method in the `Parent` class."
    },
    {
        "question": "What will be the output of the following code?\n```python\nprint([x**2 for x in range(5) if x % 2 == 0])\n```",
        "options": {
            "A": "[0, 1, 4, 9, 16]",
            "B": "[0, 4, 16]",
            "C": "[1, 9]",
            "D": "[0, 1, 2, 3, 4]"
        },
        "correctAnswer": "B",
        "explanation": "The list comprehension squares only the even numbers in the range, producing `[0, 4, 16]`."
    },
    {
        "question": "What does the `__init__` method in a class define?",
        "options": {
            "A": "The class constructor.",
            "B": "A class method.",
            "C": "An instance variable.",
            "D": "None of the above."
        },
        "correctAnswer": "A",
        "explanation": "`__init__` is the constructor method that initializes an instance of a class."
    },
    {
        "question": "What is the purpose of the `with` statement in Python?",
        "options": {
            "A": "To create a context manager.",
            "B": "To handle exceptions.",
            "C": "To iterate over a sequence.",
            "D": "None of the above."
        },
        "correctAnswer": "A",
        "explanation": "The `with` statement simplifies exception handling by encapsulating common preparation and cleanup tasks."
    },
    {
        "question": "What will be the output of the following code?\n```python\nprint('a' in 'banana')\n```",
        "options": {
            "A": "True",
            "B": "False",
            "C": "Error",
            "D": "None of the above"
        },
        "correctAnswer": "A",
        "explanation": "The expression checks if 'a' is in the string 'banana', which is `True`."
    },
    {
        "question": "Which of the following is a valid way to open a file for reading in Python?",
        "options": {
            "A": "open('file.txt', 'r')",
            "B": "open('file.txt')",
            "C": "Both A and B",
            "D": "None of the above"
        },
        "correctAnswer": "C",
        "explanation": "Both methods open a file for reading; the default mode is 'r'."
    },
    {
        "question": "What will be the output of the following code?\n```python\nprint({x: x**2 for x in (1, 2, 3)})\n```",
        "options": {
            "A": "{1: 1, 2: 4, 3: 9}",
            "B": "{1: 1, 2: 2, 3: 3}",
            "C": "{1, 2, 3}",
            "D": "Error"
        },
        "correctAnswer": "A",
        "explanation": "The dictionary comprehension creates a mapping of numbers to their squares."
    },
    {
        "question": "Which of the following methods is used to remove an element from a set in Python?",
        "options": {
            "A": "remove()",
            "B": "discard()",
            "C": "Both A and B",
            "D": "None of the above"
        },
        "correctAnswer": "C",
        "explanation": "Both `remove()` and `discard()` can be used to remove elements from a set, with `remove()` raising an error if the element is not found."
    },
    {
        "question": "What will be the output of the following code?\n```python\nprint((lambda x: x**2)(5))\n```",
        "options": {
            "A": "25",
            "B": "5",
            "C": "Error",
            "D": "None of the above"
        },
        "correctAnswer": "A",
        "explanation": "The lambda function calculates the square of 5, returning 25."
    },
    {
        "question": "What does the `strip()` method do in Python?",
        "options": {
            "A": "Removes whitespace from both ends of a string.",
            "B": "Removes a specified character from a string.",
            "C": "Splits a string into a list.",
            "D": "None of the above."
        },
        "correctAnswer": "A",
        "explanation": "The `strip()` method removes whitespace from the beginning and end of a string."
    },
    {
        "question": "What is the output of the following code?\n```python\nprint('Hello ' + 'World!')\n```",
        "options": {
            "A": "Hello World!",
            "B": "HelloWorld!",
            "C": "Error",
            "D": "None of the above"
        },
        "correctAnswer": "A",
        "explanation": "The `+` operator concatenates two strings, resulting in 'Hello World!'."
    },
    {
        "question": "What is the purpose of the `del` statement in Python?",
        "options": {
            "A": "To delete variables or elements from a data structure.",
            "B": "To remove modules.",
            "C": "To exit the program.",
            "D": "None of the above."
        },
        "correctAnswer": "A",
        "explanation": "The `del` statement can be used to delete variables, list elements, or dictionary entries."
    }
];