// ═══════════════════════════════════════════════════════════
//  DSA QUESTION BANK — 350 curated questions, ordered by topic
// ═══════════════════════════════════════════════════════════
const roadmaps = {

basic: [
  {
    id: "arrays",
    icon: "▦",
    name: "Arrays & Hashing",
    questions: [
      { id:"a1",  title:"Two Sum",                                  diff:"Easy",   slug:"two-sum" },
      { id:"a2",  title:"Best Time to Buy and Sell Stock",          diff:"Easy",   slug:"best-time-to-buy-and-sell-stock" },
      { id:"a3",  title:"Contains Duplicate",                       diff:"Easy",   slug:"contains-duplicate" },
      { id:"a4",  title:"Product of Array Except Self",             diff:"Medium", slug:"product-of-array-except-self" },
      { id:"a5",  title:"Maximum Subarray (Kadane's)",              diff:"Medium", slug:"maximum-subarray" },
      { id:"a6",  title:"Maximum Product Subarray",                 diff:"Medium", slug:"maximum-product-subarray" },
      { id:"a7",  title:"Find Minimum in Rotated Sorted Array",     diff:"Medium", slug:"find-minimum-in-rotated-sorted-array" },
      { id:"a8",  title:"Search in Rotated Sorted Array",           diff:"Medium", slug:"search-in-rotated-sorted-array" },
      { id:"a9",  title:"3Sum",                                     diff:"Medium", slug:"3sum" },
      { id:"a10", title:"Container With Most Water",                diff:"Medium", slug:"container-with-most-water" },
      { id:"a11", title:"Group Anagrams",                           diff:"Medium", slug:"group-anagrams" },
      { id:"a12", title:"Top K Frequent Elements",                  diff:"Medium", slug:"top-k-frequent-elements" },
      { id:"a13", title:"Encode and Decode Strings",                diff:"Medium", slug:"encode-and-decode-strings" },
      { id:"a14", title:"Longest Consecutive Sequence",             diff:"Medium", slug:"longest-consecutive-sequence" },
      { id:"a15", title:"Sort Colors (Dutch National Flag)",        diff:"Medium", slug:"sort-colors" },
      { id:"a16", title:"Subarray Sum Equals K",                    diff:"Medium", slug:"subarray-sum-equals-k" },
      { id:"a17", title:"4Sum",                                     diff:"Medium", slug:"4sum" },
      { id:"a18", title:"Trapping Rain Water",                      diff:"Hard",   slug:"trapping-rain-water" },
      { id:"a19", title:"Sliding Window Maximum",                   diff:"Hard",   slug:"sliding-window-maximum" },
      { id:"a20", title:"First Missing Positive",                   diff:"Hard",   slug:"first-missing-positive" },
    ]
  },
  {
    id: "strings",
    icon: "T",
    name: "Strings",
    questions: [
      { id:"s1",  title:"Valid Anagram",                            diff:"Easy",   slug:"valid-anagram" },
      { id:"s2",  title:"Valid Palindrome",                         diff:"Easy",   slug:"valid-palindrome" },
      { id:"s3",  title:"Reverse String",                           diff:"Easy",   slug:"reverse-string" },
      { id:"s4",  title:"Longest Common Prefix",                    diff:"Easy",   slug:"longest-common-prefix" },
      { id:"s5",  title:"Longest Substring Without Repeating Characters", diff:"Medium", slug:"longest-substring-without-repeating-characters" },
      { id:"s6",  title:"Longest Repeating Character Replacement",  diff:"Medium", slug:"longest-repeating-character-replacement" },
      { id:"s7",  title:"Minimum Window Substring",                 diff:"Hard",   slug:"minimum-window-substring" },
      { id:"s8",  title:"Valid Parentheses",                        diff:"Easy",   slug:"valid-parentheses" },
      { id:"s9",  title:"Generate Parentheses",                     diff:"Medium", slug:"generate-parentheses" },
      { id:"s10", title:"String to Integer (atoi)",                 diff:"Medium", slug:"string-to-integer-atoi" },
      { id:"s11", title:"Palindromic Substrings",                   diff:"Medium", slug:"palindromic-substrings" },
      { id:"s12", title:"Longest Palindromic Substring",            diff:"Medium", slug:"longest-palindromic-substring" },
      { id:"s13", title:"Count and Say",                            diff:"Medium", slug:"count-and-say" },
      { id:"s14", title:"Decode Ways",                              diff:"Medium", slug:"decode-ways" },
      { id:"s15", title:"Word Break",                               diff:"Medium", slug:"word-break" },
      { id:"s16", title:"Wildcard Matching",                        diff:"Hard",   slug:"wildcard-matching" },
      { id:"s17", title:"Regular Expression Matching",              diff:"Hard",   slug:"regular-expression-matching" },
      { id:"s18", title:"Interleaving String",                      diff:"Hard",   slug:"interleaving-string" },
    ]
  },
  {
    id: "twopointer",
    icon: "↔",
    name: "Two Pointers",
    questions: [
      { id:"tp1", title:"Merge Sorted Array",                       diff:"Easy",   slug:"merge-sorted-array" },
      { id:"tp2", title:"Remove Duplicates from Sorted Array",      diff:"Easy",   slug:"remove-duplicates-from-sorted-array" },
      { id:"tp3", title:"Move Zeroes",                              diff:"Easy",   slug:"move-zeroes" },
      { id:"tp4", title:"Two Sum II — Input Array Is Sorted",       diff:"Medium", slug:"two-sum-ii-input-array-is-sorted" },
      { id:"tp5", title:"3Sum Closest",                             diff:"Medium", slug:"3sum-closest" },
      { id:"tp6", title:"Minimum Size Subarray Sum",                diff:"Medium", slug:"minimum-size-subarray-sum" },
      { id:"tp7", title:"Squares of a Sorted Array",                diff:"Easy",   slug:"squares-of-a-sorted-array" },
      { id:"tp8", title:"Partition Labels",                         diff:"Medium", slug:"partition-labels" },
      { id:"tp9", title:"Boats to Save People",                     diff:"Medium", slug:"boats-to-save-people" },
    ]
  },
  {
    id: "slidingwindow",
    icon: "⊡",
    name: "Sliding Window",
    questions: [
      { id:"sw1", title:"Find All Anagrams in a String",            diff:"Medium", slug:"find-all-anagrams-in-a-string" },
      { id:"sw2", title:"Permutation in String",                    diff:"Medium", slug:"permutation-in-string" },
      { id:"sw3", title:"Minimum Window Substring",                 diff:"Hard",   slug:"minimum-window-substring" },
      { id:"sw4", title:"Longest Subarray of 1s After Deleting One Element", diff:"Medium", slug:"longest-subarray-of-1s-after-deleting-one-element" },
      { id:"sw5", title:"Max Consecutive Ones III",                 diff:"Medium", slug:"max-consecutive-ones-iii" },
      { id:"sw6", title:"Fruit Into Baskets",                       diff:"Medium", slug:"fruit-into-baskets" },
      { id:"sw7", title:"Substring with Concatenation of All Words",diff:"Hard",   slug:"substring-with-concatenation-of-all-words" },
    ]
  },
  {
    id: "linkedlist",
    icon: "⬡",
    name: "Linked Lists",
    questions: [
      { id:"ll1",  title:"Reverse Linked List",                     diff:"Easy",   slug:"reverse-linked-list" },
      { id:"ll2",  title:"Merge Two Sorted Lists",                  diff:"Easy",   slug:"merge-two-sorted-lists" },
      { id:"ll3",  title:"Linked List Cycle",                       diff:"Easy",   slug:"linked-list-cycle" },
      { id:"ll4",  title:"Remove Nth Node From End",                diff:"Medium", slug:"remove-nth-node-from-end-of-list" },
      { id:"ll5",  title:"Add Two Numbers",                         diff:"Medium", slug:"add-two-numbers" },
      { id:"ll6",  title:"Reorder List",                            diff:"Medium", slug:"reorder-list" },
      { id:"ll7",  title:"Find the Duplicate Number",               diff:"Medium", slug:"find-the-duplicate-number" },
      { id:"ll8",  title:"Copy List with Random Pointer",           diff:"Medium", slug:"copy-list-with-random-pointer" },
      { id:"ll9",  title:"LRU Cache",                               diff:"Medium", slug:"lru-cache" },
      { id:"ll10", title:"Swap Nodes in Pairs",                     diff:"Medium", slug:"swap-nodes-in-pairs" },
      { id:"ll11", title:"Palindrome Linked List",                  diff:"Easy",   slug:"palindrome-linked-list" },
      { id:"ll12", title:"Intersection of Two Linked Lists",        diff:"Easy",   slug:"intersection-of-two-linked-lists" },
      { id:"ll13", title:"Merge k Sorted Lists",                    diff:"Hard",   slug:"merge-k-sorted-lists" },
      { id:"ll14", title:"Reverse Nodes in k-Group",                diff:"Hard",   slug:"reverse-nodes-in-k-group" },
      { id:"ll15", title:"Sort List",                               diff:"Medium", slug:"sort-list" },
    ]
  },
  {
    id: "stack",
    icon: "⧉",
    name: "Stack & Queue",
    questions: [
      { id:"sq1",  title:"Min Stack",                               diff:"Medium", slug:"min-stack" },
      { id:"sq2",  title:"Evaluate Reverse Polish Notation",        diff:"Medium", slug:"evaluate-reverse-polish-notation" },
      { id:"sq3",  title:"Daily Temperatures",                      diff:"Medium", slug:"daily-temperatures" },
      { id:"sq4",  title:"Car Fleet",                               diff:"Medium", slug:"car-fleet" },
      { id:"sq5",  title:"Largest Rectangle in Histogram",          diff:"Hard",   slug:"largest-rectangle-in-histogram" },
      { id:"sq6",  title:"Implement Queue using Stacks",            diff:"Easy",   slug:"implement-queue-using-stacks" },
      { id:"sq7",  title:"Next Greater Element I",                  diff:"Easy",   slug:"next-greater-element-i" },
      { id:"sq8",  title:"Next Greater Element II",                 diff:"Medium", slug:"next-greater-element-ii" },
      { id:"sq9",  title:"Asteroid Collision",                      diff:"Medium", slug:"asteroid-collision" },
      { id:"sq10", title:"132 Pattern",                             diff:"Medium", slug:"132-pattern" },
      { id:"sq11", title:"Basic Calculator II",                     diff:"Medium", slug:"basic-calculator-ii" },
      { id:"sq12", title:"Decode String",                           diff:"Medium", slug:"decode-string" },
    ]
  },
  {
    id: "binarysearch",
    icon: "⌖",
    name: "Binary Search",
    questions: [
      { id:"bs1",  title:"Binary Search",                           diff:"Easy",   slug:"binary-search" },
      { id:"bs2",  title:"Search a 2D Matrix",                      diff:"Medium", slug:"search-a-2d-matrix" },
      { id:"bs3",  title:"Koko Eating Bananas",                     diff:"Medium", slug:"koko-eating-bananas" },
      { id:"bs4",  title:"Find Peak Element",                       diff:"Medium", slug:"find-peak-element" },
      { id:"bs5",  title:"Time Based Key-Value Store",              diff:"Medium", slug:"time-based-key-value-store" },
      { id:"bs6",  title:"Median of Two Sorted Arrays",             diff:"Hard",   slug:"median-of-two-sorted-arrays" },
      { id:"bs7",  title:"Split Array Largest Sum",                 diff:"Hard",   slug:"split-array-largest-sum" },
      { id:"bs8",  title:"Find First and Last Position of Element", diff:"Medium", slug:"find-first-and-last-position-of-element-in-sorted-array" },
      { id:"bs9",  title:"Capacity To Ship Packages Within D Days", diff:"Medium", slug:"capacity-to-ship-packages-within-d-days" },
      { id:"bs10", title:"Sqrt(x)",                                 diff:"Easy",   slug:"sqrtx" },
      { id:"bs11", title:"Count of Range Sum",                      diff:"Hard",   slug:"count-of-range-sum" },
    ]
  },
  {
    id: "trees",
    icon: "🌲",
    name: "Trees — Binary Trees",
    questions: [
      { id:"bt1",  title:"Invert Binary Tree",                      diff:"Easy",   slug:"invert-binary-tree" },
      { id:"bt2",  title:"Maximum Depth of Binary Tree",            diff:"Easy",   slug:"maximum-depth-of-binary-tree" },
      { id:"bt3",  title:"Symmetric Tree",                          diff:"Easy",   slug:"symmetric-tree" },
      { id:"bt4",  title:"Diameter of Binary Tree",                 diff:"Easy",   slug:"diameter-of-binary-tree" },
      { id:"bt5",  title:"Balanced Binary Tree",                    diff:"Easy",   slug:"balanced-binary-tree" },
      { id:"bt6",  title:"Same Tree",                               diff:"Easy",   slug:"same-tree" },
      { id:"bt7",  title:"Subtree of Another Tree",                 diff:"Easy",   slug:"subtree-of-another-tree" },
      { id:"bt8",  title:"Level Order Traversal",                   diff:"Medium", slug:"binary-tree-level-order-traversal" },
      { id:"bt9",  title:"Binary Tree Right Side View",             diff:"Medium", slug:"binary-tree-right-side-view" },
      { id:"bt10", title:"Count Good Nodes in Binary Tree",         diff:"Medium", slug:"count-good-nodes-in-binary-tree" },
      { id:"bt11", title:"Path Sum II",                             diff:"Medium", slug:"path-sum-ii" },
      { id:"bt12", title:"Lowest Common Ancestor of Binary Tree",   diff:"Medium", slug:"lowest-common-ancestor-of-a-binary-tree" },
      { id:"bt13", title:"Binary Tree Zigzag Level Order",          diff:"Medium", slug:"binary-tree-zigzag-level-order-traversal" },
      { id:"bt14", title:"Construct BT from Preorder and Inorder",  diff:"Medium", slug:"construct-binary-tree-from-preorder-and-inorder-traversal" },
      { id:"bt15", title:"Flatten Binary Tree to Linked List",      diff:"Medium", slug:"flatten-binary-tree-to-linked-list" },
      { id:"bt16", title:"Binary Tree Maximum Path Sum",            diff:"Hard",   slug:"binary-tree-maximum-path-sum" },
      { id:"bt17", title:"Serialize and Deserialize Binary Tree",   diff:"Hard",   slug:"serialize-and-deserialize-binary-tree" },
      { id:"bt18", title:"Maximum Width of Binary Tree",            diff:"Medium", slug:"maximum-width-of-binary-tree" },
    ]
  },
  {
    id: "bst",
    icon: "⊕",
    name: "Trees — BST & Trie",
    questions: [
      { id:"bst1", title:"Validate Binary Search Tree",             diff:"Medium", slug:"validate-binary-search-tree" },
      { id:"bst2", title:"Kth Smallest Element in BST",             diff:"Medium", slug:"kth-smallest-element-in-a-bst" },
      { id:"bst3", title:"BST Iterator",                            diff:"Medium", slug:"binary-search-tree-iterator" },
      { id:"bst4", title:"Lowest Common Ancestor of BST",           diff:"Medium", slug:"lowest-common-ancestor-of-a-binary-search-tree" },
      { id:"bst5", title:"Insert into BST",                         diff:"Medium", slug:"insert-into-a-binary-search-tree" },
      { id:"bst6", title:"Delete Node in BST",                      diff:"Medium", slug:"delete-node-in-a-bst" },
      { id:"bst7", title:"Recover BST",                             diff:"Medium", slug:"recover-binary-search-tree" },
      { id:"tri1", title:"Implement Trie (Prefix Tree)",            diff:"Medium", slug:"implement-trie-prefix-tree" },
      { id:"tri2", title:"Add and Search Word",                     diff:"Medium", slug:"design-add-and-search-words-data-structure" },
      { id:"tri3", title:"Word Search II",                          diff:"Hard",   slug:"word-search-ii" },
      { id:"tri4", title:"Design Search Autocomplete System",       diff:"Hard",   slug:"design-search-autocomplete-system" },
    ]
  },
  {
    id: "heap",
    icon: "△",
    name: "Heap / Priority Queue",
    questions: [
      { id:"h1",  title:"Kth Largest Element in Array",             diff:"Medium", slug:"kth-largest-element-in-an-array" },
      { id:"h2",  title:"K Closest Points to Origin",               diff:"Medium", slug:"k-closest-points-to-origin" },
      { id:"h3",  title:"Task Scheduler",                           diff:"Medium", slug:"task-scheduler" },
      { id:"h4",  title:"Design Twitter",                           diff:"Medium", slug:"design-twitter" },
      { id:"h5",  title:"Find Median from Data Stream",             diff:"Hard",   slug:"find-median-from-data-stream" },
      { id:"h6",  title:"Merge K Sorted Lists",                     diff:"Hard",   slug:"merge-k-sorted-lists" },
      { id:"h7",  title:"Top K Frequent Words",                     diff:"Medium", slug:"top-k-frequent-words" },
      { id:"h8",  title:"Reorganize String",                        diff:"Medium", slug:"reorganize-string" },
      { id:"h9",  title:"IPO",                                      diff:"Hard",   slug:"ipo" },
      { id:"h10", title:"Smallest Range Covering Elements",         diff:"Hard",   slug:"smallest-range-covering-elements-from-k-lists" },
    ]
  },
  {
    id: "graphs",
    icon: "◉",
    name: "Graphs — BFS / DFS",
    questions: [
      { id:"g1",  title:"Number of Islands",                        diff:"Medium", slug:"number-of-islands" },
      { id:"g2",  title:"Clone Graph",                              diff:"Medium", slug:"clone-graph" },
      { id:"g3",  title:"Max Area of Island",                       diff:"Medium", slug:"max-area-of-island" },
      { id:"g4",  title:"Pacific Atlantic Water Flow",              diff:"Medium", slug:"pacific-atlantic-water-flow" },
      { id:"g5",  title:"Surrounded Regions",                       diff:"Medium", slug:"surrounded-regions" },
      { id:"g6",  title:"Rotting Oranges",                          diff:"Medium", slug:"rotting-oranges" },
      { id:"g7",  title:"Walls and Gates",                          diff:"Medium", slug:"walls-and-gates" },
      { id:"g8",  title:"Shortest Path in Binary Matrix",           diff:"Medium", slug:"shortest-path-in-binary-matrix" },
      { id:"g9",  title:"01 Matrix",                                diff:"Medium", slug:"01-matrix" },
      { id:"g10", title:"Word Search",                              diff:"Medium", slug:"word-search" },
      { id:"g11", title:"Number of Connected Components in Graph",  diff:"Medium", slug:"number-of-connected-components-in-an-undirected-graph" },
      { id:"g12", title:"Graph Valid Tree",                         diff:"Medium", slug:"graph-valid-tree" },
      { id:"g13", title:"Course Schedule",                          diff:"Medium", slug:"course-schedule" },
      { id:"g14", title:"Course Schedule II",                       diff:"Medium", slug:"course-schedule-ii" },
      { id:"g15", title:"Redundant Connection",                     diff:"Medium", slug:"redundant-connection" },
      { id:"g16", title:"All Paths From Source to Target",          diff:"Medium", slug:"all-paths-from-source-to-target" },
      { id:"g17", title:"Find the Town Judge",                      diff:"Easy",   slug:"find-the-town-judge" },
      { id:"g18", title:"Number of Provinces",                      diff:"Medium", slug:"number-of-provinces" },
    ]
  },
  {
    id: "graphadv",
    icon: "◎",
    name: "Graphs — Advanced",
    questions: [
      { id:"ga1",  title:"Network Delay Time (Dijkstra)",           diff:"Medium", slug:"network-delay-time" },
      { id:"ga2",  title:"Cheapest Flights Within K Stops",         diff:"Medium", slug:"find-cheapest-flights-within-k-stops" },
      { id:"ga3",  title:"Path With Minimum Effort",                diff:"Medium", slug:"path-with-minimum-effort" },
      { id:"ga4",  title:"Min Cost to Connect All Points (Prim/Kruskal)",diff:"Medium",slug:"min-cost-to-connect-all-points" },
      { id:"ga5",  title:"Swim in Rising Water",                    diff:"Hard",   slug:"swim-in-rising-water" },
      { id:"ga6",  title:"Alien Dictionary",                        diff:"Hard",   slug:"alien-dictionary" },
      { id:"ga7",  title:"Bus Routes",                              diff:"Hard",   slug:"bus-routes" },
      { id:"ga8",  title:"Word Ladder",                             diff:"Hard",   slug:"word-ladder" },
      { id:"ga9",  title:"Accounts Merge (Union-Find)",             diff:"Medium", slug:"accounts-merge" },
      { id:"ga10", title:"Number of Operations to Make Network Connected",diff:"Medium",slug:"number-of-operations-to-make-network-connected" },
    ]
  },
  {
    id: "backtrack",
    icon: "↩",
    name: "Backtracking",
    questions: [
      { id:"bk1",  title:"Subsets",                                 diff:"Medium", slug:"subsets" },
      { id:"bk2",  title:"Subsets II",                              diff:"Medium", slug:"subsets-ii" },
      { id:"bk3",  title:"Combination Sum",                         diff:"Medium", slug:"combination-sum" },
      { id:"bk4",  title:"Combination Sum II",                      diff:"Medium", slug:"combination-sum-ii" },
      { id:"bk5",  title:"Permutations",                            diff:"Medium", slug:"permutations" },
      { id:"bk6",  title:"Permutations II",                         diff:"Medium", slug:"permutations-ii" },
      { id:"bk7",  title:"Letter Combinations of Phone Number",     diff:"Medium", slug:"letter-combinations-of-a-phone-number" },
      { id:"bk8",  title:"N-Queens",                                diff:"Hard",   slug:"n-queens" },
      { id:"bk9",  title:"Sudoku Solver",                           diff:"Hard",   slug:"sudoku-solver" },
      { id:"bk10", title:"Word Search",                             diff:"Medium", slug:"word-search" },
      { id:"bk11", title:"Palindrome Partitioning",                 diff:"Medium", slug:"palindrome-partitioning" },
      { id:"bk12", title:"Restore IP Addresses",                    diff:"Medium", slug:"restore-ip-addresses" },
    ]
  },
  {
    id: "dp1",
    icon: "◫",
    name: "Dynamic Programming — 1D",
    questions: [
      { id:"dp1a",  title:"Climbing Stairs",                        diff:"Easy",   slug:"climbing-stairs" },
      { id:"dp1b",  title:"Fibonacci Number",                       diff:"Easy",   slug:"fibonacci-number" },
      { id:"dp1c",  title:"House Robber",                           diff:"Medium", slug:"house-robber" },
      { id:"dp1d",  title:"House Robber II",                        diff:"Medium", slug:"house-robber-ii" },
      { id:"dp1e",  title:"Longest Increasing Subsequence",         diff:"Medium", slug:"longest-increasing-subsequence" },
      { id:"dp1f",  title:"Jump Game",                              diff:"Medium", slug:"jump-game" },
      { id:"dp1g",  title:"Jump Game II",                           diff:"Medium", slug:"jump-game-ii" },
      { id:"dp1h",  title:"Partition Equal Subset Sum",             diff:"Medium", slug:"partition-equal-subset-sum" },
      { id:"dp1i",  title:"Coin Change",                            diff:"Medium", slug:"coin-change" },
      { id:"dp1j",  title:"Coin Change II",                         diff:"Medium", slug:"coin-change-ii" },
      { id:"dp1k",  title:"Target Sum",                             diff:"Medium", slug:"target-sum" },
      { id:"dp1l",  title:"Minimum Cost Climbing Stairs",           diff:"Easy",   slug:"min-cost-climbing-stairs" },
      { id:"dp1m",  title:"Maximum Alternating Subsequence Sum",    diff:"Medium", slug:"maximum-alternating-subsequence-sum" },
      { id:"dp1n",  title:"Longest Bitonic Subsequence",            diff:"Medium", slug:"longest-bitonic-subsequence" },
    ]
  },
  {
    id: "dp2",
    icon: "◪",
    name: "Dynamic Programming — 2D / Grid",
    questions: [
      { id:"dp2a",  title:"Unique Paths",                           diff:"Medium", slug:"unique-paths" },
      { id:"dp2b",  title:"Unique Paths II",                        diff:"Medium", slug:"unique-paths-ii" },
      { id:"dp2c",  title:"Minimum Path Sum",                       diff:"Medium", slug:"minimum-path-sum" },
      { id:"dp2d",  title:"Maximal Square",                         diff:"Medium", slug:"maximal-square" },
      { id:"dp2e",  title:"Longest Common Subsequence",             diff:"Medium", slug:"longest-common-subsequence" },
      { id:"dp2f",  title:"Edit Distance",                          diff:"Hard",   slug:"edit-distance" },
      { id:"dp2g",  title:"Distinct Subsequences",                  diff:"Hard",   slug:"distinct-subsequences" },
      { id:"dp2h",  title:"Shortest Common Supersequence",          diff:"Hard",   slug:"shortest-common-supersequence" },
      { id:"dp2i",  title:"Burst Balloons",                         diff:"Hard",   slug:"burst-balloons" },
      { id:"dp2j",  title:"Coin Change on Grid",                    diff:"Medium", slug:"coin-change" },
      { id:"dp2k",  title:"Triangle",                               diff:"Medium", slug:"triangle" },
      { id:"dp2l",  title:"Dungeon Game",                           diff:"Hard",   slug:"dungeon-game" },
    ]
  },
  {
    id: "dp3",
    icon: "◩",
    name: "Dynamic Programming — Intervals & Advanced",
    questions: [
      { id:"dp3a",  title:"Longest Palindromic Subsequence",        diff:"Medium", slug:"longest-palindromic-subsequence" },
      { id:"dp3b",  title:"Minimum Insertions to Make Palindrome",  diff:"Hard",   slug:"minimum-insertion-steps-to-make-a-string-palindrome" },
      { id:"dp3c",  title:"Matrix Chain Multiplication (MCM)",      diff:"Hard",   slug:"burst-balloons" },
      { id:"dp3d",  title:"Rod Cutting Problem",                     diff:"Medium", slug:"house-robber" },
      { id:"dp3e",  title:"Stock Buy Sell (at most 2 transactions)", diff:"Hard",   slug:"best-time-to-buy-and-sell-stock-iii" },
      { id:"dp3f",  title:"Stock Buy Sell (at most K transactions)", diff:"Hard",   slug:"best-time-to-buy-and-sell-stock-iv" },
      { id:"dp3g",  title:"Stock with Cooldown",                    diff:"Medium", slug:"best-time-to-buy-and-sell-stock-with-cooldown" },
      { id:"dp3h",  title:"Stock with Transaction Fee",             diff:"Medium", slug:"best-time-to-buy-and-sell-stock-with-transaction-fee" },
      { id:"dp3i",  title:"Palindrome Partitioning II",             diff:"Hard",   slug:"palindrome-partitioning-ii" },
      { id:"dp3j",  title:"Strange Printer",                        diff:"Hard",   slug:"strange-printer" },
      { id:"dp3k",  title:"Scramble String",                        diff:"Hard",   slug:"scramble-string" },
    ]
  },
  {
    id: "greedy",
    icon: "⚡",
    name: "Greedy",
    questions: [
      { id:"gr1",  title:"Meeting Rooms",                           diff:"Easy",   slug:"meeting-rooms" },
      { id:"gr2",  title:"Meeting Rooms II",                        diff:"Medium", slug:"meeting-rooms-ii" },
      { id:"gr3",  title:"Non-Overlapping Intervals",               diff:"Medium", slug:"non-overlapping-intervals" },
      { id:"gr4",  title:"Insert Interval",                         diff:"Medium", slug:"insert-interval" },
      { id:"gr5",  title:"Merge Intervals",                         diff:"Medium", slug:"merge-intervals" },
      { id:"gr6",  title:"Jump Game",                               diff:"Medium", slug:"jump-game" },
      { id:"gr7",  title:"Gas Station",                             diff:"Medium", slug:"gas-station" },
      { id:"gr8",  title:"Hand of Straights",                       diff:"Medium", slug:"hand-of-straights" },
      { id:"gr9",  title:"Minimum Number of Arrows to Burst Balloons",diff:"Medium",slug:"minimum-number-of-arrows-to-burst-balloons" },
      { id:"gr10", title:"Candy",                                   diff:"Hard",   slug:"candy" },
      { id:"gr11", title:"Queue Reconstruction by Height",          diff:"Medium", slug:"queue-reconstruction-by-height" },
    ]
  },
  {
    id: "math",
    icon: "∑",
    name: "Math & Bit Manipulation",
    questions: [
      { id:"m1",  title:"Single Number",                            diff:"Easy",   slug:"single-number" },
      { id:"m2",  title:"Number of 1 Bits",                         diff:"Easy",   slug:"number-of-1-bits" },
      { id:"m3",  title:"Counting Bits",                            diff:"Easy",   slug:"counting-bits" },
      { id:"m4",  title:"Reverse Bits",                             diff:"Easy",   slug:"reverse-bits" },
      { id:"m5",  title:"Missing Number",                           diff:"Easy",   slug:"missing-number" },
      { id:"m6",  title:"Sum of Two Integers (no +/-)",             diff:"Medium", slug:"sum-of-two-integers" },
      { id:"m7",  title:"Reverse Integer",                          diff:"Medium", slug:"reverse-integer" },
      { id:"m8",  title:"Power of Two",                             diff:"Easy",   slug:"power-of-two" },
      { id:"m9",  title:"Happy Number",                             diff:"Easy",   slug:"happy-number" },
      { id:"m10", title:"Excel Sheet Column Number",                diff:"Easy",   slug:"excel-sheet-column-number" },
      { id:"m11", title:"Pow(x, n)",                                diff:"Medium", slug:"powx-n" },
      { id:"m12", title:"Multiply Strings",                         diff:"Medium", slug:"multiply-strings" },
      { id:"m13", title:"Bitwise AND of Numbers Range",             diff:"Medium", slug:"bitwise-and-of-numbers-range" },
    ]
  },
  {
    id: "sorting",
    icon: "≈",
    name: "Sorting & Intervals",
    questions: [
      { id:"so1", title:"Sort an Array (Merge Sort / Quick Sort)",  diff:"Medium", slug:"sort-an-array" },
      { id:"so2", title:"Find K-th Largest Element (Quick Select)", diff:"Medium", slug:"kth-largest-element-in-an-array" },
      { id:"so3", title:"Wiggle Sort II",                           diff:"Medium", slug:"wiggle-sort-ii" },
      { id:"so4", title:"Largest Number",                           diff:"Medium", slug:"largest-number" },
      { id:"so5", title:"Minimum Number of Platforms",              diff:"Medium", slug:"minimum-number-of-platforms" },
      { id:"so6", title:"Count of Smaller Numbers After Self",      diff:"Hard",   slug:"count-of-smaller-numbers-after-self" },
      { id:"so7", title:"Maximum Gap",                              diff:"Hard",   slug:"maximum-gap" },
    ]
  },
  {
    id: "design",
    icon: "⚙",
    name: "System Design Inspired / Design Problems",
    questions: [
      { id:"ds1",  title:"LRU Cache",                               diff:"Medium", slug:"lru-cache" },
      { id:"ds2",  title:"LFU Cache",                               diff:"Hard",   slug:"lfu-cache" },
      { id:"ds3",  title:"Design HashMap",                          diff:"Easy",   slug:"design-hashmap" },
      { id:"ds4",  title:"Design HashSet",                          diff:"Easy",   slug:"design-hashset" },
      { id:"ds5",  title:"Design Circular Queue",                   diff:"Medium", slug:"design-circular-queue" },
      { id:"ds6",  title:"Snapshot Array",                          diff:"Medium", slug:"snapshot-array" },
      { id:"ds7",  title:"Logger Rate Limiter",                     diff:"Easy",   slug:"logger-rate-limiter" },
      { id:"ds8",  title:"Moving Average from Data Stream",         diff:"Easy",   slug:"moving-average-from-data-stream" },
      { id:"ds9",  title:"Implement Stack using Queues",            diff:"Easy",   slug:"implement-stack-using-queues" },
      { id:"ds10", title:"Design Underground System",               diff:"Medium", slug:"design-underground-system" },
      { id:"ds11", title:"Design Browser History",                  diff:"Medium", slug:"design-browser-history" },
      { id:"ds12", title:"Range Sum Query — Immutable",             diff:"Easy",   slug:"range-sum-query-immutable" },
      { id:"ds13", title:"Range Sum Query 2D — Immutable",          diff:"Medium", slug:"range-sum-query-2d-immutable" },
    ]
  },
],

advanced: [

{
id:"adv_trees",
icon:"🌲",
name:"A. Trees & BST",
questions:[
{id:"at1",title:"Invert Binary Tree",diff:"Easy",slug:"invert-binary-tree"},
{id:"at2",title:"Diameter of Binary Tree",diff:"Easy",slug:"diameter-of-binary-tree"},
{id:"at3",title:"Maximum Depth of Binary Tree",diff:"Easy",slug:"maximum-depth-of-binary-tree"},
{id:"at4",title:"Binary Tree Level Order Traversal",diff:"Medium",slug:"binary-tree-level-order-traversal"},
{id:"at5",title:"Binary Tree Right Side View",diff:"Medium",slug:"binary-tree-right-side-view"},
{id:"at6",title:"Binary Tree Zigzag Level Order Traversal",diff:"Medium",slug:"binary-tree-zigzag-level-order-traversal"},
{id:"at7",title:"Validate Binary Search Tree",diff:"Medium",slug:"validate-binary-search-tree"},
{id:"at8",title:"Kth Smallest Element in a BST",diff:"Medium",slug:"kth-smallest-element-in-a-bst"},
{id:"at9",title:"Lowest Common Ancestor of a Binary Tree",diff:"Medium",slug:"lowest-common-ancestor-of-a-binary-tree"},
{id:"at10",title:"Construct Binary Tree from Preorder and Inorder Traversal",diff:"Medium",slug:"construct-binary-tree-from-preorder-and-inorder-traversal"},
{id:"at11",title:"Path Sum II",diff:"Medium",slug:"path-sum-ii"},
{id:"at12",title:"Flatten Binary Tree to Linked List",diff:"Medium",slug:"flatten-binary-tree-to-linked-list"},
{id:"at13",title:"Populating Next Right Pointers in Each Node II",diff:"Medium",slug:"populating-next-right-pointers-in-each-node-ii"},
{id:"at14",title:"House Robber III",diff:"Medium",slug:"house-robber-iii"},
{id:"at15",title:"Sum Root to Leaf Numbers",diff:"Medium",slug:"sum-root-to-leaf-numbers"},
{id:"at16",title:"Binary Search Tree Iterator",diff:"Medium",slug:"binary-search-tree-iterator"},
{id:"at17",title:"Delete Node in a BST",diff:"Medium",slug:"delete-node-in-a-bst"},
{id:"at18",title:"Recover Binary Search Tree",diff:"Medium",slug:"recover-binary-search-tree"},
{id:"at19",title:"Vertical Order Traversal of a Binary Tree",diff:"Hard",slug:"vertical-order-traversal-of-a-binary-tree"},
{id:"at20",title:"Binary Tree Maximum Path Sum",diff:"Hard",slug:"binary-tree-maximum-path-sum"},
{id:"at21",title:"Serialize and Deserialize Binary Tree",diff:"Hard",slug:"serialize-and-deserialize-binary-tree"},
{id:"at22",title:"Binary Tree Cameras",diff:"Hard",slug:"binary-tree-cameras"}
]
},

{
id:"adv_trie",
icon:"🔤",
name:"B. Trie",
questions:[
{id:"tr1",title:"Implement Trie (Prefix Tree)",diff:"Medium",slug:"implement-trie-prefix-tree"},
{id:"tr2",title:"Design Add and Search Words Data Structure",diff:"Medium",slug:"design-add-and-search-words-data-structure"},
{id:"tr3",title:"Replace Words",diff:"Medium",slug:"replace-words"},
{id:"tr4",title:"Maximum XOR of Two Numbers in an Array",diff:"Medium",slug:"maximum-xor-of-two-numbers-in-an-array"},
{id:"tr5",title:"Map Sum Pairs",diff:"Medium",slug:"map-sum-pairs"},
{id:"tr6",title:"Word Search II",diff:"Hard",slug:"word-search-ii"}
]
},

{
id:"adv_heap",
icon:"△",
name:"C. Heap / Priority Queue",
questions:[
{id:"hp1",title:"Kth Largest Element in an Array",diff:"Medium",slug:"kth-largest-element-in-an-array"},
{id:"hp2",title:"K Closest Points to Origin",diff:"Medium",slug:"k-closest-points-to-origin"},
{id:"hp3",title:"Top K Frequent Words",diff:"Medium",slug:"top-k-frequent-words"},
{id:"hp4",title:"Task Scheduler",diff:"Medium",slug:"task-scheduler"},
{id:"hp5",title:"Reorganize String",diff:"Medium",slug:"reorganize-string"},
{id:"hp6",title:"Single-Threaded CPU",diff:"Medium",slug:"single-threaded-cpu"},
{id:"hp7",title:"Process Tasks Using Servers",diff:"Medium",slug:"process-tasks-using-servers"},
{id:"hp8",title:"Find Median from Data Stream",diff:"Hard",slug:"find-median-from-data-stream"},
{id:"hp9",title:"The Skyline Problem",diff:"Hard",slug:"the-skyline-problem"},
{id:"hp10",title:"Smallest Range Covering Elements from K Lists",diff:"Hard",slug:"smallest-range-covering-elements-from-k-lists"},
{id:"hp11",title:"IPO",diff:"Hard",slug:"ipo"},
{id:"hp12",title:"Maximum Performance of a Team",diff:"Hard",slug:"maximum-performance-of-a-team"}
]
},

{
id:"adv_graphs",
icon:"◉",
name:"D. Graphs — BFS / DFS / Topological Sort / Union-Find",
questions:[
{id:"gr1",title:"Number of Islands",diff:"Medium",slug:"number-of-islands"},
{id:"gr2",title:"Clone Graph",diff:"Medium",slug:"clone-graph"},
{id:"gr3",title:"Pacific Atlantic Water Flow",diff:"Medium",slug:"pacific-atlantic-water-flow"},
{id:"gr4",title:"Surrounded Regions",diff:"Medium",slug:"surrounded-regions"},
{id:"gr5",title:"Rotting Oranges",diff:"Medium",slug:"rotting-oranges"},
{id:"gr6",title:"Course Schedule",diff:"Medium",slug:"course-schedule"},
{id:"gr7",title:"Course Schedule II",diff:"Medium",slug:"course-schedule-ii"},
{id:"gr8",title:"Is Graph Bipartite",diff:"Medium",slug:"is-graph-bipartite"},
{id:"gr9",title:"Evaluate Division",diff:"Medium",slug:"evaluate-division"},
{id:"gr10",title:"Minimum Height Trees",diff:"Medium",slug:"minimum-height-trees"},
{id:"gr11",title:"Number of Distinct Islands",diff:"Medium",slug:"number-of-distinct-islands"},
{id:"gr12",title:"Accounts Merge",diff:"Medium",slug:"accounts-merge"},
{id:"gr13",title:"Redundant Connection",diff:"Medium",slug:"redundant-connection"},
{id:"gr14",title:"Redundant Connection II",diff:"Hard",slug:"redundant-connection-ii"},
{id:"gr15",title:"Satisfiability of Equality Equations",diff:"Medium",slug:"satisfiability-of-equality-equations"},
{id:"gr16",title:"Most Stones Removed with Same Row or Column",diff:"Medium",slug:"most-stones-removed-with-same-row-or-column"},
{id:"gr17",title:"Smallest String With Swaps",diff:"Medium",slug:"smallest-string-with-swaps"},
{id:"gr18",title:"Reconstruct Itinerary",diff:"Hard",slug:"reconstruct-itinerary"},
{id:"gr19",title:"Word Ladder",diff:"Hard",slug:"word-ladder"},
{id:"gr20",title:"Word Ladder II",diff:"Hard",slug:"word-ladder-ii"},
{id:"gr21",title:"Bus Routes",diff:"Hard",slug:"bus-routes"},
{id:"gr22",title:"Sliding Puzzle",diff:"Hard",slug:"sliding-puzzle"}
]
},
{
id:"adv_graphs2",
icon:"🕸️",
name:"E. Advanced Graphs — Dijkstra / MST",
questions:[
{id:"eg1",title:"Network Delay Time",diff:"Medium",slug:"network-delay-time"},
{id:"eg2",title:"Cheapest Flights Within K Stops",diff:"Medium",slug:"cheapest-flights-within-k-stops"},
{id:"eg3",title:"Path with Maximum Probability",diff:"Medium",slug:"path-with-maximum-probability"},
{id:"eg4",title:"Number of Operations to Make Network Connected",diff:"Medium",slug:"number-of-operations-to-make-network-connected"},
{id:"eg5",title:"Min Cost to Connect All Points",diff:"Medium",slug:"min-cost-to-connect-all-points"},
{id:"eg6",title:"Swim in Rising Water",diff:"Hard",slug:"swim-in-rising-water"},
{id:"eg7",title:"Find Critical and Pseudo-Critical Edges in MST",diff:"Hard",slug:"find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree"},
{id:"eg8",title:"Number of Islands II",diff:"Hard",slug:"number-of-islands-ii"},
{id:"eg9",title:"Optimize Water Distribution in a Village",diff:"Hard",slug:"optimize-water-distribution-in-a-village"},
{id:"eg10",title:"Parallel Courses III",diff:"Hard",slug:"parallel-courses-iii"}
]
},
{
id:"adv_backtracking",
icon:"↩",
name:"F. Backtracking",
questions:[
{id:"bk1",title:"Subsets",diff:"Medium",slug:"subsets"},
{id:"bk2",title:"Permutations II",diff:"Medium",slug:"permutations-ii"},
{id:"bk3",title:"Combination Sum",diff:"Medium",slug:"combination-sum"},
{id:"bk4",title:"Word Search",diff:"Medium",slug:"word-search"},
{id:"bk5",title:"Palindrome Partitioning",diff:"Medium",slug:"palindrome-partitioning"},
{id:"bk6",title:"Restore IP Addresses",diff:"Medium",slug:"restore-ip-addresses"},
{id:"bk7",title:"Generate Parentheses",diff:"Medium",slug:"generate-parentheses"},
{id:"bk8",title:"Letter Combinations of a Phone Number",diff:"Medium",slug:"letter-combinations-of-a-phone-number"},
{id:"bk9",title:"Matchsticks to Square",diff:"Medium",slug:"matchsticks-to-square"},
{id:"bk10",title:"N-Queens",diff:"Hard",slug:"n-queens"},
{id:"bk11",title:"Sudoku Solver",diff:"Hard",slug:"sudoku-solver"},
{id:"bk12",title:"Expression Add Operators",diff:"Hard",slug:"expression-add-operators"}
]
},
{
id:"adv_dp",
icon:"◪",
name:"G. Advanced / 2D / Bitmask DP",
questions:[
{id:"dp1",title:"Longest Increasing Subsequence",diff:"Medium",slug:"longest-increasing-subsequence"},
{id:"dp2",title:"Russian Doll Envelopes",diff:"Hard",slug:"russian-doll-envelopes"},
{id:"dp3",title:"Longest Common Subsequence",diff:"Medium",slug:"longest-common-subsequence"},
{id:"dp4",title:"Edit Distance",diff:"Medium",slug:"edit-distance"},
{id:"dp5",title:"Maximal Square",diff:"Medium",slug:"maximal-square"},
{id:"dp6",title:"Coin Change II",diff:"Medium",slug:"coin-change-ii"},
{id:"dp7",title:"Target Sum",diff:"Medium",slug:"target-sum"},
{id:"dp8",title:"Interleaving String",diff:"Medium",slug:"interleaving-string"},
{id:"dp9",title:"Burst Balloons",diff:"Hard",slug:"burst-balloons"},
{id:"dp10",title:"Regular Expression Matching",diff:"Hard",slug:"regular-expression-matching"},
{id:"dp11",title:"Distinct Subsequences",diff:"Hard",slug:"distinct-subsequences"},
{id:"dp12",title:"Best Time to Buy and Sell Stock III",diff:"Hard",slug:"best-time-to-buy-and-sell-stock-iii"},
{id:"dp13",title:"Best Time to Buy and Sell Stock IV",diff:"Hard",slug:"best-time-to-buy-and-sell-stock-iv"},
{id:"dp14",title:"Partition to K Equal Sum Subsets",diff:"Medium",slug:"partition-to-k-equal-sum-subsets"},
{id:"dp15",title:"Shortest Path Visiting All Nodes",diff:"Hard",slug:"shortest-path-visiting-all-nodes"},
{id:"dp16",title:"Profitable Schemes",diff:"Hard",slug:"profitable-schemes"},
{id:"dp17",title:"Minimum Cost to Cut a Stick",diff:"Hard",slug:"minimum-cost-to-cut-a-stick"},
{id:"dp18",title:"Stone Game II",diff:"Medium",slug:"stone-game-ii"}
]
},
{
id:"adv_design",
icon:"⚙️",
name:"H. Design",
questions:[
{id:"ds1",title:"LRU Cache",diff:"Medium",slug:"lru-cache"},
{id:"ds2",title:"LFU Cache",diff:"Hard",slug:"lfu-cache"},
{id:"ds3",title:"Design Twitter",diff:"Medium",slug:"design-twitter"},
{id:"ds4",title:"Insert Delete GetRandom O(1)",diff:"Medium",slug:"insert-delete-getrandom-o1"},
{id:"ds5",title:"Design Underground System",diff:"Medium",slug:"design-underground-system"},
{id:"ds6",title:"All O`one Data Structure",diff:"Hard",slug:"all-oone-data-structure"},
{id:"ds7",title:"Design In-Memory File System",diff:"Hard",slug:"design-in-memory-file-system"},
{id:"ds8",title:"Snapshot Array",diff:"Medium",slug:"snapshot-array"}
]
},
{
id:"adv_segment",
icon:"📊",
name:"I. Segment Tree / Fenwick / Sweep Line",
questions:[
{id:"sg1",title:"Range Sum Query - Mutable",diff:"Medium",slug:"range-sum-query-mutable"},
{id:"sg2",title:"Count of Smaller Numbers After Self",diff:"Hard",slug:"count-of-smaller-numbers-after-self"},
{id:"sg3",title:"Range Module",diff:"Hard",slug:"range-module"},
{id:"sg4",title:"Falling Squares",diff:"Hard",slug:"falling-squares"},
{id:"sg5",title:"My Calendar III",diff:"Hard",slug:"my-calendar-iii"},
{id:"sg6",title:"Number of Longest Increasing Subsequence",diff:"Medium",slug:"number-of-longest-increasing-subsequence"},
{id:"sg7",title:"Car Pooling",diff:"Medium",slug:"car-pooling"},
{id:"sg8",title:"Minimum Number of Taps to Open to Water a Garden",diff:"Hard",slug:"minimum-number-of-taps-to-open-to-water-a-garden"}
]
},
{
id:"adv_strings",
icon:"🔤",
name:"J. Advanced String Algorithms",
questions:[
{id:"st1",title:"Repeated String Match",diff:"Medium",slug:"repeated-string-match"},
{id:"st2",title:"Shortest Palindrome",diff:"Hard",slug:"shortest-palindrome"},
{id:"st3",title:"Longest Happy Prefix",diff:"Hard",slug:"longest-happy-prefix"},
{id:"st4",title:"Palindrome Pairs",diff:"Hard",slug:"palindrome-pairs"},
{id:"st5",title:"Distinct Subsequences II",diff:"Hard",slug:"distinct-subsequences-ii"},
{id:"st6",title:"Text Justification",diff:"Hard",slug:"text-justification"}
]
},
{
id:"adv_bits",
icon:"⚡",
name:"K. Advanced Bit Manipulation",
questions:[
{id:"bit1",title:"Single Number II",diff:"Medium",slug:"single-number-ii"},
{id:"bit2",title:"Single Number III",diff:"Medium",slug:"single-number-iii"},
{id:"bit3",title:"UTF-8 Validation",diff:"Medium",slug:"utf-8-validation"},
{id:"bit4",title:"Total Hamming Distance",diff:"Medium",slug:"total-hamming-distance"},
{id:"bit5",title:"Maximum XOR With an Element From Array",diff:"Hard",slug:"maximum-xor-with-an-element-from-array"},
{id:"bit6",title:"Minimum XOR Sum of Two Arrays",diff:"Hard",slug:"minimum-xor-sum-of-two-arrays"}
]
},
{
id:"adv_math",
icon:"∑",
name:"L. Advanced Math / Number Theory",
questions:[
{id:"mt1",title:"Pow(x, n)",diff:"Medium",slug:"powx-n"},
{id:"mt2",title:"Max Points on a Line",diff:"Hard",slug:"max-points-on-a-line"},
{id:"mt3",title:"Basic Calculator",diff:"Hard",slug:"basic-calculator"},
{id:"mt4",title:"Basic Calculator II",diff:"Medium",slug:"basic-calculator-ii"},
{id:"mt5",title:"Integer to English Words",diff:"Hard",slug:"integer-to-english-words"},
{id:"mt6",title:"Count Primes",diff:"Medium",slug:"count-primes"}
]
},
{
id:"adv_window",
icon:"🪟",
name:"M. Sliding Window / Two Pointer — Hard Tier",
questions:[
{id:"sw1",title:"Sliding Window Maximum",diff:"Hard",slug:"sliding-window-maximum"},
{id:"sw2",title:"Sliding Window Median",diff:"Hard",slug:"sliding-window-median"},
{id:"sw3",title:"Minimum Window Substring",diff:"Hard",slug:"minimum-window-substring"},
{id:"sw4",title:"Minimum Window Subsequence",diff:"Hard",slug:"minimum-window-subsequence"},
{id:"sw5",title:"Subarrays with K Different Integers",diff:"Hard",slug:"subarrays-with-k-different-integers"},
{id:"sw6",title:"Trapping Rain Water II",diff:"Hard",slug:"trapping-rain-water-ii"},
{id:"sw7",title:"Constrained Subsequence Sum",diff:"Hard",slug:"constrained-subsequence-sum"},
{id:"sw8",title:"Frequency of the Most Frequent Element",diff:"Medium",slug:"frequency-of-the-most-frequent-element"}
]
},
{
id:"adv_finalboss",
icon:"👑",
name:"N. Final Boss — Mixed Contest Level",
questions:[
{id:"fb1",title:"Median of Two Sorted Arrays",diff:"Hard",slug:"median-of-two-sorted-arrays"},
{id:"fb2",title:"Split Array Largest Sum",diff:"Hard",slug:"split-array-largest-sum"},
{id:"fb3",title:"Find K-th Smallest Pair Distance",diff:"Hard",slug:"find-k-th-smallest-pair-distance"},
{id:"fb4",title:"K-th Smallest Prime Fraction",diff:"Hard",slug:"k-th-smallest-prime-fraction"},
{id:"fb5",title:"Maximum Profit in Job Scheduling",diff:"Hard",slug:"maximum-profit-in-job-scheduling"},
{id:"fb6",title:"Longest Increasing Path in a Matrix",diff:"Hard",slug:"longest-increasing-path-in-a-matrix"},
{id:"fb7",title:"Cherry Pickup",diff:"Hard",slug:"cherry-pickup"},
{id:"fb8",title:"Cherry Pickup II",diff:"Hard",slug:"cherry-pickup-ii"},
{id:"fb9",title:"Frog Jump",diff:"Hard",slug:"frog-jump"},
{id:"fb10",title:"Dungeon Game",diff:"Hard",slug:"dungeon-game"},
{id:"fb11",title:"Shortest Path in a Grid with Obstacles Elimination",diff:"Hard",slug:"shortest-path-in-a-grid-with-obstacles-elimination"},
{id:"fb12",title:"Minimum Number of Refueling Stops",diff:"Hard",slug:"minimum-number-of-refueling-stops"},
{id:"fb13",title:"Strange Printer",diff:"Hard",slug:"strange-printer"},
{id:"fb14",title:"Stickers to Spell Word",diff:"Hard",slug:"stickers-to-spell-word"},
{id:"fb15",title:"Race Car",diff:"Hard",slug:"race-car"},
{id:"fb16",title:"Largest Multiple of Three",diff:"Medium",slug:"largest-multiple-of-three"}
]
},
{
id:"adv_reinforcement",
icon:"🎯",
name:"O. Extra Reinforcement",
questions:[
{id:"er1",title:"Subarray Product Less Than K",diff:"Medium",slug:"subarray-product-less-than-k"},
{id:"er2",title:"Continuous Subarray Sum",diff:"Medium",slug:"continuous-subarray-sum"},
{id:"er3",title:"Find All Duplicates in an Array",diff:"Medium",slug:"find-all-duplicates-in-an-array"},
{id:"er4",title:"Gas Station",diff:"Medium",slug:"gas-station"},
{id:"er5",title:"Partition Labels",diff:"Medium",slug:"partition-labels"},
{id:"er6",title:"Sort Characters By Frequency",diff:"Medium",slug:"sort-characters-by-frequency"},
{id:"er7",title:"Maximum Length of Repeated Subarray",diff:"Medium",slug:"maximum-length-of-repeated-subarray"},
{id:"er8",title:"Find the City With the Smallest Number of Neighbors at a Threshold Distance",diff:"Medium",slug:"find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance"},
{id:"er9",title:"Minimum Genetic Mutation",diff:"Medium",slug:"minimum-genetic-mutation"},
{id:"er10",title:"Path with Minimum Effort",diff:"Medium",slug:"path-with-minimum-effort"},
{id:"er11",title:"As Far from Land as Possible",diff:"Medium",slug:"as-far-from-land-as-possible"},
{id:"er12",title:"Course Schedule III",diff:"Hard",slug:"course-schedule-iii"},
{id:"er13",title:"Minimum Difficulty of a Job Schedule",diff:"Hard",slug:"minimum-difficulty-of-a-job-schedule"},
{id:"er14",title:"Number of Ways to Stay in the Same Place After Some Steps",diff:"Hard",slug:"number-of-ways-to-stay-in-the-same-place-after-some-steps"},
{id:"er15",title:"Find the Shortest Superstring",diff:"Hard",slug:"find-the-shortest-superstring"}
]
}
]

};
// ═══════════════ STATE ═══════════════

