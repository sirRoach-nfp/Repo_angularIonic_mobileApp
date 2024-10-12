export const CppintermediateQD = [
    {
        "question": "Which of the following is used to define a constant in C++?",
        "options": {
            "A": "const int x = 10;",
            "B": "#define x 10",
            "C": "constant x = 10;",
            "D": "int constant x = 10;"
        },
        "correctAnswer": "A",
        "explanation": "In C++, the `const` keyword is used to define a constant variable."
    },
    {
        "question": "What is the output of the following code?\n\n```cpp\nint a = 5;\nint b = 10;\ncout << a++ + ++b;\n```",
        "options": {
            "A": "16",
            "B": "17",
            "C": "15",
            "D": "Compiler Error"
        },
        "correctAnswer": "B",
        "explanation": "The expression first evaluates `a++` (which is 5) and `++b` (which becomes 11), so the result is `5 + 11 = 16`. After this, `a` becomes 6."
    },
    {
        "question": "Which of the following is a correct example of function overloading in C++?",
        "options": {
            "A": "void func(int); void func(double);",
            "B": "void func(int); int func(double);",
            "C": "void func(int); void func(int);",
            "D": "int func(int); float func(int);"
        },
        "correctAnswer": "A",
        "explanation": "Function overloading requires functions with the same name but different parameter types."
    },
    {
        "question": "Which operator cannot be overloaded in C++?",
        "options": {
            "A": "+",
            "B": "::",
            "C": "[]",
            "D": "=="
        },
        "correctAnswer": "B",
        "explanation": "The scope resolution operator `::` cannot be overloaded in C++."
    },
    {
        "question": "What is a virtual function in C++?",
        "options": {
            "A": "A function defined in a base class that can be overridden in derived classes.",
            "B": "A function that is automatically executed when an object is created.",
            "C": "A function with no return type.",
            "D": "A function that can only be called through a pointer."
        },
        "correctAnswer": "A",
        "explanation": "A virtual function allows derived classes to override it in order to implement polymorphic behavior."
    },
    {
        "question": "Which of the following correctly creates an object of a class `MyClass`?",
        "options": {
            "A": "MyClass obj();",
            "B": "MyClass obj;",
            "C": "new MyClass();",
            "D": "MyClass::obj();"
        },
        "correctAnswer": "B",
        "explanation": "In C++, `MyClass obj;` creates an object of `MyClass`. Option A declares a function."
    },
    {
        "question": "What is the main purpose of a destructor in C++?",
        "options": {
            "A": "To free allocated memory when an object is destroyed.",
            "B": "To initialize member variables of a class.",
            "C": "To overload operators in a class.",
            "D": "To handle exceptions."
        },
        "correctAnswer": "A",
        "explanation": "Destructors in C++ are used to release resources and free memory when an object is destroyed."
    },
    {
        "question": "What will be the output of the following code?\n\n```cpp\nint a = 10;\na = a << 1;\ncout << a;\n```",
        "options": {
            "A": "5",
            "B": "20",
            "C": "15",
            "D": "Compiler Error"
        },
        "correctAnswer": "B",
        "explanation": "The left shift operator (`<<`) shifts bits to the left. Shifting 10 by one position results in 20."
    },
    {
        "question": "Which of the following keywords is used to handle exceptions in C++?",
        "options": {
            "A": "catch",
            "B": "throw",
            "C": "try",
            "D": "All of the above"
        },
        "correctAnswer": "D",
        "explanation": "In C++, exceptions are handled using `try`, `catch`, and `throw`."
    },
    {
        "question": "Which of the following is not a type of inheritance in C++?",
        "options": {
            "A": "Multiple inheritance",
            "B": "Single inheritance",
            "C": "Multilevel inheritance",
            "D": "Virtual inheritance"
        },
        "correctAnswer": "D",
        "explanation": "While C++ supports virtual base classes, virtual inheritance is not a type of inheritance but rather a feature used to solve ambiguity in multiple inheritance."
    },
    {
        "question": "Which of the following C++ standard library functions dynamically allocates memory?",
        "options": {
            "A": "malloc()",
            "B": "new",
            "C": "alloc()",
            "D": "Both A and B"
        },
        "correctAnswer": "D",
        "explanation": "Both `malloc()` and `new` can be used to allocate memory dynamically in C++."
    },
    {
        "question": "What is the use of the `this` pointer in C++?",
        "options": {
            "A": "To refer to the object that is currently calling the member function.",
            "B": "To refer to a base class in inheritance.",
            "C": "To pass parameters to a constructor.",
            "D": "To return multiple values from a function."
        },
        "correctAnswer": "A",
        "explanation": "The `this` pointer refers to the current object in C++."
    },
    {
        "question": "Which of the following defines a template class in C++?",
        "options": {
            "A": "template<class T> class MyClass {}",
            "B": "template<T> class MyClass {}",
            "C": "template<class> class MyClass {}",
            "D": "template<> class MyClass {}"
        },
        "correctAnswer": "A",
        "explanation": "`template<class T>` defines a template class in C++ where `T` can be replaced with any type."
    },
    {
        "question": "What is a `friend` function in C++?",
        "options": {
            "A": "A function that can access private and protected members of a class.",
            "B": "A function that can only be accessed by base classes.",
            "C": "A function that returns a class object.",
            "D": "A function that is invoked when an object is destroyed."
        },
        "correctAnswer": "A",
        "explanation": "A `friend` function has access to the private and protected members of the class in which it is declared as a friend."
    },
    {
        "question": "What is the size of a pointer in a 64-bit C++ program?",
        "options": {
            "A": "4 bytes",
            "B": "8 bytes",
            "C": "Depends on the type of pointer",
            "D": "None of the above"
        },
        "correctAnswer": "B",
        "explanation": "In a 64-bit system, pointers typically occupy 8 bytes of memory."
    },
    {
        "question": "Which of the following containers does not allow duplicate elements in C++?",
        "options": {
            "A": "vector",
            "B": "set",
            "C": "deque",
            "D": "multiset"
        },
        "correctAnswer": "B",
        "explanation": "The `set` container in C++ does not allow duplicate elements."
    },
    {
        "question": "What is the output of the following code?\n\n```cpp\nint x = 1;\ncout << (x & 1);\n```",
        "options": {
            "A": "0",
            "B": "1",
            "C": "Compiler Error",
            "D": "Undefined behavior"
        },
        "correctAnswer": "B",
        "explanation": "The bitwise AND (`&`) of `1` and `1` is `1`."
    },
    {
        "question": "What will be the output of the following code?\n\n```cpp\nint arr[5] = {1, 2, 3, 4, 5};\ncout << arr[0] << arr[4];\n```",
        "options": {
            "A": "15",
            "B": "5",
            "C": "11",
            "D": "Compiler Error"
        },
        "correctAnswer": "C",
        "explanation": "The code outputs `arr[0]` (1) and `arr[4]` (5) which concatenates to `15`."
    },
    {
        "question": "What is the purpose of the `#ifndef` directive in C++?",
        "options": {
            "A": "To check if a variable is defined",
            "B": "To include a header file only if it hasn’t been included before",
            "C": "To terminate a program if an error occurs",
            "D": "To define a constant"
        },
        "correctAnswer": "B",
        "explanation": "`#ifndef` is commonly used to prevent multiple inclusions of the same header file."
    },
    {
        "question": "Which keyword is used to prevent a class from being inherited?",
        "options": {
            "A": "sealed",
            "B": "private",
            "C": "final",
            "D": "static"
        },
        "correctAnswer": "C",
        "explanation": "The `final` keyword is used to prevent inheritance in C++."
    },
    {
        "question": "Which of the following is true about static member functions in C++?",
        "options": {
            "A": "They can access static and non-static members of a class.",
            "B": "They cannot access any members of a class.",
            "C": "They can only access static members of a class.",
            "D": "They can only be called using an object of the class."
        },
        "correctAnswer": "C",
        "explanation": "Static member functions can only access static data members or other static member functions."
    },
    {
        "question": "Which of the following is true about the `inline` keyword in C++?",
        "options": {
            "A": "It forces the compiler to make the function inline.",
            "B": "It is used to request the compiler to inline a function.",
            "C": "It can only be used for class member functions.",
            "D": "It guarantees faster execution of the function."
        },
        "correctAnswer": "B",
        "explanation": "The `inline` keyword is a request to the compiler to inline the function, but the compiler may ignore the request."
    },
    {
        "question": "What will be the output of the following code?\n\n```cpp\nint a = 10;\nint b = 20;\nswap(a, b);\ncout << a << b;\n```",
        "options": {
            "A": "1020",
            "B": "2010",
            "C": "Compiler Error",
            "D": "Undefined behavior"
        },
        "correctAnswer": "C",
        "explanation": "`swap` is not a built-in function in C++ unless `std::swap` is used. The code will cause a compiler error."
    },
    {
        "question": "Which of the following is the correct way to define a pure virtual function in C++?",
        "options": {
            "A": "virtual void func() = 0;",
            "B": "virtual void func();",
            "C": "void virtual func() = 0;",
            "D": "void func() override = 0;"
        },
        "correctAnswer": "A",
        "explanation": "In C++, a pure virtual function is declared by assigning `= 0` in the declaration."
    },
    {
        "question": "Which of the following is true about namespaces in C++?",
        "options": {
            "A": "Namespaces define a scope for identifiers to avoid name conflicts.",
            "B": "Namespaces can be nested inside functions.",
            "C": "Namespace names must be unique in the global scope.",
            "D": "Namespaces are deprecated in C++."
        },
        "correctAnswer": "A",
        "explanation": "Namespaces are used to avoid name conflicts in C++, especially when using large libraries."
    },
    {
        "question": "What is the output of the following code?\n\n```cpp\nint x = 0, y = 10;\nwhile (x < y)\n    cout << x++ << \" \";\n```",
        "options": {
            "A": "0 1 2 3 4 5 6 7 8 9",
            "B": "1 2 3 4 5 6 7 8 9 10",
            "C": "0 1 2 3 4 5 6 7 8 9 10",
            "D": "Compiler Error"
        },
        "correctAnswer": "A",
        "explanation": "The loop increments `x` after printing, resulting in the output from 0 to 9."
    },
    {
        "question": "Which of the following statements about C++ destructors is correct?",
        "options": {
            "A": "A class can have multiple destructors.",
            "B": "Destructors cannot be overloaded.",
            "C": "Destructors are called explicitly by the programmer.",
            "D": "A destructor can take arguments."
        },
        "correctAnswer": "B",
        "explanation": "Destructors in C++ cannot be overloaded and are called automatically when an object goes out of scope."
    },
    {
        "question": "Which of the following data types can store the largest value?",
        "options": {
            "A": "int",
            "B": "long",
            "C": "long long",
            "D": "float"
        },
        "correctAnswer": "C",
        "explanation": "`long long` can store larger values than `int`, `long`, and `float` because it typically uses more memory."
    },
    {
        "question": "What is the main difference between deep copy and shallow copy in C++?",
        "options": {
            "A": "Shallow copy duplicates only non-pointer members.",
            "B": "Deep copy duplicates pointer members as well as non-pointer members.",
            "C": "Shallow copy can lead to memory leaks.",
            "D": "Deep copy is faster than shallow copy."
        },
        "correctAnswer": "B",
        "explanation": "Deep copy duplicates both pointer and non-pointer members, while shallow copy only copies the pointer address."
    },
    {
        "question": "Which of the following is the correct syntax for defining a constructor with an initialization list in C++?",
        "options": {
            "A": "MyClass(int a, int b) { a = a; b = b; }",
            "B": "MyClass(int a, int b) : a(a), b(b) {}",
            "C": "MyClass(int a, int b) = { a, b };",
            "D": "MyClass(int a, int b) => a, b {}"
        },
        "correctAnswer": "B",
        "explanation": "An initialization list in C++ is used to initialize members before the constructor body is executed."
    },
    {
        "question": "What is the result of the following code?\n\n```cpp\nint arr[3] = {1, 2, 3};\nint *ptr = arr;\ncout << *(ptr + 1);\n```",
        "options": {
            "A": "1",
            "B": "2",
            "C": "3",
            "D": "Compiler Error"
        },
        "correctAnswer": "B",
        "explanation": "The pointer `ptr` points to the first element, and `*(ptr + 1)` gives the value at the second position in the array, which is 2."
    },
    {
        "question": "What is the output of the following code?\n\n```cpp\nint i = 5;\nint *p = &i;\ncout << *p;\n```",
        "options": {
            "A": "i",
            "B": "5",
            "C": "&i",
            "D": "None of the above"
        },
        "correctAnswer": "B",
        "explanation": "`*p` dereferences the pointer `p`, giving the value of the variable `i`, which is 5."
    },
    {
        "question": "Which of the following operators is overloaded in C++ for object comparison by default?",
        "options": {
            "A": "==",
            "B": "!=",
            "C": ">",
            "D": "None"
        },
        "correctAnswer": "D",
        "explanation": "In C++, comparison operators are not overloaded by default and must be overloaded explicitly for user-defined types."
    },
    {
        "question": "Which of the following is true about abstract classes in C++?",
        "options": {
            "A": "They cannot have member variables.",
            "B": "They must have at least one pure virtual function.",
            "C": "They can be instantiated directly.",
            "D": "They cannot have constructors."
        },
        "correctAnswer": "B",
        "explanation": "An abstract class in C++ must have at least one pure virtual function and cannot be instantiated directly."
    },
    {
        "question": "Which of the following correctly creates a pointer to a constant integer in C++?",
        "options": {
            "A": "int *const p;",
            "B": "const int *p;",
            "C": "int const *p;",
            "D": "Both B and C"
        },
        "correctAnswer": "D",
        "explanation": "`const int *p` and `int const *p` are both valid ways to declare a pointer to a constant integer."
    },
    {
        "question": "What will happen if a C++ program attempts to divide by zero using integers?",
        "options": {
            "A": "The program will output infinity.",
            "B": "The program will crash.",
            "C": "The behavior is undefined.",
            "D": "The compiler will throw an error."
        },
        "correctAnswer": "C",
        "explanation": "In C++, integer division by zero results in undefined behavior."
    },
    {
        "question": "Which of the following statements about exceptions in C++ is false?",
        "options": {
            "A": "You can throw any type of object as an exception.",
            "B": "If no catch block matches a thrown exception, the program terminates.",
            "C": "You can throw exceptions of basic data types like `int` or `char`.",
            "D": "A thrown exception must be caught by reference."
        },
        "correctAnswer": "D",
        "explanation": "In C++, exceptions can be caught by value, pointer, or reference, though catching by reference is often preferred."
    },
    {
        "question": "What will be the output of the following code?\n\n```cpp\nint a = 1;\na = a & 2;\ncout << a;\n```",
        "options": {
            "A": "1",
            "B": "2",
            "C": "0",
            "D": "3"
        },
        "correctAnswer": "C",
        "explanation": "`a & 2` performs a bitwise AND operation between `a` and 2, which results in 0."
    },
    {
        "question": "Which of the following correctly overloads the `<<` operator in C++ for a custom class?",
        "options": {
            "A": "friend ostream& operator<<(ostream&, MyClass&);",
            "B": "ostream& operator<<(MyClass&);",
            "C": "friend operator<<();",
            "D": "void operator<<(ostream&, MyClass&);"
        },
        "correctAnswer": "A",
        "explanation": "The correct way to overload `<<` is by using a friend function that returns an `ostream&`."
    },
    {
        "question": "Which of the following is a correct way to prevent memory leaks in C++ when using dynamic memory allocation?",
        "options": {
            "A": "Using `new` instead of `malloc()`",
            "B": "Always using `delete` after `new`",
            "C": "Using smart pointers like `std::unique_ptr` or `std::shared_ptr`",
            "D": "Both B and C"
        },
        "correctAnswer": "D",
        "explanation": "Always using `delete` after `new` and utilizing smart pointers are both methods to prevent memory leaks in C++."
    },
    {
        "question": "Which of the following is NOT a feature of polymorphism in C++?",
        "options": {
            "A": "Function overloading",
            "B": "Function overriding",
            "C": "Virtual functions",
            "D": "Encapsulation"
        },
        "correctAnswer": "D",
        "explanation": "Encapsulation is not directly related to polymorphism, which is more concerned with function overloading, function overriding, and virtual functions."
    },
    {
        "question": "Which of the following is true about the `const` keyword in C++?",
        "options": {
            "A": "A `const` object can be modified through a pointer.",
            "B": "`const` can be used to define constants and immutable data members.",
            "C": "`const` only applies to pointers, not variables.",
            "D": "`const` objects can be modified within the same class."
        },
        "correctAnswer": "B",
        "explanation": "The `const` keyword is used to define constant or immutable variables and members in C++."
    }
];
