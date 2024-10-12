export const CPPabintermediate  = [
    {
      "exercise": 1,
      "title": "Template Class for Stack",
      "description": "Create a template class for a stack data structure.",
      "requirements": [
        "Implement push, pop, and top methods."
      ],
      "hint": "#include <iostream>\n#include <vector>\nusing namespace std;\n\ntemplate <typename T>\nclass Stack {\n  vector<T> data;\npublic:\n  void push(T value) { data.push_back(value); }\n  void pop() { data.pop_back(); }\n  T top() { return data.back(); }\n};\n\nint main() {\n  Stack<int> s;\n  s.push(1);\n  cout << s.top();\n  s.pop();\n  return 0;\n}"
    },
    {
      "exercise": 2,
      "title": "Smart Pointer - Weak Pointer",
      "description": "Use `std::weak_ptr` to prevent circular references in smart pointers.",
      "requirements": [
        "Demonstrate shared and weak ownership."
      ],
      "hint": "#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass A;\nclass B {\npublic:\n  shared_ptr<A> a;\n};\nclass A {\npublic:\n  weak_ptr<B> b;\n};\n\nint main() {\n  shared_ptr<A> a = make_shared<A>();\n  shared_ptr<B> b = make_shared<B>();\n  a->b = b;\n  b->a = a;\n  return 0;\n}"
    },
    {
      "exercise": 3,
      "title": "Function Templates with Multiple Parameters",
      "description": "Create a function template that accepts multiple types and returns the larger value.",
      "requirements": [
        "Use two different types."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\ntemplate <typename T, typename U>\nauto larger(T a, U b) -> decltype(a > b ? a : b) {\n  return (a > b) ? a : b;\n}\n\nint main() {\n  cout << larger(10, 5.5);\n  return 0;\n}"
    },
    {
      "exercise": 4,
      "title": "Operator Overloading for Complex Numbers",
      "description": "Create a class to represent complex numbers and overload the '+' operator.",
      "requirements": [
        "Implement real and imaginary parts."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nclass Complex {\npublic:\n  double real, imag;\n  Complex(double r, double i) : real(r), imag(i) {}\n  Complex operator+(const Complex& c) {\n    return Complex(real + c.real, imag + c.imag);\n  }\n};\n\nint main() {\n  Complex c1(1.0, 2.0);\n  Complex c2(3.0, 4.0);\n  Complex c3 = c1 + c2;\n  cout << c3.real << '+' << c3.imag << 'i';\n  return 0;\n}"
    },
    {
      "exercise": 5,
      "title": "Inheritance and Virtual Destructors",
      "description": "Implement a base class and derived class with virtual destructors.",
      "requirements": [
        "Ensure proper resource cleanup."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n  virtual ~Base() { cout << 'Base destructor'; }\n};\nclass Derived : public Base {\npublic:\n  ~Derived() { cout << 'Derived destructor'; }\n};\n\nint main() {\n  Base* obj = new Derived();\n  delete obj;\n  return 0;\n}"
    },
    {
      "exercise": 6,
      "title": "Multithreading with Mutex",
      "description": "Create a program that uses a mutex to protect shared data in a multithreaded environment.",
      "requirements": [
        "Ensure thread safety."
      ],
      "hint": "#include <iostream>\n#include <thread>\n#include <mutex>\nusing namespace std;\n\nmutex mtx;\nint sharedData = 0;\n\nvoid increment() {\n  lock_guard<mutex> lock(mtx);\n  sharedData++;\n}\n\nint main() {\n  thread t1(increment);\n  thread t2(increment);\n  t1.join();\n  t2.join();\n  cout << sharedData;\n  return 0;\n}"
    },
    {
      "exercise": 7,
      "title": "Lambda Expressions with State",
      "description": "Create a lambda expression that captures state and modifies it.",
      "requirements": [
        "Demonstrate capturing by value and reference."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int x = 10;\n  auto byValue = [x]() mutable { return x + 1; };\n  auto byReference = [&x]() { x++; };\n  cout << byValue() << ' ' << x;\n  byReference();\n  cout << x;\n  return 0;\n}"
    },
    {
      "exercise": 8,
      "title": "Template Specialization",
      "description": "Implement a template specialization for a function that handles strings differently.",
      "requirements": [
        "Use `std::string` specialization."
      ],
      "hint": "#include <iostream>\n#include <string>\nusing namespace std;\n\ntemplate <typename T>\nvoid print(T value) { cout << value; }\n\ntemplate <>\nvoid print<string>(string value) { cout << 'String: ' << value; }\n\nint main() {\n  print(10);\n  print(string(\"Hello\"));\n  return 0;\n}"
    },
    {
      "exercise": 9,
      "title": "Custom Exception Handling",
      "description": "Create a custom exception class and demonstrate throwing and catching exceptions.",
      "requirements": [
        "Define and use the custom exception."
      ],
      "hint": "#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nclass MyException : public runtime_error {\npublic:\n  MyException(const string& msg) : runtime_error(msg) {}\n};\n\nint main() {\n  try {\n    throw MyException(\"An error occurred\");\n  } catch (const MyException& e) {\n    cout << e.what();\n  }\n  return 0;\n}"
    },
    {
      "exercise": 10,
      "title": "Using STL Algorithms",
      "description": "Use STL algorithms to manipulate a collection of data.",
      "requirements": [
        "Use `std::sort` and `std::for_each`."
      ],
      "hint": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n  vector<int> nums = {4, 2, 5, 1, 3};\n  sort(nums.begin(), nums.end());\n  for_each(nums.begin(), nums.end(), [](int n) { cout << n << ' '; });\n  return 0;\n}"
    },
    {
      "exercise": 11,
      "title": "Custom Iterator Class",
      "description": "Implement a custom iterator for a collection class.",
      "requirements": [
        "Allow iteration over the collection."
      ],
      "hint": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass MyCollection {\n  vector<int> data;\npublic:\n  void add(int value) { data.push_back(value); }\n  class iterator {\n    int* ptr;\n  public:\n    iterator(int* p) : ptr(p) {}\n    int& operator*() { return *ptr; }\n    iterator& operator++() { ptr++; return *this; }\n    bool operator!=(const iterator& it) { return ptr != it.ptr; }\n  };\n  iterator begin() { return iterator(data.data()); }\n  iterator end() { return iterator(data.data() + data.size()); }\n};\n\nint main() {\n  MyCollection col;\n  col.add(1);\n  col.add(2);\n  for (auto it = col.begin(); it != col.end(); ++it) {\n    cout << *it << ' ';\n  }\n  return 0;\n}"
    },
    {
      "exercise": 12,
      "title": "Thread Synchronization with Condition Variables",
      "description": "Demonstrate thread synchronization using condition variables.",
      "requirements": [
        "Use condition variables to manage thread execution."
      ],
      "hint": "#include <iostream>\n#include <thread>\n#include <mutex>\n#include <condition_variable>\nusing namespace std;\n\nmutex mtx;\ncondition_variable cv;\nbool ready = false;\n\nvoid worker() {\n  unique_lock<mutex> lck(mtx);\n  cv.wait(lck, [] { return ready; });\n  cout << 'Worker finished';\n}\n\nint main() {\n  thread t(worker);\n  cout << 'Press Enter to signal the worker';\n  cin.get();\n  {\n    lock_guard<mutex> lck(mtx);\n    ready = true;\n  }\n  cv.notify_one();\n  t.join();\n  return 0;\n}"
    },
    {
      "exercise": 13,
      "title": "File I/O with Exceptions",
      "description": "Implement file reading with exception handling.",
      "requirements": [
        "Handle file not found and read errors."
      ],
      "hint": "#include <iostream>\n#include <fstream>\n#include <stdexcept>\nusing namespace std;\n\nint main() {\n  ifstream file(\"data.txt\");\n  if (!file.is_open()) throw runtime_error(\"File not found\");\n  string line;\n  while (getline(file, line)) {\n    cout << line << endl;\n  }\n  return 0;\n}"
    },
    {
      "exercise": 14,
      "title": "Dynamic Memory Management with Smart Pointers",
      "description": "Use `std::shared_ptr` and `std::unique_ptr` for memory management.",
      "requirements": [
        "Demonstrate ownership transfer."
      ],
      "hint": "#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass MyClass {\npublic:\n  MyClass() { cout << 'Constructor'; }\n  ~MyClass() { cout << 'Destructor'; }\n};\n\nint main() {\n  unique_ptr<MyClass> ptr1 = make_unique<MyClass>();\n  shared_ptr<MyClass> ptr2 = make_shared<MyClass>();\n  return 0;\n}"
    },
    {
      "exercise": 15,
      "title": "Create a Simple HTTP Server",
      "description": "Build a simple HTTP server using sockets.",
      "requirements": [
        "Handle basic GET requests."
      ],
      "hint": "#include <iostream>\n#include <string>\n#include <sys/socket.h>\n#include <netinet/in.h>\n#include <unistd.h>\nusing namespace std;\n\nint main() {\n  int server_fd = socket(AF_INET, SOCK_STREAM, 0);\n  struct sockaddr_in address;\n  address.sin_family = AF_INET;\n  address.sin_addr.s_addr = INADDR_ANY;\n  address.sin_port = htons(8080);\n  bind(server_fd, (struct sockaddr *)&address, sizeof(address));\n  listen(server_fd, 3);\n  int addrlen = sizeof(address);\n  int new_socket = accept(server_fd, (struct sockaddr *)&address, (socklen_t*)&addrlen);\n  char buffer[1024] = {0};\n  read(new_socket, buffer, 1024);\n  cout << buffer;\n  close(new_socket);\n  close(server_fd);\n  return 0;\n}"
    },
    {
      "exercise": 16,
      "title": "Graph Implementation using Adjacency List",
      "description": "Implement a graph data structure using an adjacency list.",
      "requirements": [
        "Include methods for adding vertices and edges."
      ],
      "hint": "#include <iostream>\n#include <vector>\n#include <list>\nusing namespace std;\n\nclass Graph {\n  vector<list<int>> adj;\npublic:\n  Graph(int V) : adj(V) {}\n  void addEdge(int v, int w) { adj[v].push_back(w); }\n};\n\nint main() {\n  Graph g(5);\n  g.addEdge(0, 1);\n  g.addEdge(1, 2);\n  return 0;\n}"
    },
    {
      "exercise": 17,
      "title": "Binary Tree Traversal",
      "description": "Implement a binary tree with in-order and pre-order traversal methods.",
      "requirements": [
        "Use recursion for traversal."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\nstruct Node {\n  int data;\n  Node* left;\n  Node* right;\n};\n\nvoid inorder(Node* root) {\n  if (root) {\n    inorder(root->left);\n    cout << root->data << ' ';\n    inorder(root->right);\n  }\n}\n\nvoid preorder(Node* root) {\n  if (root) {\n    cout << root->data << ' ';\n    preorder(root->left);\n    preorder(root->right);\n  }\n}\n\nint main() {\n  Node* root = new Node{1, new Node{2}, new Node{3}};\n  inorder(root);\n  preorder(root);\n  return 0;\n}"
    },
    {
      "exercise": 18,
      "title": "Regular Expressions in C++",
      "description": "Use regular expressions to validate email addresses.",
      "requirements": [
        "Include regex pattern matching."
      ],
      "hint": "#include <iostream>\n#include <regex>\nusing namespace std;\n\nbool validateEmail(const string& email) {\n  regex pattern(\"[\\w.%+-]+@[\\w.-]+\\.\\w{2,3}\");\n  return regex_match(email, pattern);\n}\n\nint main() {\n  cout << validateEmail(\"example@example.com\");\n  return 0;\n}"
    },
    {
      "exercise": 19,
      "title": "Template Class with Non-Type Parameters",
      "description": "Create a template class that uses non-type parameters.",
      "requirements": [
        "Demonstrate use of a size parameter."
      ],
      "hint": "#include <iostream>\nusing namespace std;\n\ntemplate <typename T, size_t N>\nclass Array {\n  T data[N];\npublic:\n  size_t size() const { return N; }\n};\n\nint main() {\n  Array<int, 5> arr;\n  cout << arr.size();\n  return 0;\n}"
    },
    {
      "exercise": 20,
      "title": "Use of STL Containers: Set and Map",
      "description": "Implement a program that demonstrates the use of `std::set` and `std::map`.",
      "requirements": [
        "Show insertion and iteration over these containers."
      ],
      "hint": "#include <iostream>\n#include <set>\n#include <map>\nusing namespace std;\n\nint main() {\n  set<int> s = {1, 2, 3};\n  for (int x : s) cout << x << ' ';\n  map<string, int> m = { {\"a\", 1}, {\"b\", 2} };\n  for (const auto& p : m) cout << p.first << ':' << p.second << ' ';\n  return 0;\n}"
    }
  ]
  