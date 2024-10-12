export const JavaIntermediateQD = [
    {
        "question": "What is the output of the following code: `System.out.println(10 + 20 + \"Java\" + 30 + 40);`?",
        "options": {
            "A": "Java3040",
            "B": "30Java3040",
            "C": "10Java3030",
            "D": "Java3040"
        },
        "correctAnswer": "A",
        "explanation": "The addition is performed left to right, so it first evaluates `10 + 20`, then concatenates the string 'Java', resulting in '30Java3040'."
    },
    {
        "question": "Which of the following is not a Java primitive data type?",
        "options": {
            "A": "int",
            "B": "boolean",
            "C": "String",
            "D": "char"
        },
        "correctAnswer": "C",
        "explanation": "In Java, `String` is an object, while `int`, `boolean`, and `char` are primitive data types."
    },
    {
        "question": "What is the purpose of the `final` keyword in Java?",
        "options": {
            "A": "To define a constant variable.",
            "B": "To prevent method overriding.",
            "C": "To prevent inheritance of a class.",
            "D": "All of the above."
        },
        "correctAnswer": "D",
        "explanation": "The `final` keyword can be used to define constants, prevent method overriding, and prevent inheritance."
    },
    {
        "question": "What will be the output of the following code: `System.out.println(\"Hello\" == \"Hello\");`?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "Compilation Error",
            "D": "Runtime Error"
        },
        "correctAnswer": "A",
        "explanation": "String literals in Java are interned, so `\"Hello\" == \"Hello\"` returns true."
    },
    {
        "question": "Which method is used to start a thread in Java?",
        "options": {
            "A": "run()",
            "B": "start()",
            "C": "execute()",
            "D": "begin()"
        },
        "correctAnswer": "B",
        "explanation": "The `start()` method is used to start a thread in Java."
    },
    {
        "question": "What is the default value of a boolean variable in Java?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "0",
            "D": "null"
        },
        "correctAnswer": "B",
        "explanation": "The default value of a boolean variable in Java is `false`."
    },
    {
        "question": "Which collection class is used to store elements in a key-value pair?",
        "options": {
            "A": "ArrayList",
            "B": "HashSet",
            "C": "HashMap",
            "D": "LinkedList"
        },
        "correctAnswer": "C",
        "explanation": "The `HashMap` class is used to store elements in key-value pairs."
    },
    {
        "question": "What will be the output of the following code: `int[] arr = {1, 2, 3}; System.out.println(arr.length);`?",
        "options": {
            "A": "2",
            "B": "3",
            "C": "1",
            "D": "Compilation Error"
        },
        "correctAnswer": "B",
        "explanation": "The `length` property of an array returns the number of elements in the array, which is 3."
    },
    {
        "question": "Which of the following is a valid way to declare an array in Java?",
        "options": {
            "A": "int arr[];",
            "B": "int[] arr;",
            "C": "int arr = new int[10];",
            "D": "All of the above."
        },
        "correctAnswer": "D",
        "explanation": "All the options are valid ways to declare an array in Java."
    },
    {
        "question": "What is the output of the following code: `System.out.println(10 / 4);`?",
        "options": {
            "A": "2",
            "B": "2.5",
            "C": "2.0",
            "D": "Compilation Error"
        },
        "correctAnswer": "A",
        "explanation": "In integer division, the fractional part is discarded, so `10 / 4` results in `2`."
    },
    {
        "question": "What is the purpose of the `this` keyword in Java?",
        "options": {
            "A": "Refers to the current class.",
            "B": "Refers to the current object.",
            "C": "Used to call a constructor.",
            "D": "None of the above."
        },
        "correctAnswer": "B",
        "explanation": "`this` keyword is a reference to the current object in a method or constructor."
    },
    {
        "question": "Which exception is thrown when an array is accessed with an illegal index?",
        "options": {
            "A": "NullPointerException",
            "B": "ArrayIndexOutOfBoundsException",
            "C": "ClassCastException",
            "D": "IllegalArgumentException"
        },
        "correctAnswer": "B",
        "explanation": "ArrayIndexOutOfBoundsException is thrown when an invalid index is used to access an array."
    },
    {
        "question": "Which of the following is not a valid access modifier in Java?",
        "options": {
            "A": "public",
            "B": "private",
            "C": "protected",
            "D": "internal"
        },
        "correctAnswer": "D",
        "explanation": "The access modifiers in Java are `public`, `private`, and `protected`. `internal` is not a valid modifier."
    },
    {
        "question": "Which of the following statements is true about the `super` keyword?",
        "options": {
            "A": "It refers to the superclass constructor.",
            "B": "It refers to the current class.",
            "C": "It can only be used in static methods.",
            "D": "It refers to the parent class object."
        },
        "correctAnswer": "A",
        "explanation": "`super` keyword is used to refer to the superclass constructor and access superclass methods or fields."
    },
    {
        "question": "What will be the output of the following code: `System.out.println(\"Hello\" + null);`?",
        "options": {
            "A": "Hello",
            "B": "Hellonull",
            "C": "null",
            "D": "Compilation Error"
        },
        "correctAnswer": "B",
        "explanation": "Concatenating a string with `null` results in the string followed by 'null'."
    },
    {
        "question": "What is the difference between `==` and `.equals()` in Java?",
        "options": {
            "A": "== compares references, while .equals() compares values.",
            "B": ".equals() compares references, while == compares values.",
            "C": "There is no difference.",
            "D": "== is used for primitives only."
        },
        "correctAnswer": "A",
        "explanation": "`==` compares object references, while `.equals()` compares the values of the objects."
    },
    {
        "question": "What is the purpose of the `static` keyword?",
        "options": {
            "A": "To create instance variables.",
            "B": "To define class-level methods and variables.",
            "C": "To create constants.",
            "D": "All of the above."
        },
        "correctAnswer": "B",
        "explanation": "The `static` keyword defines class-level methods and variables that can be accessed without creating an instance of the class."
    },
    {
        "question": "Which of the following is a valid generic type declaration?",
        "options": {
            "A": "List<String> list;",
            "B": "List<String> list = new ArrayList<>();",
            "C": "Map<String, Integer> map;",
            "D": "All of the above."
        },
        "correctAnswer": "D",
        "explanation": "All options are valid generic type declarations in Java."
    },
    {
        "question": "What is the output of the following code: `for(int i = 0; i < 5; i++) { System.out.print(i + \" \"); }`?",
        "options": {
            "A": "0 1 2 3 4 ",
            "B": "1 2 3 4 5 ",
            "C": "0 1 2 3 4 5 ",
            "D": "Compilation Error"
        },
        "correctAnswer": "A",
        "explanation": "The loop prints values of `i` from 0 to 4."
    },
    {
        "question": "What does the `break` statement do in a loop?",
        "options": {
            "A": "Terminates the loop.",
            "B": "Skips the current iteration.",
            "C": "Pauses the loop.",
            "D": "Restarts the loop."
        },
        "correctAnswer": "A",
        "explanation": "The `break` statement terminates the loop and transfers control to the next statement after the loop."
    },
    {
        "question": "What is the correct way to handle exceptions in Java?",
        "options": {
            "A": "Using if statements.",
            "B": "Using try-catch blocks.",
            "C": "Using switch statements.",
            "D": "Using loops."
        },
        "correctAnswer": "B",
        "explanation": "Exceptions are handled in Java using try-catch blocks."
    },
    {
        "question": "Which keyword is used to inherit a class in Java?",
        "options": {
            "A": "extends",
            "B": "implements",
            "C": "inherits",
            "D": "super"
        },
        "correctAnswer": "A",
        "explanation": "The `extends` keyword is used to inherit a class in Java."
    },
    {
        "question": "What will be the output of the following code: `String s = \"abc\"; s.concat(\"def\"); System.out.println(s);`?",
        "options": {
            "A": "abc",
            "B": "abcdef",
            "C": "Compilation Error",
            "D": "Runtime Error"
        },
        "correctAnswer": "A",
        "explanation": "Strings are immutable in Java; thus, `s` remains unchanged."
    },
    {
        "question": "Which of the following keywords is used to define an interface in Java?",
        "options": {
            "A": "class",
            "B": "interface",
            "C": "implements",
            "D": "extends"
        },
        "correctAnswer": "B",
        "explanation": "The `interface` keyword is used to define an interface in Java."
    },
    {
        "question": "What is the output of the following code: `System.out.println(5 + 10 + \" Java\" + 20 + 30);`?",
        "options": {
            "A": "15 Java2030",
            "B": "Java2030",
            "C": "Java15",
            "D": "5 + 10 + 20 + 30 Java"
        },
        "correctAnswer": "A",
        "explanation": "The addition is performed first, followed by string concatenation."
    },
    {
        "question": "What does the `instanceof` operator do?",
        "options": {
            "A": "Checks if an object is of a particular type.",
            "B": "Creates an instance of a class.",
            "C": "Checks if a class extends another class.",
            "D": "None of the above."
        },
        "correctAnswer": "A",
        "explanation": "The `instanceof` operator checks if an object is an instance of a specified class or subclass."
    },
    {
        "question": "Which of the following is true about Java constructors?",
        "options": {
            "A": "Constructors have the same name as the class.",
            "B": "Constructors can return values.",
            "C": "A class can have multiple constructors with different parameters.",
            "D": "Both A and C."
        },
        "correctAnswer": "D",
        "explanation": "Constructors must have the same name as the class and can be overloaded."
    },
    {
        "question": "What will be the output of the following code: `int x = 10; System.out.println(++x + ++x);`?",
        "options": {
            "A": "21",
            "B": "22",
            "C": "20",
            "D": "Compilation Error"
        },
        "correctAnswer": "B",
        "explanation": "Both pre-increment operators increase `x` to 11 and then to 12 before evaluation, so the result is `12 + 12 = 24`."
    },
    {
        "question": "What is the output of the following code: `String str = \"Java\"; System.out.println(str.charAt(1));`?",
        "options": {
            "A": "J",
            "B": "a",
            "C": "v",
            "D": "Error"
        },
        "correctAnswer": "B",
        "explanation": "The `charAt()` method returns the character at the specified index; index 1 corresponds to 'a'."
    },
    {
        "question": "Which of the following is not a method of the `String` class?",
        "options": {
            "A": "length()",
            "B": "charAt()",
            "C": "compareTo()",
            "D": "indexOf()"
        },
        "correctAnswer": "D",
        "explanation": "All options listed are valid methods of the `String` class in Java."
    },
    {
        "question": "What will be the output of the following code: `int[] arr = {1, 2, 3}; System.out.println(arr[3]);`?",
        "options": {
            "A": "3",
            "B": "IndexOutOfBoundsException",
            "C": "Compilation Error",
            "D": "null"
        },
        "correctAnswer": "B",
        "explanation": "Trying to access an index outside the bounds of the array results in an `IndexOutOfBoundsException`."
    },
    {
        "question": "What is the result of the expression `10 % 3`?",
        "options": {
            "A": "1",
            "B": "3",
            "C": "3.33",
            "D": "0"
        },
        "correctAnswer": "A",
        "explanation": "The modulus operator `%` returns the remainder of the division, which is 1 in this case."
    },
    {
        "question": "What will be the output of the following code: `String s = \"Hello\"; s.toLowerCase(); System.out.println(s);`?",
        "options": {
            "A": "hello",
            "B": "Hello",
            "C": "Compilation Error",
            "D": "Runtime Error"
        },
        "correctAnswer": "B",
        "explanation": "Strings are immutable; the original string `s` remains unchanged after calling `toLowerCase()`."
    },
    {
        "question": "What is the purpose of the `volatile` keyword in Java?",
        "options": {
            "A": "To prevent thread interference.",
            "B": "To ensure visibility of changes across threads.",
            "C": "To define constants.",
            "D": "All of the above."
        },
        "correctAnswer": "B",
        "explanation": "`volatile` ensures that a variable's value is always read from main memory, not from thread-local cache."
    },
    {
        "question": "What is the output of the following code: `System.out.println(\"10\" + 20);`?",
        "options": {
            "A": "1020",
            "B": "30",
            "C": "Compilation Error",
            "D": "20"
        },
        "correctAnswer": "A",
        "explanation": "String concatenation occurs, so '10' + 20 results in '1020'."
    },
    {
        "question": "Which of the following can be an interface in Java?",
        "options": {
            "A": "abstract class",
            "B": "enum",
            "C": "annotation",
            "D": "All of the above"
        },
        "correctAnswer": "D",
        "explanation": "In Java, interfaces can be used with abstract classes, enums, and annotations."
    }
];
