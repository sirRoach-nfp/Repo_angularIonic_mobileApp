export const JSintroQD = [
    {
        "question": "What is the correct syntax for referring to an external JavaScript file?",
        "options": {
            "A": "<script src='file.js'>",
            "B": "<script href='file.js'>",
            "C": "<script file='file.js'>",
            "D": "<script link='file.js'>"
        },
        "correctAnswer": "A",
        "explanation": "The correct syntax for including an external JavaScript file is `<script src='file.js'>`."
    },
    {
        "question": "How do you write a comment in JavaScript?",
        "options": {
            "A": "// This is a comment",
            "B": "<!-- This is a comment -->",
            "C": "/* This is a comment */",
            "D": "## This is a comment"
        },
        "correctAnswer": "A",
        "explanation": "In JavaScript, single-line comments are written with `//`, and multi-line comments use `/* ... */`."
    },
    {
        "question": "Which of the following is used to declare a variable in JavaScript?",
        "options": {
            "A": "var",
            "B": "let",
            "C": "const",
            "D": "All of the above"
        },
        "correctAnswer": "D",
        "explanation": "All `var`, `let`, and `const` can be used to declare variables in JavaScript."
    },
    {
        "question": "What will be the output of `console.log(typeof 'Hello')`?",
        "options": {
            "A": "string",
            "B": "object",
            "C": "text",
            "D": "undefined"
        },
        "correctAnswer": "A",
        "explanation": "The `typeof` operator returns 'string' for string values."
    },
    {
        "question": "How do you create a function in JavaScript?",
        "options": {
            "A": "function myFunction() {}",
            "B": "create function myFunction() {}",
            "C": "function:myFunction() {}",
            "D": "def myFunction() {}"
        },
        "correctAnswer": "A",
        "explanation": "Functions in JavaScript are created using the `function` keyword followed by the function name and parentheses."
    },
    {
        "question": "Which method is used to convert a JSON string into a JavaScript object?",
        "options": {
            "A": "JSON.parse()",
            "B": "JSON.stringify()",
            "C": "JSON.object()",
            "D": "JSON.convert()"
        },
        "correctAnswer": "A",
        "explanation": "The `JSON.parse()` method is used to convert a JSON string into a JavaScript object."
    },
    {
        "question": "What is the result of `5 + '5'` in JavaScript?",
        "options": {
            "A": "10",
            "B": "55",
            "C": "Error",
            "D": "NaN"
        },
        "correctAnswer": "B",
        "explanation": "In JavaScript, when you add a number and a string, the number is converted to a string and concatenated, resulting in '55'."
    },
    {
        "question": "Which of the following is a correct way to define an array in JavaScript?",
        "options": {
            "A": "let arr = []",
            "B": "let arr = {}",
            "C": "let arr = ()",
            "D": "let arr = ;"
        },
        "correctAnswer": "A",
        "explanation": "Arrays in JavaScript are defined using square brackets, e.g., `let arr = []`."
    },
    {
        "question": "What does `console.log(2 == '2')` output?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "undefined",
            "D": "Error"
        },
        "correctAnswer": "A",
        "explanation": "The `==` operator performs type coercion, so `2 == '2'` evaluates to `true`."
    },
    {
        "question": "How do you create a new object in JavaScript?",
        "options": {
            "A": "let obj = {}",
            "B": "let obj = []",
            "C": "let obj = ()",
            "D": "let obj = ;"
        },
        "correctAnswer": "A",
        "explanation": "Objects in JavaScript are created using curly braces, e.g., `let obj = {}`."
    },
    {
        "question": "Which of the following statements is true about JavaScript?",
        "options": {
            "A": "JavaScript is a server-side language.",
            "B": "JavaScript is a client-side language.",
            "C": "JavaScript is used only for database management.",
            "D": "JavaScript is a compiled language."
        },
        "correctAnswer": "B",
        "explanation": "JavaScript is primarily used as a client-side language to create interactive web pages."
    },
    {
        "question": "What is the result of `console.log(!!0)`?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "0",
            "D": "undefined"
        },
        "correctAnswer": "B",
        "explanation": "In JavaScript, `!!0` converts the number 0 to a boolean value, resulting in `false`."
    },
    {
        "question": "How do you check if a variable `x` is an array?",
        "options": {
            "A": "Array.isArray(x)",
            "B": "x.isArray()",
            "C": "x instanceof Array",
            "D": "Both A and C"
        },
        "correctAnswer": "D",
        "explanation": "Both `Array.isArray(x)` and `x instanceof Array` can be used to check if `x` is an array."
    },
    {
        "question": "What will `console.log('10' - 5)` output?",
        "options": {
            "A": "5",
            "B": "15",
            "C": "105",
            "D": "Error"
        },
        "correctAnswer": "A",
        "explanation": "The `-` operator converts the string '10' to a number and performs subtraction, resulting in 5."
    },
    {
        "question": "How do you define a constant in JavaScript?",
        "options": {
            "A": "const MY_CONSTANT",
            "B": "const MY_CONSTANT = 10",
            "C": "let MY_CONSTANT = 10",
            "D": "var MY_CONSTANT = 10"
        },
        "correctAnswer": "B",
        "explanation": "Constants are defined using the `const` keyword, e.g., `const MY_CONSTANT = 10`."
    },
    {
        "question": "What is the purpose of the `return` statement in a function?",
        "options": {
            "A": "It exits the function and optionally returns a value.",
            "B": "It creates a new function.",
            "C": "It defines a variable.",
            "D": "It prints a message to the console."
        },
        "correctAnswer": "A",
        "explanation": "The `return` statement exits a function and optionally returns a value to the caller."
    },
    {
        "question": "What does `null` represent in JavaScript?",
        "options": {
            "A": "An undefined value",
            "B": "An empty value",
            "C": "A non-existent value",
            "D": "A number"
        },
        "correctAnswer": "B",
        "explanation": "`null` represents an intentional absence of any object value and is often used to denote 'empty' or 'nothing'."
    },
    {
        "question": "Which method adds an element to the end of an array?",
        "options": {
            "A": "push()",
            "B": "pop()",
            "C": "shift()",
            "D": "unshift()"
        },
        "correctAnswer": "A",
        "explanation": "The `push()` method adds an element to the end of an array."
    },
    {
        "question": "Which operator is used for concatenation in JavaScript?",
        "options": {
            "A": "+",
            "B": "&",
            "C": "&&",
            "D": "concat()"
        },
        "correctAnswer": "A",
        "explanation": "The `+` operator is used for concatenating strings in JavaScript."
    },
    {
        "question": "How do you handle exceptions in JavaScript?",
        "options": {
            "A": "try...catch",
            "B": "error...handle",
            "C": "catch...finally",
            "D": "exception...try"
        },
        "correctAnswer": "A",
        "explanation": "Exceptions in JavaScript are handled using the `try...catch` statement."
    },
    {
        "question": "What is the result of `console.log('2' == 2)`?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "undefined",
            "D": "NaN"
        },
        "correctAnswer": "A",
        "explanation": "The `==` operator performs type coercion, so `'2' == 2` evaluates to `true`."
    },
    {
        "question": "How do you get the length of an array in JavaScript?",
        "options": {
            "A": "array.length",
            "B": "length(array)",
            "C": "array.size",
            "D": "array.count"
        },
        "correctAnswer": "A",
        "explanation": "The `length` property of an array returns the number of elements in the array."
    },
    {
        "question": "Which method is used to remove the last element from an array?",
        "options": {
            "A": "pop()",
            "B": "push()",
            "C": "shift()",
            "D": "splice()"
        },
        "correctAnswer": "A",
        "explanation": "The `pop()` method removes the last element from an array and returns that element."
    },
    {
        "question": "What will `console.log(1 + '1')` output?",
        "options": {
            "A": "2",
            "B": "11",
            "C": "Error",
            "D": "undefined"
        },
        "correctAnswer": "B",
        "explanation": "The `+` operator concatenates the number 1 with the string '1', resulting in '11'."
    }
];