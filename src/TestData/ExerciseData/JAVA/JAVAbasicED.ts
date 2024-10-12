export const JAVAbasic = [
    {
      "exercise": 1,
      "title": "Print User Input",
      "description": "Write a Java program to take a user's name as input and print 'Hello, [name]!'",
      "requirements": [
        "Use the `Scanner` class to take the user's input.",
        "Print the message with the user's name."
      ],
      "hint": "Scanner scanner = new Scanner(System.in);\nSystem.out.print(\"Enter your name: \");\nString name = scanner.nextLine();\nSystem.out.println(\"Hello, \" + name + \"!\");"
    },
    {
      "exercise": 2,
      "title": "Sum of Two Numbers",
      "description": "Write a Java program to add two numbers and print the result.",
      "requirements": [
        "Take two integer inputs from the user.",
        "Add them and display the result."
      ],
      "hint": "Scanner scanner = new Scanner(System.in);\nint num1 = scanner.nextInt();\nint num2 = scanner.nextInt();\nSystem.out.println(\"Sum: \" + (num1 + num2));"
    },
    {
      "exercise": 3,
      "title": "Area of a Rectangle",
      "description": "Write a Java program to calculate the area of a rectangle.",
      "requirements": [
        "Take the length and width as input from the user.",
        "Calculate and print the area of the rectangle."
      ],
      "hint": "int length = scanner.nextInt();\nint width = scanner.nextInt();\nSystem.out.println(\"Area: \" + (length * width));"
    },
    {
      "exercise": 4,
      "title": "Simple If Condition",
      "description": "Write a Java program to check if a number is positive, negative, or zero.",
      "requirements": [
        "Take an integer input from the user.",
        "Use if-else conditions to check whether the number is positive, negative, or zero."
      ],
      "hint": "int number = scanner.nextInt();\nif (number > 0) {\n  System.out.println(\"Positive\");\n} else if (number < 0) {\n  System.out.println(\"Negative\");\n} else {\n  System.out.println(\"Zero\");\n}"
    },
    {
      "exercise": 5,
      "title": "Find the Larger Number",
      "description": "Write a program to compare two numbers and print the larger one.",
      "requirements": [
        "Take two integer inputs from the user.",
        "Compare the two numbers and print the larger number."
      ],
      "hint": "int num1 = scanner.nextInt();\nint num2 = scanner.nextInt();\nSystem.out.println(num1 > num2 ? num1 : num2);"
    },
    {
      "exercise": 6,
      "title": "Basic While Loop",
      "description": "Write a program to print numbers from 1 to 5 using a while loop.",
      "requirements": [
        "Use a while loop to print the numbers 1 to 5."
      ],
      "hint": "int i = 1;\nwhile (i <= 5) {\n  System.out.println(i);\n  i++;\n}"
    },
    {
      "exercise": 7,
      "title": "Simple Do-While Loop",
      "description": "Write a Java program that uses a do-while loop to print numbers from 5 to 1.",
      "requirements": [
        "Use a do-while loop to count down from 5 to 1."
      ],
      "hint": "int i = 5;\ndo {\n  System.out.println(i);\n  i--;\n} while (i > 0);"
    },
    {
      "exercise": 8,
      "title": "Odd or Even Checker",
      "description": "Write a program that checks whether a number is odd or even.",
      "requirements": [
        "Take an integer input from the user.",
        "Check if the number is divisible by 2."
      ],
      "hint": "if (number % 2 == 0) {\n  System.out.println(\"Even\");\n} else {\n  System.out.println(\"Odd\");\n}"
    },
    {
      "exercise": 9,
      "title": "Factorial Calculation",
      "description": "Write a program to calculate the factorial of a number.",
      "requirements": [
        "Take an integer input.",
        "Use a for loop to calculate the factorial."
      ],
      "hint": "int factorial = 1;\nfor (int i = 1; i <= number; i++) {\n  factorial *= i;\n}\nSystem.out.println(\"Factorial: \" + factorial);"
    },
    {
      "exercise": 10,
      "title": "Simple Switch-Case",
      "description": "Write a Java program to display the month name based on user input.",
      "requirements": [
        "Take an integer input from the user between 1 and 12.",
        "Use switch-case to display the corresponding month name."
      ],
      "hint": "switch(month) {\n  case 1: System.out.println(\"January\"); break;\n  case 2: System.out.println(\"February\"); break;\n  // Add other cases\n}"
    },
    {
      "exercise": 11,
      "title": "Sum of Even Numbers",
      "description": "Write a Java program to find the sum of all even numbers from 1 to 20.",
      "requirements": [
        "Use a for loop to iterate through numbers from 1 to 20.",
        "Sum only the even numbers."
      ],
      "hint": "int sum = 0;\nfor (int i = 1; i <= 20; i++) {\n  if (i % 2 == 0) {\n    sum += i;\n  }\n}\nSystem.out.println(\"Sum: \" + sum);"
    },
    {
      "exercise": 12,
      "title": "Calculate Power",
      "description": "Write a program that calculates the power of a number using a loop.",
      "requirements": [
        "Take two inputs: base and exponent.",
        "Calculate and print the result of base^exponent."
      ],
      "hint": "int result = 1;\nfor (int i = 0; i < exponent; i++) {\n  result *= base;\n}\nSystem.out.println(\"Result: \" + result);"
    },
    {
      "exercise": 13,
      "title": "Print Array Elements",
      "description": "Write a program to declare an integer array and print all its elements.",
      "requirements": [
        "Declare an array with 5 integers.",
        "Use a loop to print each element of the array."
      ],
      "hint": "int[] numbers = {1, 2, 3, 4, 5};\nfor (int i = 0; i < numbers.length; i++) {\n  System.out.println(numbers[i]);\n}"
    },
    {
      "exercise": 14,
      "title": "Find Array Maximum",
      "description": "Write a Java program to find the maximum value in an array.",
      "requirements": [
        "Declare an array with at least 5 integer elements.",
        "Use a loop to find and print the maximum element."
      ],
      "hint": "int max = numbers[0];\nfor (int i = 1; i < numbers.length; i++) {\n  if (numbers[i] > max) {\n    max = numbers[i];\n  }\n}\nSystem.out.println(\"Max: \" + max);"
    },
    {
      "exercise": 15,
      "title": "String Length",
      "description": "Write a program to take a string input from the user and print its length.",
      "requirements": [
        "Use `Scanner` to get a string input.",
        "Print the length of the string."
      ],
      "hint": "String input = scanner.nextLine();\nSystem.out.println(\"Length: \" + input.length());"
    },
    {
      "exercise": 16,
      "title": "String Reverse",
      "description": "Write a Java program to reverse a string.",
      "requirements": [
        "Take a string input from the user.",
        "Reverse the string using a loop and print it."
      ],
      "hint": "String reversed = \"\";\nfor (int i = input.length() - 1; i >= 0; i--) {\n  reversed += input.charAt(i);\n}\nSystem.out.println(\"Reversed: \" + reversed);"
    },
    {
      "exercise": 17,
      "title": "Count Digits",
      "description": "Write a program to count the number of digits in a given integer.",
      "requirements": [
        "Take an integer input.",
        "Use a loop to count the number of digits in the integer."
      ],
      "hint": "int count = 0;\nwhile (number != 0) {\n  number /= 10;\n  count++;\n}\nSystem.out.println(\"Number of digits: \" + count);"
    },
    {
      "exercise": 18,
      "title": "Check Prime Number",
      "description": "Write a Java program to check whether a number is prime.",
      "requirements": [
        "Take an integer input.",
        "Use a loop to check if the number is divisible by any number other than 1 and itself."
      ],
      "hint": "boolean isPrime = true;\nfor (int i = 2; i <= number / 2; i++) {\n  if (number % i == 0) {\n    isPrime = false;\n    break;\n  }\n}\nSystem.out.println(isPrime ? \"Prime\" : \"Not Prime\");"
    },
    {
      "exercise": 19,
      "title": "Sum of Digits",
      "description": "Write a Java program to find the sum of digits in an integer.",
      "requirements": [
        "Take an integer input.",
        "Use a loop to calculate the sum of its digits."
      ],
      "hint": "int sum = 0;\nwhile (number != 0) {\n  sum += number % 10;\n  number /= 10;\n}\nSystem.out.println(\"Sum of digits: \" + sum);"
    },
    {
      "exercise": 20,
      "title": "Swap Two Numbers",
      "description": "Write a Java program to swap two numbers without using a third variable.",
      "requirements": [
        "Take two integer inputs.",
        "Swap the values without using a third variable."
      ],
      "hint": "num1 = num1 + num2;\nnum2 = num1 - num2;\nnum1 = num1 - num2;\nSystem.out.println(\"Swapped: \" + num1 + \" \" + num2);"
    }
  ]
  