let currentRoadmap =
localStorage.getItem("roadmap_mode") || "basic";

function getTopics() {
  return roadmaps[currentRoadmap];
}
const STORAGE_KEY = 'dsa_grind_v2';



function loadState() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();
let currentFilter = 'all';
let currentSearch = '';

// ═══════════════ STATS ═══════════════
function getStats() {
  let total=0, done=0, easy=0, easyDone=0, med=0, medDone=0, hard=0, hardDone=0;
  getTopics().forEach(t => t.questions.forEach(q => {
    total++;
    if(q.diff==='Easy') { easy++; if(state[q.id]) easyDone++; }
    if(q.diff==='Medium') { med++; if(state[q.id]) medDone++; }
    if(q.diff==='Hard') { hard++; if(state[q.id]) hardDone++; }
    if(state[q.id]) done++;
  }));
  return {total,done,easy,easyDone,med,medDone,hard,hardDone};
}

function updateHeader() {
  const s = getStats();
  document.getElementById('done-count').textContent = s.done;
  document.getElementById('total-count').textContent = s.total;
  const pct = s.total ? Math.round(s.done/s.total*100) : 0;
  document.getElementById('global-fill').style.width = pct+'%';
  document.getElementById('pill-easy').textContent = `E: ${s.easyDone}/${s.easy}`;
  document.getElementById('pill-med').textContent  = `M: ${s.medDone}/${s.med}`;
  document.getElementById('pill-hard').textContent = `H: ${s.hardDone}/${s.hard}`;
}
document
.getElementById("basic-mode")
.addEventListener("click", () => {

  currentRoadmap = "basic";

  localStorage.setItem(
    "roadmap_mode",
    "basic"
  );

  document
    .getElementById("basic-mode")
    .classList.add("active");

  document
    .getElementById("advanced-mode")
    .classList.remove("active");

  buildUI();
  updateHeader();
});

