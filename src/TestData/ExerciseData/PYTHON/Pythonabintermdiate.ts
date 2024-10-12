export const PYTHONabintermediate = [
    {
      "exercise": 1,
      "title": "Implement a LRU Cache",
      "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
      "requirements": [
        "Implement the class `LRUCache` with methods `get(key)` and `put(key, value)`."
      ],
      "hint": "```python\nfrom collections import OrderedDict\n\nclass LRUCache:\n    def __init__(self, capacity: int):\n        self.cache = OrderedDict()\n        self.capacity = capacity\n\n    def get(self, key: int) -> int:\n        if key not in self.cache:\n            return -1\n        self.cache.move_to_end(key)\n        return self.cache[key]\n\n    def put(self, key: int, value: int) -> None:\n        if key in self.cache:\n            self.cache.move_to_end(key)\n        self.cache[key] = value\n        if len(self.cache) > self.capacity:\n            self.cache.popitem(last=False)\n```"
    },
    {
      "exercise": 2,
      "title": "Longest Palindromic Substring",
      "description": "Write a function to find the longest palindromic substring in a given string.",
      "requirements": [
        "Implement the function `longest_palindrome(s)`."
      ],
      "hint": "```python\ndef longest_palindrome(s: str) -> str:\n    start, end = 0, 0\n    for i in range(len(s)):\n        len1 = expand_around_center(s, i, i)\n        len2 = expand_around_center(s, i, i + 1)\n        max_len = max(len1, len2)\n        if max_len > end - start:\n            start = i - (max_len - 1) // 2\n            end = i + max_len // 2\n    return s[start:end + 1]\n\ndef expand_around_center(s, left, right):\n    while left >= 0 and right < len(s) and s[left] == s[right]:\n        left -= 1\n        right += 1\n    return right - left - 1\n```"
    },
    {
      "exercise": 3,
      "title": "Group Anagrams",
      "description": "Given an array of strings, group the anagrams together.",
      "requirements": [
        "Implement the function `group_anagrams(strs)`."
      ],
      "hint": "```python\ndef group_anagrams(strs):\n    anagrams = {}\n    for s in strs:\n        key = ''.join(sorted(s))\n        anagrams.setdefault(key, []).append(s)\n    return list(anagrams.values())\n```"
    },
    {
      "exercise": 4,
      "title": "Median of Two Sorted Arrays",
      "description": "Find the median of two sorted arrays.",
      "requirements": [
        "Implement the function `find_median_sorted_arrays(nums1, nums2)`."
      ],
      "hint": "```python\ndef find_median_sorted_arrays(nums1: List[int], nums2: List[int]) -> float:\n    merged = sorted(nums1 + nums2)\n    n = len(merged)\n    if n % 2 == 0:\n        return (merged[n // 2 - 1] + merged[n // 2]) / 2\n    return merged[n // 2]\n```"
    },
    {
      "exercise": 5,
      "title": "Implement Trie (Prefix Tree)",
      "description": "Implement a trie with insert, search, and startsWith methods.",
      "requirements": [
        "Implement the class `Trie`."
      ],
      "hint": "```python\nclass TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.is_end_of_word = False\n\nclass Trie:\n    def __init__(self):\n        self.root = TrieNode()\n\n    def insert(self, word: str) -> None:\n        node = self.root\n        for char in word:\n            if char not in node.children:\n                node.children[char] = TrieNode()\n            node = node.children[char]\n        node.is_end_of_word = True\n\n    def search(self, word: str) -> bool:\n        node = self.root\n        for char in word:\n            if char not in node.children:\n                return False\n            node = node.children[char]\n        return node.is_end_of_word\n\n    def startsWith(self, prefix: str) -> bool:\n        node = self.root\n        for char in prefix:\n            if char not in node.children:\n                return False\n            node = node.children[char]\n        return True\n```"
    },
    {
      "exercise": 6,
      "title": "Binary Search",
      "description": "Implement binary search algorithm.",
      "requirements": [
        "Implement the function `binary_search(arr, target)`."
      ],
      "hint": "```python\ndef binary_search(arr: List[int], target: int) -> int:\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = left + (right - left) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1\n```"
    },
    {
      "exercise": 7,
      "title": "Find All Subsets of a Set",
      "description": "Write a function to find all subsets of a given set.",
      "requirements": [
        "Implement the function `subsets(nums)`."
      ],
      "hint": "```python\ndef subsets(nums: List[int]) -> List[List[int]]:\n    result = []\n    def backtrack(start, path):\n        result.append(path[:])\n        for i in range(start, len(nums)):\n            path.append(nums[i])\n            backtrack(i + 1, path)\n            path.pop()\n    backtrack(0, [])\n    return result\n```"
    },
    {
      "exercise": 8,
      "title": "Kth Largest Element in an Array",
      "description": "Find the kth largest element in an unsorted array.",
      "requirements": [
        "Implement the function `find_kth_largest(nums, k)`."
      ],
      "hint": "```python\nimport heapq\n\ndef find_kth_largest(nums: List[int], k: int) -> int:\n    return heapq.nlargest(k, nums)[-1]\n```"
    },
    {
      "exercise": 9,
      "title": "Maximum Subarray",
      "description": "Write a function that finds the contiguous subarray with the maximum sum.",
      "requirements": [
        "Implement the function `max_sub_array(nums)`."
      ],
      "hint": "```python\ndef max_sub_array(nums: List[int]) -> int:\n    max_sum = current_sum = nums[0]\n    for num in nums[1:]:\n        current_sum = max(num, current_sum + num)\n        max_sum = max(max_sum, current_sum)\n    return max_sum\n```"
    },
    {
      "exercise": 10,
      "title": "Number of Islands",
      "description": "Count the number of islands in a 2D grid.",
      "requirements": [
        "Implement the function `num_islands(grid)`."
      ],
      "hint": "```python\ndef num_islands(grid: List[List[str]]) -> int:\n    if not grid:\n        return 0\n\n    def dfs(i, j):\n        if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]) or grid[i][j] == '0':\n            return\n        grid[i][j] = '0'\n        dfs(i + 1, j)\n        dfs(i - 1, j)\n        dfs(i, j + 1)\n        dfs(i, j - 1)\n\n    count = 0\n    for i in range(len(grid)):\n        for j in range(len(grid[0])):\n            if grid[i][j] == '1':\n                dfs(i, j)\n                count += 1\n    return count\n```"
    },
    {
      "exercise": 11,
      "title": "Top K Frequent Elements",
      "description": "Find the k most frequent elements in an array.",
      "requirements": [
        "Implement the function `top_k_frequent(nums, k)`."
      ],
      "hint": "```python\nfrom collections import Counter\n\ndef top_k_frequent(nums: List[int], k: int) -> List[int]:\n    count = Counter(nums)\n    return [item for item, freq in count.most_common(k)]\n```"
    },
    {
      "exercise": 12,
      "title": "Validate Binary Search Tree",
      "description": "Check if a binary tree is a valid binary search tree.",
      "requirements": [
        "Implement the function `is_valid_bst(root)`."
      ],
      "hint": "```python\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef is_valid_bst(root: TreeNode, low=float('-inf'), high=float('inf')) -> bool:\n    if not root:\n        return True\n    if root.val <= low or root.val >= high:\n        return False\n    return (is_valid_bst(root.left, low, root.val) and\n            is_valid_bst(root.right, root.val, high))\n```"
    },
    {
      "exercise": 13,
      "title": "Rotate Image",
      "description": "Rotate a 2D image represented by an NxN matrix 90 degrees clockwise.",
      "requirements": [
        "Implement the function `rotate(matrix)`."
      ],
      "hint": "```python\ndef rotate(matrix: List[List[int]]) -> None:\n    n = len(matrix)\n    for i in range(n):\n        for j in range(i, n):\n            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]\n    matrix.reverse()\n```"
    },
    {
      "exercise": 14,
      "title": "Find Peak Element",
      "description": "A peak element is an element that is greater than its neighbors. Find any peak element in an array.",
      "requirements": [
        "Implement the function `find_peak(nums)`."
      ],
      "hint": "```python\ndef find_peak(nums: List[int]) -> int:\n    left, right = 0, len(nums) - 1\n    while left < right:\n        mid = (left + right) // 2\n        if nums[mid] < nums[mid + 1]:\n            left = mid + 1\n        else:\n            right = mid\n    return nums[left]\n```"
    },
    {
      "exercise": 15,
      "title": "Alien Dictionary",
      "description": "Determine the order of characters in an alien language given a list of sorted words.",
      "requirements": [
        "Implement the function `alien_order(words)`."
      ],
      "hint": "```python\nfrom collections import defaultdict\n\ndef alien_order(words: List[str]) -> str:\n    graph = defaultdict(set)\n    in_degree = {c: 0 for word in words for c in word}\n\n    for i in range(len(words) - 1):\n        w1, w2 = words[i], words[i + 1]\n        for c1, c2 in zip(w1, w2):\n            if c1 != c2:\n                if c2 not in graph[c1]:\n                    graph[c1].add(c2)\n                    in_degree[c2] += 1\n                break\n        else:\n            if len(w1) > len(w2): return \"\"\n\n    queue = [c for c in in_degree if in_degree[c] == 0]\n    order = \"\"\n    while queue:\n        c = queue.pop(0)\n        order += c\n        for neighbor in graph[c]:\n            in_degree[neighbor] -= 1\n            if in_degree[neighbor] == 0:\n                queue.append(neighbor)\n    return order if len(order) == len(in_degree) else \"\"\n```"
    },
    {
      "exercise": 16,
      "title": "Spiral Matrix",
      "description": "Print the elements of a 2D matrix in spiral order.",
      "requirements": [
        "Implement the function `spiral_order(matrix)`."
      ],
      "hint": "```python\ndef spiral_order(matrix: List[List[int]]) -> List[int]:\n    result = []\n    while matrix:\n        result += matrix.pop(0)\n        if matrix and matrix[0]:\n            for row in matrix:\n                result.append(row.pop())\n        if matrix:\n            result += matrix.pop()[::-1]\n        if matrix and matrix[0]:\n            for row in matrix[::-1]:\n                result.append(row.pop(0))\n    return result\n```"
    },
    {
      "exercise": 17,
      "title": "Search in Rotated Sorted Array",
      "description": "Search for a target in a rotated sorted array.",
      "requirements": [
        "Implement the function `search(nums, target)`."
      ],
      "hint": "```python\ndef search(nums: List[int], target: int) -> int:\n    left, right = 0, len(nums) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if nums[mid] == target:\n            return mid\n        if nums[left] <= nums[mid]:\n            if nums[left] <= target < nums[mid]:\n                right = mid - 1\n            else:\n                left = mid + 1\n        else:\n            if nums[mid] < target <= nums[right]:\n                left = mid + 1\n            else:\n                right = mid - 1\n    return -1\n```"
    },
    {
      "exercise": 18,
      "title": "Unique Paths",
      "description": "Count the unique paths from the top-left to the bottom-right of a grid.",
      "requirements": [
        "Implement the function `unique_paths(m, n)`."
      ],
      "hint": "```python\ndef unique_paths(m: int, n: int) -> int:\n    dp = [[1] * n for _ in range(m)]\n    for i in range(1, m):\n        for j in range(1, n):\n            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]\n    return dp[-1][-1]\n```"
    },
    {
      "exercise": 19,
      "title": "Combination Sum",
      "description": "Find all unique combinations of numbers that sum up to a target.",
      "requirements": [
        "Implement the function `combination_sum(candidates, target)`."
      ],
      "hint": "```python\ndef combination_sum(candidates: List[int], target: int) -> List[List[int]]:\n    def backtrack(start, path, total):\n        if total == target:\n            result.append(path)\n            return\n        for i in range(start, len(candidates)):\n            if total + candidates[i] > target:\n                continue\n            backtrack(i, path + [candidates[i]], total + candidates[i])\n\n    result = []\n    backtrack(0, [], 0)\n    return result\n```"
    },
    {
      "exercise": 20,
      "title": "Coin Change",
      "description": "Determine the fewest number of coins needed to make up a given amount.",
      "requirements": [
        "Implement the function `coin_change(coins, amount)`."
      ],
      "hint": "```python\ndef coin_change(coins: List[int], amount: int) -> int:\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for coin in coins:\n        for x in range(coin, amount + 1):\n            dp[x] = min(dp[x], dp[x - coin] + 1)\n    return dp[amount] if dp[amount] != float('inf') else -1\n```"
    }
  ]
  