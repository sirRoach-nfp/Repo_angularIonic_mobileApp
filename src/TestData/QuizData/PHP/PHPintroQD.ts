export const PHPintroQD = [
    {
        "question": "What does PHP stand for?",
        "options": {
            "A": "Personal Home Page",
            "B": "Private Hypertext Processor",
            "C": "Preprocessor Hypertext Page",
            "D": "Hypertext Preprocessor"
        },
        "correctAnswer": "D",
        "explanation": "PHP stands for Hypertext Preprocessor, which reflects its use in server-side scripting to generate dynamic web content."
    },
    {
        "question": "How do you declare a variable in PHP?",
        "options": {
            "A": "$variableName;",
            "B": "var variableName;",
            "C": "let variableName;",
            "D": "variableName =;"
        },
        "correctAnswer": "A",
        "explanation": "In PHP, variables are declared using the `$` symbol followed by the variable name."
    },
    {
        "question": "Which of the following is the correct way to output 'Hello World' in PHP?",
        "options": {
            "A": "echo 'Hello World';",
            "B": "print('Hello World');",
            "C": "console.log('Hello World');",
            "D": "Both A and B"
        },
        "correctAnswer": "D",
        "explanation": "Both `echo` and `print` functions can be used to output text in PHP."
    },
    {
        "question": "What is the default file extension for PHP files?",
        "options": {
            "A": ".html",
            "B": ".php",
            "C": ".txt",
            "D": ".php5"
        },
        "correctAnswer": "B",
        "explanation": "PHP files typically have a `.php` extension."
    },
    {
        "question": "How do you add a single-line comment in PHP?",
        "options": {
            "A": "// This is a comment",
            "B": "# This is a comment",
            "C": "/* This is a comment */",
            "D": "Both A and B"
        },
        "correctAnswer": "D",
        "explanation": "PHP supports single-line comments using `//` and `#`. Multi-line comments use `/* */`."
    },
    {
        "question": "Which function is used to include the contents of one PHP file into another?",
        "options": {
            "A": "include()",
            "B": "require()",
            "C": "import()",
            "D": "Both A and B"
        },
        "correctAnswer": "D",
        "explanation": "Both `include()` and `require()` functions can be used to include files, but `require()` will produce a fatal error if the file is not found, while `include()` will only generate a warning."
    },
    {
        "question": "What does the `isset()` function do in PHP?",
        "options": {
            "A": "Checks if a variable is empty",
            "B": "Checks if a variable is set and is not null",
            "C": "Deletes a variable",
            "D": "Initializes a variable"
        },
        "correctAnswer": "B",
        "explanation": "The `isset()` function checks if a variable is set and is not null."
    },
    {
        "question": "Which of the following is the correct way to start a PHP script?",
        "options": {
            "A": "<script language='php'>",
            "B": "<?php",
            "C": "<php>",
            "D": "<?script>"
        },
        "correctAnswer": "B",
        "explanation": "PHP scripts start with the `<?php` tag."
    },
    {
        "question": "How can you concatenate strings in PHP?",
        "options": {
            "A": "+",
            "B": ".",
            "C": "&",
            "D": ","
        },
        "correctAnswer": "B",
        "explanation": "In PHP, strings are concatenated using the `.` operator."
    },
    {
        "question": "What does the `strlen()` function do in PHP?",
        "options": {
            "A": "Returns the length of a string",
            "B": "Converts a string to lowercase",
            "C": "Splits a string into an array",
            "D": "Returns the number of words in a string"
        },
        "correctAnswer": "A",
        "explanation": "The `strlen()` function returns the length of a string."
    },
    {
        "question": "Which function is used to convert a string to an integer in PHP?",
        "options": {
            "A": "toInt()",
            "B": "parseInt()",
            "C": "intval()",
            "D": "integer()"
        },
        "correctAnswer": "C",
        "explanation": "The `intval()` function is used to convert a string to an integer in PHP."
    },
    {
        "question": "How do you access a value from an associative array in PHP?",
        "options": {
            "A": "$array['key']",
            "B": "$array.key",
            "C": "$array(key)",
            "D": "$array.key()"
        },
        "correctAnswer": "A",
        "explanation": "In PHP, associative array values are accessed using the key in square brackets, e.g., `$array['key']`."
    },
    {
        "question": "Which PHP function is used to retrieve data from a form submitted via the GET method?",
        "options": {
            "A": "$_POST",
            "B": "$_GET",
            "C": "$_REQUEST",
            "D": "$_FORM"
        },
        "correctAnswer": "B",
        "explanation": "The `$_GET` superglobal array is used to retrieve data from a form submitted via the GET method."
    },
    {
        "question": "How do you define a constant in PHP?",
        "options": {
            "A": "const CONSTANT_NAME = value;",
            "B": "define('CONSTANT_NAME', value);",
            "C": "constant('CONSTANT_NAME', value);",
            "D": "constant_value(CONSTANT_NAME) = value;"
        },
        "correctAnswer": "B",
        "explanation": "Constants in PHP are defined using the `define()` function."
    },
    {
        "question": "What will `echo 5 + '3';` output in PHP?",
        "options": {
            "A": "53",
            "B": "8",
            "C": "Error",
            "D": "5 + 3"
        },
        "correctAnswer": "B",
        "explanation": "PHP performs type juggling, so `5 + '3'` results in `8`."
    },
    {
        "question": "How do you include a PHP file only once in a script to avoid multiple inclusions?",
        "options": {
            "A": "include_once()",
            "B": "require_once()",
            "C": "both include_once() and require_once()",
            "D": "include()"
        },
        "correctAnswer": "C",
        "explanation": "Both `include_once()` and `require_once()` include a file only once, preventing multiple inclusions."
    },
    {
        "question": "What is the purpose of the `header()` function in PHP?",
        "options": {
            "A": "Send a raw HTTP header",
            "B": "Change the font size of text",
            "C": "Modify the HTTP response body",
            "D": "Include external files"
        },
        "correctAnswer": "A",
        "explanation": "The `header()` function is used to send a raw HTTP header to the client."
    },
    {
        "question": "How do you declare a PHP array?",
        "options": {
            "A": "$array = array();",
            "B": "$array = [];",
            "C": "Both A and B",
            "D": "$array = array[];"
        },
        "correctAnswer": "C",
        "explanation": "Arrays can be declared using `array()` or the short syntax `[]`."
    },
    {
        "question": "What does the `isset()` function return if a variable is not set?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "null",
            "D": "undefined"
        },
        "correctAnswer": "B",
        "explanation": "The `isset()` function returns `false` if the variable is not set or is `null`."
    },
    {
        "question": "How can you escape special characters in a PHP string?",
        "options": {
            "A": "Using backslashes",
            "B": "Using single quotes",
            "C": "Using double quotes",
            "D": "Using parentheses"
        },
        "correctAnswer": "A",
        "explanation": "Special characters can be escaped using backslashes, e.g., `\$`, `\"`, `\\`."
    },
    {
        "question": "Which PHP function is used to retrieve all available session variables?",
        "options": {
            "A": "session_start()",
            "B": "session_variables()",
            "C": "session_get()",
            "D": "$_SESSION"
        },
        "correctAnswer": "D",
        "explanation": "The `$_SESSION` superglobal array contains all available session variables."
    },
    {
        "question": "What is the result of `echo 10 % 3;` in PHP?",
        "options": {
            "A": "1",
            "B": "3",
            "C": "0",
            "D": "10"
        },
        "correctAnswer": "A",
        "explanation": "The `%` operator calculates the remainder of the division of `10` by `3`, which is `1`."
    },
    {
        "question": "How do you access the value of a query parameter named 'id' in PHP?",
        "options": {
            "A": "$_GET['id']",
            "B": "$_POST['id']",
            "C": "$_REQUEST['id']",
            "D": "$id"
        },
        "correctAnswer": "A",
        "explanation": "The `$_GET` superglobal array is used to access query parameters from the URL."
    }
];
