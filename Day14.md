# Day 14 🤩


## Advanced Scope 

### lexical scope 

The idea that a compiler is figuring out all the scopes ahead of time befor being executed. 

lex → the first stage of parsing.


### lexical scope VS. dynamic scope 

* The scope of ***dynamic scope*** is determined based upon a conditions at runtime (where this function has been called).

* while ***lexical scope*** is determined at auther time.


![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/17982f57-73ac-46e1-b47a-1cd63d59c0ab)


```javaScript
const n = "Aya"

function f(){
    console.log(n);
}

function ff(){
    const n = " Hello";
    f();
}

ff();
// Aya => lexical
// Hello => dynamic
```


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
Wa can’t say that let dosn’t have hoisting, insted it’s kind of uninitioalized state

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/d8da258d-811a-429d-9139-532db3791625)













