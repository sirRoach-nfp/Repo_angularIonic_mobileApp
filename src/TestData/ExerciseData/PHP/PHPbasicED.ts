export const PHPbasic = [
    {
      "exercise": 1,
      "title": "String Length",
      "description": "Write a PHP script that finds the length of a string.",
      "requirements": [
        "Use the strlen() function."
      ],
      "hint": "$str = 'Hello'; $length = strlen($str);"
    },
    {
      "exercise": 2,
      "title": "String Replacement",
      "description": "Create a PHP script that replaces a word in a string with another word.",
      "requirements": [
        "Use the str_replace() function."
      ],
      "hint": "$newStr = str_replace('world', 'PHP', 'Hello world');"
    },
    {
      "exercise": 3,
      "title": "String Case Conversion",
      "description": "Write a script to convert a string to uppercase and lowercase.",
      "requirements": [
        "Use strtoupper() and strtolower() functions."
      ],
      "hint": "$upper = strtoupper('hello'); $lower = strtolower('WORLD');"
    },
    {
      "exercise": 4,
      "title": "Random Number Generation",
      "description": "Create a PHP script that generates a random number between 1 and 100.",
      "requirements": [
        "Use the rand() function."
      ],
      "hint": "$randomNumber = rand(1, 100);"
    },
    {
      "exercise": 5,
      "title": "Simple Interest Calculation",
      "description": "Write a PHP script to calculate simple interest.",
      "requirements": [
        "Use the formula: SI = (P * R * T) / 100."
      ],
      "hint": "$P = 1000; $R = 5; $T = 2; $SI = ($P * $R * $T) / 100;"
    },
    {
      "exercise": 6,
      "title": "Array Sorting",
      "description": "Create an array of numbers and sort it in ascending order.",
      "requirements": [
        "Use the sort() function."
      ],
      "hint": "$numbers = array(5, 3, 8, 1); sort($numbers);"
    },
    {
      "exercise": 7,
      "title": "Finding Maximum Number",
      "description": "Write a script to find the maximum number in an array.",
      "requirements": [
        "Use the max() function."
      ],
      "hint": "$numbers = array(1, 2, 3, 4); $max = max($numbers);"
    },
    {
      "exercise": 8,
      "title": "Basic Authentication",
      "description": "Create a simple username and password check.",
      "requirements": [
        "Use an if statement to validate the username and password."
      ],
      "hint": "$username = 'admin'; $password = '12345';"
    },
    {
      "exercise": 9,
      "title": "Countdown Loop",
      "description": "Write a script that counts down from 10 to 1.",
      "requirements": [
        "Use a while loop."
      ],
      "hint": "$count = 10; while ($count > 0) { echo $count; $count--; }"
    },
    {
      "exercise": 10,
      "title": "Grade Calculator",
      "description": "Create a PHP script that calculates the grade based on a score.",
      "requirements": [
        "Use if-else statements for grading."
      ],
      "hint": "$score = 85; if ($score >= 90) { echo 'A'; } else if ($score >= 80) { echo 'B'; }"
    },
    {
      "exercise": 11,
      "title": "Email Validation",
      "description": "Write a script to validate an email address format.",
      "requirements": [
        "Use the filter_var() function."
      ],
      "hint": "$email = 'test@example.com'; if (filter_var($email, FILTER_VALIDATE_EMAIL)) { echo 'Valid'; }"
    },
    {
      "exercise": 12,
      "title": "File Existence Check",
      "description": "Create a script to check if a file exists.",
      "requirements": [
        "Use the file_exists() function."
      ],
      "hint": "$file = 'test.txt'; if (file_exists($file)) { echo 'File exists'; }"
    },
    {
      "exercise": 13,
      "title": "Reading from a File",
      "description": "Write a script to read the contents of a file.",
      "requirements": [
        "Use fopen() and fread() functions."
      ],
      "hint": "$file = fopen('test.txt', 'r'); $content = fread($file, filesize('test.txt')); fclose($file);"
    },
    {
      "exercise": 14,
      "title": "Creating a Simple HTML Form",
      "description": "Create an HTML form that submits to a PHP script.",
      "requirements": [
        "Include input fields for name and email."
      ],
      "hint": "<form method='post'><input type='text' name='name'><input type='email' name='email'><input type='submit'></form>"
    },
    {
      "exercise": 15,
      "title": "Date Formatting",
      "description": "Write a script to display the current date in a specific format.",
      "requirements": [
        "Use the date() function."
      ],
      "hint": "echo date('Y-m-d');"
    },
    {
      "exercise": 16,
      "title": "Using Sessions",
      "description": "Create a PHP script that starts a session and sets a session variable.",
      "requirements": [
        "Display the session variable on another page."
      ],
      "hint": "session_start(); $_SESSION['username'] = 'John';"
    },
    {
      "exercise": 17,
      "title": "Basic Cookie Handling",
      "description": "Create a script to set and retrieve a cookie.",
      "requirements": [
        "Display the cookie value on the page."
      ],
      "hint": "setcookie('user', 'John', time() + 3600);"
    },
    {
      "exercise": 18,
      "title": "Basic Search Functionality",
      "description": "Create a simple search script that looks for a keyword in an array.",
      "requirements": [
        "Return whether the keyword exists."
      ],
      "hint": "$fruits = array('apple', 'banana', 'orange'); if (in_array('banana', $fruits)) { echo 'Found'; }"
    },
    {
      "exercise": 19,
      "title": "Simple HTML Table",
      "description": "Create a PHP script that generates a simple HTML table.",
      "requirements": [
        "Use a nested loop to create rows and columns."
      ],
      "hint": "for ($i = 1; $i <= 5; $i++) { echo '<tr>'; for ($j = 1; $j <= 5; $j++) { echo '<td>'.$j.'</td>'; } echo '</tr>'; }"
    },
    {
      "exercise": 20,
      "title": "Password Hashing",
      "description": "Write a script to hash a password using password_hash() and verify it.",
      "requirements": [
        "Use password_hash() and password_verify() functions."
      ],
      "hint": "$password = 'mypassword'; $hashed = password_hash($password, PASSWORD_DEFAULT);"
    }
  ]
  