document
.getElementById("advanced-mode")
.addEventListener("click", () => {

  currentRoadmap = "advanced";

  localStorage.setItem(
    "roadmap_mode",
    "advanced"
  );

  document
    .getElementById("advanced-mode")
    .classList.add("active");

  document
    .getElementById("basic-mode")
    .classList.remove("active");

  buildUI();
  updateHeader();
});

if(currentRoadmap === "advanced"){
  document
    .getElementById("advanced-mode")
    .classList.add("active");

  document
    .getElementById("basic-mode")
    .classList.remove("active");
}
// ═══════════════ RENDER ═══════════════
function buildUI() {
  const container = document.getElementById('main-container');
  container.innerHTML = '';

  let anyVisible = false;

  getTopics().forEach(topic => {
    const qs = topic.questions.filter(q => matchFilter(q));
    if (!qs.length) return;
    anyVisible = true;

    const topicDone = topic.questions.filter(q => state[q.id]).length;
    const topicTotal = topic.questions.length;
    const pct = topicTotal ? Math.round(topicDone/topicTotal*100) : 0;

    const section = document.createElement('div');
    section.className = 'topic-section';
    section.dataset.id = topic.id;

    section.innerHTML = `
      <div class="topic-header" onclick="toggleSection('${topic.id}')">
        <div class="topic-left">
          <div class="topic-icon">${topic.icon}</div>
          <div class="topic-name">${topic.name}</div>
          <div class="topic-count">${topicDone}/${topicTotal}</div>
        </div>
        <div class="topic-right">
          <div class="topic-progress-mini">
            <div class="mini-bar"><div class="mini-fill" style="width:${pct}%"></div></div>
            <div class="mini-pct">${pct}%</div>
          </div>
          <div class="chevron">▶</div>
        </div>
      </div>
      <div class="question-list" id="list-${topic.id}">
        ${qs.map((q,i) => buildRow(q,i+1)).join('')}
      </div>
    `;

    container.appendChild(section);
  });

  if(!anyVisible) {
    container.innerHTML = `<div class="empty-state">No questions match your filter.</div>`;
  }

  // Auto-open if search/filter active
  if(currentSearch || currentFilter !== 'all') {
    document.querySelectorAll('.topic-section').forEach(s => s.classList.add('open'));
  }
}

