# Day 13 🤩


##  Scope 

📌 **Scope**: where to look for things.


📌 JavaScript organizes scopes with ***functions*** and ***blocks***.

### Compilation & Scope

We're going to pretend as if a conversation is happening in this processing of the JavaScript program. There's going to be two actors, two entities that are going to be talking:
* One is the ***compiler***, the thing that's processing the JavaScript program. It's the compiler who says, hey, I have this thing.
* The other one is the ***scope manager***, and scope manager is the one that makes buckets, makes marbles, drops the marbles in. It's the scope manager who says, I'm gonna make a plan for that, I'm gonna make a plan for a bucket and make a plan for a marble.

1. And that'll be our first pass through the program, is that **compilation step**. 
2. And then after we've set up all those plans, then we'll come back and **execute the code**. 


![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/022e19b0-da0b-4df2-b32b-43505444f2aa)


#### 💡 **NOTE**: 
> * Having two varibles with same name in different scopes called ***shadowing***.
> * All of the scopes that we're dealing with, all of the lexical scopes and identifiers, that's all determined at compile time. It's not determined at run time. It is ***used*** at ***run time***, but it is ***determined*** at ***compile time***.

### **Before executing the code :**

1. Scope maneger detrmine the scope.
2. Then bring data or store it in the variable.

### Execute the code

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/d9a325e3-6639-4a16-9e50-7e622dde0702)



###  Auto Global: 

📌 If I try to use varible in cuurent scope without declaring it, it will be delared in the globale scope.

So if you try to assign to a variable that's never been formally declared. Once you arrive at the global scope, if you say hey, global scope, I'm looking for this marble called topic, ever heard of it? And the global scope instead of saying nope, sorry error, the global scope's gonna say I just created one for you.


![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/72ba93a4-7e54-4a6f-bfa4-568760672715)


### Strict Mode:

📌 This will prevent Auto Global.

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/abbeddea-c737-4b76-85f2-97fcb17de535)

### Nested Scope:

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/16a397cb-0a75-4383-9d88-33db69e8b7ef)



### Undefined vs. Undeclared

* ***Undefined:*** means a ***variable exists*** but at the moment ***it has no value***.It may have never had a value or it might have used to have a value and it doesn't anymore but there is no other value in the vacuum of space it is undefined.
* ***Undeclared:*** undeclared is actually ***never formally declared*** in any scope that we have accessed to.

💡 ***Summary***: **Undeclared** *doesn't exist*, **Undefined** definitely does *exist*, but *doesn't have a value*.


### Lexical Scope Elevator

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/9c3ed351-b6be-4588-a956-03699edef1c0)


## Scope & Function Expressions 

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/c861dc77-7b6f-4bd9-9ae0-dcea5db29c8c)


### Named Function Expressions:

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/75152a16-d63e-4624-a491-6146453c905d)

#### 📌 Function Declaration vs. Function Expression 

* ***Function Declaration***: if the word function is literally the first thing in the statement.
* ***Function Expression***: if there's a variable or an operator or parentheses or anything, then it's not a declaration, it is An expression.Line one, I'm declaring a function expression.

#### 📌 Anonymous Function Expression vs. Named Function Expression
 
* ***Anonymous Function Expression***: On line one, we see a function expression, but we see no name. So that's called an anonymous function expression.
* ***Named Function Expression***: whereas the one on line five is a named function expression. 

### Benefits of using Named Function Expressions:

1. Reliable function self-reference (recursion, etc.).
2. More debuggable stack traces.
3. More self-documenting code.

### Arrow Functions

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/0e42d266-8f3e-47c7-a45d-1a34a07bff1c)
![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/6059a5e9-077e-4841-8905-8393c7ff420c)


#### 💡 **NOTE**: 

💡 ***Summary***: (Named) Function Declaration > Named Function Expression > Anonymous Function Expression.


### Function Expression Exercise

**Function Expressions**

In this exercise, you will be writing some functions and function expressions, to manage the student enrollment records for a workshop.

**Note:** The spirit of this exercise is to use functions wherever possible and appropriate, so consider usage of array utilities `map(..)`, `filter(..)`, `find(..)`, `sort(..)`, and `forEach(..)`.

**Instructions (Part 1)**

**Note:** In Part 1, use only function declarations or named function expressions.

You are provided three functions stubs -- `printRecords(..)`, `paidStudentsToEnroll()`, and `remindUnpaid(..)` -- which you must define.

At the bottom of the file you will see these functions called, and a code comment indicating what the console output should be.

1. `printRecords(..)` should:
	- take a list of student Ids
	- retrieve each student record by its student Id (hint: array `find(..)`)
	- sort by student name, ascending (hint: array `sort(..)`)
	- print each record to the console, including `name`, `id`, and `"Paid"` or `"Not Paid"` based on their paid status

2. `paidStudentsToEnroll()` should:
	- look through all the student records, checking to see which ones are paid but **not yet enrolled**
	- collect these student Ids
	- return a new array including the previously enrolled student Ids as well as the to-be-enrolled student Ids (hint: spread `...`)

3. `remindUnpaid(..)` should:
	- take a list of student Ids
	- filter this list of student Ids to only those whose records are in unpaid status
	- pass the filtered list to `printRecords(..)` to print the unpaid reminders

**Instructions (Part 2)**

Now that you've completed Part 1, refactor to use **only** `=>` arrow functions.

