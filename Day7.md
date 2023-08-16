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
* Finish running the function - JS *removes it* from call stack.
* Whatever is top of the call stack - that’s the function we’re   currently running.

  ***Here is how it goes:***
1. Think of all of our code inside a function with the label `global`, and as soon as we turn on JavaScript, start running the code, run that `global function` run the overall code.
2. So that's always as soon as you start running JavaScript, `global` is added on the bottom. And that's ***always there***.
3. So when we start running `multiplyBy2()` we add it on top, *when we finish running it, we remove it*, and It goes back to `global()`.

![Screenshot (201)](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/1561e813-fda5-4286-931b-9a34e7dd1d31)

#### Sammary:
1. We create a little mini program, a little sub-program, an execution context into which we go and compartmentalize any data we're storing while we're inside that function.
2. *When we exit that function*, **all is deleted, besides whatever we return out**, and then run another function do the same.
3. We keep track of the functions we're running and where our thread of execution is using our call stack.


#### 💡**NOTE:**
### **The 3 core components of JavaScript:**
1. **Thread of execution** - *part of Execution Context*.
2. **Memory** - *part of Execution Context*.
3. **Call stack**.


## Functions & Callbacks 

We could generalize our function - So we pass in our specific instruction only when we run `copyArrayAndManipulate`!

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

## Callbacks & Higher order functions

### First class objects

* ***Functions* in javascript `=` *first class objects***.
* They can co-exist with and can be treated like any other javascript object:
    1. Assigned to variables and properties of other objects.
    2. Passed as arguments into functions.
    3. Returned as values from functions.

### Higher Order Function:
The outer function that takes in a function or return one is our higher-order function. Which is  `copyArrayAndManipulate` in the example below.

### Callback Function:
The function we insert is our callback function. Which is  `multiplyBy2` in the example below.

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

```


## FreeCodeCamp challenges🔥:
1. [Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem)

My solution:
```javaScript
const squareList = arr => {
  // Only change code below this line
  return arr.filter(ele => ele>0 && ele%1==0).map(posEle => posEle*posEle);
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
```


2. [Apply Functional Programming to Convert Strings to URL Slugs](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs)

My solution:
```javaScript
// Only change code below this line
function urlSlug(title) {
return title.toLowerCase().split(" ").filter(ele => ele!=="").join("-");

}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
```



## GSG Challenges🔥

## Question 1: Functions and Callbacks

Implement a JavaScript function called mapAsync that takes an array and a callback function. 
The function should map each element of the array to a new value using the callback function 
asynchronously. 

The final result should be returned as a Promise.

My solution:

```javaScript
async function mapAsync(array, callback) {
  const results = [];
  
  for (let i = 0; i < array.length; i++) {
    const result = await callback(array[i], i);
    results.push(result);
  }

  return results;
}
```
-------------------------------------------------------------------
## Question 2: Call Stack and Recursion

Write a JavaScript function called sumRange that calculates the sum of all integers in a given range. 
The function should use recursion to handle the calculation and demonstrate understanding of the call stack.

My solution:
```javaScript
function sumRange(x,y){
    if(y<=x) return y;
    return y+sumRange(x,y-1);
}

console.log(sumRange(10,15));
```


