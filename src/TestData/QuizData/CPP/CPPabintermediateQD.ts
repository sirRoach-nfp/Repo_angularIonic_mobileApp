export const CppabintermediateQD3 = [
    {
        "question": "What will be the output of the following code?\n\n```cpp\nint x = 5, y = 10;\nx = x + y - (y = x);\ncout << x;\n```",
        "options": {
            "A": "0",
            "B": "5",
            "C": "10",
            "D": "15"
        },
        "correctAnswer": "D",
        "explanation": "The expression swaps the values of `x` and `y`, and then calculates the sum, resulting in `x = 15`."
    },
    {
        "question": "What is the difference between `new` and `malloc()` in C++?",
        "options": {
            "A": "`new` returns a pointer, `malloc` returns a reference",
            "B": "`new` calls constructors, `malloc` does not",
            "C": "`new` is faster than `malloc`",
            "D": "`new` allocates memory from the stack, `malloc` allocates from the heap"
        },
        "correctAnswer": "B",
        "explanation": "`new` invokes constructors, while `malloc()` simply allocates memory without calling constructors."
    },
    {
        "question": "Which of the following is a correct declaration of a pointer to a pointer?",
        "options": {
            "A": "int *ptr;",
            "B": "int **ptr;",
            "C": "int ***ptr;",
            "D": "int &ptr;"
        },
        "correctAnswer": "B",
        "explanation": "A pointer to a pointer is declared with two asterisks, as in `int **ptr`."
    },
    {
        "question": "What is the role of the `std::move()` function in C++?",
        "options": {
            "A": "It copies the object to a new memory location",
            "B": "It allows transferring ownership of resources",
            "C": "It deletes the original object",
            "D": "It creates a shallow copy"
        },
        "correctAnswer": "B",
        "explanation": "`std::move()` transfers ownership of resources from one object to another, enabling efficient resource management."
    },
    {
        "question": "Which of the following correctly uses a template function in C++?",
        "options": {
            "A": "template<typename T> T add(T a, T b) { return a + b; }",
            "B": "template<class T> T add(T a, T b) { return a + b; }",
            "C": "Both A and B",
            "D": "None of the above"
        },
        "correctAnswer": "C",
        "explanation": "Both `template<typename T>` and `template<class T>` are valid syntaxes for template functions in C++."
    },
    {
        "question": "Which of the following operations is not allowed for a `std::unique_ptr`?",
        "options": {
            "A": "Dereferencing the pointer",
            "B": "Copying the pointer",
            "C": "Resetting the pointer",
            "D": "Releasing ownership of the pointer"
        },
        "correctAnswer": "B",
        "explanation": "A `std::unique_ptr` cannot be copied, as it maintains unique ownership of the resource."
    },
    {
        "question": "What is the main benefit of using `emplace_back()` over `push_back()` in a C++ vector?",
        "options": {
            "A": "`emplace_back()` is faster for large objects",
            "B": "`push_back()` can only be used with integers",
            "C": "`emplace_back()` constructs the object in place",
            "D": "`push_back()` is deprecated in modern C++"
        },
        "correctAnswer": "C",
        "explanation": "`emplace_back()` constructs the object directly in the vector, avoiding unnecessary copies."
    },
    {
        "question": "What is the correct way to prevent a class from being inherited in C++?",
        "options": {
            "A": "Declaring the class final",
            "B": "Declaring the class abstract",
            "C": "Declaring the class private",
            "D": "Declaring all methods private"
        },
        "correctAnswer": "A",
        "explanation": "Marking a class `final` prevents it from being inherited."
    },
    {
        "question": "What does the keyword `volatile` signify in C++?",
        "options": {
            "A": "The variable can be optimized by the compiler",
            "B": "The variable can change unexpectedly",
            "C": "The variable is a constant",
            "D": "The variable is thread-safe"
        },
        "correctAnswer": "B",
        "explanation": "`volatile` informs the compiler that the variable may be changed unexpectedly, often by hardware or another thread."
    },
    {
        "question": "What is the main purpose of the `std::forward()` function in C++?",
        "options": {
            "A": "It transfers ownership of a resource",
            "B": "It ensures perfect forwarding of arguments",
            "C": "It performs deep copying of objects",
            "D": "It ensures memory safety during forwarding"
        },
        "correctAnswer": "B",
        "explanation": "`std::forward()` is used to achieve perfect forwarding in templates, passing arguments as lvalues or rvalues as needed."
    },
    {
        "question": "Which of the following is true about `std::shared_ptr`?",
        "options": {
            "A": "It ensures only one pointer owns the object",
            "B": "It uses reference counting to manage the object",
            "C": "It does not automatically delete the object",
            "D": "It cannot be passed between functions"
        },
        "correctAnswer": "B",
        "explanation": "`std::shared_ptr` uses reference counting to manage shared ownership of an object."
    },
    {
        "question": "Which of the following statements about `std::vector` is false?",
        "options": {
            "A": "A `std::vector` is dynamically resizable",
            "B": "`std::vector` stores elements contiguously",
            "C": "`std::vector::size()` returns the number of allocated elements",
            "D": "Elements can be accessed using the `[]` operator"
        },
        "correctAnswer": "C",
        "explanation": "`std::vector::size()` returns the number of elements stored, not the number of allocated elements."
    },
    {
        "question": "What will happen if a virtual function is called inside a constructor?",
        "options": {
            "A": "The most derived version of the function is called",
            "B": "The base class version of the function is called",
            "C": "It causes undefined behavior",
            "D": "The function call will be ignored"
        },
        "correctAnswer": "B",
        "explanation": "Virtual functions called inside constructors will call the base class version because the object is not fully constructed."
    },
    {
        "question": "What does the `explicit` keyword do when used with a constructor?",
        "options": {
            "A": "It prevents implicit type conversion",
            "B": "It allows implicit type conversion",
            "C": "It makes the constructor a default constructor",
            "D": "It makes the constructor a copy constructor"
        },
        "correctAnswer": "A",
        "explanation": "`explicit` prevents the constructor from being used for implicit type conversions."
    },
    {
        "question": "Which of the following is the correct syntax for a lambda expression in C++?",
        "options": {
            "A": "`[]() {}`",
            "B": "`[=]() -> int {}`",
            "C": "`[&]() { return 0; }`",
            "D": "All of the above"
        },
        "correctAnswer": "D",
        "explanation": "All options represent valid C++ lambda expressions with different capture modes."
    },
    {
        "question": "What is the difference between `std::list` and `std::vector`?",
        "options": {
            "A": "`std::list` uses contiguous memory, `std::vector` does not",
            "B": "`std::vector` supports random access, `std::list` does not",
            "C": "`std::list` can only store unique elements",
            "D": "`std::vector` allows insertion in the middle of the container"
        },
        "correctAnswer": "B",
        "explanation": "`std::vector` supports random access via the `[]` operator, while `std::list` does not."
    },
    {
        "question": "Which of the following is a feature of `std::tuple` in C++?",
        "options": {
            "A": "It stores elements of the same type",
            "B": "It supports more than two elements",
            "C": "It can be iterated over with a for loop",
            "D": "It does not support access by index"
        },
        "correctAnswer": "B",
        "explanation": "`std::tuple` can store multiple elements of potentially different types, and it supports more than two elements."
    },
    {
        "question": "Which of the following will correctly catch an exception in C++?",
        "options": {
            "A": "catch (Exception e) { ... }",
            "B": "catch (...) { ... }",
            "C": "catch (int err) { ... }",
            "D": "Both B and C"
        },
        "correctAnswer": "D",
        "explanation": "`catch (...)` is a catch-all handler, while `catch(int)` catches exceptions of type `int`."
    },
    {
        "question": "Which of the following is NOT a valid use of C++11 features?",
        "options": {
            "A": "Declaring a `nullptr` instead of NULL",
            "B": "Using `auto` for type inference",
            "C": "Using `override` to indicate function overriding",
            "D": "Using `virtual` to declare member variables"
        },
        "correctAnswer": "D",
        "explanation": "`virtual` can only be used to declare member functions, not member variables."
    },
    {
        "question": "Which of the following is true about rvalue references in C++?",
        "options": {
            "A": "They allow for resource stealing",
            "B": "They can bind to temporary objects",
            "C": "They can only bind to modifiable lvalues",
            "D": "Both A and B"
        },
        "correctAnswer": "D",
        "explanation": "Rvalue references can bind to temporary objects and allow for efficient resource transfer (resource stealing)."
    },
    {
        "question": "Which of the following is not an STL container?",
        "options": {
            "A": "std::array",
            "B": "std::map",
            "C": "std::list",
            "D": "std::pointer"
        },
        "correctAnswer": "D",
        "explanation": "`std::pointer` is not an STL container. `std::array`, `std::map`, and `std::list` are all valid STL containers."
    },
    {
        "question": "What is the result of the following code?\n\n```cpp\nint x = 10, y = 5;\nif (x-- > 10 && ++y < 5) {}\ncout << x << ' ' << y;\n```",
        "options": {
            "A": "9 5",
            "B": "9 6",
            "C": "10 5",
            "D": "10 6"
        },
        "correctAnswer": "A",
        "explanation": "The post-decrement `x--` occurs after the comparison, and `&&` short-circuits the condition, so `y` is not incremented."
    },
    {
        "question": "What is the difference between deep copy and shallow copy in C++?",
        "options": {
            "A": "Shallow copy duplicates object references, deep copy duplicates the actual objects",
            "B": "Deep copy is faster than shallow copy",
            "C": "Shallow copy copies private members, deep copy does not",
            "D": "Both perform the same copy operation"
        },
        "correctAnswer": "A",
        "explanation": "A shallow copy only copies references to objects, while a deep copy duplicates the actual objects."
    },
    {
        "question": "Which of the following C++11 features is used to allow functions to return multiple values?",
        "options": {
            "A": "`std::tuple`",
            "B": "`std::pair`",
            "C": "`std::vector`",
            "D": "`std::map`"
        },
        "correctAnswer": "A",
        "explanation": "`std::tuple` can hold multiple values of different types and is useful for returning multiple values from a function."
    },
    {
        "question": "Which of the following is true about constexpr functions?",
        "options": {
            "A": "They are evaluated at runtime",
            "B": "They must have a `return` statement",
            "C": "They can only take literal values as arguments",
            "D": "They cannot have loops"
        },
        "correctAnswer": "B",
        "explanation": "A `constexpr` function must have a `return` statement, and it may be evaluated at compile time if the inputs are constants."
    },
    {
        "question": "What is the purpose of the `noexcept` specifier in C++?",
        "options": {
            "A": "It prevents the function from being called",
            "B": "It guarantees that the function will not throw exceptions",
            "C": "It catches all exceptions thrown by a function",
            "D": "It makes the function throw exceptions"
        },
        "correctAnswer": "B",
        "explanation": "`noexcept` is used to declare that a function does not throw exceptions, which can optimize code."
    },
    {
        "question": "Which of the following correctly demonstrates the use of `std::bind()`?",
        "options": {
            "A": "`std::bind(add, 10, 20)`",
            "B": "`std::bind(add, std::placeholders::_1, 20)`",
            "C": "`std::bind(add)`",
            "D": "`std::bind(&add, _1, _2)`"
        },
        "correctAnswer": "B",
        "explanation": "`std::bind()` creates a function object by binding arguments to a function, and placeholders represent the parameters."
    },
    {
        "question": "What will be the output of the following code?\n\n```cpp\nstd::string s = \"hello\";\ncout << s.capacity() << endl;\ns.reserve(50);\ncout << s.capacity();\n```",
        "options": {
            "A": "5 5",
            "B": "5 50",
            "C": "50 50",
            "D": "50 5"
        },
        "correctAnswer": "B",
        "explanation": "`reserve()` changes the capacity of the string without altering its size, so the capacity is updated to 50."
    },
    {
        "question": "Which of the following statements is correct about a `std::set`?",
        "options": {
            "A": "It allows duplicate elements",
            "B": "It maintains elements in sorted order",
            "C": "It allows random access using `[]`",
            "D": "It is not part of the STL"
        },
        "correctAnswer": "B",
        "explanation": "A `std::set` maintains its elements in sorted order and does not allow duplicates."
    },
    {
        "question": "Which of the following is the correct way to declare a move constructor in C++?",
        "options": {
            "A": "ClassName(ClassName &obj);",
            "B": "ClassName(ClassName &&obj);",
            "C": "ClassName(const ClassName &obj);",
            "D": "ClassName(ClassName obj);"
        },
        "correctAnswer": "B",
        "explanation": "A move constructor takes an rvalue reference as its parameter, which is denoted by `&&`."
    },
    {
        "question": "What is the role of the `this` pointer in C++?",
        "options": {
            "A": "It points to the current object",
            "B": "It points to the parent class",
            "C": "It points to the first function in the class",
            "D": "It points to the return value of the function"
        },
        "correctAnswer": "A",
        "explanation": "The `this` pointer in C++ is a hidden pointer passed to all non-static member functions, pointing to the object itself."
    },
    {
        "question": "Which of the following correctly defines a range-based for loop in C++11?",
        "options": {
            "A": "for (auto i = vec.begin(); i != vec.end(); ++i) {}",
            "B": "for (int i : vec) {}",
            "C": "for (auto &i : vec) {}",
            "D": "Both B and C"
        },
        "correctAnswer": "D",
        "explanation": "Both B and C are correct range-based for loop syntaxes in C++11, the first using value and the second using reference."
    },
    {
        "question": "What is the output of the following code?\n\n```cpp\nint arr[] = {10, 20, 30};\ncout << *(arr + 1);\n```",
        "options": {
            "A": "10",
            "B": "20",
            "C": "30",
            "D": "40"
        },
        "correctAnswer": "B",
        "explanation": "`*(arr + 1)` accesses the second element of the array `arr`, which is `20`."
    },
    {
        "question": "What is the correct syntax to define a pure virtual function in C++?",
        "options": {
            "A": "virtual void func() = 0;",
            "B": "void func();",
            "C": "virtual void func() const;",
            "D": "void func() = 0;"
        },
        "correctAnswer": "A",
        "explanation": "A pure virtual function is defined using `= 0` at the end of its declaration in the base class."
    },
    {
        "question": "What is the result of the following code?\n\n```cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10;\n    const int* p = &x;\n    *p = 20;\n    cout << x;\n}\n```",
        "options": {
            "A": "20",
            "B": "10",
            "C": "Compilation error",
            "D": "Undefined behavior"
        },
        "correctAnswer": "C",
        "explanation": "You cannot modify the value pointed to by a `const int*` pointer, which will result in a compilation error."
    },
    {
        "question": "What is the purpose of the `dynamic_cast` operator in C++?",
        "options": {
            "A": "To cast between unrelated types",
            "B": "To perform type-safe downcasting",
            "C": "To cast between integer and pointer types",
            "D": "To perform implicit type conversions"
        },
        "correctAnswer": "B",
        "explanation": "`dynamic_cast` is used to safely downcast a pointer or reference within an inheritance hierarchy."
    },
    {
        "question": "What will be the output of the following code?\n\n```cpp\nint x = 5;\ncout << ++x * ++x;\n```",
        "options": {
            "A": "25",
            "B": "36",
            "C": "30",
            "D": "20"
        },
        "correctAnswer": "B",
        "explanation": "`++x` increments `x` twice before the multiplication, so `x` becomes `6` and `6 * 6 = 36`."
    },
    {
        "question": "Which of the following is true for a `std::map` in C++?",
        "options": {
            "A": "It allows duplicate keys",
            "B": "It is implemented as a hash table",
            "C": "It stores keys in sorted order",
            "D": "It allows random access to elements"
        },
        "correctAnswer": "C",
        "explanation": "`std::map` stores keys in sorted order and does not allow duplicate keys. It is typically implemented as a balanced binary tree."
    },
    {
        "question": "Which of the following best describes RAII (Resource Acquisition Is Initialization)?",
        "options": {
            "A": "It ensures that resources are acquired before constructors are called",
            "B": "It ensures resource deallocation when an object goes out of scope",
            "C": "It guarantees memory safety in multi-threaded programs",
            "D": "It forces the programmer to manually release all resources"
        },
        "correctAnswer": "B",
        "explanation": "RAII ensures that resources are automatically released when an object goes out of scope, promoting safe resource management."
    },
    {
        "question": "Which of the following statements is true about multiple inheritance in C++?",
        "options": {
            "A": "It is not allowed in C++",
            "B": "It is allowed but leads to ambiguities",
            "C": "It is only allowed if all base classes have virtual destructors",
            "D": "It can be used only with abstract classes"
        },
        "correctAnswer": "B",
        "explanation": "Multiple inheritance is allowed in C++, but it can lead to ambiguities, which can be resolved using virtual inheritance."
    },
    {
        "question": "What is the purpose of `std::move()` in C++?",
        "options": {
            "A": "To create a deep copy of an object",
            "B": "To cast an lvalue to an rvalue",
            "C": "To perform type-safe conversions",
            "D": "To move an object to a new memory location"
        },
        "correctAnswer": "B",
        "explanation": "`std::move()` is used to cast an lvalue to an rvalue, enabling efficient transfer of resources."
    }
];