function buildRow(q, num) {
  const done = state[q.id] ? 'done' : '';
  return `
    <div class="q-row ${done}" id="row-${q.id}" onclick="toggle('${q.id}')">
      <div class="q-num">${num}</div>
      <div class="q-check"></div>
      <div class="q-title">${q.title}</div>
      <div class="q-tag ${q.diff}">${q.diff}</div>
      <a class="q-link" href="https://leetcode.com/problems/${q.slug}/" target="_blank" onclick="e=>e.stopPropagation()">LC →</a>
    </div>
  `;
}

function matchFilter(q) {
  if(currentSearch) {
    if(!q.title.toLowerCase().includes(currentSearch.toLowerCase())) return false;
  }
  if(currentFilter === 'done') return !!state[q.id];
  if(currentFilter === 'todo') return !state[q.id];
  if(currentFilter === 'Easy')   return q.diff === 'Easy';
  if(currentFilter === 'Medium') return q.diff === 'Medium';
  if(currentFilter === 'Hard')   return q.diff === 'Hard';
  return true;
}

// ═══════════════ TOGGLE ═══════════════
function toggle(qid) {
  state[qid] = !state[qid];
  saveState(state);
  const row = document.getElementById('row-'+qid);
  if(row) row.classList.toggle('done', !!state[qid]);
  updateHeader();
  updateTopicBars();
  showToast(state[qid] ? '✓ Marked solved' : '○ Unmarked');
}

