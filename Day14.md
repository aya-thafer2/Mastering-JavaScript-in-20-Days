# Day 14 🤩

## Advanced Scope 


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


## Function Scoping 

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









