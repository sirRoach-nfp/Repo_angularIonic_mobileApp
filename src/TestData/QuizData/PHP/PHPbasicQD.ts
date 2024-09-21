export const PHPbasicQD = [
    {
        "question": "What is the correct way to end a PHP statement?",
        "options": {
            "A": ".",
            "B": ";",
            "C": ":",
            "D": "!"
        },
        "correctAnswer": "B",
        "explanation": "PHP statements end with a semicolon (`;`)."
    },
    {
        "question": "How do you start a PHP script?",
        "options": {
            "A": "<php>",
            "B": "<script>",
            "C": "<?php",
            "D": "<php_script>"
        },
        "correctAnswer": "C",
        "explanation": "PHP scripts start with the `<?php` tag."
    },
    {
        "question": "Which superglobal array holds form data submitted via the POST method?",
        "options": {
            "A": "$_GET",
            "B": "$_POST",
            "C": "$_REQUEST",
            "D": "$_FORM"
        },
        "correctAnswer": "B",
        "explanation": "The `$_POST` superglobal array is used to retrieve form data submitted via the POST method."
    },
    {
        "question": "What will `echo 2 + 3 * 4;` output?",
        "options": {
            "A": "20",
            "B": "14",
            "C": "24",
            "D": "12"
        },
        "correctAnswer": "B",
        "explanation": "PHP follows the order of operations, so `3 * 4` is evaluated first, resulting in `12`, and then `2 + 12` equals `14`."
    },
    {
        "question": "How do you declare a constant in PHP?",
        "options": {
            "A": "const CONSTANT_NAME = value;",
            "B": "constant('CONSTANT_NAME', value);",
            "C": "define('CONSTANT_NAME', value);",
            "D": "$CONSTANT_NAME = value;"
        },
        "correctAnswer": "C",
        "explanation": "Constants in PHP are defined using the `define()` function."
    },
    {
        "question": "Which PHP function is used to include the content of another file?",
        "options": {
            "A": "require()",
            "B": "include()",
            "C": "import()",
            "D": "both A and B"
        },
        "correctAnswer": "D",
        "explanation": "Both `require()` and `include()` functions are used to include files, but `require()` will produce a fatal error if the file is not found, whereas `include()` will only generate a warning."
    },
    {
        "question": "What is the result of `echo 10 / 2;`?",
        "options": {
            "A": "5",
            "B": "2",
            "C": "10",
            "D": "20"
        },
        "correctAnswer": "A",
        "explanation": "The result of dividing `10` by `2` is `5`."
    },
    {
        "question": "How do you access a value from an associative array?",
        "options": {
            "A": "$array[key]",
            "B": "$array.key",
            "C": "$array->key",
            "D": "$array[key()]"
        },
        "correctAnswer": "A",
        "explanation": "Values in an associative array are accessed using the key inside square brackets, e.g., `$array['key']`."
    },
    {
        "question": "What does the `isset()` function check?",
        "options": {
            "A": "If a variable is defined and is not null",
            "B": "If a variable is empty",
            "C": "If a variable is greater than zero",
            "D": "If a variable is an integer"
        },
        "correctAnswer": "A",
        "explanation": "The `isset()` function checks if a variable is defined and not null."
    },
    {
        "question": "How do you create a single-line comment in PHP?",
        "options": {
            "A": "// comment",
            "B": "# comment",
            "C": "/* comment */",
            "D": "Both A and B"
        },
        "correctAnswer": "D",
        "explanation": "Single-line comments in PHP can be created using `//` or `#`. Multi-line comments use `/* */`."
    },
    {
        "question": "Which function is used to convert a string to lowercase in PHP?",
        "options": {
            "A": "strtolower()",
            "B": "tolower()",
            "C": "convert_lower()",
            "D": "lowercase()"
        },
        "correctAnswer": "A",
        "explanation": "The `strtolower()` function converts a string to lowercase."
    },
    {
        "question": "What will `echo 5 % 2;` output?",
        "options": {
            "A": "1",
            "B": "2",
            "C": "0",
            "D": "5"
        },
        "correctAnswer": "A",
        "explanation": "The `%` operator calculates the remainder of `5` divided by `2`, which is `1`."
    },
    {
        "question": "Which PHP function returns the length of a string?",
        "options": {
            "A": "strlen()",
            "B": "length()",
            "C": "size()",
            "D": "count()"
        },
        "correctAnswer": "A",
        "explanation": "The `strlen()` function returns the length of a string."
    },
    {
        "question": "How do you define an array in PHP?",
        "options": {
            "A": "$array = array();",
            "B": "$array = []",
            "C": "array = ();",
            "D": "array = [];"
        },
        "correctAnswer": "A",
        "explanation": "Arrays are defined using `array()` or the short syntax `[]`, but `array()` is the traditional method."
    },
    {
        "question": "Which operator is used for string concatenation in PHP?",
        "options": {
            "A": "+",
            "B": "&",
            "C": ".",
            "D": ","
        },
        "correctAnswer": "C",
        "explanation": "In PHP, the `.` operator is used to concatenate strings."
    },
    {
        "question": "What does `echo gettype(123);` output?",
        "options": {
            "A": "string",
            "B": "integer",
            "C": "float",
            "D": "boolean"
        },
        "correctAnswer": "B",
        "explanation": "The `gettype()` function returns the type of the variable, which is `integer` for `123`."
    },
    {
        "question": "How do you initialize a variable with a value in PHP?",
        "options": {
            "A": "$variable = value;",
            "B": "var variable = value;",
            "C": "let variable = value;",
            "D": "const variable = value;"
        },
        "correctAnswer": "A",
        "explanation": "Variables in PHP are initialized using the `$` symbol followed by the variable name and an assignment operator, e.g., `$variable = value;`."
    },
    {
        "question": "How do you check if a file exists in PHP?",
        "options": {
            "A": "file_exists()",
            "B": "is_file()",
            "C": "check_file()",
            "D": "exists_file()"
        },
        "correctAnswer": "A",
        "explanation": "The `file_exists()` function checks if a file exists."
    },
    {
        "question": "Which PHP function is used to get the current date and time?",
        "options": {
            "A": "date()",
            "B": "current_time()",
            "C": "now()",
            "D": "time()"
        },
        "correctAnswer": "A",
        "explanation": "The `date()` function is used to get the current date and time."
    },
    {
        "question": "What will `echo 10 - 5;` output in PHP?",
        "options": {
            "A": "5",
            "B": "10",
            "C": "15",
            "D": "Error"
        },
        "correctAnswer": "A",
        "explanation": "The result of subtracting `5` from `10` is `5`."
    },
    {
        "question": "How do you create a multi-line comment in PHP?",
        "options": {
            "A": "// comment",
            "B": "# comment",
            "C": "/* comment */",
            "D": "<!-- comment -->"
        },
        "correctAnswer": "C",
        "explanation": "Multi-line comments in PHP are created using `/* comment */`."
    },
    {
        "question": "Which function is used to convert a string to an integer in PHP?",
        "options": {
            "A": "intval()",
            "B": "to_int()",
            "C": "convert_to_int()",
            "D": "string_to_int()"
        },
        "correctAnswer": "A",
        "explanation": "The `intval()` function converts a string to an integer."
    },
    {
        "question": "How do you concatenate two strings in PHP?",
        "options": {
            "A": "$str1 + $str2",
            "B": "$str1 . $str2",
            "C": "$str1 & $str2",
            "D": "concat($str1, $str2)"
        },
        "correctAnswer": "B",
        "explanation": "Strings are concatenated using the `.` operator in PHP."
    }
];
