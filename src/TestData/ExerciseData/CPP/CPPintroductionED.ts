export const CPPintro = [
    {
      "exercise": 1,
      "title": "Hello World",
      "description": "Write a C++ program that prints 'Hello, World!' to the console.",
      "requirements": [
        "Use the `cout` statement to output the string."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << 'Hello, World!';\n  return 0;\n}"
    },
    {
      "exercise": 2,
      "title": "Basic Arithmetic",
      "description": "Create a program that performs basic arithmetic operations (addition, subtraction, multiplication, division).",
      "requirements": [
        "Get two numbers from the user.",
        "Display the results of the four operations."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int a, b;\n  cin >> a >> b;\n  cout << 'Sum: ' << (a + b);\n  cout << 'Difference: ' << (a - b);\n  cout << 'Product: ' << (a * b);\n  cout << 'Quotient: ' << (a / b);\n  return 0;\n}"
    },
    {
      "exercise": 3,
      "title": "Variable Declaration",
      "description": "Declare variables of different types and output their values.",
      "requirements": [
        "Declare an integer, a float, and a char variable.",
        "Initialize them and display their values."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int num = 5;\n  float f = 3.14;\n  char c = 'A';\n  cout << num << ', ' << f << ', ' << c;\n  return 0;\n}"
    },
    {
      "exercise": 4,
      "title": "If Statement",
      "description": "Write a program that checks if a number is positive, negative, or zero.",
      "requirements": [
        "Get a number from the user.",
        "Use an if statement to determine its sign."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int num;\n  cin >> num;\n  if (num > 0) cout << 'Positive';\n  else if (num < 0) cout << 'Negative';\n  else cout << 'Zero';\n  return 0;\n}"
    },
    {
      "exercise": 5,
      "title": "For Loop",
      "description": "Write a program that prints numbers from 1 to 10 using a for loop.",
      "requirements": [
        "Use a for loop to iterate and print numbers."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  for (int i = 1; i <= 10; i++) {\n    cout << i << ' ';\n  }\n  return 0;\n}"
    },
    {
      "exercise": 6,
      "title": "While Loop",
      "description": "Create a program that sums numbers until the user enters zero.",
      "requirements": [
        "Use a while loop to continuously ask for numbers and sum them."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int num, sum = 0;\n  do {\n    cin >> num;\n    sum += num;\n  } while (num != 0);\n  cout << 'Sum: ' << sum;\n  return 0;\n}"
    },
    {
      "exercise": 7,
      "title": "Functions",
      "description": "Write a function that takes two integers and returns their sum.",
      "requirements": [
        "Define a function named `add` that adds two numbers."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint add(int a, int b) {\n  return a + b;\n}\n\nint main() {\n  cout << add(5, 7);\n  return 0;\n}"
    },
    {
      "exercise": 8,
      "title": "Arrays",
      "description": "Create an array of integers and print its elements.",
      "requirements": [
        "Declare an array of size 5 and initialize it.",
        "Use a loop to print each element."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int arr[5] = {1, 2, 3, 4, 5};\n  for (int i = 0; i < 5; i++) {\n    cout << arr[i] << ' ';\n  }\n  return 0;\n}"
    },
    {
      "exercise": 9,
      "title": "Strings",
      "description": "Create a program that takes a string input and displays its length.",
      "requirements": [
        "Get a string from the user and output its length."
      ],
      "hint": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n  string str;\n  getline(cin, str);\n  cout << 'Length: ' << str.length();\n  return 0;\n}"
    },
    {
      "exercise": 10,
      "title": "Switch Statement",
      "description": "Write a program that uses a switch statement to print the name of a day based on a number.",
      "requirements": [
        "Get a number from 1 to 7 and print the corresponding day."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int day;\n  cin >> day;\n  switch (day) {\n    case 1: cout << 'Monday'; break;\n    case 2: cout << 'Tuesday'; break;\n    case 3: cout << 'Wednesday'; break;\n    case 4: cout << 'Thursday'; break;\n    case 5: cout << 'Friday'; break;\n    case 6: cout << 'Saturday'; break;\n    case 7: cout << 'Sunday'; break;\n    default: cout << 'Invalid';\n  }\n  return 0;\n}"
    },
    {
      "exercise": 11,
      "title": "Pointers",
      "description": "Create a program that demonstrates the use of pointers.",
      "requirements": [
        "Declare an integer variable and a pointer to it, then display its value and address."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int num = 10;\n  int *p = &num;\n  cout << 'Value: ' << *p << ', Address: ' << p;\n  return 0;\n}"
    },
    {
      "exercise": 12,
      "title": "Classes and Objects",
      "description": "Define a simple class with a member variable and a method.",
      "requirements": [
        "Create a class named `Car` with a method to display its model."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nclass Car {\npublic:\n  string model;\n  void display() {\n    cout << model;\n  }\n};\n\nint main() {\n  Car myCar;\n  myCar.model = 'Toyota';\n  myCar.display();\n  return 0;\n}"
    },
    {
      "exercise": 13,
      "title": "Inheritance",
      "description": "Demonstrate inheritance in C++ with a base and derived class.",
      "requirements": [
        "Create a base class named `Animal` and a derived class named `Dog`."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nclass Animal {\npublic:\n  void sound() {\n    cout << 'Animal sound';\n  }\n};\n\nclass Dog : public Animal {\npublic:\n  void sound() {\n    cout << 'Bark';\n  }\n};\n\nint main() {\n  Dog myDog;\n  myDog.sound();\n  return 0;\n}"
    },
    {
      "exercise": 14,
      "title": "File Input/Output",
      "description": "Create a program that writes to and reads from a file.",
      "requirements": [
        "Write a string to a file and then read it back."
      ],
      "hint": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n  ofstream outFile('test.txt');\n  outFile << 'Hello File';\n  outFile.close();\n\n  string line;\n  ifstream inFile('test.txt');\n  getline(inFile, line);\n  cout << line;\n  return 0;\n}"
    },
    {
      "exercise": 15,
      "title": "Dynamic Memory Allocation",
      "description": "Allocate and deallocate memory dynamically using pointers.",
      "requirements": [
        "Use `new` to allocate an array of integers and display its elements."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int *arr = new int[5];\n  for (int i = 0; i < 5; i++) {\n    arr[i] = i + 1;\n    cout << arr[i] << ' ';\n  }\n  delete[] arr;\n  return 0;\n}"
    },
    {
      "exercise": 16,
      "title": "Templates",
      "description": "Write a simple template function to find the maximum of two values.",
      "requirements": [
        "Create a template function named `maxValue`."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nT maxValue(T a, T b) {\n  return (a > b) ? a : b;\n}\n\nint main() {\n  cout << maxValue(5, 10);\n  cout << maxValue(3.5, 2.5);\n  return 0;\n}"
    },
    {
      "exercise": 17,
      "title": "Exception Handling",
      "description": "Create a program that demonstrates basic exception handling.",
      "requirements": [
        "Handle division by zero exception."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int a = 5, b = 0;\n  try {\n    if (b == 0) throw 'Division by zero!';\n    cout << a / b;\n  } catch (const char* msg) {\n    cout << msg;\n  }\n  return 0;\n}"
    },
    {
      "exercise": 18,
      "title": "Static Members",
      "description": "Demonstrate the use of static members in a class.",
      "requirements": [
        "Create a class with a static variable and a static method."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nclass Counter {\npublic:\n  static int count;\n  Counter() { count++; }\n  static void showCount() {\n    cout << count;\n  }\n};\n\nint Counter::count = 0;\n\nint main() {\n  Counter c1, c2;\n  Counter::showCount();\n  return 0;\n}"
    },
    {
      "exercise": 19,
      "title": "Multidimensional Arrays",
      "description": "Create a program that uses a two-dimensional array.",
      "requirements": [
        "Initialize a 2D array and print its elements."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int arr[2][2] = {{1, 2}, {3, 4}};\n  for (int i = 0; i < 2; i++) {\n    for (int j = 0; j < 2; j++) {\n      cout << arr[i][j] << ' ';\n    }\n    cout << endl;\n  }\n  return 0;\n}"
    },
    {
      "exercise": 20,
      "title": "Namespaces",
      "description": "Demonstrate the use of namespaces in C++.",
      "requirements": [
        "Create a namespace with a function and call it."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nnamespace MyNamespace {\n  void display() {\n    cout << 'Inside MyNamespace';\n  }\n}\n\nint main() {\n  MyNamespace::display();\n  return 0;\n}"
    }
  ]
  