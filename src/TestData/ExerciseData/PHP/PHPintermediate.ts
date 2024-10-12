export const PHPintermediate = [
    {
      "exercise": 1,
      "title": "Associative Arrays",
      "description": "Create an associative array to store the names and ages of three people and display them.",
      "requirements": [
        "Use a foreach loop to iterate through the array."
      ],
      "hint": "$people = ['Alice' => 30, 'Bob' => 25, 'Charlie' => 35]; foreach ($people as $name => $age) { echo \"$name is $age years old.\"; }"
    },
    {
      "exercise": 2,
      "title": "File Upload",
      "description": "Create a PHP script that allows users to upload a file and save it to the server.",
      "requirements": [
        "Validate the file type and size."
      ],
      "hint": "<form method='post' enctype='multipart/form-data'> <input type='file' name='file'> <input type='submit'></form>"
    },
    {
      "exercise": 3,
      "title": "Creating a Class",
      "description": "Define a class 'Car' with properties and methods to get and set the make and model.",
      "requirements": [
        "Include a constructor and methods for each property."
      ],
      "hint": "class Car { public $make; public $model; function __construct($make, $model) { $this->make = $make; $this->model = $model; }}"
    },
    {
      "exercise": 4,
      "title": "Database Connection",
      "description": "Write a script to connect to a MySQL database using PDO.",
      "requirements": [
        "Handle any exceptions that occur during the connection."
      ],
      "hint": "$pdo = new PDO('mysql:host=localhost;dbname=test', 'username', 'password');"
    },
    {
      "exercise": 5,
      "title": "CRUD Operations",
      "description": "Create a PHP script to perform basic CRUD operations on a database table.",
      "requirements": [
        "Use prepared statements for security."
      ],
      "hint": "$stmt = $pdo->prepare('INSERT INTO users (name) VALUES (:name)'); $stmt->execute([':name' => $name]);"
    },
    {
      "exercise": 6,
      "title": "Error Handling",
      "description": "Write a script that demonstrates error handling using try-catch blocks.",
      "requirements": [
        "Throw an exception and catch it to display an error message."
      ],
      "hint": "try { throw new Exception('Error occurred!'); } catch (Exception $e) { echo $e->getMessage(); }"
    },
    {
      "exercise": 7,
      "title": "Regular Expressions",
      "description": "Use regular expressions to validate an email address format.",
      "requirements": [
        "Use preg_match() to check the format."
      ],
      "hint": "$email = 'test@example.com'; if (preg_match('/^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$/', $email)) { echo 'Valid email'; }"
    },
    {
      "exercise": 8,
      "title": "Session Management",
      "description": "Create a login script that uses sessions to keep track of user authentication.",
      "requirements": [
        "Start a session and set session variables upon login."
      ],
      "hint": "session_start(); $_SESSION['user'] = 'John';"
    },
    {
      "exercise": 9,
      "title": "Using Composer",
      "description": "Create a PHP script that utilizes an external library using Composer.",
      "requirements": [
        "Require a library in your composer.json file."
      ],
      "hint": "require 'vendor/autoload.php';"
    },
    {
      "exercise": 10,
      "title": "Implementing Interfaces",
      "description": "Define an interface 'Shape' with methods for area and perimeter, and implement it in a class 'Circle'.",
      "requirements": [
        "Use the Math constant M_PI."
      ],
      "hint": "interface Shape { public function area(); public function perimeter(); } class Circle implements Shape { private $radius; function __construct($radius) { $this->radius = $radius; } public function area() { return M_PI * ($this->radius ** 2); } public function perimeter() { return 2 * M_PI * $this->radius; }}"
    },
    {
      "exercise": 11,
      "title": "Sending Emails",
      "description": "Write a PHP script to send an email using the mail() function.",
      "requirements": [
        "Use valid headers."
      ],
      "hint": "mail('recipient@example.com', 'Subject', 'Message', 'From: sender@example.com');"
    },
    {
      "exercise": 12,
      "title": "Basic API Request",
      "description": "Create a PHP script that sends a GET request to an API and retrieves JSON data.",
      "requirements": [
        "Use file_get_contents() or cURL."
      ],
      "hint": "$response = file_get_contents('https://api.example.com/data'); $data = json_decode($response, true);"
    },
    {
      "exercise": 13,
      "title": "Data Validation",
      "description": "Write a script that validates form data using filter_var() for various types.",
      "requirements": [
        "Validate email, URL, and integers."
      ],
      "hint": "$email = 'test@example.com'; if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { echo 'Invalid email'; }"
    },
    {
      "exercise": 14,
      "title": "Creating Custom Exceptions",
      "description": "Define a custom exception class and throw it when a certain condition is met.",
      "requirements": [
        "Catch the custom exception and display a message."
      ],
      "hint": "class MyException extends Exception {} try { throw new MyException('Custom error'); } catch (MyException $e) { echo $e->getMessage(); }"
    },
    {
      "exercise": 15,
      "title": "Array Functions",
      "description": "Use array functions to manipulate an array, such as merging and slicing.",
      "requirements": [
        "Use array_merge() and array_slice()."
      ],
      "hint": "$array1 = [1, 2, 3]; $array2 = [4, 5]; $merged = array_merge($array1, $array2); $sliced = array_slice($merged, 0, 3);"
    },
    {
      "exercise": 16,
      "title": "Implementing Traits",
      "description": "Define a trait 'Logger' and use it in a class to log messages.",
      "requirements": [
        "Demonstrate how to use the trait."
      ],
      "hint": "trait Logger { public function log($message) { echo $message; }} class MyClass { use Logger; }"
    },
    {
      "exercise": 17,
      "title": "Generating Random Data",
      "description": "Create a script that generates random user data (name, email) and stores it in an array.",
      "requirements": [
        "Use a loop to generate multiple users."
      ],
      "hint": "function generateRandomUser() { return ['name' => 'User'.rand(1, 100), 'email' => 'user@example.com']; }"
    },
    {
      "exercise": 18,
      "title": "Using cURL",
      "description": "Write a script to perform a POST request using cURL.",
      "requirements": [
        "Set options for the cURL request."
      ],
      "hint": "$ch = curl_init(); curl_setopt($ch, CURLOPT_URL, 'https://api.example.com/post'); curl_setopt($ch, CURLOPT_POST, 1);"
    },
    {
      "exercise": 19,
      "title": "Implementing Pagination",
      "description": "Create a simple pagination script that displays results from an array.",
      "requirements": [
        "Limit the results displayed per page."
      ],
      "hint": "$page = 1; $resultsPerPage = 10; $start = ($page - 1) * $resultsPerPage; $paginatedResults = array_slice($array, $start, $resultsPerPage);"
    },
    {
      "exercise": 20,
      "title": "XML Parsing",
      "description": "Write a PHP script to parse an XML file and extract specific data.",
      "requirements": [
        "Use SimpleXML to handle the XML data."
      ],
      "hint": "$xml = simplexml_load_file('data.xml'); $value = $xml->element[0]->value;"
    }
  ]
  