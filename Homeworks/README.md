# Task 1: Understanding Primitive Data Types
Objective: Familiarize yourself with JavaScript's primitive data types.
Instructions:
Create a script that declares variables for each of the following primitive data types: string, number, boolean, null, undefined.
Initialize each variable with a value appropriate to its type.
Print the type and value of each variable using console.log and the typeof operator.

# Task 2: Conditional Logic
Objective: Implement conditional statements to control flow based on conditions.
Instructions:
Write a script that asks the user for their age via a prompt and stores it in a variable.
Use an if-else statement to print:
"You are a minor." if the age is less than 18.
"You are an adult." if the age is 18 or older.
Add additional conditions to print "You are a senior citizen." if the age is 65 or older.

# Task 3: Loop Structures
Objective: Use loops to execute repetitive tasks.
Instructions:
Create a program that prints the numbers from 1 to 20 using a for loop.
Write a while loop that outputs only the even numbers from 1 to 20.
Implement a script with a do-while loop that continues to ask the user for a number until they enter zero.

# Task 4: Combining Elements
Objective: Utilize variables, loops, and conditionals together.
Instructions:
Create a game where the user has to guess a number between 1 and 10.
Use a variable to store the correct answer, initialized to a random number between 1 and 10.
Use a while loop to repeatedly prompt the user for their guess:
If the guess is too high, output "Too high!"
If the guess is too low, output "Too low!"
If the guess is correct, output "Congratulations! You guessed the number!" and exit the loop

# Task 1: Create an object library with at least three books.
Each book should be its own object containing properties like title, author (string), year (number), and genres (array of strings). Then:
Add a new genre to one book.
Update the year of another book.
Delete a property (e.g. remove author) from the third book.

# Task2: Given an array of user IDs,
e.g. ['u1', 'u2', 'u3'], build an object users where each key is a user ID and its value is an object with a score property initialized to 0. Then:
Increase the score of u2 by 10 using bracket notation.
Add a completely new user key based on a variable value, e.g. let newId = 'u4'.

# Task3: Create an object config
and use Object.defineProperty to add a property SECRET_KEY that:
Has the value "xyz123".
Is non‑writable (cannot be reassigned).
Is non‑enumerable (does not show up in for…in or Object.keys).
Is non‑configurable (cannot be deleted or reconfigured).
Verify each behavior by attempting to change, list, and delete the property.

# Task 4: Write a function deepClone(obj)
that takes any object (which may contain nested objects and arrays) and returns a new object with the same structure and values, but with no shared references. Test it by:
Cloning an object with at least two levels of nesting.
Mutating the nested values in the clone and showing the original remains unchanged.

# Task 5: Write a function that takes any array
and returns a new array containing only the first occurrence of each value, in original order.
Input: [1, 2, 2, 3, 1]
Output: [1, 2, 3]

# Task 6: Create a function that splits an array into groups of length size.
The last chunk may be shorter if elements run out.
Input: (['a','b','c','d','e'], 2)
Output: [['a','b'], ['c','d'], ['e']]

# Task 7: Implement a recursive function
that takes a nested array of arbitrary depth and returns a flat array of all the leaf elements.
Input: [1, [2, [3, [4]], 5]]
Output: [1, 2, 3, 4, 5]

# Task 8: Write a function that takes two or more arrays
and returns an array of tuples.
Each tuple contains the elements at the same index from each input array.
Stop when the shortest array runs out.
Input: ([1,2], ['a','b'], [true,false])
Output: [[1,'a',true], [2,'b',false]]

# Task 9:  Write a script that logs the value of a var‑declared variable
before and after its declaration and initialization at the top level.
Explain why the first log prints undefined and not a ReferenceError.

# Task 10: Create a function demo()
that logs a var x before and after you declare and assign x inside that function.
Call demo() and explain how hoisting works within the function.

# Task 11:  Inside a block (if (true) { … }),
declare a var y and log it before and after the declaration—even though var isn’t block‑scoped.
Show that y is accessible outside the block and explain why.

# Task 12: In one script, call foo() before its definition,
and call bar() before its definition—where foo is a function declaration
and bar is a const bar = function() {…}.
Observe which call works and which throws, then write a short explanation.

# Task 13: Repeat the previous task
but define baz as an arrow function (let baz = () => {…}).
Call baz() before its definition and explain why it behaves like a function expression.

# Task 14: Take a working function declaration that adds two numbers.
Rewrite it as (a) an anonymous function
expression assigned to a var, and (b) an arrow function assigned to a const.
In each case, test calling it before and after its definition to see the hoisting differences.

# Task 15: Write code
that declares var a = 1; let b = 2; const c = 3; at the top level,
then inside a function declares the same names again with different values.
Log each variable before and after its inner declaration.
Explain how JavaScript determines which binding you see in each log.

# Task 16: Create an object with two methods:
one defined as a function expression and one as an arrow.
Inside each, log this.
Call both methods and explain why the arrow version does or doesn’t see the object as this.

# Task 17: Build an array of three functions:
one declared, one function expression, one arrow—all returning their own name string.
Immediately iterate the array and log the result of calling each before 
and after you declare or assign the expressions/arrow.
Describe the order in which JS resolves each.

# Task 18: Write an Immediately Invoked Function Expression (IIFE)
that declares a var z and logs it before assignment.
Outside the IIFE, attempt to log z again.
Explain how hoisting and local scope inside the IIFE prevent or allow access to z.

# Task 1: Functions and Parameters
Objective: Understand how to create and use functions with parameters.
Instructions:
Create a function multiply that takes two numbers as parameters and returns their product.
Create another function greet that takes a name and returns a greeting message like "Hello, James!"
Call both functions with sample arguments and print the results.

# Task 2: Objects and Methods
Objective: Create objects with properties and methods.
Instructions:
Create an object person with the following properties: firstName, lastName, age.
Add a method introduce that returns a string:
 "Hi, I'm <firstName> <lastName> and I'm <age> years old."
Call the method and print the result.

# Task 3: Exploring this in Methods
Objective: Understand how this behaves inside object methods.
Instructions:
Inside the person object, create a method showThis that logs this.
Call person.showThis() and observe the output.
Assign person.showThis to a variable and call it separately.
 Explain what changes happen to this.

# Task 4: Constructor Functions
Objective: Practice building objects using constructor functions.
Instructions:
Define a constructor function Animal that takes type and name.
Inside the constructor, define a method describe that returns:
 "This is a <type> named <name>."
Create two instances of Animal with different values.
Call their describe methods and print the results.
Do NOT use arrow functions for any method or constructor!