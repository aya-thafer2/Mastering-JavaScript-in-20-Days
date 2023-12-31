# Day 8 🤩


## Closure 
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

 #### 💡**NOTE:**
 * When our functions get called, we create a live store of data (local memory/variable environment/state) for that function’s execution context.
 * When the function finishes executing, its local memory is deleted (except the returned value)
 * But what if our functions could hold on to live data between executions?
 * This would let our function definitions have an associated cache/persistent
memory
 * But it all starts with us returning a function from another function


```javaScript
function createFunction() {
	 function multiplyBy2 (num){
		  return num*2;
	 }
	 return multiplyBy2;
}
const generatedFunc = createFunction();
const result = generatedFunc(3); // 6

```

![Screenshot (202)](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/855f6098-e0cd-45f9-baf3-8e773ad3d33a)


### The bond:
When a function is defined, it gets a bond to the surrounding Local Memory (“Variable Environment”) in which it has been defined.


![Screenshot (205)](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/ddc8080e-4e5b-4428-a27e-4fbefbd0c07a)

### What can we call this ‘backpack’?
- Closed over ‘Variable Environment’ (**C.O.V.E.**)
- Persistent Lexical Scope Referenced Data (**P.L.S.R.D.**)
- ‘**Backpack**’
- **‘Closure**’
The ‘**backpack**’ (or ‘**closure**’) of live data is attached `incrementCounter` (then to `myNewFunction`) through a hidden property known as `[[scope]]` which persists when the inner function is returned out.


### Individual backpacks
```javaScript
function outer (){
 let counter = 0;
 function incrementCounter (){
 counter ++;
 }
 return incrementCounter;
}
const myNewFunction = outer();
myNewFunction();
myNewFunction();
const anotherFunction = outer();
anotherFunction();
anotherFunction();
```

If we run '`outer`' again and store the returned '`incrementCounter`' function definition in '`anotherFunction`', this new `incrementCounter` function was created in a new execution context and therefore has a brand new independent backpack.


![Screenshot (211)](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/92a5a7f2-edd6-49e0-9888-2eb78cfdccb1)



#### 💡 **NOTE:**
* The inner functions' data will be brought wherever the function goes.
* Closure gives our functions persistent memories and entirely new toolkit for writing professional code.


### Practical Applications:  

1. **Helper functions:** Everyday professional helper functions like ‘once’ and ‘memoize’.
2. **Iterators and generators:** Which use lexical scoping and closure to achieve the
most contemporary patterns for handling data in JavaScript.
3. **Module pattern:** Preserve state for the life of an application without polluting the
global namespace.
4. **Asynchronous JavaScript:** Callbacks and Promises rely on closure to persist state
in an asynchronous environment.

## Asynchronous JavaScript & the event loop

### Promises, Async & the Event Loop:
- ***Promises*** - the most signficant ES6 feature.
- ***Asynchronicity*** - the feature that makes dynamic web applications possible.
- ***The event loop*** - JavaScript’s triage.
- ***Microtask queue, Callback queue and Web Browser features (APIs)***.


### Asynchronous JavaScript:
**Asynchronicity is the backbone of modern web development in JavaScript yet...**
JavaScript is:
- ***Single threaded*** (one command runs at a time).
- ***Synchronously executed*** (each line is run in order the code appears).



### **JavaScript is not enough We need new pieces (some of which aren’t JavaScript at all):**
In JavaScript we get a bunch of facade functions, **they are functions that look like they're JavaScript but are actually fronts, facades, for web browser features**. We get labels for each of these features:

| JS Labels | Web Browser Features | 
| ----------- | ----------- | 
| `console` | Console | 
| `xhr/fetch` | Network requests | 
| `document` | HTML DOM | 
| `setTimeout` | Timer | 

***That means a big part of what we're doing in JavaScript isn't even JavaScript at all!***



### Our core JavaScript engine has 3 main parts: 

- Thread of execution.
- Memory/variable environment.
- Call stack.

### We need to add some new components: 

- Browser APIs/Node background APIs.
- Promises.
- Event loop, Callback/Task queue and micro task queue.



# GSG Challenges🔥:
## Question 1:

Write a closure named createCounter that takes an initial value start and returns a function. 
The returned function, when invoked, should increment the counter by 1 and return the updated value.
```javaScript
function createCounter(start) {
  let counter = start;

  function increment() {
    counter++;
    return counter;
  }

  return increment;
}

const counter1 = createCounter(0);
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2

const counter2 = createCounter(5);
console.log(counter2()); // Output: 6
console.log(counter2()); // Output: 7
```
-------------------------------------------------------------------
## Question 2:

Write a closure named calculateAverage that takes an array of numbers, nums, and returns a function. 
The returned function, when invoked, should calculate and return the average of the numbers in the array.
```javaScript
function calculateAverage (nums) {
    let sum=0;
    
  function avg() {
    for(let n of nums){
        sum += n;    
    }
    return sum/nums.length;
  }

  return avg;
}

const avgFunc = calculateAverage([5, 10, 15, 20]);
console.log(avgFunc()); // Output: 12.5

const anotherAvgFunc = calculateAverage([2, 4, 6]);
console.log(anotherAvgFunc()); // Output: 4
```
-------------------------------------------------------------------
## Question 3: 

Write a closure named powerOf that takes a base number base and returns a function. 
The returned function, when invoked with an exponent exp, should calculate and return the result of base raised to the power of exp.
```javaScript
function powerOf(base) {

  function calculatePowerOf(exp) {
    return  Math.pow(base, exp);
  }

  return calculatePowerOf;
}

const powerOfTwo = powerOf(2);
console.log(powerOfTwo(3)); // Output: 8 (2^3)
console.log(powerOfTwo(4)); // Output: 16 (2^4)

const powerOfThree = powerOf(3);
console.log(powerOfThree(2)); // Output: 9 (3^2)
console.log(powerOfThree(3)); // Output: 27 (3^3)
```
-------------------------------------------------------------------
## Question 4: 

Write a closure named compose that takes multiple functions as arguments and returns a new function. 
The returned function should apply the provided functions in reverse order, passing the result of each function as an argument to the next function.

```javaScript
function compose(...functions) {
  return function(input) {
    return functions.reduceRight((result, func) => func(result), input);
  };
}


function add5(x) {
  return x + 5;
}

function double(x) {
  return x * 2;
}

function subtract3(x) {
  return x - 3;
}

const composedFunction = compose(subtract3, double, add5);

console.log(composedFunction(10)); // Output: 27 ((10 + 5) * 2 - 3)

```

