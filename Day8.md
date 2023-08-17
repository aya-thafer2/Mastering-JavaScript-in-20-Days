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

```javaScript
function printHello() { console.log("Hello"); }

function blockFor1Sec() {
    setTimeout(()=>{console.log("1 sec");},1000)
    //blocks in the JavaScript thread for 1 sec
}

setTimeout(printHello, 0);
blockFor1Sec();
console.log("Me first!");

/* 
	Me first!
	Hello
	1 sec
*/
```


> ### 💡Note:
> setTimeOut doesn't do anything in JS it consequences in the web browser.

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



