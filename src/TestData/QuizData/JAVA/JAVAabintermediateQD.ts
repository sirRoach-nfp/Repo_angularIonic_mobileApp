export const JavaabintermediateQD = [
    {
        "question": "What is the output of the following code? `int x = 5; System.out.println(x++ + ++x);`",
        "options": {
            "A": "11",
            "B": "12",
            "C": "10",
            "D": "13"
        },
        "correctAnswer": "B",
        "explanation": "The expression evaluates as follows: `x++` (5) + `++x` (7) = 5 + 7 = 12."
    },
    {
        "question": "Which of the following classes is not part of the Java Collections Framework?",
        "options": {
            "A": "ArrayList",
            "B": "HashMap",
            "C": "LinkedList",
            "D": "Vector3D"
        },
        "correctAnswer": "D",
        "explanation": "Vector3D is not part of the Java Collections Framework."
    },
    {
        "question": "What will be the output of the following code? `String s = \"Java\"; s = s.concat(\" Programming\"); System.out.println(s);`",
        "options": {
            "A": "Java",
            "B": "Java Programming",
            "C": "JavaProgramming",
            "D": "Compilation Error"
        },
        "correctAnswer": "B",
        "explanation": "The concat() method returns a new string, combining the original string with the argument."
    },
    {
        "question": "Which method is used to start a thread in Java?",
        "options": {
            "A": "start()",
            "B": "run()",
            "C": "execute()",
            "D": "init()"
        },
        "correctAnswer": "A",
        "explanation": "The `start()` method is used to begin the execution of a thread."
    },
    {
        "question": "What is the purpose of the `final` keyword in Java?",
        "options": {
            "A": "To define a constant variable.",
            "B": "To prevent method overriding.",
            "C": "To prevent inheritance.",
            "D": "All of the above."
        },
        "correctAnswer": "D",
        "explanation": "The `final` keyword can be used to define constants, prevent method overriding, and prevent inheritance."
    },
    {
        "question": "Which of the following exceptions is thrown when trying to access an array index that is out of bounds?",
        "options": {
            "A": "NullPointerException",
            "B": "ArrayIndexOutOfBoundsException",
            "C": "IndexOutOfBoundsException",
            "D": "IllegalArgumentException"
        },
        "correctAnswer": "B",
        "explanation": "ArrayIndexOutOfBoundsException is thrown when accessing an invalid index in an array."
    },
    {
        "question": "What is the difference between `==` and `equals()` in Java?",
        "options": {
            "A": "== compares object references; equals() compares values.",
            "B": "== compares values; equals() compares references.",
            "C": "There is no difference.",
            "D": "== is used for primitive types; equals() is used for objects."
        },
        "correctAnswer": "A",
        "explanation": "The `==` operator compares object references, while `equals()` compares the actual values."
    },
    {
        "question": "Which interface does `ArrayList` implement?",
        "options": {
            "A": "List",
            "B": "Collection",
            "C": "Iterable",
            "D": "All of the above."
        },
        "correctAnswer": "D",
        "explanation": "ArrayList implements List, Collection, and Iterable interfaces."
    },
    {
        "question": "What is the output of the following code? `List<Integer> list = new ArrayList<>(); list.add(1); list.add(2); list.add(3); System.out.println(list.get(1));`",
        "options": {
            "A": "1",
            "B": "2",
            "C": "3",
            "D": "IndexOutOfBoundsException"
        },
        "correctAnswer": "B",
        "explanation": "list.get(1) returns the element at index 1, which is 2."
    },
    {
        "question": "What is polymorphism in Java?",
        "options": {
            "A": "The ability to take multiple forms.",
            "B": "The ability to create multiple instances of a class.",
            "C": "The ability to define multiple classes.",
            "D": "The ability to handle exceptions."
        },
        "correctAnswer": "A",
        "explanation": "Polymorphism allows methods to do different things based on the object it is acting upon."
    },
    {
        "question": "Which of the following is a checked exception in Java?",
        "options": {
            "A": "NullPointerException",
            "B": "IOException",
            "C": "RuntimeException",
            "D": "ArithmeticException"
        },
        "correctAnswer": "B",
        "explanation": "IOException is a checked exception that must be either caught or declared in the method signature."
    },
    {
        "question": "What is the output of the following code? `String str = \"Hello\"; System.out.println(str.substring(1, 4));`",
        "options": {
            "A": "Hel",
            "B": "ell",
            "C": "llo",
            "D": "Hello"
        },
        "correctAnswer": "B",
        "explanation": "The substring method extracts characters from index 1 to 3 (exclusive)."
    },
    {
        "question": "Which of the following statements is true about Java interfaces?",
        "options": {
            "A": "An interface can have constructors.",
            "B": "An interface can extend multiple interfaces.",
            "C": "An interface can have concrete methods.",
            "D": "An interface cannot extend another interface."
        },
        "correctAnswer": "B",
        "explanation": "An interface can extend multiple interfaces, allowing for multiple inheritance."
    },
    {
        "question": "What will be the output of the following code? `int[] arr = {1, 2, 3}; for (int i : arr) { System.out.print(i + \" \"); }`",
        "options": {
            "A": "1 2 3 ",
            "B": "123",
            "C": "Compilation Error",
            "D": "Runtime Error"
        },
        "correctAnswer": "A",
        "explanation": "The enhanced for loop iterates through the array and prints each element."
    },
    {
        "question": "Which collection class is synchronized in Java?",
        "options": {
            "A": "ArrayList",
            "B": "HashMap",
            "C": "Vector",
            "D": "LinkedList"
        },
        "correctAnswer": "C",
        "explanation": "Vector is synchronized, making it thread-safe."
    },
    {
        "question": "What does the `transient` keyword do?",
        "options": {
            "A": "Makes a variable accessible only within the class.",
            "B": "Prevents serialization of a variable.",
            "C": "Prevents inheritance.",
            "D": "Makes a variable immutable."
        },
        "correctAnswer": "B",
        "explanation": "The `transient` keyword prevents serialization of a variable during the serialization process."
    },
    {
        "question": "Which of the following is true about Java enums?",
        "options": {
            "A": "Enums can have fields and methods.",
            "B": "Enums can extend classes.",
            "C": "Enums can implement interfaces.",
            "D": "Both A and C."
        },
        "correctAnswer": "D",
        "explanation": "Enums can have fields and methods, and they can implement interfaces."
    },
    {
        "question": "What is the output of the following code? `System.out.println(\"5\" + 3 + 2);`",
        "options": {
            "A": "53",
            "B": "12",
            "C": "5 3 2",
            "D": "Error"
        },
        "correctAnswer": "A",
        "explanation": "String concatenation occurs, so the output is '53'."
    },
    {
        "question": "What will happen if you attempt to divide a number by zero in Java?",
        "options": {
            "A": "Returns 0.",
            "B": "Throws an ArithmeticException.",
            "C": "Returns Infinity.",
            "D": "Returns NaN."
        },
        "correctAnswer": "B",
        "explanation": "Dividing by zero throws an ArithmeticException in Java."
    },
    {
        "question": "Which of the following is a marker interface in Java?",
        "options": {
            "A": "Serializable",
            "B": "Cloneable",
            "C": "Remote",
            "D": "All of the above."
        },
        "correctAnswer": "D",
        "explanation": "Serializable, Cloneable, and Remote are all marker interfaces."
    },
    {
        "question": "What is the purpose of the `this` keyword in Java?",
        "options": {
            "A": "To refer to the current object.",
            "B": "To refer to the superclass.",
            "C": "To refer to the current class.",
            "D": "To create an instance of a class."
        },
        "correctAnswer": "A",
        "explanation": "The `this` keyword refers to the current object within an instance method or constructor."
    },
    {
        "question": "What is the default value of a boolean variable in Java?",
        "options": {
            "A": "true",
            "B": "false",
            "C": "0",
            "D": "1"
        },
        "correctAnswer": "B",
        "explanation": "The default value of a boolean variable is false."
    },
    {
        "question": "Which Java keyword is used to prevent a method from being overridden?",
        "options": {
            "A": "static",
            "B": "final",
            "C": "abstract",
            "D": "private"
        },
        "correctAnswer": "B",
        "explanation": "The `final` keyword prevents a method from being overridden."
    },
    {
        "question": "What is the result of the following code? `int a = 5; int b = 10; System.out.println(a < b ? a : b);`",
        "options": {
            "A": "5",
            "B": "10",
            "C": "true",
            "D": "false"
        },
        "correctAnswer": "A",
        "explanation": "The ternary operator returns the smaller value, which is 5."
    },
    {
        "question": "What is the main difference between `HashMap` and `Hashtable`?",
        "options": {
            "A": "HashMap is synchronized; Hashtable is not.",
            "B": "Hashtable allows null keys and values; HashMap does not.",
            "C": "HashMap is not synchronized; Hashtable is.",
            "D": "Both are the same."
        },
        "correctAnswer": "C",
        "explanation": "HashMap is not synchronized, while Hashtable is synchronized."
    },
    {
        "question": "Which of the following statements is true regarding Java's garbage collection?",
        "options": {
            "A": "It is done manually.",
            "B": "It is a process of reclaiming memory.",
            "C": "It can be controlled using finalizers.",
            "D": "Both B and C."
        },
        "correctAnswer": "D",
        "explanation": "Garbage collection reclaims memory, and finalizers can be used to clean up resources."
    },
    {
        "question": "Which of the following keywords is used to inherit a class in Java?",
        "options": {
            "A": "extends",
            "B": "implements",
            "C": "inherits",
            "D": "super"
        },
        "correctAnswer": "A",
        "explanation": "The `extends` keyword is used to inherit a class."
    },
    {
        "question": "Which of the following is true about abstract classes in Java?",
        "options": {
            "A": "An abstract class cannot be instantiated.",
            "B": "An abstract class can have both abstract and concrete methods.",
            "C": "Abstract classes can have constructors.",
            "D": "All of the above."
        },
        "correctAnswer": "D",
        "explanation": "All statements about abstract classes are true."
    },
    {
        "question": "Which Java package is automatically imported in every Java program?",
        "options": {
            "A": "java.lang",
            "B": "java.util",
            "C": "java.io",
            "D": "java.awt"
        },
        "correctAnswer": "A",
        "explanation": "The java.lang package is automatically imported."
    },
    {
        "question": "What will be the output of the following code? `int[] arr = {1, 2, 3}; System.out.println(arr.length);`",
        "options": {
            "A": "2",
            "B": "3",
            "C": "Compilation Error",
            "D": "Runtime Error"
        },
        "correctAnswer": "B",
        "explanation": "The length property returns the number of elements in the array, which is 3."
    },
    {
        "question": "What is the result of the following code? `for (int i = 0; i < 5; i++) { if (i == 3) break; System.out.print(i + \" \"); }`",
        "options": {
            "A": "0 1 2",
            "B": "0 1 2 3 4",
            "C": "0 1 2 3",
            "D": "Compilation Error"
        },
        "correctAnswer": "A",
        "explanation": "The loop breaks when `i` equals 3, so it prints 0, 1, and 2."
    },
    {
        "question": "Which of the following statements about static methods is true?",
        "options": {
            "A": "Static methods can access instance variables.",
            "B": "Static methods can be overridden.",
            "C": "Static methods can be called without creating an instance of the class.",
            "D": "Static methods can be abstract."
        },
        "correctAnswer": "C",
        "explanation": "Static methods can be called without creating an instance of the class."
    },
    {
        "question": "What will be the output of the following code? `int x = 10; int y = 20; System.out.println((x > y) ? x : y);`",
        "options": {
            "A": "10",
            "B": "20",
            "C": "Compilation Error",
            "D": "Runtime Error"
        },
        "correctAnswer": "B",
        "explanation": "The ternary operator returns the larger value, which is 20."
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
        "explanation": "The `internal` access modifier does not exist in Java."
    },
    {
        "question": "What is the purpose of the `synchronized` keyword in Java?",
        "options": {
            "A": "To create a thread.",
            "B": "To restrict access to a method or block to one thread at a time.",
            "C": "To prevent method overriding.",
            "D": "To prevent inheritance."
        },
        "correctAnswer": "B",
        "explanation": "The `synchronized` keyword restricts access to a method or block to one thread at a time."
    },
    {
        "question": "What is the result of the following code? `List<String> list = new ArrayList<>(); list.add(\"A\"); list.add(\"B\"); list.add(1, \"C\"); System.out.println(list);`",
        "options": {
            "A": "[A, B, C]",
            "B": "[A, C, B]",
            "C": "[C, A, B]",
            "D": "[A, B]"
        },
        "correctAnswer": "B",
        "explanation": "The add method inserts \"C\" at index 1, resulting in [A, C, B]."
    },
    {
        "question": "What is the output of the following code? `System.out.println(Math.round(5.5));`",
        "options": {
            "A": "5",
            "B": "6",
            "C": "5.5",
            "D": "Error"
        },
        "correctAnswer": "B",
        "explanation": "Math.round() rounds to the nearest integer, so it returns 6."
    },
    {
        "question": "What is the purpose of the `volatile` keyword?",
        "options": {
            "A": "To make a variable accessible from multiple threads.",
            "B": "To indicate that a variable can be changed unexpectedly.",
            "C": "To prevent a variable from being serialized.",
            "D": "To make a variable immutable."
        },
        "correctAnswer": "B",
        "explanation": "The `volatile` keyword indicates that a variable's value may change unexpectedly, ensuring visibility to threads."
    }
];
