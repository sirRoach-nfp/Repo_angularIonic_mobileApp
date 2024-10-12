export const jsabintermediateQD = [
    {
        "question": "What will be the output of `console.log(typeof NaN)`?",
        "options": {
            "A": "'number'",
            "B": "'undefined'",
            "C": "'NaN'",
            "D": "'object'"
        },
        "correctAnswer": "A",
        "explanation": "NaN is a special value in JavaScript that stands for 'Not-a-Number', and its type is 'number'."
    },
    {
        "question": "What does the `this` keyword refer to in a function?",
        "options": {
            "A": "The global object",
            "B": "The function itself",
            "C": "The object that calls the function",
            "D": "The parent object"
        },
        "correctAnswer": "C",
        "explanation": "In JavaScript, `this` refers to the object that invokes the function."
    },
    {
        "question": "Which of the following methods can be used to merge two objects?",
        "options": {
            "A": "Object.merge()",
            "B": "Object.concat()",
            "C": "Object.assign()",
            "D": "Object.combine()"
        },
        "correctAnswer": "C",
        "explanation": "Object.assign() is used to copy the values of all enumerable own properties from one or more source objects to a target object."
    },
    {
        "question": "What is the difference between `==` and `===`?",
        "options": {
            "A": "No difference; both are the same.",
            "B": "`==` checks for value equality, while `===` checks for value and type equality.",
            "C": "`==` is used for numbers, while `===` is used for strings.",
            "D": "`===` is faster than `==`."
        },
        "correctAnswer": "B",
        "explanation": "`==` checks for value equality with type coercion, while `===` checks for both value and type equality without coercion."
    },
    {
        "question": "What is the output of `console.log([1, 2] + [3, 4])`?",
        "options": {
            "A": "[1, 2, 3, 4]",
            "B": "6",
            "C": "1,23,4",
            "D": "undefined"
        },
        "correctAnswer": "C",
        "explanation": "When arrays are added, they are converted to strings, resulting in '1,23,4'."
    },
    {
        "question": "What is a closure in JavaScript?",
        "options": {
            "A": "A type of loop",
            "B": "A function that can access its outer scope even after the outer function has executed",
            "C": "A built-in method",
            "D": "A way to create a new object"
        },
        "correctAnswer": "B",
        "explanation": "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope."
    },
    {
        "question": "What does `Object.create()` do?",
        "options": {
            "A": "Creates a new object with the specified prototype object and properties.",
            "B": "Merges two objects.",
            "C": "Creates an empty object.",
            "D": "Defines a class."
        },
        "correctAnswer": "A",
        "explanation": "`Object.create()` creates a new object with the specified prototype object and properties."
    },
    {
        "question": "What will the output of `console.log(0.1 + 0.2 == 0.3)` be?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "TypeError",
            "D": "undefined"
        },
        "correctAnswer": "B",
        "explanation": "Due to floating-point precision issues, 0.1 + 0.2 does not equal 0.3."
    },
    {
        "question": "Which of the following can be used to create an immediately invoked function expression (IIFE)?",
        "options": {
            "A": "function(){}()",
            "B": "function(){}",
            "C": "(function(){});",
            "D": "function(){};"
        },
        "correctAnswer": "A",
        "explanation": "An IIFE is defined and immediately executed using the syntax `function(){}();`."
    },
    {
        "question": "Which statement is used to create a new promise?",
        "options": {
            "A": "new Promise()",
            "B": "Promise.create()",
            "C": "Promise()",
            "D": "new Promise((resolve, reject) => {})"
        },
        "correctAnswer": "D",
        "explanation": "You create a new promise using the `new Promise()` constructor with a function that takes `resolve` and `reject`."
    },
    {
        "question": "What is the output of `console.log(typeof null)`?",
        "options": {
            "A": "'object'",
            "B": "'null'",
            "C": "'undefined'",
            "D": "'boolean'"
        },
        "correctAnswer": "A",
        "explanation": "In JavaScript, `typeof null` returns 'object', which is a known bug in the language."
    },
    {
        "question": "What will be the output of `console.log([1, 2, 3] == '1,2,3')`?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "undefined",
            "D": "TypeError"
        },
        "correctAnswer": "A",
        "explanation": "The array is converted to a string, which makes the comparison true."
    },
    {
        "question": "What is the purpose of the `debounce` function?",
        "options": {
            "A": "To execute a function immediately.",
            "B": "To delay the execution of a function until after a certain period of inactivity.",
            "C": "To execute a function only once.",
            "D": "To limit the rate at which a function is called."
        },
        "correctAnswer": "B",
        "explanation": "The `debounce` function delays the execution of a function until after a specified time period has elapsed since the last time it was invoked."
    },
    {
        "question": "Which of the following is a feature of arrow functions?",
        "options": {
            "A": "They bind their own `this` context.",
            "B": "They can be used as constructor functions.",
            "C": "They can have `arguments` object.",
            "D": "They cannot be used as methods."
        },
        "correctAnswer": "D",
        "explanation": "Arrow functions do not have their own `this` context, making them unsuitable for use as methods."
    },
    {
        "question": "What is the output of `console.log(({} + []))`?",
        "options": {
            "A": "[object Object]",
            "B": "undefined",
            "C": "[object Array]",
            "D": "0"
        },
        "correctAnswer": "A",
        "explanation": "When adding an object to an array, JavaScript converts both to strings, resulting in '[object Object]'."
    },
    {
        "question": "What does the `setTimeout()` function do?",
        "options": {
            "A": "Executes a function after a specified delay.",
            "B": "Executes a function repeatedly at specified intervals.",
            "C": "Pauses execution of code.",
            "D": "Creates a new promise."
        },
        "correctAnswer": "A",
        "explanation": "`setTimeout()` schedules a function to execute after a specified number of milliseconds."
    },
    {
        "question": "Which of the following is not a primitive data type in JavaScript?",
        "options": {
            "A": "String",
            "B": "Number",
            "C": "Object",
            "D": "Boolean"
        },
        "correctAnswer": "C",
        "explanation": "Object is a reference type, while String, Number, and Boolean are primitive types."
    },
    {
        "question": "What is the output of `console.log([] == ![])`?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "undefined",
            "D": "TypeError"
        },
        "correctAnswer": "A",
        "explanation": "The empty array is coerced to a falsy value, which is `false`, while `![]` evaluates to `false`, making the comparison true."
    },
    {
        "question": "What is a `Promise` in JavaScript?",
        "options": {
            "A": "A type of variable",
            "B": "An object that represents the eventual completion or failure of an asynchronous operation",
            "C": "A method to synchronize code execution",
            "D": "A way to store data"
        },
        "correctAnswer": "B",
        "explanation": "A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value."
    },
    {
        "question": "What will be the output of `console.log(typeof [1, 2, 3])`?",
        "options": {
            "A": "'array'",
            "B": "'object'",
            "C": "'undefined'",
            "D": "'list'"
        },
        "correctAnswer": "B",
        "explanation": "Arrays are objects in JavaScript, so `typeof [1, 2, 3]` returns 'object'."
    },
    {
        "question": "Which of the following methods can be used to remove the last element from an array?",
        "options": {
            "A": "pop()",
            "B": "shift()",
            "C": "slice()",
            "D": "remove()"
        },
        "correctAnswer": "A",
        "explanation": "The `pop()` method removes the last element from an array and returns that element."
    },
    {
        "question": "What does `JSON.stringify()` do?",
        "options": {
            "A": "Parses a JSON string into an object.",
            "B": "Converts a JavaScript object into a JSON string.",
            "C": "Validates a JSON string.",
            "D": "Formats a string into JSON."
        },
        "correctAnswer": "B",
        "explanation": "`JSON.stringify()` converts a JavaScript object into a JSON string."
    },
    {
        "question": "What is the purpose of the `async` keyword?",
        "options": {
            "A": "To define a synchronous function.",
            "B": "To define an asynchronous function that returns a promise.",
            "C": "To pause execution of code.",
            "D": "To create a new thread."
        },
        "correctAnswer": "B",
        "explanation": "The `async` keyword is used to define an asynchronous function that implicitly returns a promise."
    },
    {
        "question": "What is the output of `console.log('5' - 3)`?",
        "options": {
            "A": "2",
            "B": "53",
            "C": "NaN",
            "D": "TypeError"
        },
        "correctAnswer": "A",
        "explanation": "In subtraction, JavaScript converts '5' to a number, resulting in 5 - 3 = 2."
    },
    {
        "question": "What is the result of `console.log(2 == '2')`?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "undefined",
            "D": "TypeError"
        },
        "correctAnswer": "A",
        "explanation": "The `==` operator performs type coercion, so the string '2' is converted to the number 2."
    },
    {
        "question": "What will the output of `console.log(1 + '2' + 3)` be?",
        "options": {
            "A": "6",
            "B": "123",
            "C": "33",
            "D": "12"
        },
        "correctAnswer": "B",
        "explanation": "The first addition concatenates 1 and '2' as strings, resulting in '12', and then '12' + 3 becomes '123'."
    },
    {
        "question": "Which of the following is a method of the Array prototype?",
        "options": {
            "A": "reduce()",
            "B": "map()",
            "C": "filter()",
            "D": "All of the above"
        },
        "correctAnswer": "D",
        "explanation": "All of the listed methods (`reduce()`, `map()`, and `filter()`) are part of the Array prototype."
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
        "explanation": "The double negation (`!!`) converts the falsy value '' (empty string) to `false`."
    },
    {
        "question": "What is the purpose of `Array.from()`?",
        "options": {
            "A": "Creates a new array instance from an array-like or iterable object.",
            "B": "Converts an array into a string.",
            "C": "Filters an array.",
            "D": "Maps an array."
        },
        "correctAnswer": "A",
        "explanation": "`Array.from()` creates a new array instance from an array-like or iterable object."
    },
    {
        "question": "What will be the output of `console.log(1 === '1')`?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "undefined",
            "D": "TypeError"
        },
        "correctAnswer": "B",
        "explanation": "The `===` operator checks for both value and type, and since 1 (number) is not the same type as '1' (string), the result is false."
    },
    {
        "question": "What does the `filter()` method do?",
        "options": {
            "A": "Creates a new array with all elements that pass the test implemented by the provided function.",
            "B": "Mutates the original array.",
            "C": "Finds the first element that satisfies the provided testing function.",
            "D": "Reduces the array to a single value."
        },
        "correctAnswer": "A",
        "explanation": "The `filter()` method creates a new array with all elements that pass the test implemented by the provided function."
    },
    {
        "question": "Which of the following is true about `var`, `let`, and `const`?",
        "options": {
            "A": "All three can be re-declared.",
            "B": "`let` and `const` are block-scoped, while `var` is function-scoped.",
            "C": "`const` variables can be reassigned.",
            "D": "`let` is hoisted to the top of its block."
        },
        "correctAnswer": "B",
        "explanation": "`let` and `const` are block-scoped, meaning they only exist within the block they are defined in, while `var` is function-scoped."
    }
];
