# [**JavaScript: The Hard Parts, v2**](https://frontendmasters.com/courses/javascript-hard-parts-v2/)

# Day 7 🤩

## JavaScript Principles  
When JavaScript code runs, it:

1. Goes through the code line-by-line and runs/ ’executes’ each line - known as the **thread of execution**
2. Saves ‘data’ like strings and arrays so we can use that data later - in its memory. We can even save code (‘functions’)

### Execution context
Created to run the code of a function - has 2 parts (we’ve already seen them!):
- Thread of execution
- Memory

![Screenshot (200)](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/2a967d68-e392-469f-8d2f-83528e6735c2)


### Call stack: 

It is a traditional way of storing information in a computer.
JavaScript keeps track of what function is currently running (where’s the thread of execution).

* Run a function - add to call stack.
* Finish running the function - JS removes it from call stack.
* Whatever is top of the call stack - that’s the function we’re   currently running.

* We create a little mini program, a little sub-program, an execution context into which we go and compartmentalize any data we're storing while we're inside that function. *When we exit that function*, **all is deleted, besides whatever we return out**, and then run another function do the same.
* We keep track of the functions we're running and where our thread of execution is using our call stack:

![Screenshot (201)](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/1561e813-fda5-4286-931b-9a34e7dd1d31)


## Functions & Callbacks 

We could generalize our function - So we pass in our specific instruction only when we run copyArrayAndManipulate!

```javaScript
function copyArrayAndManipulate(array, instructions) {
 const output = [];
 for (let i = 0; i < array.length; i++) {
		 output.push(instructions(array[i]));
	}
 return output;
}
function multiplyBy2(input) { return input * 2; }
const result = copyArrayAndManipulate([1, 2,

/* If I want to add 2 or divide or subtract 3 ot any fanctionality I just write
the small faunction for it */
```







