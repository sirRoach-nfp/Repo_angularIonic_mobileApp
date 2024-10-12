export const jsintermediateQD = [
    {
        "question": "What will be the output of `console.log(typeof null)`?",
        "options": {
            "A": "null",
            "B": "undefined",
            "C": "object",
            "D": "number"
        },
        "correctAnswer": "C",
        "explanation": "In JavaScript, `typeof null` returns 'object' due to a bug in the original implementation."
    },
    {
        "question": "Which of the following methods is used to convert a JSON string into a JavaScript object?",
        "options": {
            "A": "JSON.stringify()",
            "B": "JSON.parse()",
            "C": "JSON.object()",
            "D": "JSON.convert()"
        },
        "correctAnswer": "B",
        "explanation": "The `JSON.parse()` method is used to convert a JSON string into a JavaScript object."
    },
    {
        "question": "What is the result of `[1] == true`?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "undefined",
            "D": "TypeError"
        },
        "correctAnswer": "A",
        "explanation": "In JavaScript, the array `[1]` is coerced to the number `1`, which is equal to `true`."
    },
    {
        "question": "What will be the output of `console.log(1 + '2' + '3')`?",
        "options": {
            "A": "6",
            "B": "123",
            "C": "33",
            "D": "NaN"
        },
        "correctAnswer": "B",
        "explanation": "The `+` operator concatenates the strings, resulting in '123'."
    },
    {
        "question": "What will be the output of `console.log(!!'')`?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "undefined",
            "D": "TypeError"
        },
        "correctAnswer": "B",
        "explanation": "An empty string is falsy, so `!!''` evaluates to `false`."
    },
    {
        "question": "What does the `bind()` method do in JavaScript?",
        "options": {
            "A": "Creates a new function that, when called, has its `this` keyword set to the provided value.",
            "B": "Creates a new function with the same name.",
            "C": "Binds variables to the current scope.",
            "D": "None of the above."
        },
        "correctAnswer": "A",
        "explanation": "The `bind()` method creates a new function that, when called, has its `this` keyword set to the provided value."
    },
    {
        "question": "Which statement is true about closures in JavaScript?",
        "options": {
            "A": "Closures can access variables from their outer function even after the outer function has executed.",
            "B": "Closures cannot access variables from their outer function.",
            "C": "Closures are only created in global scope.",
            "D": "None of the above."
        },
        "correctAnswer": "A",
        "explanation": "Closures retain access to their outer function's variables even after the outer function has finished executing."
    },
    {
        "question": "What is the purpose of the `this` keyword in JavaScript?",
        "options": {
            "A": "To refer to the global object.",
            "B": "To refer to the calling object.",
            "C": "To refer to the function's prototype.",
            "D": "To create a new object."
        },
        "correctAnswer": "B",
        "explanation": "`this` refers to the object that is executing the current function."
    },
    {
        "question": "What will be the output of `console.log(0.1 + 0.2 === 0.3)`?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "undefined",
            "D": "TypeError"
        },
        "correctAnswer": "B",
        "explanation": "Due to floating-point precision issues, `0.1 + 0.2` does not equal `0.3`."
    },
    {
        "question": "Which of the following is a way to create a new object in JavaScript?",
        "options": {
            "A": "Using `new Object()`",
            "B": "Using object literal `{}`",
            "C": "Using `Object.create()`",
            "D": "All of the above"
        },
        "correctAnswer": "D",
        "explanation": "All listed methods can be used to create new objects in JavaScript."
    },
    {
        "question": "What is the output of the following code? `console.log(typeof NaN)`?",
        "options": {
            "A": "number",
            "B": "NaN",
            "C": "undefined",
            "D": "object"
        },
        "correctAnswer": "A",
        "explanation": "The type of NaN is `number`."
    },
    {
        "question": "What will be the result of `console.log([2] == [2])`?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "undefined",
            "D": "TypeError"
        },
        "correctAnswer": "B",
        "explanation": "Comparing two arrays with `==` checks for reference equality, which is why it evaluates to `false`."
    },
    {
        "question": "What does the `setTimeout` function do?",
        "options": {
            "A": "Executes a function after a specified number of milliseconds.",
            "B": "Executes a function immediately.",
            "C": "Creates a delay in the program execution.",
            "D": "Sets a timer for the entire script."
        },
        "correctAnswer": "A",
        "explanation": "The `setTimeout` function executes a function after a specified delay in milliseconds."
    },
    {
        "question": "What is the purpose of the `let` keyword?",
        "options": {
            "A": "To declare a variable that can be redeclared.",
            "B": "To declare a block-scoped variable.",
            "C": "To declare a constant variable.",
            "D": "To declare a variable with global scope."
        },
        "correctAnswer": "B",
        "explanation": "`let` declares a block-scoped variable, which is limited to the block in which it is defined."
    },
    {
        "question": "What will the following code output? `console.log([1, 2] + [3, 4])`?",
        "options": {
            "A": "1, 2, 3, 4",
            "B": "1,2,3,4",
            "C": "NaN",
            "D": "Error"
        },
        "correctAnswer": "B",
        "explanation": "Using the `+` operator on arrays converts them to strings, resulting in '1,23,4'."
    },
    {
        "question": "Which of the following methods can be used to remove an element from an array?",
        "options": {
            "A": "pop()",
            "B": "shift()",
            "C": "splice()",
            "D": "All of the above"
        },
        "correctAnswer": "D",
        "explanation": "All listed methods can remove elements from an array."
    },
    {
        "question": "What will be the output of `console.log(typeof [] === 'object')`?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "undefined",
            "D": "TypeError"
        },
        "correctAnswer": "A",
        "explanation": "In JavaScript, arrays are a type of object, so `typeof []` returns 'object'."
    },
    {
        "question": "What is the difference between `==` and `===` in JavaScript?",
        "options": {
            "A": "`==` checks for equality of value, while `===` checks for equality of value and type.",
            "B": "`==` checks for equality of type, while `===` checks for equality of value.",
            "C": "There is no difference.",
            "D": "`==` is used for objects, while `===` is used for primitives."
        },
        "correctAnswer": "A",
        "explanation": "`==` performs type coercion, while `===` checks for strict equality without type conversion."
    },
    {
        "question": "What will be the output of `console.log(1 + '1' - 1)`?",
        "options": {
            "A": "11",
            "B": "10",
            "C": "1",
            "D": "NaN"
        },
        "correctAnswer": "B",
        "explanation": "The expression evaluates to 10 due to type coercion: `1 + '1'` gives '11', and then '11' - 1 equals 10."
    },
    {
        "question": "Which of the following is not a falsy value in JavaScript?",
        "options": {
            "A": "0",
            "B": "NaN",
            "C": "'' (empty string)",
            "D": "'false'"
        },
        "correctAnswer": "D",
        "explanation": "'false' (as a string) is truthy. Other options are falsy values."
    },
    {
        "question": "What does the `map()` method do?",
        "options": {
            "A": "Iterates over each element and applies a function.",
            "B": "Filters elements based on a condition.",
            "C": "Reduces an array to a single value.",
            "D": "Reverses the order of elements in an array."
        },
        "correctAnswer": "A",
        "explanation": "The `map()` method creates a new array populated with the results of calling a provided function on every element."
    },
    {
        "question": "What will the output of the following code be? `console.log((function(){ return typeof arguments; })())`?",
        "options": {
            "A": "'object'",
            "B": "'arguments'",
            "C": "'undefined'",
            "D": "'function'"
        },
        "correctAnswer": "A",
        "explanation": "The `arguments` object is an array-like object and returns 'object'."
    },
    {
        "question": "Which of the following is the correct way to create a promise?",
        "options": {
            "A": "new Promise()",
            "B": "Promise.create()",
            "C": "new Promise((resolve, reject) => {})",
            "D": "Promise()"
        },
        "correctAnswer": "C",
        "explanation": "Promises are created using `new Promise()` with a function that takes `resolve` and `reject`."
    },
    {
        "question": "What will be the output of `console.log([1, 2, 3].slice(1, 2))`?",
        "options": {
            "A": "[2]",
            "B": "[1, 2]",
            "C": "[2, 3]",
            "D": "[1]"
        },
        "correctAnswer": "A",
        "explanation": "The `slice()` method returns a shallow copy of a portion of an array into a new array object."
    },
    {
        "question": "What does the `reduce()` method do?",
        "options": {
            "A": "Transforms each element of an array to a new value.",
            "B": "Combines all elements of an array into a single value.",
            "C": "Filters elements of an array based on a condition.",
            "D": "Returns a new array with elements in reverse order."
        },
        "correctAnswer": "B",
        "explanation": "The `reduce()` method executes a reducer function on each element of the array, resulting in a single output value."
    },
    {
        "question": "What will be the output of `console.log(1 == '1')`?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "undefined",
            "D": "TypeError"
        },
        "correctAnswer": "A",
        "explanation": "The `==` operator performs type coercion, so `1` and `'1'` are considered equal."
    },
    {
        "question": "What does the `filter()` method return?",
        "options": {
            "A": "A new array with all elements that pass the test.",
            "B": "The first element that passes the test.",
            "C": "The number of elements that pass the test.",
            "D": "A boolean indicating if any element passed the test."
        },
        "correctAnswer": "A",
        "explanation": "The `filter()` method creates a new array with all elements that pass the provided test function."
    },
    {
        "question": "What will be the output of `console.log(typeof (function(){}))`?",
        "options": {
            "A": "'function'",
            "B": "'object'",
            "C": "'undefined'",
            "D": "'string'"
        },
        "correctAnswer": "A",
        "explanation": "In JavaScript, functions are a type of object, and `typeof` returns 'function' for function expressions."
    },
    {
        "question": "Which of the following is a valid way to define a function in JavaScript?",
        "options": {
            "A": "function myFunc() {}",
            "B": "const myFunc = () => {}",
            "C": "myFunc() {}",
            "D": "Both A and B"
        },
        "correctAnswer": "D",
        "explanation": "Both `function myFunc() {}` and `const myFunc = () => {}` are valid function definitions."
    },
    {
        "question": "What does `Object.freeze()` do?",
        "options": {
            "A": "Prevents any modifications to an object.",
            "B": "Makes an object immutable.",
            "C": "Both A and B.",
            "D": "None of the above."
        },
        "correctAnswer": "C",
        "explanation": "`Object.freeze()` prevents new properties from being added to an object and marks all existing properties as read-only."
    },
    {
        "question": "What will be the output of `console.log(('1' + 1) == 2)`?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "undefined",
            "D": "TypeError"
        },
        "correctAnswer": "B",
        "explanation": "The expression evaluates to `'11' == 2`, which is false due to type coercion."
    },
    {
        "question": "What does the `slice()` method do in JavaScript?",
        "options": {
            "A": "Changes the original array.",
            "B": "Returns a shallow copy of a portion of an array.",
            "C": "Removes the last element from an array.",
            "D": "Adds elements to the end of an array."
        },
        "correctAnswer": "B",
        "explanation": "The `slice()` method returns a shallow copy of a portion of an array into a new array object."
    },
    {
        "question": "Which of the following is true about the `async`/`await` syntax?",
        "options": {
            "A": "It allows you to write asynchronous code in a synchronous manner.",
            "B": "It can only be used inside a promise.",
            "C": "It is used to create promises.",
            "D": "None of the above."
        },
        "correctAnswer": "A",
        "explanation": "The `async`/`await` syntax allows you to write asynchronous code that looks synchronous, making it easier to read."
    },
    {
        "question": "What will be the output of `console.log([1, 2, 3].join('-'))`?",
        "options": {
            "A": "1-2-3",
            "B": "1 2 3",
            "C": "123",
            "D": "1,2,3"
        },
        "correctAnswer": "A",
        "explanation": "The `join()` method creates and returns a new string by concatenating all of the elements in an array, using the specified separator."
    },
    {
        "question": "What is the purpose of the `Promise.all()` method?",
        "options": {
            "A": "Waits for all promises to resolve.",
            "B": "Runs promises in parallel.",
            "C": "Returns a single promise that resolves when all of the promises in the iterable have resolved.",
            "D": "All of the above."
        },
        "correctAnswer": "D",
        "explanation": "`Promise.all()` waits for all promises to resolve and returns a single promise that resolves to an array of the results."
    }
];


