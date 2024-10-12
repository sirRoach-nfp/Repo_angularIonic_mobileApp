export const JAVAintermediate = [
    {
      "exercise": 1,
      "title": "Create a Calculator Using Switch",
      "description": "Write a program to perform basic arithmetic operations (addition, subtraction, multiplication, division) based on user input using a switch statement.",
      "requirements": [
        "Take two numbers and an operator (+, -, *, /) as input.",
        "Use a switch statement to perform the appropriate operation.",
        "Handle invalid operators."
      ],
      "hint": "switch(operator) {\n case '+': System.out.println(a + b); break;\n case '-': System.out.println(a - b); break;\n // Add other cases\n default: System.out.println(\"Invalid operator\");\n}"
    },
    {
      "exercise": 2,
      "title": "Check Palindrome String",
      "description": "Write a program to check if a given string is a palindrome.",
      "requirements": [
        "Take a string input from the user.",
        "Ignore case and spaces.",
        "Check if the string is the same when reversed."
      ],
      "hint": "String reversed = \"\";\nfor (int i = input.length() - 1; i >= 0; i--) {\n reversed += input.charAt(i);\n}\nSystem.out.println(reversed.equalsIgnoreCase(input.trim()) ? \"Palindrome\" : \"Not Palindrome\");"
    },
    {
      "exercise": 3,
      "title": "Bubble Sort",
      "description": "Write a program to implement bubble sort on an array of integers.",
      "requirements": [
        "Sort an array of integers using bubble sort.",
        "Print the sorted array."
      ],
      "hint": "for (int i = 0; i < array.length-1; i++) {\n for (int j = 0; j < array.length-i-1; j++) {\n if (array[j] > array[j+1]) {\n  int temp = array[j];\n  array[j] = array[j+1];\n  array[j+1] = temp;\n }\n }\n}"
    },
    {
      "exercise": 4,
      "title": "Reverse an Array",
      "description": "Write a program to reverse an array.",
      "requirements": [
        "Take an array of integers as input.",
        "Reverse the elements of the array."
      ],
      "hint": "for (int i = 0; i < array.length / 2; i++) {\n int temp = array[i];\n array[i] = array[array.length - 1 - i];\n array[array.length - 1 - i] = temp;\n}"
    },
    {
      "exercise": 5,
      "title": "Find Duplicates in an Array",
      "description": "Write a program to find duplicate elements in an array of integers.",
      "requirements": [
        "Take an array of integers as input.",
        "Print the duplicate elements in the array."
      ],
      "hint": "for (int i = 0; i < array.length - 1; i++) {\n for (int j = i + 1; j < array.length; j++) {\n if (array[i] == array[j]) {\n  System.out.println(array[i]);\n }\n }\n}"
    },
    {
      "exercise": 6,
      "title": "Linear Search",
      "description": "Write a program to implement linear search in an array of integers.",
      "requirements": [
        "Take an array and a target number as input.",
        "Search for the target number using linear search.",
        "Print the index of the target if found, otherwise print 'Not found'."
      ],
      "hint": "for (int i = 0; i < array.length; i++) {\n if (array[i] == target) {\n  System.out.println(\"Found at index \" + i);\n  return;\n }\n}\nSystem.out.println(\"Not found\");"
    },
    {
      "exercise": 7,
      "title": "Selection Sort",
      "description": "Write a program to implement selection sort on an array of integers.",
      "requirements": [
        "Sort an array of integers using selection sort.",
        "Print the sorted array."
      ],
      "hint": "for (int i = 0; i < array.length-1; i++) {\n int minIndex = i;\n for (int j = i+1; j < array.length; j++) {\n if (array[j] < array[minIndex]) {\n  minIndex = j;\n }\n }\n int temp = array[minIndex];\n array[minIndex] = array[i];\n array[i] = temp;\n}"
    },
    {
      "exercise": 8,
      "title": "Armstrong Number Checker",
      "description": "Write a program to check if a number is an Armstrong number.",
      "requirements": [
        "Take an integer as input.",
        "Check if the number is an Armstrong number (sum of the cubes of its digits equals the number)."
      ],
      "hint": "int sum = 0;\nint original = number;\nwhile (number != 0) {\n int digit = number % 10;\n sum += digit * digit * digit;\n number /= 10;\n}\nSystem.out.println(sum == original ? \"Armstrong\" : \"Not Armstrong\");"
    },
    {
      "exercise": 9,
      "title": "Fibonacci Series",
      "description": "Write a program to print the Fibonacci series up to a certain number of terms.",
      "requirements": [
        "Take the number of terms as input.",
        "Print the Fibonacci series up to the input number of terms."
      ],
      "hint": "int a = 0, b = 1;\nfor (int i = 1; i <= terms; i++) {\n System.out.print(a + \" \");\n int sum = a + b;\n a = b;\n b = sum;\n}"
    },
    {
      "exercise": 10,
      "title": "GCD of Two Numbers",
      "description": "Write a program to find the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.",
      "requirements": [
        "Take two integers as input.",
        "Use the Euclidean algorithm to find the GCD."
      ],
      "hint": "while (b != 0) {\n int temp = b;\n b = a % b;\n a = temp;\n}\nSystem.out.println(\"GCD: \" + a);"
    },
    {
      "exercise": 11,
      "title": "Count Vowels and Consonants",
      "description": "Write a program to count the number of vowels and consonants in a string.",
      "requirements": [
        "Take a string as input.",
        "Count and print the number of vowels and consonants in the string."
      ],
      "hint": "int vowels = 0, consonants = 0;\nfor (char c : input.toLowerCase().toCharArray()) {\n if (\"aeiou\".indexOf(c) != -1) {\n  vowels++;\n } else if (Character.isLetter(c)) {\n  consonants++;\n }\n}\nSystem.out.println(\"Vowels: \" + vowels);\nSystem.out.println(\"Consonants: \" + consonants);"
    },
    {
      "exercise": 12,
      "title": "Check Prime Number",
      "description": "Write a program to check whether a number is prime or not.",
      "requirements": [
        "Take an integer as input.",
        "Check if the number is only divisible by 1 and itself."
      ],
      "hint": "boolean isPrime = true;\nfor (int i = 2; i <= Math.sqrt(number); i++) {\n if (number % i == 0) {\n  isPrime = false;\n  break;\n }\n}\nSystem.out.println(isPrime ? \"Prime\" : \"Not Prime\");"
    },
    {
      "exercise": 13,
      "title": "Binary Search",
      "description": "Write a program to implement binary search on a sorted array.",
      "requirements": [
        "Take a sorted array and a target number as input.",
        "Use binary search to find the target.",
        "Print the index of the target or 'Not found' if it doesn't exist."
      ],
      "hint": "int low = 0, high = array.length - 1;\nwhile (low <= high) {\n int mid = (low + high) / 2;\n if (array[mid] == target) {\n  System.out.println(\"Found at index \" + mid);\n  return;\n } else if (array[mid] < target) {\n  low = mid + 1;\n } else {\n  high = mid - 1;\n }\n}\nSystem.out.println(\"Not found\");"
    },
    {
      "exercise": 14,
      "title": "Transpose of a Matrix",
      "description": "Write a program to find the transpose of a matrix.",
      "requirements": [
        "Take a matrix as input.",
        "Find and print the transpose of the matrix."
      ],
      "hint": "for (int i = 0; i < rows; i++) {\n for (int j = 0; j < cols; j++) {\n  transpose[j][i] = matrix[i][j];\n }\n}"
    },
    {
      "exercise": 15,
      "title": "Remove Duplicates from a List",
      "description": "Write a program to remove duplicates from an ArrayList of integers.",
      "requirements": [
        "Take an ArrayList as input.",
        "Remove all duplicate elements."
      ],
      "hint": "Set<Integer> set = new HashSet<>(list);\nlist.clear();\nlist.addAll(set);"
    },
    {
      "exercise": 16,
      "title": "Find Factorial Using Recursion",
      "description": "Write a program to find the factorial of a number using recursion.",
      "requirements": [
        "Take an integer as input.",
        "Use a recursive function to calculate the factorial."
      ],
      "hint": "int factorial(int n) {\n if (n == 0) return 1;\n return n * factorial(n - 1);\n}"
    },
    {
      "exercise": 17,
      "title": "Count Words in a String",
      "description": "Write a program to count the number of words in a string.",
      "requirements": [
        "Take a string as input.",
        "Count and print the number of words."
      ],
      "hint": "String[] words = input.trim().split(\"\\s+\");\nSystem.out.println(\"Number of words: \" + words.length);"
    },
    {
      "exercise": 18,
      "title": "Check Anagram",
      "description": "Write a program to check if two strings are anagrams of each other.",
      "requirements": [
        "Take two strings as input.",
        "Check if they are anagrams (same characters in a different order)."
      ],
      "hint": "char[] str1 = s1.toCharArray();\nchar[] str2 = s2.toCharArray();\nArrays.sort(str1);\nArrays.sort(str2);\nSystem.out.println(Arrays.equals(str1, str2) ? \"Anagram\" : \"Not Anagram\");"
    },
    {
      "exercise": 19,
      "title": "Sum of Digits Using Recursion",
      "description": "Write a program to calculate the sum of digits of a number using recursion.",
      "requirements": [
        "Take an integer as input.",
        "Use a recursive function to calculate the sum of its digits."
      ],
      "hint": "int sumOfDigits(int n) {\n if (n == 0) return 0;\n return n % 10 + sumOfDigits(n / 10);\n}"
    },
    {
      "exercise": 20,
      "title": "Count Frequency of Characters in a String",
      "description": "Write a program to count the frequency of each character in a string.",
      "requirements": [
        "Take a string as input.",
        "Count and print the frequency of each character."
      ],
      "hint": "Map<Character, Integer> frequencyMap = new HashMap<>();\nfor (char c : input.toCharArray()) {\n frequencyMap.put(c, frequencyMap.getOrDefault(c, 0) + 1);\n}\nSystem.out.println(frequencyMap);"
    }
  ]
  