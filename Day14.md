# Day 14 🤩


## Advanced Scope 

### lexical scope 

The idea that a compiler is figuring out all the scopes ahead of time befor being executed. 




### lexical scope VS. dynamic scope 

* The scope of ***dynamic scope*** is determined based upon a conditions at runtime (where this function has been called).

* while ***lexical scope*** is determined at auther time.


![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/17982f57-73ac-46e1-b47a-1cd63d59c0ab)




### Function Scoping 

> ### 📌 Principle of least privilege / Principle of least exposure:
> You  should default to keep everything private and only exposing the minimal necessary.


### IIFE (Immediately Invoked Function Expression)

```javaScript
function f (){
    console.log("hello")
}
f()

// we can do
// also it may do not have name
(function  ff (){    // not a functon declertion
    console.log("hello")
})()
```
![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/7b653f0f-5949-4669-a4c6-a1cc49f291eb)
![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/179bf94c-b4d3-4651-8650-2423f73a9445)


### Block Scoping 


> ### 💡Note:
> Block(curly braces) are not scope until they have let or const inside them.

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/b7688729-0bcb-4548-98e6-522e41833e0f)



### Hoisting
- **Hoisting** is the process of moving variable and function declarations to the top of their scope.
- Variable declarations are hoisted but not their assignments. They are accessible but have an initial value of `undefined`.
- Function declarations are also hoisted, allowing them to be called before they are defined.
- Hoisting does not apply to function expressions, arrow functions, or variables declared with `let` or `const`.

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/8b2960e4-2cb3-4031-9bfb-de7ca668394b)

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/8bec16ca-6f70-4d53-8f4a-4396ecc1d124)

### let & hoisting 
We can’t say that let doesn't have hoisting, instead it’s kind of uninitialized state.

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/d8da258d-811a-429d-9139-532db3791625)

### Exercise:

In this exercise, you will refactor some code that manages student enrollment records for a workshop, to take advantage of function hoisting.

**Instructions**

Refactor all inline function expressions to be function declarations. Place function declarations at the bottom (that is, below any executable code) of their respective scopes.

Also, pull function declarations to outer scopes if they don't need to be nested.

```javaScript
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


// ********************************

function getStudentFromId(studentId) {
	return studentRecords.find(matchId);

	// *************************

	function matchId(record) {
		return (record.id == studentId);
	}
}

function printRecords(recordIds) {
	var records = recordIds.map(getStudentFromId);

	records.sort(sortByNameAsc);

	records.forEach(printRecord);
}

function sortByNameAsc(record1,record2){
	if (record1.name < record2.name) return -1;
	else if (record1.name > record2.name) return 1;
	else return 0;
}

function printRecord(record) {
	console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
}

function paidStudentsToEnroll() {
	var recordsToEnroll = studentRecords.filter(needToEnroll);

	var idsToEnroll = recordsToEnroll.map(getStudentId);

	return [ ...currentEnrollment, ...idsToEnroll ];
}

function needToEnroll(record) {
	return (record.paid && !currentEnrollment.includes(record.id));
}

function getStudentId(record) {
	return record.id;
}

function remindUnpaid(recordIds) {
	var unpaidIds = recordIds.filter(notYetPaid);

	printRecords(unpaidIds);
}

function notYetPaid(studentId) {
	var record = getStudentFromId(studentId);
	return !record.paid;
}
```


# GSG Challenges🔥:


### QUESTION #1

Given the following code snippet and **explain what's happening**.

```javascript
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log("value of [i] is: ", i);
    }, 100);
}
```

The current output is: "value of [i] is: 5" five times.

The output should be: 

"value of [i] is: ", 0 "value of [i] is: ", 1 "value of [i] is: ", 2 "value of
[i] is: ", 3 "value of [i] is: ", 4

Without changing anything in the for loop's code itself, provide a solution to
fix it.

**My Solution:**

The setTimeout function runs asynchronously, and by the time the callback function inside setTimeout is executed, the loop has already completed, and the value of i has become 5. This is why you're seeing "value of [i] is: 5" five times.

To achieve the desired output, you can use an Immediately Invoked Function Expression (IIFE) to capture the current value of i for each iteration of the loop. Here's how you can fix the code:

```javascript
 for (var i = 0; i < 5; i++) {
    (function(index) {
        setTimeout(function() {
            console.log("value of [i] is: ", index);
        }, 100);
    })(i);
}
```

In this fixed code, the IIFE creates a new scope for each iteration of the loop, capturing the current value of i and passing it as the index parameter. This ensures that the correct value of i is used in each iteration of the setTimeout callback. 

-------------------------------------------------------------------

### QUESTION #2

Given the following code snippet and **explain what's happening**. 

```javascript

for (let i = 0; i < 5; i++) {
   let array = [];
   array.push(i);
   console.log("Current array is: ", array)
}

```

The current output is: 

"Current array is: [ 0 ]" "Current array is: [ 1 ]" "Current array is: [ 2 ]"
"Current array is: [ 3 ]" "Current array is: [ 4 ]".

The output should be: "Current array is: [0, 1, 2, 3, 4]".

Provide a solution to fix it. 


**My Solution:**

In the current code, you are creating a new array array in each iteration of the loop, pushing the current value of i into it, and then logging the array. This results in separate arrays for each iteration, each containing only one element. To achieve the desired output of having all elements in a single array, you need to declare the array variable outside of the loop scope. Here's how you can fix the code:

```javascript
 let array = [];

for (let i = 0; i < 5; i++) {
    array.push(i);
}

console.log("Current array is: ", array);
```
By declaring the array variable outside of the loop, you ensure that all values of i are pushed into the same array.

-------------------------------------------------------------------

### QUESTION #3

Given the following code snippet and **explain what's happening**. 

```javascript

let functions = [];

for (var i = 0; i < 5; i++) {
  functions.push(() => {
    console.log("Current value of i is:", i);
  });
}

functions.forEach((func) => func());

```

The current output is: 

"Current value of i is: 5" "Current value of i is: 5" "Current value of i is: 5"
"Current value of i is: 5" "Current value of i is: 5"

The output should be: 

"Current value of i is: 0" "Current value of i is: 1" "Current value of i is: 2"
"Current value of i is: 3" "Current value of i is: 4"

Provide a solution to fix it. 


**My Solution:**

The arrow function inside the loop captures the variable i by reference, not by value. When the functions stored in the functions array are executed, they all reference the final value of i after the loop has completed, which is 5.

To fix this, you can use the let keyword to declare i inside the loop. This creates a new block-scoped variable i for each iteration of the loop, ensuring that each function captures the correct value of i. Here's how you can fix the code:

```javascript
 let functions = [];

for (let i = 0; i < 5; i++) {
  functions.push(() => {
    console.log("Current value of i is:", i);
  });
}

functions.forEach((func) => func());
```

With this change, each function inside the functions array will capture its own block-scoped value of i.













