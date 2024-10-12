export const CPPintermediate = [
    {
      "exercise": 1,
      "title": "Template Function",
      "description": "Create a template function to find the maximum of two values.",
      "requirements": [
        "Use a template to allow different data types."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nT maximum(T a, T b) {\n  return (a > b) ? a : b;\n}\n\nint main() {\n  cout << maximum(10, 20) << endl;\n  cout << maximum(3.5, 2.5);\n  return 0;\n}"
    },
    {
      "exercise": 2,
      "title": "Class with Operator Overloading",
      "description": "Create a class representing a 2D point and overload the '+' operator to add two points.",
      "requirements": [
        "Define the class and overload the operator."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nclass Point {\npublic:\n  int x, y;\n  Point(int x, int y) : x(x), y(y) {}\n  Point operator+(const Point& p) {\n    return Point(x + p.x, y + p.y);\n  }\n};\n\nint main() {\n  Point p1(1, 2), p2(3, 4);\n  Point p3 = p1 + p2;\n  cout << p3.x << ', ' << p3.y;\n  return 0;\n}"
    },
    {
      "exercise": 3,
      "title": "File Reading and Writing",
      "description": "Write a program that reads numbers from a file, calculates their sum, and writes the result to another file.",
      "requirements": [
        "Use file input and output streams."
      ],
      "hint": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n  ifstream infile('input.txt');\n  ofstream outfile('output.txt');\n  int num, sum = 0;\n  while (infile >> num) {\n    sum += num;\n  }\n  outfile << 'Sum: ' << sum;\n  return 0;\n}"
    },
    {
      "exercise": 4,
      "title": "Smart Pointers",
      "description": "Implement a program using `std::shared_ptr` to manage dynamic memory.",
      "requirements": [
        "Create a shared pointer for a class instance."
      ],
      "hint": "#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass MyClass {\npublic:\n  MyClass() { cout << 'Constructor'; }\n  ~MyClass() { cout << 'Destructor'; }\n};\n\nint main() {\n  shared_ptr<MyClass> ptr = make_shared<MyClass>();\n  return 0;\n}"
    },
    {
      "exercise": 5,
      "title": "Multithreading",
      "description": "Write a program that creates multiple threads to perform concurrent tasks.",
      "requirements": [
        "Use the `<thread>` library."
      ],
      "hint": "#include <iostream>\n#include <thread>\nusing namespace std;\n\nvoid printMessage() {\n  cout << 'Hello from thread!';\n}\n\nint main() {\n  thread t(printMessage);\n  t.join();\n  return 0;\n}"
    },
    {
      "exercise": 6,
      "title": "Exception Handling",
      "description": "Create a program that demonstrates custom exception handling.",
      "requirements": [
        "Define a custom exception class."
      ],
      "hint": "#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nclass MyException : public runtime_error {\npublic:\n  MyException(const string& msg) : runtime_error(msg) {}\n};\n\nint main() {\n  throw MyException('Custom error');\n  return 0;\n}"
    },
    {
      "exercise": 7,
      "title": "Inheritance and Polymorphism",
      "description": "Implement a base class and derived class with virtual functions.",
      "requirements": [
        "Demonstrate dynamic polymorphism."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n  virtual void show() { cout << 'Base'; }\n};\n\nclass Derived : public Base {\npublic:\n  void show() override { cout << 'Derived'; }\n};\n\nint main() {\n  Base* b = new Derived();\n  b->show();\n  delete b;\n  return 0;\n}"
    },
    {
      "exercise": 8,
      "title": "Lambda Functions with Capture",
      "description": "Create a lambda function that captures a variable by value and reference.",
      "requirements": [
        "Demonstrate both capture methods."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int a = 10;\n  auto byValue = [a]() { cout << a; };\n  auto byReference = [&a]() { a++; };\n  byValue();\n  byReference();\n  cout << a;\n  return 0;\n}"
    },
    {
      "exercise": 9,
      "title": "STL Vectors",
      "description": "Implement a program that uses `std::vector` to store and sort integers.",
      "requirements": [
        "Use the `sort` function from the `<algorithm>` library."
      ],
      "hint": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n  vector<int> nums = {5, 3, 8, 1};\n  sort(nums.begin(), nums.end());\n  for (int n : nums) {\n    cout << n << ' ';\n  }\n  return 0;\n}"
    },
    {
      "exercise": 10,
      "title": "Function Overloading",
      "description": "Create overloaded functions to perform addition for different data types.",
      "requirements": [
        "Overload for int and double types."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint add(int a, int b) { return a + b; }\n\ndouble add(double a, double b) { return a + b; }\n\nint main() {\n  cout << add(1, 2) << ' ' << add(1.5, 2.5);\n  return 0;\n}"
    },
    {
      "exercise": 11,
      "title": "Using Maps",
      "description": "Implement a program that uses `std::map` to store and retrieve key-value pairs.",
      "requirements": [
        "Demonstrate insertion and retrieval."
      ],
      "hint": "#include <iostream>\n#include <map>\nusing namespace std;\n\nint main() {\n  map<string, int> ages;\n  ages['Alice'] = 30;\n  cout << ages['Alice'];\n  return 0;\n}"
    },
    {
      "exercise": 12,
      "title": "Dynamic Arrays",
      "description": "Create a program that dynamically allocates an array and fills it with user input.",
      "requirements": [
        "Use `new` for dynamic allocation."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int size;\n  cin >> size;\n  int* arr = new int[size];\n  for (int i = 0; i < size; i++) {\n    cin >> arr[i];\n  }\n  delete[] arr;\n  return 0;\n}"
    },
    {
      "exercise": 13,
      "title": "Binary Search",
      "description": "Implement a binary search algorithm on a sorted array.",
      "requirements": [
        "Create a function for the search."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint binarySearch(int arr[], int size, int key) {\n  int left = 0, right = size - 1;\n  while (left <= right) {\n    int mid = left + (right - left) / 2;\n    if (arr[mid] == key) return mid;\n    if (arr[mid] < key) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}\n\nint main() {\n  int arr[] = {1, 2, 3, 4, 5};\n  cout << binarySearch(arr, 5, 3);\n  return 0;\n}"
    },
    {
      "exercise": 14,
      "title": "Multi-dimensional Arrays",
      "description": "Create a program that initializes and prints a 2D array.",
      "requirements": [
        "Use nested loops."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int arr[2][3] = {{1, 2, 3}, {4, 5, 6}};\n  for (int i = 0; i < 2; i++) {\n    for (int j = 0; j < 3; j++) {\n      cout << arr[i][j] << ' ';\n    }\n  }\n  return 0;\n}"
    },
    {
      "exercise": 15,
      "title": "Sorting Algorithms",
      "description": "Implement a simple bubble sort algorithm to sort an array.",
      "requirements": [
        "Create a function for sorting."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nvoid bubbleSort(int arr[], int size) {\n  for (int i = 0; i < size - 1; i++) {\n    for (int j = 0; j < size - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        swap(arr[j], arr[j + 1]);\n      }\n    }\n  }\n}\n\nint main() {\n  int arr[] = {5, 3, 8, 1};\n  bubbleSort(arr, 4);\n  return 0;\n}"
    },
    {
      "exercise": 16,
      "title": "Regular Expressions",
      "description": "Create a program that uses regular expressions to validate an email address.",
      "requirements": [
        "Use the `<regex>` library."
      ],
      "hint": "#include <iostream>\n#include <regex>\nusing namespace std;\n\nint main() {\n  string email;\n  cin >> email;\n  regex pattern(\"[\\w.]+@[\\w.]+\\.[a-z]{2,3}\");\n  cout << regex_match(email, pattern);\n  return 0;\n}"
    },
    {
      "exercise": 17,
      "title": "Recursion",
      "description": "Implement a recursive function to calculate the factorial of a number.",
      "requirements": [
        "Create a function that calls itself."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint factorial(int n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}\n\nint main() {\n  cout << factorial(5);\n  return 0;\n}"
    },
    {
      "exercise": 18,
      "title": "Smart Pointers - Unique Pointer",
      "description": "Demonstrate the use of `std::unique_ptr` for resource management.",
      "requirements": [
        "Create and use a unique pointer."
      ],
      "hint": "#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass MyClass {\npublic:\n  MyClass() { cout << 'Unique Pointer'; }\n};\n\nint main() {\n  unique_ptr<MyClass> ptr = make_unique<MyClass>();\n  return 0;\n}"
    },
    {
      "exercise": 19,
      "title": "Functional Programming - std::function",
      "description": "Use `std::function` to store a function and invoke it.",
      "requirements": [
        "Demonstrate the use of std::function."
      ],
      "hint": "#include <iostream>\n#include <functional>\nusing namespace std;\n\nint add(int a, int b) { return a + b; }\n\nint main() {\n  std::function<int(int, int)> func = add;\n  cout << func(5, 3);\n  return 0;\n}"
    },
    {
      "exercise": 20,
      "title": "Creating a Simple Class with Getters and Setters",
      "description": "Create a class representing a Book with private attributes and public getters and setters.",
      "requirements": [
        "Implement at least two attributes."
      ],
      "hint": "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Book {\nprivate:\n  string title;\n  string author;\npublic:\n  void setTitle(const string& t) { title = t; }\n  string getTitle() { return title; }\n  void setAuthor(const string& a) { author = a; }\n  string getAuthor() { return author; }\n};\n\nint main() {\n  Book b;\n  b.setTitle('1984');\n  b.setAuthor('George Orwell');\n  cout << b.getTitle() << ', ' << b.getAuthor();\n  return 0;\n}"
    }
  ]
  