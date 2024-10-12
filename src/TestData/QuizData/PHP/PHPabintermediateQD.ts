export const PHPabintermediateQD = [
    {
        "question": "What will the following code output?\n```php\nclass Foo {\n    public $bar = 'baz';\n    public function __construct() {\n        $this->bar = function() {\n            return 'Hello World!';\n        };\n    }\n}\n$foo = new Foo();\n$bar = $foo->bar;\necho $bar();\n```",
        "options": {
            "A": "'baz'",
            "B": "'Hello World!'",
            "C": "Error",
            "D": "Nothing"
        },
        "correctAnswer": "B",
        "explanation": "The `__construct()` method reassigns `$this->bar` to an anonymous function. Invoking `$bar()` executes the anonymous function, which returns 'Hello World!'."
    },
    {
        "question": "What is the result of this code?\n```php\n$test = '123test';\necho (int)$test + 10;\n```",
        "options": {
            "A": "133",
            "B": "123",
            "C": "Error",
            "D": "10"
        },
        "correctAnswer": "A",
        "explanation": "PHP casts '123test' to `123` because the string starts with numbers, and `123 + 10 = 133`."
    },
    {
        "question": "Which magic method is invoked when an object is serialized?",
        "options": {
            "A": "__serialize()",
            "B": "__sleep()",
            "C": "__wakeup()",
            "D": "__toString()"
        },
        "correctAnswer": "B",
        "explanation": "`__sleep()` is called when an object is serialized. It allows you to specify which properties should be serialized."
    },
    {
        "question": "What will be the output of the following code?\n```php\n$a = [1, 2, 3];\n$b = $a;\n$b[] = 4;\necho count($a);\n```",
        "options": {
            "A": "3",
            "B": "4",
            "C": "Error",
            "D": "Undefined"
        },
        "correctAnswer": "4",
        "explanation": "Both `$a` and `$b` refer to the same array by reference. Adding an element to `$b` also modifies `$a`, making its length 4."
    },
    {
        "question": "Which of the following is NOT a valid PHP interface feature?",
        "options": {
            "A": "Interfaces can declare constants.",
            "B": "Interfaces cannot contain any method implementations.",
            "C": "Interfaces can implement multiple interfaces.",
            "D": "Interfaces can declare private methods."
        },
        "correctAnswer": "D",
        "explanation": "Interfaces in PHP cannot declare private methods. All methods in an interface must be public."
    },
    {
        "question": "In PHP, how would you define a closure that accepts a variable by reference?",
        "options": {
            "A": "`function (&$var) {}`",
            "B": "`function ($var&) {}`",
            "C": "`function (ref $var) {}`",
            "D": "`function ($var*) {}`"
        },
        "correctAnswer": "A",
        "explanation": "In PHP, passing by reference in a closure is done using `&` before the variable."
    },
    {
        "question": "Which statement is true about `PDO::beginTransaction()`?",
        "options": {
            "A": "It starts a new transaction, which cannot be rolled back.",
            "B": "It begins a transaction that can be committed or rolled back.",
            "C": "It immediately commits changes made within the transaction.",
            "D": "It automatically commits if an exception occurs."
        },
        "correctAnswer": "B",
        "explanation": "`PDO::beginTransaction()` starts a transaction, allowing changes to be committed or rolled back."
    },
    {
        "question": "What is the difference between `PDOStatement::fetch()` and `PDOStatement::fetchAll()`?",
        "options": {
            "A": "`fetch()` returns a single row, `fetchAll()` returns all rows as an array.",
            "B": "`fetch()` fetches all rows, `fetchAll()` fetches a single row.",
            "C": "`fetch()` does not return associative arrays, `fetchAll()` does.",
            "D": "`fetch()` uses `PDO::FETCH_ASSOC` by default, while `fetchAll()` uses `PDO::FETCH_NUM`."
        },
        "correctAnswer": "A",
        "explanation": "`fetch()` returns a single row at a time, while `fetchAll()` returns all rows as an array."
    },
    {
        "question": "What does the `__invoke()` magic method do in PHP?",
        "options": {
            "A": "It allows an object to be called as a function.",
            "B": "It invokes a function asynchronously.",
            "C": "It handles undefined method calls.",
            "D": "It casts an object to a string."
        },
        "correctAnswer": "A",
        "explanation": "`__invoke()` allows an object to be called as a function, similar to a callable."
    },
    {
        "question": "What will be the output of the following code?\n```php\nfunction test() {\n    static $count = 0;\n    $count++;\n    echo $count;\n}\ntest();\ntest();\ntest();\n```",
        "options": {
            "A": "1 1 1",
            "B": "1 2 3",
            "C": "Error",
            "D": "Undefined"
        },
        "correctAnswer": "B",
        "explanation": "A static variable retains its value between function calls. So the output will be `1 2 3`."
    },
    {
        "question": "What is the primary use of the `ReflectionClass` class in PHP?",
        "options": {
            "A": "It is used for autoloading classes.",
            "B": "It provides introspection for classes and objects.",
            "C": "It is used to create class instances dynamically.",
            "D": "It serializes objects for storage."
        },
        "correctAnswer": "B",
        "explanation": "`ReflectionClass` is used to inspect class properties, methods, and structure at runtime."
    },
    {
        "question": "What will the following code output?\n```php\n$closure = function() {\n    return 'Closure!';\n};\necho $closure();\n```",
        "options": {
            "A": "Error",
            "B": "Closure!",
            "C": "Undefined",
            "D": "Nothing"
        },
        "correctAnswer": "B",
        "explanation": "The code defines an anonymous function (closure) and immediately calls it, returning 'Closure!'."
    },
    {
        "question": "Which of the following methods is used to prepare an SQL statement for execution in `PDO`?",
        "options": {
            "A": "`PDO::exec()`",
            "B": "`PDO::prepare()`",
            "C": "`PDO::bind()`",
            "D": "`PDO::execute()`"
        },
        "correctAnswer": "B",
        "explanation": "`PDO::prepare()` is used to prepare an SQL statement before execution."
    },
    {
        "question": "What is the difference between `array_merge()` and `array_combine()`?",
        "options": {
            "A": "`array_merge()` combines arrays, `array_combine()` combines keys and values from two arrays.",
            "B": "`array_combine()` merges two arrays, `array_merge()` combines two arrays into key-value pairs.",
            "C": "`array_merge()` creates a multidimensional array, `array_combine()` combines arrays linearly.",
            "D": "`array_merge()` works only with associative arrays, `array_combine()` with indexed arrays."
        },
        "correctAnswer": "A",
        "explanation": "`array_merge()` merges the contents of multiple arrays, while `array_combine()` uses one array as keys and another as values."
    },
    {
        "question": "What is a `final` method in PHP?",
        "options": {
            "A": "A method that cannot be overridden by subclasses.",
            "B": "A method that cannot be called more than once.",
            "C": "A method that is automatically invoked at the end of a script.",
            "D": "A method that cannot have parameters."
        },
        "correctAnswer": "A",
        "explanation": "`final` methods cannot be overridden by any child class, ensuring the method behavior remains unchanged."
    },
    {
        "question": "What does the `??` operator (null coalescing operator) do in PHP?",
        "options": {
            "A": "Returns the right operand if the left is NULL.",
            "B": "Checks if a variable is NULL.",
            "C": "Returns the left operand if it exists and is not NULL; otherwise, it returns the right operand.",
            "D": "Throws an error if the left operand is NULL."
        },
        "correctAnswer": "C",
        "explanation": "The null coalescing operator (`??`) returns the left operand if it's set and not NULL; otherwise, it returns the right operand."
    },
    {
        "question": "What will be the output of the following code?\n```php\ninterface Foo {\n    public function bar();\n}\nclass Baz implements Foo {\n    public function bar() {\n        echo 'Hello World';\n    }\n}\n$baz = new Baz();\n$baz->bar();\n```",
        "options": {
            "A": "Error",
            "B": "Nothing",
            "C": "Hello World",
            "D": "Undefined"
        },
        "correctAnswer": "C",
        "explanation": "The `Baz` class implements the `Foo` interface and defines the `bar()` method, which outputs 'Hello World'."
    },
    {
        "question": "What is the use of the `__autoload()` function in PHP?",
        "options": {
            "A": "Automatically loads class files.",
            "B": "Loads undefined variables.",
            "C": "Handles exceptions during runtime.",
            "D": "Automatically executes after every function call."
        },
        "correctAnswer": "A",
        "explanation": "`__autoload()` is a magic function that automatically loads a class when it's referenced, if it's not already included."
    },
    {
        "question": "What is the difference between `spl_autoload_register()` and `__autoload()`?",
        "options": {
            "A": "`spl_autoload_register()` allows multiple autoload functions, `__autoload()` supports only one.",
            "B": "`__autoload()` is faster.",
            "C": "`spl_autoload_register()` only loads built-in classes, `__autoload()` loads user-defined classes.",
            "D": "`spl_autoload_register()` is deprecated."
        },
        "correctAnswer": "A",
        "explanation": "`spl_autoload_register()` allows registering multiple autoload functions, whereas `__autoload()` supports only one function."
    },
    {
        "question": "Which of the following is a PHP 7 feature?",
        "options": {
            "A": "Type declarations for function arguments",
            "B": "Return type declarations",
            "C": "Anonymous classes",
            "D": "All of the above"
        },
        "correctAnswer": "D",
        "explanation": "PHP 7 introduced several features, including scalar type declarations, return type declarations, and anonymous classes."
    },
    {
        "question": "What will the following code output?\n```php\n$foo = 'hello';\n$$foo = 'world';\necho $foo . ' ' . $hello;\n```",
        "options": {
            "A": "'hello world'",
            "B": "'hello hello'",
            "C": "'hello '",
            "D": "Error"
        },
        "correctAnswer": "A",
        "explanation": "`$$foo` creates a variable `$hello` with the value 'world'. The output is 'hello world'."
    },
    {
        "question": "Which of the following does NOT cause the script to stop execution?",
        "options": {
            "A": "`die()`",
            "B": "`exit()`",
            "C": "`throw Exception`",
            "D": "`echo()`"
        },
        "correctAnswer": "D",
        "explanation": "`echo()` outputs a string and does not terminate script execution, unlike `die()`, `exit()`, or throwing an exception."
    },
    {
        "question": "What will be the result of this code?\n```php\n$numbers = [10, 20, 30];\n$filtered = array_filter($numbers, fn($n) => $n < 20);\nprint_r($filtered);\n```",
        "options": {
            "A": "[10, 20]",
            "B": "[10]",
            "C": "[0 => 10]",
            "D": "[10, 30]"
        },
        "correctAnswer": "C",
        "explanation": "The array filter will return elements that are less than 20. It retains keys from the original array, so it will output `[0 => 10]`."
    },
    {
        "question": "What will the following code output?\n```php\n$var1 = 'false';\n$var2 = false;\nif ($var1 == $var2) {\n    echo 'Equal';\n} else {\n    echo 'Not Equal';\n}\n```",
        "options": {
            "A": "Equal",
            "B": "Not Equal",
            "C": "Error",
            "D": "Undefined"
        },
        "correctAnswer": "A",
        "explanation": "When using `==`, PHP does loose comparison, and 'false' is evaluated as `false`, making them equal."
    },
    {
        "question": "Which PHP function is used to compare two arrays and return the values that are present in all arrays?",
        "options": {
            "A": "array_diff()",
            "B": "array_merge()",
            "C": "array_intersect()",
            "D": "array_combine()"
        },
        "correctAnswer": "C",
        "explanation": "`array_intersect()` compares two or more arrays and returns the values present in all arrays."
    },
    {
        "question": "What will the following code output?\n```php\nclass A {\n    public function test() {\n        echo get_class($this);\n    }\n}\nclass B extends A {}\n$object = new B();\n$object->test();\n```",
        "options": {
            "A": "A",
            "B": "B",
            "C": "Error",
            "D": "Undefined"
        },
        "correctAnswer": "B",
        "explanation": "`get_class($this)` returns the class name of the current object, which is `B`."
    },
    {
        "question": "Which statement is true about namespaces in PHP?",
        "options": {
            "A": "They allow for encapsulating classes, functions, and constants.",
            "B": "They can be declared multiple times in a single file.",
            "C": "They must be declared at the start of the file.",
            "D": "They are case-sensitive."
        },
        "correctAnswer": "A",
        "explanation": "Namespaces allow you to encapsulate related classes, functions, and constants, reducing name collisions in larger applications."
    },
    {
        "question": "What will be the output of the following code?\n```php\nfunction foo() {\n    static $count = 0;\n    echo $count++;\n}\nfoo();\nfoo();\nfoo();\n```",
        "options": {
            "A": "0 0 0",
            "B": "0 1 2",
            "C": "1 2 3",
            "D": "Error"
        },
        "correctAnswer": "B",
        "explanation": "Static variables retain their value between function calls. The output will be `0 1 2`."
    },
    {
        "question": "Which of the following is true regarding PHP traits?",
        "options": {
            "A": "A class can only use one trait.",
            "B": "Traits can contain both properties and methods.",
            "C": "Traits cannot be used with interfaces.",
            "D": "Traits must implement abstract methods."
        },
        "correctAnswer": "B",
        "explanation": "Traits can contain properties and methods, which can be used by any class that includes the trait."
    },
    {
        "question": "How does `PDO::ATTR_ERRMODE` affect error handling in PDO?",
        "options": {
            "A": "It controls the handling of errors when executing SQL queries.",
            "B": "It logs errors to the system log.",
            "C": "It retries the query on failure.",
            "D": "It suppresses warnings."
        },
        "correctAnswer": "A",
        "explanation": "`PDO::ATTR_ERRMODE` is used to define how PDO handles errors when executing SQL queries (e.g., by throwing exceptions)."
    },
    {
        "question": "Which of the following statements is true about closures in PHP?",
        "options": {
            "A": "Closures cannot use variables from the surrounding scope.",
            "B": "Closures cannot be passed as arguments to other functions.",
            "C": "Closures can be bound to an object using `bindTo()`.",
            "D": "Closures cannot return values."
        },
        "correctAnswer": "C",
        "explanation": "Closures can be bound to an object using the `bindTo()` method, which changes the scope and `$this` value."
    },
    {
        "question": "What will be the result of the following code?\n```php\nfunction greet($name) {\n    return 'Hello, ' . ucfirst($name) . '!';\n}\necho greet('john');\n```",
        "options": {
            "A": "Hello, John!",
            "B": "Hello, john!",
            "C": "Error",
            "D": "Undefined"
        },
        "correctAnswer": "A",
        "explanation": "`ucfirst()` capitalizes the first letter of a string. Therefore, the output will be 'Hello, John!'."
    },
    {
        "question": "What is the purpose of the `instanceof` keyword in PHP?",
        "options": {
            "A": "It is used to check if an object is an instance of a class or its subclass.",
            "B": "It checks if an object has a method.",
            "C": "It checks if an object is null.",
            "D": "It checks if a class implements an interface."
        },
        "correctAnswer": "A",
        "explanation": "`instanceof` checks if an object is an instance of a specific class or one of its subclasses."
    },
    {
        "question": "Which PHP function is used to return an array with the keys and values flipped?",
        "options": {
            "A": "array_flip()",
            "B": "array_reverse()",
            "C": "array_keys()",
            "D": "array_shift()"
        },
        "correctAnswer": "A",
        "explanation": "`array_flip()` returns an array with keys and values exchanged."
    },
    {
        "question": "What does the `error_log()` function do?",
        "options": {
            "A": "Logs errors to the system log or a custom file.",
            "B": "Displays errors in the browser.",
            "C": "Silences errors in the application.",
            "D": "Generates a backtrace."
        },
        "correctAnswer": "A",
        "explanation": "`error_log()` logs an error message to the system log or a specified file."
    },
    {
        "question": "What will be the output of this code?\n```php\n$sum = function ($a, $b) {\n    return $a + $b;\n};\necho $sum(5, 3);\n```",
        "options": {
            "A": "Error",
            "B": "8",
            "C": "53",
            "D": "Undefined"
        },
        "correctAnswer": "B",
        "explanation": "The anonymous function adds the two parameters and returns the result, which is `8`."
    },
    {
        "question": "How would you declare a function argument with a default value in PHP?",
        "options": {
            "A": "`function foo($bar = 'default') {}`",
            "B": "`function foo = ($bar) => {}`",
            "C": "`function foo $bar = 'default' {}`",
            "D": "`foo function($bar = 'default') {}`"
        },
        "correctAnswer": "A",
        "explanation": "In PHP, default argument values are set by assigning a value directly in the function signature."
    },
    {
        "question": "What is the use of `PDO::prepare()`?",
        "options": {
            "A": "Prepares an SQL statement for execution.",
            "B": "Executes an SQL statement immediately.",
            "C": "Commits a transaction.",
            "D": "Closes a database connection."
        },
        "correctAnswer": "A",
        "explanation": "`PDO::prepare()` is used to prepare an SQL statement for execution, allowing for safe query execution."
    },
    {
        "question": "What will this code output?\n```php\n$fruits = ['apple', 'banana', 'orange'];\nlist($a, $b) = $fruits;\necho $a . ' ' . $b;\n```",
        "options": {
            "A": "'apple banana'",
            "B": "'apple orange'",
            "C": "Error",
            "D": "Nothing"
        },
        "correctAnswer": "A",
        "explanation": "`list()` assigns array values to variables. The first two elements of `$fruits` are assigned to `$a` and `$b`, resulting in 'apple banana'."
    },
    {
        "question": "How do you add a new element to the beginning of an array in PHP?",
        "options": {
            "A": "array_unshift()",
            "B": "array_push()",
            "C": "array_merge()",
            "D": "array_shift()"
        },
        "correctAnswer": "A",
        "explanation": "`array_unshift()` adds an element to the beginning of an array."
    }
];