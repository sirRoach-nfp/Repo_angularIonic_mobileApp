export const JSbasicQD = [
    {
        "question": "What is the output of `console.log(typeof 42)`?",
        "options": {
            "A": "number",
            "B": "string",
            "C": "object",
            "D": "undefined"
        },
        "correctAnswer": "A",
        "explanation": "The `typeof` operator returns 'number' for numeric values."
    },
    {
        "question": "How do you declare a variable in JavaScript?",
        "options": {
            "A": "var myVariable;",
            "B": "let myVariable;",
            "C": "const myVariable;",
            "D": "All of the above"
        },
        "correctAnswer": "D",
        "explanation": "Variables can be declared using `var`, `let`, or `const` in JavaScript."
    },
    {
        "question": "What is the result of `console.log(5 > 3)`?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "undefined",
            "D": "Error"
        },
        "correctAnswer": "A",
        "explanation": "The `>` operator evaluates to `true` when the left operand is greater than the right operand."
    },
    {
        "question": "Which method is used to add an element to the beginning of an array?",
        "options": {
            "A": "push()",
            "B": "pop()",
            "C": "shift()",
            "D": "unshift()"
        },
        "correctAnswer": "D",
        "explanation": "The `unshift()` method adds one or more elements to the beginning of an array."
    },
    {
        "question": "What does `console.log(10 / 2)` output?",
        "options": {
            "A": "5",
            "B": "10",
            "C": "2",
            "D": "Error"
        },
        "correctAnswer": "A",
        "explanation": "The `/` operator performs division, so `10 / 2` evaluates to `5`."
    },
    {
        "question": "How do you create a JavaScript object?",
        "options": {
            "A": "let obj = {}",
            "B": "let obj = []",
            "C": "let obj = ()",
            "D": "let obj = ;"
        },
        "correctAnswer": "A",
        "explanation": "Objects are created using curly braces, e.g., `let obj = {}`."
    },
    {
        "question": "What is the purpose of the `if` statement in JavaScript?",
        "options": {
            "A": "To define a function",
            "B": "To repeat code multiple times",
            "C": "To execute code based on a condition",
            "D": "To declare a variable"
        },
        "correctAnswer": "C",
        "explanation": "The `if` statement executes code based on whether a specified condition evaluates to `true`."
    },
    {
        "question": "How do you define a function in JavaScript?",
        "options": {
            "A": "function myFunction() {}",
            "B": "def myFunction() {}",
            "C": "create function myFunction() {}",
            "D": "func myFunction() {}"
        },
        "correctAnswer": "A",
        "explanation": "Functions are defined using the `function` keyword followed by the function name and parentheses."
    },
    {
        "question": "Which of the following will output 'Hello World' to the console?",
        "options": {
            "A": "console.print('Hello World');",
            "B": "console.write('Hello World');",
            "C": "console.log('Hello World');",
            "D": "print.console('Hello World');"
        },
        "correctAnswer": "C",
        "explanation": "The `console.log()` method is used to print messages to the console."
    },
    {
        "question": "What does `parseInt('123')` return?",
        "options": {
            "A": "123",
            "B": "'123'",
            "C": "NaN",
            "D": "undefined"
        },
        "correctAnswer": "A",
        "explanation": "`parseInt()` converts a string to an integer. Thus, `parseInt('123')` returns the number `123`."
    },
    {
        "question": "How do you concatenate two strings in JavaScript?",
        "options": {
            "A": "'Hello' + 'World'",
            "B": "'Hello'.concat('World')",
            "C": "Both A and B",
            "D": "'Hello' . 'World'"
        },
        "correctAnswer": "C",
        "explanation": "Strings can be concatenated using the `+` operator or the `concat()` method."
    },
    {
        "question": "What is the result of `console.log(!!null)`?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "null",
            "D": "undefined"
        },
        "correctAnswer": "B",
        "explanation": "`!!null` converts `null` to a boolean value, which is `false`."
    },
    {
        "question": "Which of the following is a valid array index?",
        "options": {
            "A": "0",
            "B": "-1",
            "C": "1.5",
            "D": "true"
        },
        "correctAnswer": "A",
        "explanation": "Array indices in JavaScript are non-negative integers. `0` is a valid index."
    },
    {
        "question": "What will `console.log('a' + 1)` output?",
        "options": {
            "A": "'a1'",
            "B": "2",
            "C": "'a' + '1'",
            "D": "NaN"
        },
        "correctAnswer": "A",
        "explanation": "The `+` operator concatenates strings and numbers, so `'a' + 1` results in `'a1'`."
    },
    {
        "question": "How do you access the first element of an array named `myArray`?",
        "options": {
            "A": "myArray[0]",
            "B": "myArray[1]",
            "C": "myArray.first()",
            "D": "myArray.get(0)"
        },
        "correctAnswer": "A",
        "explanation": "Array elements are accessed using zero-based indices. The first element is accessed with `myArray[0]`."
    },
    {
        "question": "Which of the following methods removes the first element of an array?",
        "options": {
            "A": "shift()",
            "B": "pop()",
            "C": "push()",
            "D": "unshift()"
        },
        "correctAnswer": "A",
        "explanation": "The `shift()` method removes the first element from an array."
    },
    {
        "question": "What does `console.log(5 % 2)` return?",
        "options": {
            "A": "1",
            "B": "2",
            "C": "2.5",
            "D": "0"
        },
        "correctAnswer": "A",
        "explanation": "The `%` operator returns the remainder of a division operation. `5 % 2` returns `1`."
    },
    {
        "question": "Which operator is used to check for both value and type equality?",
        "options": {
            "A": "==",
            "B": "===",
            "C": "!=",
            "D": "!=="
        },
        "correctAnswer": "B",
        "explanation": "The `===` operator checks for both value and type equality."
    },
    {
        "question": "How can you convert a value to a string in JavaScript?",
        "options": {
            "A": "String(value)",
            "B": "value.toString()",
            "C": "Both A and B",
            "D": "Stringify(value)"
        },
        "correctAnswer": "C",
        "explanation": "You can convert a value to a string using either `String(value)` or `value.toString()`."
    },
    {
        "question": "What is the default value of a variable declared with `let` but not initialized?",
        "options": {
            "A": "undefined",
            "B": "null",
            "C": "0",
            "D": "Error"
        },
        "correctAnswer": "A",
        "explanation": "A variable declared with `let` but not initialized has the default value of `undefined`."
    },
    {
        "question": "What does the `isNaN()` function do?",
        "options": {
            "A": "Checks if a value is not a number",
            "B": "Converts a value to a number",
            "C": "Rounds a number to the nearest integer",
            "D": "Returns true if a value is a number"
        },
        "correctAnswer": "A",
        "explanation": "`isNaN()` checks if a value is not a number (NaN)."
    },
    {
        "question": "Which of the following will return `true` if a variable `x` is not equal to 5?",
        "options": {
            "A": "x != 5",
            "B": "x == 5",
            "C": "x !== 5",
            "D": "x === 5"
        },
        "correctAnswer": "A",
        "explanation": "The `!=` operator checks if `x` is not equal to 5, returning `true` if it is not."
    },
    {
        "question": "What is the result of `console.log(3 + 4 + '5')`?",
        "options": {
            "A": "75",
            "B": "12",
            "C": "34",
            "D": "Error"
        },
        "correctAnswer": "A",
        "explanation": "The `+` operator concatenates numbers and strings. So, `3 + 4` results in `7`, then `'7' + '5'` results in `'75'`."
    },
    {
        "question": "How do you add a comment in JavaScript?",
        "options": {
            "A": "// This is a comment",
            "B": "<!-- This is a comment -->",
            "C": "/* This is a comment */",
            "D": "Both A and C"
        },
        "correctAnswer": "D",
        "explanation": "JavaScript supports single-line comments (`//`) and multi-line comments (`/* */`)."
    },
    {
        "question": "What does `console.log([1, 2] == [1, 2])` output?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "undefined",
            "D": "Error"
        },
        "correctAnswer": "B",
        "explanation": "Comparing two arrays with `==` checks for reference equality, so `[1, 2] == [1, 2]` returns `false`."
    }
];