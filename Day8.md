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









