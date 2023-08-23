# [**Deep JavaScript Foundations, v3**](https://frontendmasters.com/courses/deep-javascript-v3/)

# Day 11 🤩


## Introduction 

>📌 *Whenever there's a divergence between what your brain thinks is happening, and what the computer does, that's where bugs enter the code.*

```javaScript
let x = 2;
++x;  // 3
// this means 
x = x +1;

let x = "2";
++x; // should be 21
//But it's 3 because JS is written like this
```

## **Types**

* Primitive Types.
* Abstract Operations. 
* Coercion. 
* Equality. 
* TypeScript, Flow, etc.


#### 💡 **Note**: 
Everything inside JS is ***NOT*** an object >>> Everything ***can behave as*** an object.


### Primitive Types:

- undefined.
- string.
- number.
- boolean.
- object.
- symbol: in ES6 used for auto private keys.
- bigInt (future): let x = 34n.

#### 💡 **NOTES**: 
* `functions` & `arrays` are a ***subtype*** of a *object type*.

* *Those types are **NOT** objects:*
    * undefined 
    * string 
    * number 
    * boolean 
    * symbol 
    * null 
    * bigint (future)

* *Those types **ARE** objects:*
    * object
    * function 
    * array


📌  In JavaScript, `variables` ***don't*** have types,`values` ***do***.

📌  **undefined** vs. **undeclared** vs. **uninitialized** (aka TDZ error):
* `undefined`: We can have a variable that's been initialized that is undefined.
* `undeclared`: We can have a variable that was never even created.
* `uninitialized`: We can have a variable that's never been initialized.

#### 💡 **NOTES**: 
> 1. `typeof` : **always return string**.
> 2. function & arrays are not types of the top level they are subtypes of object,
 but when using `typeof array` = *object* while `typeof function` = *function*.
> 3. `typeof null` = *objec*t >>> it is a *bug* in JS.





