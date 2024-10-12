export const CssintermediateQD4 = [
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
    },
    {
        "question": "Which of the following CSS properties is used to control the size of an element's font?",
        "options": {
            "A": "font-size",
            "B": "text-size",
            "C": "size",
            "D": "font-style"
        },
        "correctAnswer": "A",
        "explanation": "The `font-size` property is used to set the size of the font for an element."
    },
    {
        "question": "What does the `display: flex;` property do?",
        "options": {
            "A": "Creates a block-level flex container",
            "B": "Creates an inline-level flex container",
            "C": "Sets the item to behave like a flex item",
            "D": "Both A and B"
        },
        "correctAnswer": "D",
        "explanation": "`display: flex;` creates a flex container, which can be either block-level or inline-level based on the context."
    },
    {
        "question": "How do you make a list in CSS display horizontally?",
        "options": {
            "A": "list-style: horizontal;",
            "B": "display: inline;",
            "C": "display: flex;",
            "D": "list-style-type: none;"
        },
        "correctAnswer": "C",
        "explanation": "Setting `display: flex;` on the list element allows the list items to be displayed in a horizontal row."
    },
    {
        "question": "Which property is used to control the space between lines of text?",
        "options": {
            "A": "line-height",
            "B": "spacing",
            "C": "letter-spacing",
            "D": "text-spacing"
        },
        "correctAnswer": "A",
        "explanation": "The `line-height` property specifies the height of a line box, effectively controlling the space between lines of text."
    },
    {
        "question": "What is the effect of setting `overflow: hidden;` on an element?",
        "options": {
            "A": "It hides the element completely",
            "B": "It hides overflow content that exceeds the element's box",
            "C": "It prevents text wrapping",
            "D": "It disables pointer events on the element"
        },
        "correctAnswer": "B",
        "explanation": "`overflow: hidden;` hides any content that exceeds the element's dimensions."
    },
    {
        "question": "Which of the following CSS properties controls the visibility of an element?",
        "options": {
            "A": "display",
            "B": "visibility",
            "C": "opacity",
            "D": "all of the above"
        },
        "correctAnswer": "D",
        "explanation": "All these properties can control the visibility of an element in different ways."
    },
    {
        "question": "What is the default value of the `position` property?",
        "options": {
            "A": "relative",
            "B": "absolute",
            "C": "fixed",
            "D": "static"
        },
        "correctAnswer": "D",
        "explanation": "The default value of the `position` property is `static`, meaning elements are positioned according to the normal document flow."
    },
    {
        "question": "Which of the following is a valid CSS pseudo-element?",
        "options": {
            "A": "::after",
            "B": ":first-line",
            "C": "::before",
            "D": "All of the above"
        },
        "correctAnswer": "D",
        "explanation": "All options listed are valid CSS pseudo-elements used to style specific parts of an element."
    },
    {
        "question": "How do you select all `<p>` elements inside a `<div>` with class `.container`?",
        "options": {
            "A": ".container p",
            "B": "div.container p",
            "C": "div > p.container",
            "D": "p.container"
        },
        "correctAnswer": "A",
        "explanation": ".container p selects all `<p>` elements that are descendants of `<div>` elements with the class `container`."
    },
    {
        "question": "Which of the following values can be assigned to the `position` property?",
        "options": {
            "A": "relative",
            "B": "absolute",
            "C": "sticky",
            "D": "All of the above"
        },
        "correctAnswer": "D",
        "explanation": "All listed options (`relative`, `absolute`, `sticky`) are valid values for the `position` property."
    },
    {
        "question": "What is the function of the `:hover` pseudo-class?",
        "options": {
            "A": "It styles an element when it is clicked",
            "B": "It styles an element when it is focused",
            "C": "It styles an element when the mouse hovers over it",
            "D": "It styles an element when it is active"
        },
        "correctAnswer": "C",
        "explanation": ":hover is used to apply styles to an element when the user hovers their mouse over it."
    },
    {
        "question": "Which CSS property controls the opacity of an element?",
        "options": {
            "A": "opacity",
            "B": "transparency",
            "C": "visibility",
            "D": "filter"
        },
        "correctAnswer": "A",
        "explanation": "The `opacity` property sets the transparency level of an element, where 1 is fully opaque and 0 is fully transparent."
    },
    {
        "question": "What does the `flex-direction` property do in a flex container?",
        "options": {
            "A": "It defines the direction in which flex items are placed in the flex container",
            "B": "It aligns flex items along the cross axis",
            "C": "It sets the size of the flex items",
            "D": "It adjusts the gap between flex items"
        },
        "correctAnswer": "A",
        "explanation": "`flex-direction` specifies the direction in which flex items are laid out within the flex container (e.g., row or column)."
    },
    {
        "question": "Which property is used to create a gradient background?",
        "options": {
            "A": "background-gradient",
            "B": "background-image",
            "C": "gradient-background",
            "D": "linear-gradient"
        },
        "correctAnswer": "B",
        "explanation": "The `background-image` property is used to create a gradient background using `linear-gradient` or `radial-gradient` functions."
    },
    {
        "question": "Which of the following values can be used for the `display` property?",
        "options": {
            "A": "block",
            "B": "inline",
            "C": "grid",
            "D": "All of the above"
        },
        "correctAnswer": "D",
        "explanation": "All the provided options (`block`, `inline`, `grid`) are valid values for the `display` property."
    },
    {
        "question": "What does the `align-items` property do in a flex container?",
        "options": {
            "A": "It aligns flex items along the main axis",
            "B": "It aligns flex items along the cross axis",
            "C": "It sets the size of flex items",
            "D": "It adjusts the gap between flex items"
        },
        "correctAnswer": "B",
        "explanation": "`align-items` is used to align flex items along the cross axis of the flex container."
    },
    {
        "question": "How do you create a CSS grid layout?",
        "options": {
            "A": "display: grid;",
            "B": "display: flex;",
            "C": "display: block;",
            "D": "display: inline;"
        },
        "correctAnswer": "A",
        "explanation": "To create a CSS grid layout, you use `display: grid;` on the container element."
    },
    {
        "question": "Which of the following properties can be used to create spacing between grid items?",
        "options": {
            "A": "gap",
            "B": "grid-gap",
            "C": "margin",
            "D": "padding"
        },
        "correctAnswer": "A",
        "explanation": "The `gap` property (previously `grid-gap`) is used to define spacing between grid items."
    }
];
