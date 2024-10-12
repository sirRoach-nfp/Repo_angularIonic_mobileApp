export const PHPintroduction = [
    {
      "exercise": 1,
      "title": "Hello World",
      "description": "Create a PHP script that outputs 'Hello, World!' to the browser.",
      "requirements": [
        "Use the echo statement to display the message."
      ],
      "hint": "<?php echo 'Hello, World!'; ?>"
    },
    {
      "exercise": 2,
      "title": "Variables and Data Types",
      "description": "Declare variables of different data types and display their values.",
      "requirements": [
        "Include at least one string, integer, float, and boolean."
      ],
      "hint": "$name = 'John'; $age = 25; $height = 5.9; $isStudent = true;"
    },
    {
      "exercise": 3,
      "title": "Simple Calculator",
      "description": "Create a PHP script that performs basic arithmetic operations.",
      "requirements": [
        "Take two numbers as input and display the results of addition, subtraction, multiplication, and division."
      ],
      "hint": "Use +, -, *, / operators."
    },
    {
      "exercise": 4,
      "title": "Even or Odd",
      "description": "Write a PHP script that checks if a number is even or odd.",
      "requirements": [
        "Use an if-else statement to determine the result."
      ],
      "hint": "Use the modulo operator (%) to check for evenness."
    },
    {
      "exercise": 5,
      "title": "Switch Statement",
      "description": "Create a script that uses a switch statement to determine the day of the week.",
      "requirements": [
        "Output the name of the day based on a number (1-7)."
      ],
      "hint": "Use switch case for days of the week."
    },
    {
      "exercise": 6,
      "title": "Loops",
      "description": "Write a script that uses a for loop to display numbers from 1 to 10.",
      "requirements": [
        "Use echo to print each number on a new line."
      ],
      "hint": "Use a for loop with the condition i <= 10."
    },
    {
      "exercise": 7,
      "title": "Array Iteration",
      "description": "Create an array of fruits and display them using a foreach loop.",
      "requirements": [
        "Include at least 5 different fruits in the array."
      ],
      "hint": "$fruits = array('Apple', 'Banana', 'Orange', 'Grape', 'Mango');"
    },
    {
      "exercise": 8,
      "title": "Function Definition",
      "description": "Define a function that takes two numbers and returns their sum.",
      "requirements": [
        "Call the function and display the result."
      ],
      "hint": "function add($a, $b) { return $a + $b; }"
    },
    {
      "exercise": 9,
      "title": "String Concatenation",
      "description": "Create a script that concatenates two strings and displays the result.",
      "requirements": [
        "Use the . operator to join the strings."
      ],
      "hint": "$str1 = 'Hello'; $str2 = 'World'; $result = $str1 . ' ' . $str2;"
    },
    {
      "exercise": 10,
      "title": "Basic Array Manipulation",
      "description": "Create an array and add, remove, and display its elements.",
      "requirements": [
        "Use array functions like array_push() and array_pop()."
      ],
      "hint": "$array = array(); array_push($array, 'item1');"
    },
    {
      "exercise": 11,
      "title": "Associative Arrays",
      "description": "Create an associative array to store a person's information and display it.",
      "requirements": [
        "Include keys like 'name', 'age', and 'email'."
      ],
      "hint": "$person = array('name' => 'John', 'age' => 25, 'email' => 'john@example.com');"
    },
    {
      "exercise": 12,
      "title": "Basic Regular Expressions",
      "description": "Create a script that checks if a string matches a specific pattern using regex.",
      "requirements": [
        "Use preg_match to validate an email format."
      ],
      "hint": "if (preg_match('/^.+@.+\..+$/', $email)) { echo 'Valid'; }"
    },
    {
      "exercise": 13,
      "title": "Basic OOP Concepts",
      "description": "Create a simple class with properties and methods.",
      "requirements": [
        "Instantiate the class and call its methods."
      ],
      "hint": "class Car { public $color; public function honk() { return 'Beep!'; } }"
    },
    {
      "exercise": 14,
      "title": "Using Constants",
      "description": "Define and use a constant in a PHP script.",
      "requirements": [
        "Display the constant value."
      ],
      "hint": "define('PI', 3.14); echo PI;"
    },
    {
      "exercise": 15,
      "title": "Basic File Handling",
      "description": "Create a PHP script that writes to a file and reads from it.",
      "requirements": [
        "Handle file open and close operations properly."
      ],
      "hint": "$file = fopen('file.txt', 'w'); fwrite($file, 'Hello'); fclose($file);"
    },
    {
      "exercise": 16,
      "title": "Using include",
      "description": "Create a main PHP file that includes another PHP file.",
      "requirements": [
        "Use include to include the external file."
      ],
      "hint": "include 'file.php';"
    },
    {
      "exercise": 17,
      "title": "Basic Error Handling",
      "description": "Write a script that demonstrates basic error handling using try-catch.",
      "requirements": [
        "Throw an exception and catch it to display an error message."
      ],
      "hint": "throw new Exception('Error message');"
    },
    {
      "exercise": 18,
      "title": "Simple HTML Form Handling",
      "description": "Create a form that submits data to a PHP script and displays it.",
      "requirements": [
        "Use POST method to submit the form."
      ],
      "hint": "<form method='post'><input type='text' name='name'><input type='submit'></form>"
    },
    {
      "exercise": 19,
      "title": "Basic Session Management",
      "description": "Create a script that starts a session and stores a session variable.",
      "requirements": [
        "Display the session variable on another page."
      ],
      "hint": "session_start(); $_SESSION['user'] = 'John';"
    },
    {
      "exercise": 20,
      "title": "Date and Time",
      "description": "Display the current date and time in a specific format.",
      "requirements": [
        "Use the date() function to format the date."
      ],
      "hint": "echo date('Y-m-d H:i:s');"
    }
  ]
  