function toggleSection(topicId) {
  const s = document.querySelector(`.topic-section[data-id="${topicId}"]`);
  if(s) s.classList.toggle('open');
}

function updateTopicBars() {
  getTopics().forEach(topic => {
    const sec = document.querySelector(`.topic-section[data-id="${topic.id}"]`);
    if(!sec) return;
    const done = topic.questions.filter(q => state[q.id]).length;
    const total = topic.questions.length;
    const pct = total ? Math.round(done/total*100) : 0;
    const fill = sec.querySelector('.mini-fill');
    const pctEl = sec.querySelector('.mini-pct');
    const countEl = sec.querySelector('.topic-count');
    if(fill) fill.style.width = pct+'%';
    if(pctEl) pctEl.textContent = pct+'%';
    if(countEl) countEl.textContent = `${done}/${total}`;
  });
}

// ═══════════════ TOAST ═══════════════
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 1500);
}

// ═══════════════ FILTERS ═══════════════
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    buildUI();
  });
});

document.getElementById('search').addEventListener('input', (e) => {
  currentSearch = e.target.value;
  buildUI();
});

document.getElementById('reset-btn').addEventListener('click', () => {
  if(confirm('Reset all progress? This cannot be undone.')) {
    state = {};
    saveState(state);
    buildUI();
    updateHeader();
    showToast('Progress reset');
  }
});

// ═══════════════ INIT ═══════════════
buildUI();
updateHeader();