For `printRecords(..)`, `paidStudentsToEnroll()`, and `remindUnpaid(..)`, assign these arrow functions to variables of such names, so that the execution still works.

As the appeal of `=>` arrow functions is their conciseness, wherever possible try to use only expression bodies (`x => x.id`) instead of full function bodies (`x => { return x.id; }`).

### Function Expression Solutions:

#### Using *Functions*

```javaScript
function getStudentFromId(studentId) {
	return studentRecords.find(function matchId(record){
		return (record.id == studentId);
	});
}

function printRecords(recordIds) {
	var records = recordIds.map(getStudentFromId);

	records.sort(function sortByNameAsc(record1,record2){
		if (record1.name < record2.name) return -1;
		else if (record1.name > record2.name) return 1;
		else return 0;
	});

	records.forEach(function printRecord(record){
		console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
	});
}

function paidStudentsToEnroll() {
	var recordsToEnroll = studentRecords.filter(function needToEnroll(record){
		return (record.paid && !currentEnrollment.includes(record.id));
	});

	var idsToEnroll = recordsToEnroll.map(function getStudentId(record){
		return record.id;
	});

	return [ ...currentEnrollment, ...idsToEnroll ];
}

function remindUnpaid(recordIds) {
	var unpaidIds = recordIds.filter(function notYetPaid(studentId){
		var record = getStudentFromId(studentId);
		return !record.paid;
	});

	printRecords(unpaidIds);
}


// ********************************

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
```

#### Using *Arrow Functions*

```javaScript
var getStudentFromId = studentId => studentRecords.find(record => record.id == studentId);

var printRecords = recordIds =>
	recordIds.map(getStudentFromId)
		.sort(
			(record1,record2) => record1.name < record2.name ? -1 : record1.name > record2.name ? 1 : 0
		)
		.forEach(record =>
			console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`)
		);

var paidStudentsToEnroll = () =>
	[ ...currentEnrollment,
		...(
			studentRecords.filter(record => (record.paid && !currentEnrollment.includes(record.id)))
			.map(record => record.id)
		)
	];

var remindUnpaid = recordIds =>
	printRecords(
		recordIds.filter(studentId => !getStudentFromId(studentId).paid)
	);


// ********************************

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
```

# GSG Challenges🔥:


### QUESTION #1

Create a function called `arrowHOF` that takes an arrow function as input and
returns a new arrow function that enhances the behavior of the input function. 

The enhanced function should accept additional arguments and execute the input
function multiple times based on these arguments.


```javascript

const exampleNormalFunc1 = (a, b, c) => {
  return a * (b + c);
}

const exampleNormalFunc2 = (x, y) => {
  return x * y;
}

const exampleNormalFunc3 = (string) => {
  return string + " " + string + " " + string + "!";
}


const arrowHOF = (normalFunc) => {
  // write your code here;
}

const hofNormalFunc1 = arrowHOF(exampleNormalFunc1);
const hofNormalFunc2 = arrowHOF(exampleNormalFunc2);
const hofNormalFunc3 = arrowHOF(exampleNormalFunc3);

console.log(hofNormalFunc1(3, 4, 5)(2)); // logs 60 twice
console.log(hofNormalFunc2(20, 35))(4); // logs 700 four times
console.log(hofNormalFunc3("Meow")()); // logs "Meow Meow Meow!" once

```

**My Solution:**

```javascript
 
```
-------------------------------------------------------------------

### QUESTION #2

Build a function called `preserveThis` that takes a function as input and
returns a new arrow function that behaves the same way as the input function but
preserves the original this context when used as a method of an object.

```javascript

// Example object
const obj = {
  name: 'John',
  greet: function (greeting) {
    console.log(`${greeting}, ${this.name}!`);
  }
};

const preserveThis = (func) => {
  // write your code here;
  return func;
}

// Wrap the greet function using preserveThis
const preservedGreet = preserveThis(obj.greet);

// Call the wrapped function as a method of the object
preservedGreet('Hello'); // Output: "Hello, John!"

```

**My Solution:**

```javascript
 
```
-------------------------------------------------------------------

### QUESTION #3

Consider the 2 following examples and distinguish the different output in each
one with them with a reasoning.

**Example 1:**

```javascript
function outer1() {
  var x = 10;

  var inner1 = function() {
    console.log(x);
  };

  inner1();
}

outer1(); // Output: 10
```

> **Reasoning for example 1's output:**

**My Solution:**

The output is 10. The reason is that the function inner1 is defined within the scope of the outer1 function. Since inner1 is a closure, it retains access to the variables in its surrounding scope, even after outer1 has finished executing. When inner1() is called, it logs the value of x, which is 10, because it has access to the x variable in its lexical scope.


-------------------------------------------------------------------

**Example 2:**

```javascript
function outer2() {
  var x = 10;

  var inner2 = function() {
    var x = 20;
    console.log(x);
  };

  inner2();
}

outer2(); // Output: 20
```

> **Reasoning for example 2's output:**

**My Solution:**

The reason is that the inner2 function creates its own local variable x with a value of 20 within its scope using var x = 20. This local variable x is separate from the x variable defined in the outer scope of outer2(). When inner2() is called, it logs the value of its own local x, which is 20. This demonstrates the concept of variable shadowing, where a local variable with the same name as an outer variable effectively hides the outer variable within the inner scope.












