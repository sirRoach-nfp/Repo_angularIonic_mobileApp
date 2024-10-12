export const PYTHONintroduction = [[
    {
      "exercise": 1,
      "title": "Hello World",
      "description": "Write a Python program that prints 'Hello, World!' to the console.",
      "requirements": [
        "Use the print() function."
      ],
      "hint": "print('Hello, World!')"
    },
    {
      "exercise": 2,
      "title": "Basic Arithmetic",
      "description": "Create a program that performs basic arithmetic operations (addition, subtraction, multiplication, and division) on two numbers.",
      "requirements": [
        "Ask for user input for two numbers."
      ],
      "hint": "num1 = float(input('Enter first number: '))"
    },
    {
      "exercise": 3,
      "title": "Even or Odd",
      "description": "Write a program that checks if a number entered by the user is even or odd.",
      "requirements": [
        "Use the modulus operator."
      ],
      "hint": "if num % 2 == 0: print('Even') else: print('Odd')"
    },
    {
      "exercise": 4,
      "title": "List Operations",
      "description": "Create a list of fruits and print each fruit using a loop.",
      "requirements": [
        "Use a for loop to iterate over the list."
      ],
      "hint": "fruits = ['apple', 'banana', 'cherry']"
    },
    {
      "exercise": 5,
      "title": "String Concatenation",
      "description": "Write a program that concatenates two strings entered by the user.",
      "requirements": [
        "Use the + operator to concatenate."
      ],
      "hint": "str1 = input('Enter first string: '); str2 = input('Enter second string: '); result = str1 + str2"
    },
    {
      "exercise": 6,
      "title": "Finding the Maximum",
      "description": "Write a program to find the maximum of three numbers entered by the user.",
      "requirements": [
        "Use conditional statements."
      ],
      "hint": "if a > b and a > c: max_value = a"
    },
    {
      "exercise": 7,
      "title": "Basic Function",
      "description": "Create a function that takes two numbers as arguments and returns their sum.",
      "requirements": [
        "Define a function using def keyword."
      ],
      "hint": "def add(a, b): return a + b"
    },
    {
      "exercise": 8,
      "title": "Fibonacci Sequence",
      "description": "Write a program to generate the first 10 numbers in the Fibonacci sequence.",
      "requirements": [
        "Use a loop to calculate Fibonacci numbers."
      ],
      "hint": "a, b = 0, 1; for _ in range(10): print(a); a, b = b, a + b"
    },
    {
      "exercise": 9,
      "title": "User Input and Conversion",
      "description": "Ask the user for their age and convert it to an integer.",
      "requirements": [
        "Use input() and int() for conversion."
      ],
      "hint": "age = int(input('Enter your age: '))"
    },
    {
      "exercise": 10,
      "title": "Dictionary Operations",
      "description": "Create a dictionary with keys as names and values as ages, then print each name with its corresponding age.",
      "requirements": [
        "Use a for loop to iterate over the dictionary."
      ],
      "hint": "ages = {'Alice': 25, 'Bob': 30}; for name, age in ages.items(): print(name, age)"
    },
    {
      "exercise": 11,
      "title": "File Reading",
      "description": "Write a program to read a text file and print its contents to the console.",
      "requirements": [
        "Use the open() function in read mode."
      ],
      "hint": "with open('file.txt', 'r') as f: print(f.read())"
    },
    {
      "exercise": 12,
      "title": "Simple If Statement",
      "description": "Create a program that prints 'Adult' if a user's age is 18 or older, otherwise print 'Minor'.",
      "requirements": [
        "Use if-else statements."
      ],
      "hint": "if age >= 18: print('Adult')"
    },
    {
      "exercise": 13,
      "title": "Basic While Loop",
      "description": "Write a program that counts from 1 to 5 using a while loop.",
      "requirements": [
        "Use a while loop."
      ],
      "hint": "count = 1; while count <= 5: print(count); count += 1"
    },
    {
      "exercise": 14,
      "title": "Simple Class",
      "description": "Create a simple class called 'Car' with attributes for make, model, and year.",
      "requirements": [
        "Define an __init__ method to initialize attributes."
      ],
      "hint": "class Car: def __init__(self, make, model, year): self.make = make"
    },
    {
      "exercise": 15,
      "title": "Basic Exception Handling",
      "description": "Write a program that asks for a number and handles the exception if the input is not a number.",
      "requirements": [
        "Use try and except blocks."
      ],
      "hint": "try: number = int(input('Enter a number: ')) except ValueError: print('Not a number')"
    },
    {
      "exercise": 16,
      "title": "List Comprehension",
      "description": "Use list comprehension to create a list of squares from 1 to 10.",
      "requirements": [
        "Use a single line of code."
      ],
      "hint": "squares = [x**2 for x in range(1, 11)]"
    },
    {
      "exercise": 17,
      "title": "Simple Module",
      "description": "Create a Python module with a function that returns the square of a number.",
      "requirements": [
        "Import the module in another script."
      ],
      "hint": "def square(x): return x**2"
    },
    {
      "exercise": 18,
      "title": "Generating Random Numbers",
      "description": "Write a program that generates a random number between 1 and 10.",
      "requirements": [
        "Use the random module."
      ],
      "hint": "import random; number = random.randint(1, 10)"
    },
    {
      "exercise": 19,
      "title": "Basic Regex",
      "description": "Write a program that checks if a string contains only digits using regular expressions.",
      "requirements": [
        "Use the re module."
      ],
      "hint": "import re; if re.match('^[0-9]+$', my_string): print('Digits')"
    },
    {
      "exercise": 20,
      "title": "Simple API Call",
      "description": "Make a GET request to an API and print the response.",
      "requirements": [
        "Use the requests module."
      ],
      "hint": "import requests; response = requests.get('https://api.example.com'); print(response.json())"
    }
  ]
  ]