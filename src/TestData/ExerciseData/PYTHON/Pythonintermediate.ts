export const PYTHONintermediate = [
    {
      "exercise": 1,
      "title": "Merge Two Sorted Lists",
      "description": "Write a function that merges two sorted lists into a single sorted list.",
      "requirements": [
        "Implement the function `merge_sorted_lists(list1, list2)`."
      ],
      "hint": "```python\nfrom typing import List\n\ndef merge_sorted_lists(list1: List[int], list2: List[int]) -> List[int]:\n    merged = []\n    i, j = 0, 0\n    while i < len(list1) and j < len(list2):\n        if list1[i] < list2[j]:\n            merged.append(list1[i])\n            i += 1\n        else:\n            merged.append(list2[j])\n            j += 1\n    merged.extend(list1[i:])\n    merged.extend(list2[j:])\n    return merged\n```"
    },
    {
      "exercise": 2,
      "title": "Find the Longest Substring Without Repeating Characters",
      "description": "Create a function that finds the length of the longest substring without repeating characters.",
      "requirements": [
        "Implement the function `length_of_longest_substring(s)`."
      ],
      "hint": "```python\ndef length_of_longest_substring(s: str) -> int:\n    char_set = set()\n    left = max_length = 0\n    for right in range(len(s)):\n        while s[right] in char_set:\n            char_set.remove(s[left])\n            left += 1\n        char_set.add(s[right])\n        max_length = max(max_length, right - left + 1)\n    return max_length\n```"
    },
    {
      "exercise": 3,
      "title": "Check for Balanced Parentheses",
      "description": "Write a function that checks if a string has balanced parentheses.",
      "requirements": [
        "Implement the function `is_balanced(s)`."
      ],
      "hint": "```python\ndef is_balanced(s: str) -> bool:\n    stack = []\n    mapping = {')': '(', '}': '{', ']': '['}\n    for char in s:\n        if char in mapping:\n            top_element = stack.pop() if stack else '#'\n            if mapping[char] != top_element:\n                return False\n        else:\n            stack.append(char)\n    return not stack\n```"
    },
    {
      "exercise": 4,
      "title": "Generate All Permutations of a String",
      "description": "Create a function that generates all permutations of a given string.",
      "requirements": [
        "Implement the function `generate_permutations(s)`."
      ],
      "hint": "```python\nfrom itertools import permutations\n\ndef generate_permutations(s: str):\n    return [''.join(p) for p in permutations(s)]\n```"
    },
    {
      "exercise": 5,
      "title": "Calculate the GCD of Two Numbers",
      "description": "Write a function to calculate the greatest common divisor (GCD) of two numbers.",
      "requirements": [
        "Implement the function `gcd(a, b)`."
      ],
      "hint": "```python\ndef gcd(a: int, b: int) -> int:\n    while b:\n        a, b = b, a % b\n    return a\n```"
    },
    {
      "exercise": 6,
      "title": "Find Missing Number in Array",
      "description": "Create a function that finds the missing number in a given integer array containing 1 to n.",
      "requirements": [
        "Implement the function `find_missing_number(arr)`."
      ],
      "hint": "```python\ndef find_missing_number(arr: List[int]) -> int:\n    n = len(arr) + 1\n    total = n * (n + 1) // 2\n    return total - sum(arr)\n```"
    },
    {
      "exercise": 7,
      "title": "Count the Frequency of Elements in a List",
      "description": "Write a function that counts the frequency of each element in a list.",
      "requirements": [
        "Implement the function `count_frequency(lst)`."
      ],
      "hint": "```python\ndef count_frequency(lst: List[int]) -> dict:\n    frequency = {}\n    for item in lst:\n        frequency[item] = frequency.get(item, 0) + 1\n    return frequency\n```"
    },
    {
      "exercise": 8,
      "title": "Find the Second Largest Number in a List",
      "description": "Create a function that finds the second largest number in a list.",
      "requirements": [
        "Implement the function `find_second_largest(lst)`."
      ],
      "hint": "```python\ndef find_second_largest(lst: List[int]) -> int:\n    first, second = float('-inf'), float('-inf')\n    for number in lst:\n        if number > first:\n            first, second = number, first\n        elif first > number > second:\n            second = number\n    return second\n```"
    },
    {
      "exercise": 9,
      "title": "Remove All Vowels from a String",
      "description": "Write a function that removes all vowels from a given string.",
      "requirements": [
        "Implement the function `remove_vowels(s)`."
      ],
      "hint": "```python\ndef remove_vowels(s: str) -> str:\n    return ''.join([char for char in s if char.lower() not in 'aeiou'])\n```"
    },
    {
      "exercise": 10,
      "title": "Calculate Fibonacci Using Memoization",
      "description": "Create a function that calculates the nth Fibonacci number using memoization.",
      "requirements": [
        "Implement the function `memoized_fibonacci(n)`."
      ],
      "hint": "```python\nmemo = {}\ndef memoized_fibonacci(n: int) -> int:\n    if n in memo:\n        return memo[n]\n    if n <= 1:\n        return n\n    memo[n] = memoized_fibonacci(n - 1) + memoized_fibonacci(n - 2)\n    return memo[n]\n```"
    },
    {
      "exercise": 11,
      "title": "Find Intersection of Two Arrays",
      "description": "Write a function that finds the intersection of two arrays.",
      "requirements": [
        "Implement the function `intersect(arr1, arr2)`."
      ],
      "hint": "```python\ndef intersect(arr1: List[int], arr2: List[int]) -> List[int]:\n    set1, set2 = set(arr1), set(arr2)\n    return list(set1 & set2)\n```"
    },
    {
      "exercise": 12,
      "title": "Check if a String is an Anagram of Another",
      "description": "Create a function that checks if one string is an anagram of another.",
      "requirements": [
        "Implement the function `are_anagrams(s1, s2)`."
      ],
      "hint": "```python\ndef are_anagrams(s1: str, s2: str) -> bool:\n    return sorted(s1) == sorted(s2)\n```"
    },
    {
      "exercise": 13,
      "title": "Flatten a Nested List",
      "description": "Write a function that flattens a nested list into a single list.",
      "requirements": [
        "Implement the function `flatten(lst)`."
      ],
      "hint": "```python\ndef flatten(lst):\n    flat_list = []\n    for item in lst:\n        if isinstance(item, list):\n            flat_list.extend(flatten(item))\n        else:\n            flat_list.append(item)\n    return flat_list\n```"
    },
    {
      "exercise": 14,
      "title": "Rotate a Matrix 90 Degrees",
      "description": "Create a function that rotates a given n x n matrix by 90 degrees clockwise.",
      "requirements": [
        "Implement the function `rotate_matrix(matrix)`."
      ],
      "hint": "```python\ndef rotate_matrix(matrix):\n    n = len(matrix)\n    for i in range(n):\n        for j in range(i, n):\n            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]\n    matrix.reverse()\n```"
    },
    {
      "exercise": 15,
      "title": "Find the Longest Common Prefix",
      "description": "Write a function that finds the longest common prefix string among an array of strings.",
      "requirements": [
        "Implement the function `longest_common_prefix(strs)`."
      ],
      "hint": "```python\ndef longest_common_prefix(strs):\n    if not strs:\n        return ''\n    prefix = strs[0]\n    for s in strs[1:]:\n        while not s.startswith(prefix):\n            prefix = prefix[:-1]\n    return prefix\n```"
    },
    {
      "exercise": 16,
      "title": "Calculate the Average of a List",
      "description": "Create a function that calculates the average of a list of numbers.",
      "requirements": [
        "Implement the function `calculate_average(lst)`."
      ],
      "hint": "```python\ndef calculate_average(lst: List[float]) -> float:\n    return sum(lst) / len(lst) if lst else 0\n```"
    },
    {
      "exercise": 17,
      "title": "Find All Unique Elements in a List",
      "description": "Write a function that finds all unique elements in a list.",
      "requirements": [
        "Implement the function `find_unique(lst)`."
      ],
      "hint": "```python\ndef find_unique(lst: List[int]) -> List[int]:\n    return list(set(lst))\n```"
    },
    {
      "exercise": 18,
      "title": "Sum of Digits in a Number",
      "description": "Create a function that calculates the sum of digits in a given integer.",
      "requirements": [
        "Implement the function `sum_of_digits(n)`."
      ],
      "hint": "```python\ndef sum_of_digits(n: int) -> int:\n    return sum(int(digit) for digit in str(n))\n```"
    },
    {
      "exercise": 19,
      "title": "Reverse a String",
      "description": "Write a function that reverses a given string.",
      "requirements": [
        "Implement the function `reverse_string(s)`."
      ],
      "hint": "```python\ndef reverse_string(s: str) -> str:\n    return s[::-1]\n```"
    },
    {
      "exercise": 20,
      "title": "Find the Maximum Product of Two Integers in an Array",
      "description": "Create a function that finds the maximum product of two integers in an array.",
      "requirements": [
        "Implement the function `max_product(arr)`."
      ],
      "hint": "```python\ndef max_product(arr: List[int]) -> int:\n    if len(arr) < 2:\n        return 0\n    arr.sort()\n    return arr[-1] * arr[-2]\n```"
    }
  ]
  