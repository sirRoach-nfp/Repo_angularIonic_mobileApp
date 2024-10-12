export const CPPbasic = [
    {
      "exercise": 1,
      "title": "Hello World",
      "description": "Write a program that prints 'Hello, World!' to the console.",
      "requirements": [
        "Use the standard output stream."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << 'Hello, World!';\n  return 0;\n}"
    },
    {
      "exercise": 2,
      "title": "Variables and Data Types",
      "description": "Declare variables of different data types and display their values.",
      "requirements": [
        "Use int, float, and char data types."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int age = 25;\n  float height = 5.9;\n  char initial = 'J';\n  cout << age << ' ' << height << ' ' << initial;\n  return 0;\n}"
    },
    {
      "exercise": 3,
      "title": "Basic Arithmetic",
      "description": "Create a program that performs basic arithmetic operations on two numbers.",
      "requirements": [
        "Add, subtract, multiply, and divide two numbers."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int a = 10, b = 5;\n  cout << 'Sum: ' << (a + b);\n  cout << 'Difference: ' << (a - b);\n  cout << 'Product: ' << (a * b);\n  cout << 'Quotient: ' << (a / b);\n  return 0;\n}"
    },
    {
      "exercise": 4,
      "title": "If Statement",
      "description": "Write a program that checks if a number is positive, negative, or zero.",
      "requirements": [
        "Use if-else statements."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int num;\n  cin >> num;\n  if (num > 0) {\n    cout << 'Positive';\n  } else if (num < 0) {\n    cout << 'Negative';\n  } else {\n    cout << 'Zero';\n  }\n  return 0;\n}"
    },
    {
      "exercise": 5,
      "title": "Switch Statement",
      "description": "Implement a simple calculator using a switch statement.",
      "requirements": [
        "Handle addition, subtraction, multiplication, and division."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  char op;\n  float num1, num2;\n  cin >> num1 >> op >> num2;\n  switch (op) {\n    case '+': cout << (num1 + num2); break;\n    case '-': cout << (num1 - num2); break;\n    case '*': cout << (num1 * num2); break;\n    case '/': cout << (num1 / num2); break;\n  }\n  return 0;\n}"
    },
    {
      "exercise": 6,
      "title": "For Loop",
      "description": "Create a program that prints the first 10 natural numbers using a for loop.",
      "requirements": [
        "Use a for loop to iterate."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  for (int i = 1; i <= 10; i++) {\n    cout << i << ' ';\n  }\n  return 0;\n}"
    },
    {
      "exercise": 7,
      "title": "While Loop",
      "description": "Write a program that calculates the sum of integers from 1 to n using a while loop.",
      "requirements": [
        "Take input for n from the user."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int n, sum = 0;\n  cin >> n;\n  int i = 1;\n  while (i <= n) {\n    sum += i;\n    i++;\n  }\n  cout << sum;\n  return 0;\n}"
    },
    {
      "exercise": 8,
      "title": "Do-While Loop",
      "description": "Implement a program that prints numbers from 1 to 5 using a do-while loop.",
      "requirements": [
        "Use a do-while loop."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int i = 1;\n  do {\n    cout << i << ' ';\n    i++;\n  } while (i <= 5);\n  return 0;\n}"
    },
    {
      "exercise": 9,
      "title": "Functions",
      "description": "Create a program with a function to calculate the factorial of a number.",
      "requirements": [
        "Use a recursive function."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint factorial(int n) {\n  return (n <= 1) ? 1 : n * factorial(n - 1);\n}\n\nint main() {\n  int num;\n  cin >> num;\n  cout << factorial(num);\n  return 0;\n}"
    },
    {
      "exercise": 10,
      "title": "Arrays",
      "description": "Write a program that initializes an array and prints its elements.",
      "requirements": [
        "Use a for loop to print the elements."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int arr[] = {1, 2, 3, 4, 5};\n  for (int i = 0; i < 5; i++) {\n    cout << arr[i] << ' ';\n  }\n  return 0;\n}"
    },
    {
      "exercise": 11,
      "title": "Strings",
      "description": "Create a program that takes a string input and displays its length.",
      "requirements": [
        "Use the string library."
      ],
      "hint": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n  string str;\n  getline(cin, str);\n  cout << 'Length: ' << str.length();\n  return 0;\n}"
    },
    {
      "exercise": 12,
      "title": "Pointers",
      "description": "Write a program that uses pointers to modify the value of a variable.",
      "requirements": [
        "Use a pointer to change the value."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int var = 10;\n  int *ptr = &var;\n  *ptr = 20;\n  cout << var;\n  return 0;\n}"
    },
    {
      "exercise": 13,
      "title": "Classes",
      "description": "Create a class with a member function and demonstrate its usage.",
      "requirements": [
        "Define a class with attributes and methods."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nclass MyClass {\npublic:\n  void display() {\n    cout << 'Hello from MyClass';\n  }\n};\n\nint main() {\n  MyClass obj;\n  obj.display();\n  return 0;\n}"
    },
    {
      "exercise": 14,
      "title": "Inheritance",
      "description": "Demonstrate basic inheritance in C++.",
      "requirements": [
        "Create a base class and a derived class."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n  void display() {\n    cout << 'Base Class';\n  }\n};\n\nclass Derived : public Base {};\n\nint main() {\n  Derived obj;\n  obj.display();\n  return 0;\n}"
    },
    {
      "exercise": 15,
      "title": "File Handling",
      "description": "Write a program that creates a text file and writes to it.",
      "requirements": [
        "Use of file streams."
      ],
      "hint": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n  ofstream file('test.txt');\n  file << 'Hello, File!';\n  file.close();\n  return 0;\n}"
    },
    {
      "exercise": 16,
      "title": "Vector",
      "description": "Demonstrate the use of vectors in C++.",
      "requirements": [
        "Store and print integer values."
      ],
      "hint": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n  vector<int> nums = {1, 2, 3, 4, 5};\n  for (int n : nums) {\n    cout << n << ' ';\n  }\n  return 0;\n}"
    },
    {
      "exercise": 17,
      "title": "Dynamic Memory Allocation",
      "description": "Create a program that allocates and deallocates memory for an array.",
      "requirements": [
        "Use new and delete keywords."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int* arr = new int[5];\n  for (int i = 0; i < 5; i++) {\n    arr[i] = i + 1;\n    cout << arr[i] << ' ';\n  }\n  delete[] arr;\n  return 0;\n}"
    },
    {
      "exercise": 18,
      "title": "Lambda Functions",
      "description": "Implement a simple program using a lambda function.",
      "requirements": [
        "Create a lambda to add two numbers."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  auto add = [](int a, int b) { return a + b; };\n  cout << add(5, 3);\n  return 0;\n}"
    },
    {
      "exercise": 19,
      "title": "Enumerations",
      "description": "Create an enumeration to represent days of the week.",
      "requirements": [
        "Define an enum and use it."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nenum Day { Sun, Mon, Tue, Wed, Thu, Fri, Sat };\n\nint main() {\n  Day today = Wed;\n  cout << today;\n  return 0;\n}"
    },
    {
      "exercise": 20,
      "title": "Exception Handling",
      "description": "Write a program that demonstrates basic exception handling.",
      "requirements": [
        "Use try-catch blocks."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  try {\n    throw runtime_error('Error occurred!');\n  } catch (const exception& e) {\n    cout << e.what();\n  }\n  return 0;\n}"
    }
  ]
  