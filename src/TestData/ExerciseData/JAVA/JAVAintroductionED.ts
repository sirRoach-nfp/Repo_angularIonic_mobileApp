export const JAVAintroduction = [
    {
      "exercise": 1,
      "title": "Hello, World!",
      "description": "Write a Java program that prints 'Hello, World!' to the console.",
      "requirements": [
        "Create a class called `HelloWorld`.",
        "Inside the main method, use `System.out.println()` to print the message."
      ],
      "hint": "public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println(\"Hello, World!\");\n  }\n}"
    },
    {
      "exercise": 2,
      "title": "Simple Addition",
      "description": "Write a Java program to add two numbers and display the result.",
      "requirements": [
        "Declare two integer variables and assign them values.",
        "Add the two integers and store the result in another variable.",
        "Print the result."
      ],
      "hint": "int a = 5;\nint b = 10;\nint sum = a + b;\nSystem.out.println(\"Sum: \" + sum);"
    },
    {
      "exercise": 3,
      "title": "Input from User",
      "description": "Write a program that takes input from the user and displays it.",
      "requirements": [
        "Use the `Scanner` class to take input from the user.",
        "Print the input back to the console."
      ],
      "hint": "import java.util.Scanner;\nScanner scanner = new Scanner(System.in);\nSystem.out.println(\"Enter a value: \");\nString input = scanner.nextLine();\nSystem.out.println(\"You entered: \" + input);"
    },
    {
      "exercise": 4,
      "title": "Even or Odd Number",
      "description": "Write a Java program to check if a number is even or odd.",
      "requirements": [
        "Take an integer input from the user.",
        "Use the modulus operator to check if the number is even or odd."
      ],
      "hint": "int number = scanner.nextInt();\nif (number % 2 == 0) {\n  System.out.println(\"Even\");\n} else {\n  System.out.println(\"Odd\");\n}"
    },
    {
      "exercise": 5,
      "title": "Simple If-Else",
      "description": "Write a Java program that checks if a person is eligible to vote.",
      "requirements": [
        "Take the age as input from the user.",
        "If the age is 18 or above, print 'Eligible to vote'. Otherwise, print 'Not eligible to vote'."
      ],
      "hint": "int age = scanner.nextInt();\nif (age >= 18) {\n  System.out.println(\"Eligible to vote\");\n} else {\n  System.out.println(\"Not eligible to vote\");\n}"
    },
    {
      "exercise": 6,
      "title": "Basic For Loop",
      "description": "Write a Java program to print numbers from 1 to 10 using a loop.",
      "requirements": [
        "Use a `for` loop to print the numbers from 1 to 10."
      ],
      "hint": "for (int i = 1; i <= 10; i++) {\n  System.out.println(i);\n}"
    },
    {
      "exercise": 7,
      "title": "Multiplication Table",
      "description": "Write a program to print the multiplication table of a given number.",
      "requirements": [
        "Take a number input from the user.",
        "Use a `for` loop to print the multiplication table for that number."
      ],
      "hint": "int number = scanner.nextInt();\nfor (int i = 1; i <= 10; i++) {\n  System.out.println(number + \" * \" + i + \" = \" + (number * i));\n}"
    },
    {
      "exercise": 8,
      "title": "Factorial Calculation",
      "description": "Write a Java program to calculate the factorial of a number.",
      "requirements": [
        "Take an integer input from the user.",
        "Use a loop to calculate the factorial of the number."
      ],
      "hint": "int factorial = 1;\nfor (int i = 1; i <= number; i++) {\n  factorial *= i;\n}\nSystem.out.println(\"Factorial: \" + factorial);"
    },
    {
      "exercise": 9,
      "title": "Array Declaration",
      "description": "Write a Java program to declare and print an array of integers.",
      "requirements": [
        "Declare an integer array with 5 elements.",
        "Use a loop to print each element of the array."
      ],
      "hint": "int[] numbers = {1, 2, 3, 4, 5};\nfor (int i = 0; i < numbers.length; i++) {\n  System.out.println(numbers[i]);\n}"
    },
    {
      "exercise": 10,
      "title": "Sum of Array Elements",
      "description": "Write a program to find the sum of elements in an integer array.",
      "requirements": [
        "Declare an array with at least 5 integer elements.",
        "Use a loop to calculate the sum of all elements and print the result."
      ],
      "hint": "int sum = 0;\nint[] arr = {5, 10, 15, 20, 25};\nfor (int num : arr) {\n  sum += num;\n}\nSystem.out.println(\"Sum: \" + sum);"
    },
    {
      "exercise": 11,
      "title": "Find the Maximum Element",
      "description": "Write a Java program to find the largest number in an array.",
      "requirements": [
        "Declare an array with at least 5 elements.",
        "Use a loop to find the largest element and print it."
      ],
      "hint": "int max = arr[0];\nfor (int num : arr) {\n  if (num > max) {\n    max = num;\n  }\n}\nSystem.out.println(\"Max: \" + max);"
    },
    {
      "exercise": 12,
      "title": "String Concatenation",
      "description": "Write a program to concatenate two strings and print the result.",
      "requirements": [
        "Take two string inputs from the user.",
        "Concatenate the strings and display the result."
      ],
      "hint": "String str1 = scanner.nextLine();\nString str2 = scanner.nextLine();\nString result = str1 + str2;\nSystem.out.println(\"Concatenated String: \" + result);"
    },
    {
      "exercise": 13,
      "title": "Simple Switch Case",
      "description": "Write a program that takes an integer input and prints the corresponding day of the week using switch-case.",
      "requirements": [
        "Use a switch-case statement to map numbers 1-7 to days of the week."
      ],
      "hint": "switch(day) {\n  case 1: System.out.println(\"Monday\"); break;\n  case 2: System.out.println(\"Tuesday\"); break;\n  // Add other cases here\n}"
    },
    {
      "exercise": 14,
      "title": "Check Leap Year",
      "description": "Write a Java program to check if a year is a leap year.",
      "requirements": [
        "Take a year as input.",
        "Use conditional logic to check if the year is divisible by 4 but not by 100, unless it's divisible by 400."
      ],
      "hint": "if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {\n  System.out.println(\"Leap Year\");\n} else {\n  System.out.println(\"Not a Leap Year\");\n}"
    },
    {
      "exercise": 15,
      "title": "Reverse a String",
      "description": "Write a program to reverse a string and print the result.",
      "requirements": [
        "Take a string as input from the user.",
        "Use a loop to reverse the string."
      ],
      "hint": "String input = scanner.nextLine();\nString reversed = \"\";\nfor (int i = input.length() - 1; i >= 0; i--) {\n  reversed += input.charAt(i);\n}\nSystem.out.println(\"Reversed: \" + reversed);"
    },
    {
      "exercise": 16,
      "title": "Count Vowels in a String",
      "description": "Write a Java program to count the number of vowels in a string.",
      "requirements": [
        "Take a string input from the user.",
        "Use a loop and conditional statements to count the vowels in the string."
      ],
      "hint": "int count = 0;\nfor (int i = 0; i < input.length(); i++) {\n  char ch = input.charAt(i);\n  if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {\n    count++;\n  }\n}\nSystem.out.println(\"Vowel Count: \" + count);"
    },
    {
      "exercise": 17,
      "title": "Prime Number Check",
      "description": "Write a Java program to check if a number is prime.",
      "requirements": [
        "Take an integer input from the user.",
        "Use a loop to check if the number has divisors other than 1 and itself."
      ],
      "hint": "boolean isPrime = true;\nfor (int i = 2; i <= number / 2; i++) {\n  if (number % i == 0) {\n    isPrime = false;\n    break;\n  }\n}\nSystem.out.println(isPrime ? \"Prime\" : \"Not Prime\");"
    },
    {
      "exercise": 18,
      "title": "Palindrome Check",
      "description": "Write a program to check if a string is a palindrome.",
      "requirements": [
        "Take a string input from the user.",
        "Check if the string reads the same forward and backward."
      ],
      "hint": "String reversed = new StringBuilder(input).reverse().toString();\nif (input.equals(reversed)) {\n  System.out.println(\"Palindrome\");\n} else {\n  System.out.println(\"Not Palindrome\");\n}"
    },
    {
      "exercise": 19,
      "title": "Fibonacci Sequence",
      "description": "Write a Java program to print the Fibonacci sequence up to a given number.",
      "requirements": [
        "Take a number as input and print the Fibonacci sequence up to that number."
      ],
      "hint": "int a = 0, b = 1;\nwhile (a <= number) {\n  System.out.println(a);\n  int next = a + b;\n  a = b;\n  b = next;\n}"
    },
    {
      "exercise": 20,
      "title": "Simple Calculator",
      "description": "Write a program that performs addition, subtraction, multiplication, or division based on user input.",
      "requirements": [
        "Take two numbers and an operator as input.",
        "Use a switch-case to perform the corresponding operation."
      ],
      "hint": "switch (operator) {\n  case '+': result = a + b; break;\n  case '-': result = a - b; break;\n  case '*': result = a * b; break;\n  case '/': result = a / b; break;\n}\nSystem.out.println(\"Result: \" + result);"
    }
  ]
  