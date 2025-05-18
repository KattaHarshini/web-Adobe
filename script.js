document.addEventListener('DOMContentLoaded', () => {
    const questionsListDiv = document.getElementById('questions-list');
    const hintModal = document.getElementById('hint-modal');
    const hintQuestionTitle = document.getElementById('hint-question');
    const hintContentDiv = document.getElementById('hint-content');
    const closeBtn = document.querySelector('.close-btn');

    // Complete list of Fasal coding questions with hints and answers
    const fasalQuestions = [
        // ... (your existing question array remains the same)
                   {
    "question": "Find the longest substring without repeating characters.",
    "description": "Tests your knowledge of sliding window and hash sets.",
    "hint": "Use two pointers and a set to track seen characters.",
    "answer": `
      <p><strong>Sample Answer (Python):</strong></p>
      <pre><code class="language-python">def length_of_longest_substring(s):
    char_set = set()
    left = max_len = 0
    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_len = max(max_len, right - left + 1)
    return max_len
      </code></pre>
    `
  },
  {
    "question": "Given an array, return all pairs that sum up to a given target.",
    "description": "Tests hashing and array traversal.",
    "hint": "Use a hash map to store complements.",
    "answer": `
      <p><strong>Sample Answer (JavaScript):</strong></p>
      <pre><code class="language-javascript">function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(nums[i], i);
    }
}
      </code></pre>
    `
  },
  {
    "question": "Implement LRU (Least Recently Used) Cache.",
    "description": "Tests your understanding of data structures like HashMap and Doubly Linked List.",
    "hint": "Use a combination of hashmap and doubly linked list for O(1) operations.",
    "answer": `
      <p><strong>Sample Answer (Python using OrderedDict):</strong></p>
      <pre><code class="language-python">from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.cache = OrderedDict()
        self.capacity = capacity

    def get(self, key):
        if key in self.cache:
            self.cache.move_to_end(key)
            return self.cache[key]
        return -1

    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)
      </code></pre>
    `
  },
  {
    "question": "Rotate a matrix 90 degrees clockwise.",
    "description": "Checks your grasp of matrix manipulation.",
    "hint": "Transpose the matrix and then reverse each row.",
    "answer": `
      <p><strong>Sample Answer (Python):</strong></p>
      <pre><code class="language-python">def rotate(matrix):
    matrix[:] = list(zip(*matrix[::-1]))
      </code></pre>
    `
  },
  {
    "question": "Check whether a string is a valid palindrome ignoring non-alphanumeric characters.",
    "description": "Tests string manipulation and two-pointer technique.",
    "hint": "Clean the string and compare it to its reverse.",
    "answer": `
      <p><strong>Sample Answer (Java):</strong></p>
      <pre><code class="language-java">public boolean isPalindrome(String s) {
    s = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
    int left = 0, right = s.length() - 1;
    while (left < right) {
        if (s.charAt(left++) != s.charAt(right--)) return false;
    }
    return true;
}
      </code></pre>
    `
  },
  {
    "question": "Merge two sorted linked lists.",
    "description": "Assesses linked list manipulation.",
    "hint": "Use recursion or iterative approach with dummy head.",
    "answer": `
      <p><strong>Sample Answer (Python):</strong></p>
      <pre><code class="language-python">class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeTwoLists(l1, l2):
    if not l1 or not l2:
        return l1 or l2
    if l1.val < l2.val:
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    else:
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
      </code></pre>
    `
  },
  {
    "question": "Find all permutations of a string.",
    "description": "Evaluates recursion and backtracking skills.",
    "hint": "Use a recursive function that builds permutations by swapping characters.",
    "answer": `
      <p><strong>Sample Answer (Python):</strong></p>
      <pre><code class="language-python">def permute(s):
    res = []
    def backtrack(path, remaining):
        if not remaining:
            res.append(path)
        for i in range(len(remaining)):
            backtrack(path + remaining[i], remaining[:i] + remaining[i+1:])
    backtrack("", s)
    return res
      </code></pre>
    `
  },
  {
    "question": "Implement a function to detect if a binary tree is balanced.",
    "description": "Tests tree traversal and recursion logic.",
    "hint": "Use DFS and return height along with balance status.",
    "answer": `
      <p><strong>Sample Answer (Python):</strong></p>
      <pre><code class="language-python">def isBalanced(root):
    def dfs(node):
        if not node:
            return (True, 0)
        left_balanced, left_height = dfs(node.left)
        right_balanced, right_height = dfs(node.right)
        balanced = (left_balanced and right_balanced and abs(left_height - right_height) <= 1)
        return (balanced, 1 + max(left_height, right_height))
    return dfs(root)[0]
      </code></pre>
    `
  },
  {
    "question": "Find the intersection of two arrays.",
    "description": "Tests set operations and array traversal.",
    "hint": "Convert arrays to sets and use set intersection.",
    "answer": `
      <p><strong>Sample Answer (JavaScript):</strong></p>
      <pre><code class="language-javascript">function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    return [...set1].filter(n => set2.has(n));
}
      </code></pre>
    `
  },
  {
    "question": "Implement a function to perform level-order traversal of a binary tree.",
    "description": "Checks knowledge of BFS using queues.",
    "hint": "Use a queue to track nodes at each level.",
    "answer": `
      <p><strong>Sample Answer (Python):</strong></p>
      <pre><code class="language-python">from collections import deque

def levelOrder(root):
    if not root:
        return []
    result, queue = [], deque([root])
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
        result.append(level)
    return result
      </code></pre>
    `
  },
  {
    "question": "Find the Kth largest element in an unsorted array.",
    "description": "Tests your knowledge of heaps or quickselect.",
    "hint": "Use a min-heap of size k or QuickSelect algorithm.",
    "answer": `
      <p><strong>Sample Answer (Python using heap):</strong></p>
      <pre><code class="language-python">import heapq

def findKthLargest(nums, k):
    return heapq.nlargest(k, nums)[-1]
      </code></pre>
    `
  },
  {
    "question": "Determine if a number is a power of two.",
    "description": "Checks bitwise understanding.",
    "hint": "A power of two has only one bit set in its binary representation.",
    "answer": `
      <p><strong>Sample Answer (Java):</strong></p>
      <pre><code class="language-java">public boolean isPowerOfTwo(int n) {
    return n > 0 && (n & (n - 1)) == 0;
}
      </code></pre>
    `
  },
  {
    "question": "Implement a Trie (Prefix Tree).",
    "description": "Tests data structure implementation skills.",
    "hint": "Each node should store children and a flag for word-end.",
    "answer": `
      <p><strong>Sample Answer (Python):</strong></p>
      <pre><code class="language-python">class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for ch in word:
            node = node.children.setdefault(ch, TrieNode())
        node.is_end = True

    def search(self, word):
        node = self.root
        for ch in word:
            if ch not in node.children:
                return False
            node = node.children[ch]
        return node.is_end
      </code></pre>
    `
  },
  {
    "question": "Find the minimum in a rotated sorted array.",
    "description": "Evaluates binary search variations.",
    "hint": "Use modified binary search to find pivot.",
    "answer": `
      <p><strong>Sample Answer (Python):</strong></p>
      <pre><code class="language-python">def findMin(nums):
    left, right = 0, len(nums) - 1
    while left < right:
        mid = (left + right) // 2
        if nums[mid] > nums[right]:
            left = mid + 1
        else:
            right = mid
    return nums[left]
      </code></pre>
    `
  },
  {
    "question": "Check if two strings are anagrams.",
    "description": "Tests string and hash map usage.",
    "hint": "Use character counts for comparison.",
    "answer": `
      <p><strong>Sample Answer (JavaScript):</strong></p>
      <pre><code class="language-javascript">function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const count = {};
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }
    return true;
}
      </code></pre>
    `
  },
  {
    "question": "Generate all valid parentheses combinations for n pairs.",
    "description": "Assesses recursion and backtracking skills.",
    "hint": "Use a recursive function tracking open and close count.",
    "answer": `
      <p><strong>Sample Answer (Python):</strong></p>
      <pre><code class="language-python">def generateParenthesis(n):
    res = []
    def backtrack(s='', left=0, right=0):
        if len(s) == 2 * n:
            res.append(s)
            return
        if left < n:
            backtrack(s + '(', left + 1, right)
        if right < left:
            backtrack(s + ')', left, right + 1)
    backtrack()
    return res
      </code></pre>
    `
  },
  {
    "question": "Detect a cycle in a linked list.",
    "description": "Tests fast and slow pointer technique.",
    "hint": "Use Floyd’s cycle detection algorithm.",
    "answer": `
      <p><strong>Sample Answer (Python):</strong></p>
      <pre><code class="language-python">def hasCycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False
      </code></pre>
    `
  },
  {
    "question": "Find the missing number in an array of 0 to n.",
    "description": "Tests mathematical and XOR approaches.",
    "hint": "Sum from 0 to n minus sum of array.",
    "answer": `
      <p><strong>Sample Answer (Python):</strong></p>
      <pre><code class="language-python">def missingNumber(nums):
    n = len(nums)
    return n * (n + 1) // 2 - sum(nums)
      </code></pre>
    `
  },
  {
    "question": "Implement a stack that supports getMin() in O(1).",
    "description": "Checks auxiliary stack logic.",
    "hint": "Use an extra stack to keep track of the minimums.",
    "answer": `
      <p><strong>Sample Answer (Java):</strong></p>
      <pre><code class="language-java">class MinStack {
    Stack<Integer> stack = new Stack<>();
    Stack<Integer> minStack = new Stack<>();

    public void push(int x) {
        stack.push(x);
        if (minStack.isEmpty() || x <= minStack.peek())
            minStack.push(x);
    }

    public void pop() {
        if (stack.pop().equals(minStack.peek()))
            minStack.pop();
    }

    public int top() {
        return stack.peek();
    }

    public int getMin() {
        return minStack.peek();
    }
}
      </code></pre>
    `
  },
  {
    "question": "Convert a Binary Search Tree to a sorted Doubly Linked List.",
    "description": "Assesses in-order traversal and pointer manipulation.",
    "hint": "Use recursive in-order traversal and keep track of previous node.",
    "answer": `
      <p><strong>Sample Answer (Python):</strong></p>
      <pre><code class="language-python">class Node:
    def __init__(self, val):
        self.val = val
        self.left = self.right = None

def treeToDoublyList(root):
    if not root:
        return None
    def helper(node):
        nonlocal last, first
        if node:
            helper(node.left)
            if last:
                last.right = node
                node.left = last
            else:
                first = node
            last = node
            helper(node.right)

    first = last = None
    helper(root)
    first.left = last
    last.right = first
    return first
      </code></pre>
    `
  },
  {
    "question": "Tell me about a time you disagreed with your manager. How did you handle it?",
    "description": "Assesses conflict resolution, communication skills, and maturity in handling workplace disagreements.",
    "hint": "Use the STAR method. Focus on professionalism and outcome.",
    "answer": `
      <p><strong>Sample Answer:</strong></p>
      <p>In my internship, I disagreed with my manager's approach to debugging a critical issue. I respectfully asked for a one-on-one, presented data from my analysis, and proposed an alternative. Though my idea wasn't implemented immediately, it led to a broader team discussion and a hybrid solution that resolved the issue faster.</p>
      <p><strong>Key Aspects:</strong> Respect, data-driven argument, teamwork, constructive resolution.</p>
    `
  },
  {
    "question": "What does innovation mean to you, and how have you demonstrated it?",
    "description": "Evaluates creativity and initiative-taking, which are highly valued at Adobe.",
    "hint": "Share a real story where your new idea made an impact.",
    "answer": `
      <p><strong>Sample Answer:</strong></p>
      <p>Innovation to me means finding smarter, simpler, or more effective ways to solve problems. During a college project, I automated part of the testing process using a Python script, reducing manual effort by 50%. This small innovation helped the team focus on development while maintaining quality.</p>
      <p><strong>Key Aspects:</strong> Originality, problem-solving, measurable impact.</p>
    `
  },
  {
    "question": "How do you prioritize when you have multiple deadlines?",
    "description": "Assesses time management and organization skills.",
    "hint": "Demonstrate logical thinking and decision-making under pressure.",
    "answer": `
      <p><strong>Sample Answer:</strong></p>
      <p>I list tasks based on urgency and importance using the Eisenhower Matrix. I set internal mini-deadlines and communicate with stakeholders proactively to adjust if needed. This approach helped me during my final semester when I was juggling placement preparation, a research paper, and project submissions.</p>
      <p><strong>Key Aspects:</strong> Structured planning, clarity, communication.</p>
    `
  },
  {
    "question": "What motivates you to join Adobe?",
    "description": "Tests cultural fit and genuine interest in the company.",
    "hint": "Show you've researched Adobe’s values, culture, and products.",
    "answer": `
      <p><strong>Sample Answer:</strong></p>
      <p>Adobe stands out to me for its commitment to creativity and innovation. As someone passionate about technology and user experience, I admire how Adobe continuously evolves tools like Photoshop and Adobe XD. The open and inclusive culture and focus on impactful work make it my dream company.</p>
      <p><strong>Key Aspects:</strong> Alignment with values, enthusiasm, research-backed.</p>
    `
  },
  {
    "question": "Have you ever worked with someone difficult? How did you manage it?",
    "description": "Assesses emotional intelligence and teamwork.",
    "hint": "Focus on empathy and results, not blame.",
    "answer": `
      <p><strong>Sample Answer:</strong></p>
      <p>Yes, during a group project, one teammate was unresponsive and missed deadlines. I calmly reached out, discovered they were overwhelmed with another responsibility, and we rebalanced the work. I also helped them catch up. Eventually, we completed the project on time and maintained good rapport.</p>
      <p><strong>Key Aspects:</strong> Understanding, problem-solving, team-first attitude.</p>
    `
  },
  {
    "question": "How do you keep yourself updated with new technologies?",
    "description": "Evaluates your curiosity and passion for continuous learning.",
    "hint": "Mention blogs, platforms, communities, or personal projects.",
    "answer": `
      <p><strong>Sample Answer:</strong></p>
      <p>I follow tech blogs like Medium and Dev.to, watch YouTube channels like Fireship, and explore GitHub trending repositories. I regularly take part in coding contests and recently built a small app using the latest version of React. This habit helps me stay current and apply new tools effectively.</p>
      <p><strong>Key Aspects:</strong> Self-motivation, awareness, hands-on learning.</p>
    `
  }
    ];

    fasalQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-item');

        const title = document.createElement('h3');
        title.textContent = `${index + 1}. ${question.question}`;

        const description = document.createElement('p');
        description.textContent = question.description;

        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px';
        buttonContainer.style.marginTop = '15px';

        // Hint Button
        const hintButton = document.createElement('button');
        hintButton.textContent = 'Show Hint';
        hintButton.style.padding = '10px 20px';
        hintButton.style.border = 'none';
        hintButton.style.borderRadius = '5px';
        hintButton.style.backgroundColor = '#4CAF50';
        hintButton.style.color = 'white';
        hintButton.style.fontWeight = 'bold';
        hintButton.style.cursor = 'pointer';
        hintButton.style.transition = 'all 0.3s ease';
        hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for hint button
        hintButton.addEventListener('mouseover', () => {
            hintButton.style.backgroundColor = '#45a049';
            hintButton.style.transform = 'translateY(-2px)';
            hintButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('mouseout', () => {
            hintButton.style.backgroundColor = '#4CAF50';
            hintButton.style.transform = 'translateY(0)';
            hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = `<p>${question.hint}</p>`;
            hintModal.style.display = 'block';
        });

        // Answer Button
        const answerButton = document.createElement('button');
        answerButton.textContent = 'Show Answer';
        answerButton.style.padding = '10px 20px';
        answerButton.style.border = 'none';
        answerButton.style.borderRadius = '5px';
        answerButton.style.backgroundColor = '#2196F3';
        answerButton.style.color = 'white';
        answerButton.style.fontWeight = 'bold';
        answerButton.style.cursor = 'pointer';
        answerButton.style.transition = 'all 0.3s ease';
        answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for answer button
        answerButton.addEventListener('mouseover', () => {
            answerButton.style.backgroundColor = '#0b7dda';
            answerButton.style.transform = 'translateY(-2px)';
            answerButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('mouseout', () => {
            answerButton.style.backgroundColor = '#2196F3';
            answerButton.style.transform = 'translateY(0)';
            answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = question.answer;
            hintModal.style.display = 'block';
        });

        // Add buttons to container
        buttonContainer.appendChild(hintButton);
        buttonContainer.appendChild(answerButton);

        questionDiv.appendChild(title);
        questionDiv.appendChild(description);
        questionDiv.appendChild(buttonContainer);
        questionsListDiv.appendChild(questionDiv);
    });

    closeBtn.addEventListener('click', () => {
        hintModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === hintModal) {
            hintModal.style.display = 'none';
        }
    });
});