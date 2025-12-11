
import { Question } from './types';

export const questions: Question[] = [
  // --- 03-11-2025: Java Patterns ---
  { id: '03-11-q1', category: 'Java', subcategory: 'Patterns', dateStr: '03-11-2025', tags: ['pattern', 'loops'], text: "Write a Java program to print pattern: 1, 1 2, 1 2 3, 1 2 3 4, 1 2 3 4 5 for n=5." },
  { id: '03-11-q2', category: 'Java', subcategory: 'Patterns', dateStr: '03-11-2025', tags: ['pattern', 'loops'], text: "Write a Java program to print a right-aligned number triangle pattern for n=5." },
  { id: '03-11-q3', category: 'Java', subcategory: 'Patterns', dateStr: '03-11-2025', tags: ['pattern', 'loops'], text: "Write a Java program to print an inverted pyramid of numbers for n=5 (e.g. 12345 down to 1)." },
  { id: '03-11-q4', category: 'Java', subcategory: 'Patterns', dateStr: '03-11-2025', tags: ['pattern', 'loops'], text: "Write a Java program to print the pattern: 1, 2 1 2, 3 2 1 2 3, ... for n=5." },
  { id: '03-11-q5', category: 'Java', subcategory: 'Patterns', dateStr: '03-11-2025', tags: ['pascal', 'math'], text: "Write a Java program to display Pascal’s Triangle up to n rows." },

  // --- 04-11-2025: Aptitude Time ---
  { id: '04-11-q1', category: 'Aptitude', subcategory: 'Time', dateStr: '04-11-2025', tags: ['time', 'math'], text: "A train leaves at 8:35 AM and takes 2h 45m. When does it reach?" },
  { id: '04-11-q2', category: 'Aptitude', subcategory: 'Time', dateStr: '04-11-2025', tags: ['time', 'math'], text: "A movie starts at 6:20 PM and ends at 8:55 PM. How long is it?" },
  { id: '04-11-q3', category: 'Aptitude', subcategory: 'Time', dateStr: '04-11-2025', tags: ['time', 'work'], text: "Work from 9:15 AM to 5:30 PM with 45m break. Actual work hours?" },
  { id: '04-11-q4', category: 'Aptitude', subcategory: 'Time', dateStr: '04-11-2025', tags: ['timezone', 'math'], text: "It is 3:00 PM IST. What time is it in London (GMT)? (IST = GMT+5:30)" },
  { id: '04-11-q5', category: 'Aptitude', subcategory: 'Time', dateStr: '04-11-2025', tags: ['time', 'math'], text: "Flight departs 11:25 PM. Current time 7:50 PM. Time left?" },

  // --- 05-11-2025: Aptitude Distance ---
  { id: '05-11-q1', category: 'Aptitude', subcategory: 'Distance', dateStr: '05-11-2025', tags: ['speed', 'math'], text: "Car travels at 60 km/h for 2.5 hours. Calculate distance." },
  { id: '05-11-q2', category: 'Aptitude', subcategory: 'Distance', dateStr: '05-11-2025', tags: ['displacement', 'math'], text: "Walk 3 km North, 4 km East, 2 km South. Calculate total distance and displacement." },
  { id: '05-11-q3', category: 'Aptitude', subcategory: 'Distance', dateStr: '05-11-2025', tags: ['vectors', 'math'], text: "Two trains: 40 km/h North, 30 km/h East. Distance between them after 2 hours?" },
  { id: '05-11-q4', category: 'Aptitude', subcategory: 'Distance', dateStr: '05-11-2025', tags: ['speed', 'time'], text: "Walk 2km @ 4km/h, Bus 3km @ 20km/h. Total time?" },
  { id: '05-11-q5', category: 'Aptitude', subcategory: 'Distance', dateStr: '05-11-2025', tags: ['displacement', 'math'], text: "Travel 10 km East, 6 km West, 4 km North. Shortest distance from start?" },

  // --- 06-11-2025: Java Search ---
  { id: '06-11-q1', category: 'Java', subcategory: 'Search', dateStr: '06-11-2025', tags: ['linear search'], text: "Linear search for 19 in [8, 15, 22, 7, 19, 31, 4, 13]." },
  { id: '06-11-q2', category: 'Java', subcategory: 'Search', dateStr: '06-11-2025', tags: ['binary search'], text: "Binary search for 18 in sorted [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]. Print iterations." },
  { id: '06-11-q3', category: 'Java', subcategory: 'Search', dateStr: '06-11-2025', tags: ['jump search'], text: "Jump search for 16 in sorted array. Show comparisons." },
  { id: '06-11-q4', category: 'Java', subcategory: 'Search', dateStr: '06-11-2025', tags: ['exponential search'], text: "Find 45 using Exponential search in sorted array." },
  { id: '06-11-q5', category: 'Java', subcategory: 'Search', dateStr: '06-11-2025', tags: ['fibonacci search'], text: "Use Fibonacci search to find 23 in sorted array." },

  // --- 07-11-2025: Java Strings ---
  { id: '07-11-q1', category: 'Java', subcategory: 'Strings', dateStr: '07-11-2025', tags: ['linear search'], text: "Search for first 'E' in 'PLACEMENTPREPARATION' using linear search." },
  { id: '07-11-q2', category: 'Java', subcategory: 'Strings', dateStr: '07-11-2025', tags: ['pattern matching'], text: "Naive pattern matching for 'placement' in text." },
  { id: '07-11-q3', category: 'Java', subcategory: 'Strings', dateStr: '07-11-2025', tags: ['binary search'], text: "Binary search for 'mango' in sorted fruit list." },
  { id: '07-11-q4', category: 'Java', subcategory: 'Strings', dateStr: '07-11-2025', tags: ['KMP'], text: "KMP Algorithm to find 'ABABCABAB' in text." },
  { id: '07-11-q5', category: 'Java', subcategory: 'Strings', dateStr: '07-11-2025', tags: ['Rabin-Karp'], text: "Rabin-Karp algorithm to find 'fox' in text." },

  // --- 08-11-2025: Java Loops ---
  { id: '08-11-q1', category: 'Java', subcategory: 'Loops', dateStr: '08-11-2025', tags: ['loops'], text: "Print even numbers 1-50 using for loop and count them." },
  { id: '08-11-q2', category: 'Java', subcategory: 'Loops', dateStr: '08-11-2025', tags: ['while', 'digits'], text: "Reverse digits of a number using while loop." },
  { id: '08-11-q3', category: 'Java', subcategory: 'Loops', dateStr: '08-11-2025', tags: ['nested loops'], text: "Print right-angled star pyramid using nested loops." },
  { id: '08-11-q4', category: 'Java', subcategory: 'Loops', dateStr: '08-11-2025', tags: ['break', 'continue'], text: "Print 1-20, skip multiples of 3, stop if > 15." },
  { id: '08-11-q5', category: 'Java', subcategory: 'Loops', dateStr: '08-11-2025', tags: ['primes'], text: "Display primes 1-100 using nested loops." },
  { id: '08-11-q6', category: 'Java', subcategory: 'Loops', dateStr: '08-11-2025', tags: ['leap year'], text: "Check leap year using nested if." },

  // --- 09/10-11-2025: Java Arrays ---
  { id: '09-11-q1', category: 'Java', subcategory: 'Arrays', dateStr: '09-11-2025', tags: ['frequency'], text: "Count frequency of each element in an array." },
  { id: '09-11-q2', category: 'Java', subcategory: 'Arrays', dateStr: '09-11-2025', tags: ['rotate'], text: "Rotate array to the right by k positions." },
  { id: '09-11-q3', category: 'Java', subcategory: 'Arrays', dateStr: '09-11-2025', tags: ['two pointer'], text: "Find pair with sum K in sorted array using two pointers." },
  { id: '09-11-q4', category: 'Java', subcategory: 'Arrays', dateStr: '09-11-2025', tags: ['sliding window'], text: "Max sum of contiguous subarray of size K (Sliding Window)." },
  { id: '09-11-q5', category: 'Java', subcategory: 'Arrays', dateStr: '09-11-2025', tags: ['kadane'], text: "Max sum of any contiguous subarray (Kadane's)." },
  { id: '09-11-q6', category: 'Java', subcategory: 'Arrays', dateStr: '09-11-2025', tags: ['missing number'], text: "Find missing number in range 1 to n+1." },
  { id: '09-11-q7', category: 'Java', subcategory: 'Matrices', dateStr: '09-11-2025', tags: ['spiral'], text: "Print 2D matrix in spiral order." },
  { id: '09-11-q8', category: 'Java', subcategory: 'Matrices', dateStr: '09-11-2025', tags: ['transpose'], text: "Find transpose and sum of all elements in 4x4 matrix." },

  // --- 11-11-2025: C++ Structures ---
  { id: '11-11-q1', category: 'C++', subcategory: 'Structs', dateStr: '11-11-2025', tags: ['struct'], text: "Define Address and Employee structs. Display employees in specific city." },
  { id: '11-11-q2', category: 'C++', subcategory: 'Structs', dateStr: '11-11-2025', tags: ['sort'], text: "Structure Product. Sort array of products by price." },
  { id: '11-11-q3', category: 'C++', subcategory: 'Files', dateStr: '11-11-2025', tags: ['file'], text: "Store Employee struct in file, read and copy to new file." },
  { id: '11-11-q4', category: 'C++', subcategory: 'Linked List', dateStr: '11-11-2025', tags: ['linked list'], text: "Structure Node. Create linked list of n nodes, insert at end." },
  // Additional from earlier Java list that are actually Structs
  { id: '11-11-q5', category: 'C++', subcategory: 'Structs', dateStr: '11-11-2025', tags: ['struct'], text: "Structure Employee (id, name, salary). Display one with highest salary." },
  { id: '11-11-q6', category: 'C++', subcategory: 'Structs', dateStr: '11-11-2025', tags: ['pointer'], text: "Structure Book. Use pointer to input and display." },
  { id: '11-11-q7', category: 'C++', subcategory: 'Structs', dateStr: '11-11-2025', tags: ['nested'], text: "Structure Date and nested Employee." },
  { id: '11-11-q8', category: 'C++', subcategory: 'Structs', dateStr: '11-11-2025', tags: ['function'], text: "Structure Student. Function to calculate average marks." },
  { id: '11-11-q9', category: 'C++', subcategory: 'Memory', dateStr: '11-11-2025', tags: ['dynamic'], text: "Dynamically allocate memory for n Students, find highest marks." },

  // --- 12-11-2025: C++ Dynamic Memory ---
  { id: '12-11-q1', category: 'C++', subcategory: 'Memory', dateStr: '12-11-2025', tags: ['new/delete'], text: "Dynamically allocate array of n integers." },
  { id: '12-11-q2', category: 'C++', subcategory: 'Memory', dateStr: '12-11-2025', tags: ['class'], text: "Dynamically allocate one Student object." },
  { id: '12-11-q3', category: 'C++', subcategory: 'Memory', dateStr: '12-11-2025', tags: ['matrix'], text: "Allocate 2D array using double pointers (int **ptr)." },
  { id: '12-11-q4', category: 'C++', subcategory: 'Memory', dateStr: '12-11-2025', tags: ['resize'], text: "Simulate array resizing (realloc) using new/delete." },

  // --- 13-11-2025: C++ Memory II ---
  { id: '13-11-q1', category: 'C++', subcategory: 'Memory', dateStr: '13-11-2025', tags: ['class array'], text: "Allocate array of n Employee objects dynamically." },
  { id: '13-11-q2', category: 'C++', subcategory: 'Memory', dateStr: '13-11-2025', tags: ['deep copy'], text: "Class Book with deep copy constructor and destructor." },
  { id: '13-11-q3', category: 'C++', subcategory: 'Pointers', dateStr: '13-11-2025', tags: ['function'], text: "Function returning pointer to dynamically allocated array." },
  { id: '13-11-q4', category: 'C++', subcategory: 'Pointers', dateStr: '13-11-2025', tags: ['double pointer'], text: "Allocate array of pointers to Student objects." },
  { id: '13-11-q5', category: 'C++', subcategory: 'Exceptions', dateStr: '13-11-2025', tags: ['bad_alloc'], text: "Handle bad_alloc exception." },

  // --- 14-11-2025: C++ Features ---
  { id: '14-11-q1', category: 'C++', subcategory: 'Overloading', dateStr: '14-11-2025', tags: ['ambiguity'], text: "Output of fun(int) vs fun(double) with fun('A')." },
  { id: '14-11-q2', category: 'C++', subcategory: 'Overloading', dateStr: '14-11-2025', tags: ['ambiguity'], text: "Ambiguity in display(int, int=10) vs display(int=5)." },
  { id: '14-11-q3', category: 'C++', subcategory: 'Macro', dateStr: '14-11-2025', tags: ['inline'], text: "Macro vs Inline function behavior." },
  { id: '14-11-q4', category: 'C++', subcategory: 'Recursion', dateStr: '14-11-2025', tags: ['recursion'], text: "Recursive sum of digits of large number." },
  { id: '14-11-q5', category: 'C++', subcategory: 'STL', dateStr: '14-11-2025', tags: ['vector'], text: "Function taking vector<Student> to find highest score." },
  { id: '14-11-q6', category: 'C++', subcategory: 'References', dateStr: '14-11-2025', tags: ['dangling'], text: "Why is returning reference to local int dangerous?" },
  { id: '14-11-q7', category: 'C++', subcategory: 'Classes', dateStr: '14-11-2025', tags: ['const'], text: "Const vs Non-const member functions." },
  { id: '14-11-q8', category: 'C++', subcategory: 'Templates', dateStr: '14-11-2025', tags: ['specialization'], text: "Template specialization for char* strings." },

  // --- 15-11-2025: C++ Modern ---
  { id: '15-11-q1', category: 'C++', subcategory: 'Templates', dateStr: '15-11-2025', tags: ['template'], text: "Template add vs int add overload." },
  { id: '15-11-q2', category: 'C++', subcategory: 'Lambda', dateStr: '15-11-2025', tags: ['capture'], text: "Lambda capture by value vs reference." },
  { id: '15-11-q3', category: 'C++', subcategory: 'Static', dateStr: '15-11-2025', tags: ['static'], text: "Generate unique IDs using static variable." },
  { id: '15-11-q4', category: 'C++', subcategory: 'Pointers', dateStr: '15-11-2025', tags: ['func pointer'], text: "Function pointer to 'compute'." },

  // --- 16-11-2025: C++ Review (Repeated Topics in PDF) ---
  { id: '16-11-q1', category: 'C++', subcategory: 'Memory', dateStr: '16-11-2025', tags: ['review'], text: "Review: Dynamic array of objects (Employee)." },
  { id: '16-11-q2', category: 'C++', subcategory: 'Memory', dateStr: '16-11-2025', tags: ['review'], text: "Review: Deep copy constructor (Book)." },

  // --- 17-11-2025: C++ Algorithms ---
  { id: '17-11-q1', category: 'C++', subcategory: 'Recursion', dateStr: '17-11-2025', tags: ['recursion'], text: "Recursive f(n) = f(n-1) + f(n-3)." },
  { id: '17-11-q2', category: 'C++', subcategory: 'Memory', dateStr: '17-11-2025', tags: ['safe return'], text: "Safely return array from function (std::array/vector)." },
  { id: '17-11-q3', category: 'C++', subcategory: 'Modern', dateStr: '17-11-2025', tags: ['span'], text: "Pass subarray without copying using std::span." },
  { id: '17-11-q4', category: 'C++', subcategory: 'Algorithm', dateStr: '17-11-2025', tags: ['search'], text: "Search subarray {4,5,6,7} in {0..12}." },

  // --- 19-11-2025 & 20-11-2025: C++ Pointers ---
  { id: '19-11-q1', category: 'C++', subcategory: 'Pointers', dateStr: '19-11-2025', tags: ['arithmetic'], text: "Pointer arithmetic: Sum first half, max second half." },
  { id: '19-11-q2', category: 'C++', subcategory: 'Pointers', dateStr: '19-11-2025', tags: ['triple'], text: "Allocate 2D matrix using triple pointers (int***)." },
  { id: '19-11-q3', category: 'C++', subcategory: 'Pointers', dateStr: '19-11-2025', tags: ['func pointer'], text: "Array of function pointers (add, sub, mul)." },
  { id: '19-11-q4', category: 'C++', subcategory: 'Pointers', dateStr: '19-11-2025', tags: ['dangling'], text: "Create and fix dangling pointer scenario." },
  { id: '19-11-q5', category: 'C++', subcategory: 'Pointers', dateStr: '19-11-2025', tags: ['ref vs ptr'], text: "Compare incrementPtr(int*) vs incrementRef(int&)." },

  // --- 21-11-2025: C++ Advanced ---
  { id: '21-11-q1', category: 'C++', subcategory: 'Memory', dateStr: '21-11-2025', tags: ['smart pointers'], text: "Compare returning raw ptr, static, and unique_ptr." },
  { id: '21-11-q2', category: 'C++', subcategory: 'Pointers', dateStr: '21-11-2025', tags: ['void*'], text: "printData(void* ptr, int type) for int/float/char." },
  { id: '21-11-q3', category: 'C++', subcategory: 'Classes', dateStr: '21-11-2025', tags: ['access'], text: "Access members using (*ptr).marks and ptr->marks." },
  { id: '21-11-q4', category: 'C++', subcategory: 'Pointers', dateStr: '21-11-2025', tags: ['array ptr'], text: "Array of pointers vs Pointer to array." },

  // --- 22-11-2025: Java Transition ---
  { id: '22-11-q1', category: 'Java', subcategory: 'References', dateStr: '22-11-2025', tags: ['pass by value'], text: "Show object modification vs reference reassignment in method." },
  { id: '22-11-q2', category: 'Java', subcategory: 'Strings', dateStr: '22-11-2025', tags: ['reverse'], text: "Reverse order of words without split()." },
  { id: '22-11-q3', category: 'Java', subcategory: 'Strings', dateStr: '22-11-2025', tags: ['palindrome'], text: "Longest palindromic substring." },
  { id: '22-11-q4', category: 'Java', subcategory: 'Strings', dateStr: '22-11-2025', tags: ['anagram'], text: "Check anagrams (no sorting, freq array)." },
  { id: '22-11-q5', category: 'Java', subcategory: 'Strings', dateStr: '22-11-2025', tags: ['unique'], text: "First non-repeating character (no HashMap)." },

  // --- 23-11-2025: Java Strings II ---
  { id: '23-11-q1', category: 'Java', subcategory: 'Strings', dateStr: '23-11-2025', tags: ['dedupe'], text: "Remove duplicates preserving first occurrence." },
  { id: '23-11-q2', category: 'Java', subcategory: 'Strings', dateStr: '23-11-2025', tags: ['compare'], text: "Compare strings ignoring case without built-ins." },
  { id: '23-11-q3', category: 'Java', subcategory: 'Strings', dateStr: '23-11-2025', tags: ['frequency'], text: "Word with max frequency in paragraph (regex split)." },
  { id: '23-11-q4', category: 'Java', subcategory: 'Strings', dateStr: '23-11-2025', tags: ['rotation'], text: "Check if string is rotation of another." },
  { id: '23-11-q5', category: 'Java', subcategory: 'Strings', dateStr: '23-11-2025', tags: ['vowel'], text: "Replace every vowel with next vowel." },
  { id: '23-11-q6', category: 'Java', subcategory: 'Strings', dateStr: '23-11-2025', tags: ['KMP'], text: "Pattern searching using KMP algorithm." },

  // --- 24-11-2025: Java References ---
  { id: '24-11-q1', category: 'Java', subcategory: 'References', dateStr: '24-11-2025', tags: ['call by value'], text: "Utilize call by value to perform linear search." },
  { id: '24-11-q2', category: 'Java', subcategory: 'References', dateStr: '24-11-2025', tags: ['methods'], text: "Demonstrate changes inside method reflecting outside vs reassignment." },
  { id: '24-11-q3', category: 'Java', subcategory: 'References', dateStr: '24-11-2025', tags: ['arrays'], text: "Demonstrate how array variables act like pointers." },
  { id: '24-11-q4', category: 'Java', subcategory: 'References', dateStr: '24-11-2025', tags: ['swap'], text: "Swap failure with primitives vs success with wrappers." },
  { id: '24-11-q5', category: 'Java', subcategory: 'References', dateStr: '24-11-2025', tags: ['aliasing'], text: "Two references pointing to same object." },
  { id: '24-11-q6', category: 'Java', subcategory: 'References', dateStr: '24-11-2025', tags: ['memory'], text: "Pass object ref, modify field, check memory behavior." },

  // --- 26-11-2025: Java Deep Copy ---
  { id: '26-11-q1', category: 'Java', subcategory: 'Memory', dateStr: '26-11-2025', tags: ['deep copy'], text: "Create deep copy vs shallow copy." },
  { id: '26-11-q2', category: 'Java', subcategory: 'Memory', dateStr: '26-11-2025', tags: ['equality'], text: "Prove == is false and equals() is true for identical objects." },
  { id: '26-11-q3', category: 'Java', subcategory: 'Memory', dateStr: '26-11-2025', tags: ['linked list'], text: "Modify linked list node data via method pass." },
  { id: '26-11-q4', category: 'Java', subcategory: 'Memory', dateStr: '26-11-2025', tags: ['pointer sim'], text: "Simulate pointer arithmetic using array indices." },
  { id: '26-11-q5', category: 'Java', subcategory: 'Memory', dateStr: '26-11-2025', tags: ['nested'], text: "Multiple refs to nested object, modify one affects all." },

  // --- 27-11-2025: Aliasing ---
  { id: '27-11-q1', category: 'Java', subcategory: 'Memory', dateStr: '27-11-2025', tags: ['aliasing'], text: "Demonstrate aliasing side effects." },
  { id: '27-11-q2', category: 'Java', subcategory: 'Memory', dateStr: '27-11-2025', tags: ['pass value'], text: "Show how Java passes reference values." },
  { id: '27-11-q3', category: 'Java', subcategory: 'Memory', dateStr: '27-11-2025', tags: ['reassign'], text: "Attempt to change reference itself in method (fail)." },
  { id: '27-11-q4', category: 'Java', subcategory: 'Memory', dateStr: '27-11-2025', tags: ['identity'], text: "Detect if two refs point to same object using identityHashCode." },
  { id: '27-11-q5', category: 'Java', subcategory: 'Memory', dateStr: '27-11-2025', tags: ['wrapper'], text: "Mutable wrapper class to simulate pointer-to-int." },

  // --- 28-11-2025: Object Graph ---
  { id: '28-11-q1', category: 'Java', subcategory: 'Memory', dateStr: '28-11-2025', tags: ['graph'], text: "Object graph traversal using references." },
  { id: '28-11-q2', category: 'Java', subcategory: 'Memory', dateStr: '28-11-2025', tags: ['linked list'], text: "Manual simple linked list." },
  { id: '28-11-q3', category: 'Java', subcategory: 'Memory', dateStr: '28-11-2025', tags: ['clone'], text: "Clone complex object with nested lists (Deep copy)." },
  { id: '28-11-q4', category: 'Java', subcategory: 'Memory', dateStr: '28-11-2025', tags: ['cyclic'], text: "Cyclic references and Garbage Collection." },
  { id: '28-11-q5', category: 'Java', subcategory: 'Memory', dateStr: '28-11-2025', tags: ['return ref'], text: "Return reference to object created in method." },

  // --- 29-11-2025: Advanced Refs ---
  { id: '29-11-q1', category: 'Java', subcategory: 'Memory', dateStr: '29-11-2025', tags: ['ref count'], text: "Simulate reference counting manually." },
  { id: '29-11-q2', category: 'Java', subcategory: 'Memory', dateStr: '29-11-2025', tags: ['pointer table'], text: "Simulate pointer table (indirect access)." },
  { id: '29-11-q3', category: 'Java', subcategory: 'Memory', dateStr: '29-11-2025', tags: ['chain'], text: "Multi-level reference chain modification." },
  { id: '29-11-q4', category: 'Java', subcategory: 'Memory', dateStr: '29-11-2025', tags: ['weak ref'], text: "WeakReference, SoftReference, PhantomReference demo." },
  { id: '29-11-q5', category: 'Java', subcategory: 'DS', dateStr: '29-11-2025', tags: ['stack'], text: "Perform STACK operations for characters." },

  // --- 30-11-2025: Queue & Lists ---
  { id: '30-11-q1', category: 'Java', subcategory: 'DS', dateStr: '30-11-2025', tags: ['queue'], text: "Queue operations menu." },
  { id: '30-11-q2', category: 'Java', subcategory: 'DS', dateStr: '30-11-2025', tags: ['circular queue'], text: "Circular Queue for historical places." },
  { id: '30-11-q3', category: 'Java', subcategory: 'DS', dateStr: '30-11-2025', tags: ['hanoi'], text: "Tower of Hanoi with 10 disks." },
  { id: '30-11-q4', category: 'Java', subcategory: 'DS', dateStr: '30-11-2025', tags: ['linked list'], text: "Singly Linked List." },
  { id: '30-11-q5', category: 'Java', subcategory: 'DS', dateStr: '30-11-2025', tags: ['doubly linked list'], text: "Doubly Linked List for historical places." },
  { id: '30-11-q6', category: 'Java', subcategory: 'DS', dateStr: '30-11-2025', tags: ['circular linked list'], text: "Circular Linked List." },

  // --- 01-12-2025 to 02-12-2025: Trees & Graphs ---
  { id: '02-12-q1', category: 'Java', subcategory: 'Matrix', dateStr: '02-12-2025', tags: ['matrix ops'], text: "Matrix Add, Sub, Mul, Scalar menu." },
  { id: '02-12-q2', category: 'Java', subcategory: 'Matrix', dateStr: '02-12-2025', tags: ['matrix swap'], text: "Row and Column swapping." },
  { id: '02-12-q3', category: 'Java', subcategory: 'Trees', dateStr: '02-12-2025', tags: ['traversal'], text: "Binary Tree Inorder, Preorder, Postorder." },
  { id: '02-12-q4', category: 'Java', subcategory: 'Graph', dateStr: '02-12-2025', tags: ['bfs dfs'], text: "BFS and DFS Traversal." },
  { id: '02-12-q5', category: 'Java', subcategory: 'Hashing', dateStr: '02-12-2025', tags: ['hashing'], text: "Static and Dynamic Hashing." },

  // --- 03-12-2025: Divide & Conquer I ---
  { id: '03-12-q1', category: 'Algorithms', subcategory: 'D&C', dateStr: '03-12-2025', tags: ['peak'], text: "Peak Element in Bitonic Array O(log n)." },
  { id: '03-12-q2', category: 'Algorithms', subcategory: 'D&C', dateStr: '03-12-2025', tags: ['inversions'], text: "Count Inversion Pairs (Merge Sort)." },
  { id: '03-12-q3', category: 'Algorithms', subcategory: 'D&C', dateStr: '03-12-2025', tags: ['geometry'], text: "Closest Pair of Points (Min distance)." },
  { id: '03-12-q4', category: 'Algorithms', subcategory: 'D&C', dateStr: '03-12-2025', tags: ['k-th'], text: "K-th smallest in two sorted arrays." },
  { id: '03-12-q5', category: 'Algorithms', subcategory: 'D&C', dateStr: '03-12-2025', tags: ['majority'], text: "Find element occurring > n/2 times recursively." },

  // --- 04-12-2025: Divide & Conquer II ---
  { id: '04-12-q1', category: 'Algorithms', subcategory: 'D&C', dateStr: '04-12-2025', tags: ['max subarray'], text: "Max Subarray Sum (Divide & Conquer)." },
  { id: '04-12-q2', category: 'Algorithms', subcategory: 'D&C', dateStr: '04-12-2025', tags: ['pow'], text: "Fast Exponentiation (a^b)." },
  { id: '04-12-q3', category: 'Algorithms', subcategory: 'D&C', dateStr: '04-12-2025', tags: ['quickselect'], text: "QuickSelect for Kth smallest." },
  { id: '04-12-q4', category: 'Algorithms', subcategory: 'D&C', dateStr: '04-12-2025', tags: ['rotated'], text: "Search in Rotated Sorted Array." },
  { id: '04-12-q5', category: 'Algorithms', subcategory: 'D&C', dateStr: '04-12-2025', tags: ['frequency'], text: "Count frequency of X in sorted array (First/Last occurrence)." },

  // --- 05-12-2025: Recursion Scenarios ---
  { id: '05-12-q1', category: 'Java', subcategory: 'Recursion', dateStr: '05-12-2025', tags: ['file system'], text: "Recursive directory size calculation." },
  { id: '05-12-q2', category: 'Java', subcategory: 'Recursion', dateStr: '05-12-2025', tags: ['org chart'], text: "Total salary of employee hierarchy." },
  { id: '05-12-q3', category: 'Java', subcategory: 'Recursion', dateStr: '05-12-2025', tags: ['grid path'], text: "Robot navigation in 2D grid with obstacles." },
  { id: '05-12-q4', category: 'Java', subcategory: 'Recursion', dateStr: '05-12-2025', tags: ['search'], text: "Search Product ID in nested JSON structure." },
  { id: '05-12-q5', category: 'Java', subcategory: 'Recursion', dateStr: '05-12-2025', tags: ['T9'], text: "Generate words from number string (T9 Keypad)." },

  // --- 06-12-2025: Recursion II ---
  { id: '06-12-q1', category: 'Java', subcategory: 'Recursion', dateStr: '06-12-2025', tags: ['compression'], text: "Recursive Run-Length Encoding (aaabb -> a3b2)." },
  { id: '06-12-q2', category: 'Java', subcategory: 'Recursion', dateStr: '06-12-2025', tags: ['expression'], text: "Evaluate expression tree." },
  { id: '06-12-q3', category: 'Java', subcategory: 'Recursion', dateStr: '06-12-2025', tags: ['flood fill'], text: "Recursive Flood Fill algorithm." },
  { id: '06-12-q4', category: 'Java', subcategory: 'Recursion', dateStr: '06-12-2025', tags: ['subset sum'], text: "Find all subsets that sum to target." },
  { id: '06-12-q5', category: 'Java', subcategory: 'Recursion', dateStr: '06-12-2025', tags: ['version control'], text: "Compare nested file versions." },

  // --- 07-12-2025: Recursion III ---
  { id: '07-12-q1', category: 'Java', subcategory: 'Recursion', dateStr: '07-12-2025', tags: ['firewall'], text: "Check IP against nested firewall rules." },
  { id: '07-12-q2', category: 'Java', subcategory: 'Recursion', dateStr: '07-12-2025', tags: ['org chart'], text: "Find max depth of hierarchy." },
  { id: '07-12-q3', category: 'Java', subcategory: 'Recursion', dateStr: '07-12-2025', tags: ['bundle'], text: "Total price of product bundle with sub-bundles." },
  { id: '07-12-q4', category: 'Java', subcategory: 'Recursion', dateStr: '07-12-2025', tags: ['book'], text: "Search keyword in digital library structure." },
  { id: '07-12-q5', category: 'Java', subcategory: 'Recursion', dateStr: '07-12-2025', tags: ['network'], text: "Simulate packet propagation through routers." },

  // --- 08-12-2025: Complex Recursion ---
  { id: '08-12-q1', category: 'Java', subcategory: 'Recursion', dateStr: '08-12-2025', tags: ['3d grid'], text: "Robot move in 3D warehouse grid." },
  { id: '08-12-q2', category: 'Java', subcategory: 'Recursion', dateStr: '08-12-2025', tags: ['finance'], text: "Compound growth with variable rates." },
  { id: '08-12-q3', category: 'Java', subcategory: 'Recursion', dateStr: '08-12-2025', tags: ['tree'], text: "Binary Expression Tree evaluation." },
  { id: '08-12-q4', category: 'Java', subcategory: 'Recursion', dateStr: '08-12-2025', tags: ['trie'], text: "Trie check if string can be segmented." },
  { id: '08-12-q5', category: 'Java', subcategory: 'Recursion', dateStr: '08-12-2025', tags: ['menu'], text: "Print full menu paths for restaurant." },
  { id: '08-12-q6', category: 'Java', subcategory: 'Recursion', dateStr: '08-12-2025', tags: ['cell'], text: "Recursive cell reproduction model." },

  // --- 09-12-2025: Validation & Hash ---
  { id: '09-12-q1', category: 'Java', subcategory: 'Recursion', dateStr: '09-12-2025', tags: ['validation'], text: "Validate nested form sections." },
  { id: '09-12-q2', category: 'Java', subcategory: 'Recursion', dateStr: '09-12-2025', tags: ['encryption'], text: "Recursive string encryption." },
  { id: '09-12-q3', category: 'Java', subcategory: 'Recursion', dateStr: '09-12-2025', tags: ['merkle'], text: "Build Merkle Tree from hashes." },
  { id: '09-12-q4', category: 'Java', subcategory: 'Recursion', dateStr: '09-12-2025', tags: ['species'], text: "Species survival score dependency tree." },
  { id: '09-12-q5', category: 'Java', subcategory: 'Recursion', dateStr: '09-12-2025', tags: ['schedule'], text: "Event sub-event time conflict." },
  { id: '09-12-q6', category: 'Java', subcategory: 'Recursion', dateStr: '09-12-2025', tags: ['quadtree'], text: "Climate simulation average temp (Quadtree)." },

  // --- 10-12-2025: Graph & Lists ---
  { id: '10-12-q1', category: 'Java', subcategory: 'Graph', dateStr: '10-12-2025', tags: ['route'], text: "Find route in city map (Directed Graph)." },
  { id: '10-12-q2', category: 'Java', subcategory: 'Recursion', dateStr: '10-12-2025', tags: ['xml'], text: "Verify nested tags in simplified XML." },
  { id: '10-12-q3', category: 'Java', subcategory: 'Recursion', dateStr: '10-12-2025', tags: ['module'], text: "Count module invocations in call graph." },
  { id: '10-12-q4', category: 'Java', subcategory: 'Linked List', dateStr: '10-12-2025', tags: ['polynomial'], text: "Evaluate polynomial using linked structure." },
  { id: '10-12-q5', category: 'Java', subcategory: 'Recursion', dateStr: '10-12-2025', tags: ['image'], text: "Count connected pixel groups." },
  { id: '10-12-q6', category: 'Java', subcategory: 'Recursion', dateStr: '10-12-2025', tags: ['game'], text: "Monster spawn system." },

  // --- 11-12-2025: System Design ---
  { id: '11-12-q1', category: 'Java', subcategory: 'Recursion', dateStr: '11-12-2025', tags: ['playlist'], text: "Flatten nested playlist." },
  { id: '11-12-q2', category: 'Java', subcategory: 'Recursion', dateStr: '11-12-2025', tags: ['files'], text: "Identify duplicate files by content hash." },
  { id: '11-12-q3', category: 'Java', subcategory: 'Recursion', dateStr: '11-12-2025', tags: ['ticket'], text: "Total processing time for sub-tickets." },
  { id: '11-12-q4', category: 'Java', subcategory: 'Recursion', dateStr: '11-12-2025', tags: ['quadtree'], text: "Map compression using Quadtree." },
  { id: '11-12-q5', category: 'Java', subcategory: 'Recursion', dateStr: '11-12-2025', tags: ['dependency'], text: "Software package installation order." },

  // --- 12-12-2025: Applications ---
  { id: '12-12-q1', category: 'Java', subcategory: 'Recursion', dateStr: '12-12-2025', tags: ['iot'], text: "Smart Home state propagation." },
  { id: '12-12-q2', category: 'Java', subcategory: 'Recursion', dateStr: '12-12-2025', tags: ['security'], text: "Password strength permutation generator." },
  { id: '12-12-q3', category: 'Java', subcategory: 'Recursion', dateStr: '12-12-2025', tags: ['social'], text: "Comment thread max depth." },
  { id: '12-12-q4', category: 'Java', subcategory: 'Recursion', dateStr: '12-12-2025', tags: ['banking'], text: "Transaction dependency resolver." },

  // --- 13-12-2025: Final Scenarios ---
  { id: '13-12-q1', category: 'Java', subcategory: 'Recursion', dateStr: '13-12-2025', tags: ['elearning'], text: "Course completion tracker (nested modules)." },
  { id: '13-12-q2', category: 'Java', subcategory: 'Recursion', dateStr: '13-12-2025', tags: ['medical'], text: "Medical diagnosis symptom trace." },
  { id: '13-12-q3', category: 'Java', subcategory: 'Recursion', dateStr: '13-12-2025', tags: ['travel'], text: "Recursive tour cost calculator." },
  { id: '13-12-q4', category: 'Java', subcategory: 'Recursion', dateStr: '13-12-2025', tags: ['warehouse'], text: "Recursive location finder (bins)." },
  { id: '13-12-q5', category: 'Java', subcategory: 'Recursion', dateStr: '13-12-2025', tags: ['cloud'], text: "Duplicate folder structure comparison." }
];
