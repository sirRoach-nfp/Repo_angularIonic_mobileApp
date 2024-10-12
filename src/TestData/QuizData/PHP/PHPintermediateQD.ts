export const PHPintermediateQD = [
    {
        "question": "What is the result of `echo 2 + '3 apples';` in PHP?",
        "options": {
            "A": "23",
            "B": "5",
            "C": "2",
            "D": "Error"
        },
        "correctAnswer": "B",
        "explanation": "PHP automatically converts '3 apples' to 3 (integer), so 2 + 3 results in 5."
    },
    {
        "question": "How do you get the current PHP version in your script?",
        "options": {
            "A": "php_version()",
            "B": "phpinfo()",
            "C": "PHP_VERSION",
            "D": "version()"
        },
        "correctAnswer": "C",
        "explanation": "PHP_VERSION is a constant that provides the current PHP version."
    },
    {
        "question": "What does the `json_encode()` function do in PHP?",
        "options": {
            "A": "It converts an object to a string.",
            "B": "It converts a PHP array into a JSON string.",
            "C": "It decodes a JSON string into a PHP array.",
            "D": "It validates a JSON string."
        },
        "correctAnswer": "B",
        "explanation": "`json_encode()` converts a PHP array or object into a JSON string."
    },
    {
        "question": "Which function is used to remove duplicate values from an array?",
        "options": {
            "A": "array_unique()",
            "B": "array_diff()",
            "C": "array_filter()",
            "D": "array_merge()"
        },
        "correctAnswer": "A",
        "explanation": "`array_unique()` removes duplicate values from an array."
    },
    {
        "question": "What is the purpose of the `isset()` function in PHP?",
        "options": {
            "A": "To check if a variable is set and is not NULL.",
            "B": "To check if a variable is NULL.",
            "C": "To check if a variable is empty.",
            "D": "To remove a variable."
        },
        "correctAnswer": "A",
        "explanation": "`isset()` checks if a variable is declared and not NULL."
    },
    {
        "question": "Which of the following is true about the `$GLOBALS` array?",
        "options": {
            "A": "It stores variables passed through the URL.",
            "B": "It contains all global variables in PHP.",
            "C": "It holds server environment variables.",
            "D": "It is used to store session data."
        },
        "correctAnswer": "B",
        "explanation": "`$GLOBALS` is a superglobal array containing all global variables in PHP."
    },
    {
        "question": "How can you store an array into a session in PHP?",
        "options": {
            "A": "`$_SESSION['key'] = json_encode($array);`",
            "B": "`$_SESSION['key'] = $array;`",
            "C": "`set_session($array);`",
            "D": "None of the above"
        },
        "correctAnswer": "B",
        "explanation": "PHP can store an array directly into the `$_SESSION` superglobal."
    },
    {
        "question": "Which of the following is a valid way to declare a PHP function?",
        "options": {
            "A": "function myFunc() { return true; }",
            "B": "def myFunc() { return true; }",
            "C": "myFunc() { return true; }",
            "D": "function = myFunc() { return true; }"
        },
        "correctAnswer": "A",
        "explanation": "PHP functions are declared using the `function` keyword."
    },
    {
        "question": "How can you retrieve all keys from an associative array?",
        "options": {
            "A": "array_keys()",
            "B": "array_values()",
            "C": "array_flip()",
            "D": "array_map()"
        },
        "correctAnswer": "A",
        "explanation": "`array_keys()` returns all the keys from an associative array."
    },
    {
        "question": "Which of the following functions can be used to check if a file exists?",
        "options": {
            "A": "file_exists()",
            "B": "is_file()",
            "C": "exists()",
            "D": "Both A and B"
        },
        "correctAnswer": "D",
        "explanation": "Both `file_exists()` and `is_file()` can be used to check if a file exists."
    },
    {
        "question": "What is the difference between `include` and `require`?",
        "options": {
            "A": "`require` stops script execution on failure, `include` does not.",
            "B": "`include` stops script execution on failure, `require` does not.",
            "C": "Both `include` and `require` behave the same.",
            "D": "`include` is faster than `require`."
        },
        "correctAnswer": "A",
        "explanation": "`require` stops script execution if the file is not found, while `include` only throws a warning and continues."
    },
    {
        "question": "What will the following code output?\n```php\n$a = '10';\n$b = 10;\necho $a === $b ? 'true' : 'false';\n```",
        "options": {
            "A": "true",
            "B": "false",
            "C": "1",
            "D": "Error"
        },
        "correctAnswer": "B",
        "explanation": "The `===` operator checks for both value and type equality. Since `'10'` is a string and `10` is an integer, they are not strictly equal."
    },
    {
        "question": "How do you check the type of a variable in PHP?",
        "options": {
            "A": "gettype()",
            "B": "typeof()",
            "C": "var_type()",
            "D": "is_type()"
        },
        "correctAnswer": "A",
        "explanation": "`gettype()` returns the type of a variable in PHP."
    },
    {
        "question": "Which of the following will correctly start a PHP session?",
        "options": {
            "A": "session_start()",
            "B": "session_begin()",
            "C": "start_session()",
            "D": "session_init()"
        },
        "correctAnswer": "A",
        "explanation": "`session_start()` is used to start a session in PHP."
    },
    {
        "question": "What does the `explode()` function do?",
        "options": {
            "A": "Splits a string by a delimiter into an array.",
            "B": "Joins an array into a string.",
            "C": "Removes whitespaces from a string.",
            "D": "Replaces part of a string."
        },
        "correctAnswer": "A",
        "explanation": "`explode()` splits a string by a specified delimiter and returns an array."
    },
    {
        "question": "What is the output of the following code?\n```php\necho 10 + '5';\n```",
        "options": {
            "A": "15",
            "B": "105",
            "C": "Error",
            "D": "10"
        },
        "correctAnswer": "A",
        "explanation": "PHP automatically converts the string `'5'` into an integer for the arithmetic operation, resulting in `10 + 5 = 15`."
    },
    {
        "question": "How do you declare a constant in PHP?",
        "options": {
            "A": "const MY_CONSTANT = 10;",
            "B": "define('MY_CONSTANT', 10);",
            "C": "Both A and B",
            "D": "None of the above"
        },
        "correctAnswer": "C",
        "explanation": "PHP constants can be declared using both `const` and `define()`."
    },
    {
        "question": "Which of the following functions is used to sort an array in reverse order?",
        "options": {
            "A": "rsort()",
            "B": "reverse_sort()",
            "C": "sort_reverse()",
            "D": "array_reverse()"
        },
        "correctAnswer": "A",
        "explanation": "`rsort()` sorts an array in reverse order."
    },
    {
        "question": "How do you access elements of an associative array in PHP?",
        "options": {
            "A": "$array->key",
            "B": "$array[key]",
            "C": "$array[key]",
            "D": "$array['key']"
        },
        "correctAnswer": "D",
        "explanation": "Elements in an associative array are accessed using `['key']` notation in PHP."
    },
    {
        "question": "What will the following code output?\n```php\n$a = 5;\n$b = &$a;\n$b = 10;\necho $a;\n```",
        "options": {
            "A": "5",
            "B": "10",
            "C": "Error",
            "D": "Nothing"
        },
        "correctAnswer": "B",
        "explanation": "`$b` is a reference to `$a`. Changing `$b` affects `$a`, so the output is `10`."
    },
    {
        "question": "What will be the result of this code?\n```php\n$a = 5;\n$b = &$a;\n$b = 10;\necho $a;\n```",
        "options": {
            "A": "5",
            "B": "10",
            "C": "Error",
            "D": "Undefined"
        },
        "correctAnswer": "B",
        "explanation": "$b is a reference to $a, so changing $b will also change $a. The output is 10."
    },
    {
        "question": "Which function is used to sort an associative array by its keys?",
        "options": {
            "A": "asort()",
            "B": "ksort()",
            "C": "arsort()",
            "D": "usort()"
        },
        "correctAnswer": "B",
        "explanation": "`ksort()` sorts an associative array by its keys in ascending order."
    },
    {
        "question": "What is the purpose of the `is_null()` function?",
        "options": {
            "A": "Checks if a variable has been unset.",
            "B": "Checks if a variable is equal to zero.",
            "C": "Checks if a variable is null.",
            "D": "Checks if a variable is empty."
        },
        "correctAnswer": "C",
        "explanation": "`is_null()` checks whether a variable is null."
    },
    {
        "question": "What will be the result of this code?\n```php\n$x = 5;\nif ($x === '5') {\n    echo 'Equal';\n} else {\n    echo 'Not Equal';\n}\n```",
        "options": {
            "A": "Equal",
            "B": "Not Equal",
            "C": "Error",
            "D": "Undefined"
        },
        "correctAnswer": "B",
        "explanation": "The `===` operator checks for both value and type, and since one is an integer and the other a string, they are not equal."
    },
    {
        "question": "Which of the following is true about `require` in PHP?",
        "options": {
            "A": "It only includes a file if it's not already included.",
            "B": "It generates a warning if the file is not found.",
            "C": "It generates a fatal error if the file is not found.",
            "D": "It does not check for the existence of the file."
        },
        "correctAnswer": "C",
        "explanation": "`require` generates a fatal error if the file is not found, stopping script execution."
    },
    {
        "question": "What will be the result of this code?\n```php\n$x = 10;\nfunction test() {\n    global $x;\n    echo $x;\n}\ntest();\n```",
        "options": {
            "A": "Error",
            "B": "10",
            "C": "Undefined",
            "D": "0"
        },
        "correctAnswer": "B",
        "explanation": "The `global` keyword allows access to the global variable `$x` inside the function."
    },
    {
        "question": "How can you concatenate two strings in PHP?",
        "options": {
            "A": "$str1 . $str2",
            "B": "$str1 + $str2",
            "C": "$str1 . + $str2",
            "D": "$str1 & $str2"
        },
        "correctAnswer": "A",
        "explanation": "The concatenation operator `.` is used to concatenate two strings in PHP."
    },
    {
        "question": "What is the output of this code?\n```php\necho strpos('hello world', 'world');\n```",
        "options": {
            "A": "5",
            "B": "6",
            "C": "Error",
            "D": "0"
        },
        "correctAnswer": "A",
        "explanation": "`strpos()` returns the position of the first occurrence of a substring. 'world' starts at position 6 (0-based index)."
    },
    {
        "question": "Which of the following is a correct way to check if a file exists?",
        "options": {
            "A": "`file_exists()`",
            "B": "`is_file()`",
            "C": "`exists()`",
            "D": "`find_file()`"
        },
        "correctAnswer": "A",
        "explanation": "`file_exists()` is used to check whether a file or directory exists."
    },
    {
        "question": "How would you define a constant in PHP?",
        "options": {
            "A": "`const NAME = 'value';`",
            "B": "`constant NAME = 'value';`",
            "C": "`define('NAME', 'value');`",
            "D": "`NAME = 'value';`"
        },
        "correctAnswer": "C",
        "explanation": "`define('NAME', 'value')` is used to define a constant in PHP."
    },
    {
        "question": "What will the following code output?\n```php\n$numbers = [1, 2, 3];\narray_push($numbers, 4, 5);\nprint_r($numbers);\n```",
        "options": {
            "A": "[1, 2, 3, 4]",
            "B": "[1, 2, 3, 4, 5]",
            "C": "[4, 5, 1, 2, 3]",
            "D": "[1, 2, 4, 5]"
        },
        "correctAnswer": "B",
        "explanation": "`array_push()` adds elements to the end of an array. The resulting array is `[1, 2, 3, 4, 5]`."
    },
    {
        "question": "Which function is used to check if a variable is set?",
        "options": {
            "A": "isset()",
            "B": "empty()",
            "C": "is_null()",
            "D": "is_set()"
        },
        "correctAnswer": "A",
        "explanation": "`isset()` checks if a variable is set and not null."
    },
    {
        "question": "What will this code output?\n```php\n$array = ['a', 'b', 'c'];\nforeach ($array as &$val) {\n    $val = strtoupper($val);\n}\necho implode(', ', $array);\n```",
        "options": {
            "A": "'a, b, c'",
            "B": "'A, B, C'",
            "C": "Error",
            "D": "undefined"
        },
        "correctAnswer": "B",
        "explanation": "The `strtoupper()` function converts each element to uppercase. The output will be 'A, B, C'."
    },
    {
        "question": "What will the following code output?\n```php\n$numbers = [5, 3, 9];\nsort($numbers);\nprint_r($numbers);\n```",
        "options": {
            "A": "[9, 5, 3]",
            "B": "[3, 5, 9]",
            "C": "[5, 3, 9]",
            "D": "Error"
        },
        "correctAnswer": "B",
        "explanation": "`sort()` sorts an array in ascending order. The output will be `[3, 5, 9]`."
    },
    {
        "question": "Which function is used to split a string into an array?",
        "options": {
            "A": "explode()",
            "B": "implode()",
            "C": "split()",
            "D": "array_slice()"
        },
        "correctAnswer": "A",
        "explanation": "`explode()` is used to split a string into an array based on a delimiter."
    },
    {
        "question": "What will this code output?\n```php\n$a = [1, 2, 3];\n$b = [4, 5, 6];\n$merged = array_merge($a, $b);\nprint_r($merged);\n```",
        "options": {
            "A": "[4, 5, 6, 1, 2, 3]",
            "B": "[1, 2, 3, 4, 5, 6]",
            "C": "Error",
            "D": "[1, 2, 4, 5, 6]"
        },
        "correctAnswer": "B",
        "explanation": "`array_merge()` combines two or more arrays. The resulting array will be `[1, 2, 3, 4, 5, 6]`."
    },
    {
        "question": "What does the `empty()` function check?",
        "options": {
            "A": "If a variable is set",
            "B": "If a variable contains an empty value",
            "C": "If a variable is of type string",
            "D": "If a variable is null"
        },
        "correctAnswer": "B",
        "explanation": "`empty()` checks whether a variable contains an empty value (like 0, '', null, or false)."
    },
    {
        "question": "What will this code output?\n```php\n$str = 'Hello, World!';\necho strlen($str);\n```",
        "options": {
            "A": "12",
            "B": "13",
            "C": "14",
            "D": "Error"
        },
        "correctAnswer": "B",
        "explanation": "`strlen()` returns the length of a string. The string 'Hello, World!' has 13 characters."
    },
    {
        "question": "What will this code output?\n```php\n$a = 5;\n$b = $a + '10';\necho $b;\n```",
        "options": {
            "A": "15",
            "B": "Error",
            "C": "510",
            "D": "Undefined"
        },
        "correctAnswer": "A",
        "explanation": "PHP automatically converts the string '10' to an integer, so the result is 15."
    },
    {
        "question": "Which PHP function can be used to include a file and prevent execution of the rest of the script on failure?",
        "options": {
            "A": "include()",
            "B": "require()",
            "C": "include_once()",
            "D": "require_once()"
        },
        "correctAnswer": "B",
        "explanation": "`require()` stops the script execution if the file cannot be included."
    }
];