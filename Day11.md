# [**Deep JavaScript Foundations, v3**](https://frontendmasters.com/courses/deep-javascript-v3/)

# Day 11 🤩


## Introduction 

📌 *Whenever there's a divergence between what your brain thinks is happening, and what the computer does, that's where bugs enter the code.*

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


📌 Everything inside JS is ***NOT*** an object >>> Everything ***can behave as*** an object.


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

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/cfce8e43-d2f6-47af-8faf-47fe93c2e342)



📌  **undefined** vs. **undeclared** vs. **uninitialized** (aka TDZ error):
* `undefined`: We can have a variable that's been initialized that is undefined.
* `undeclared`: We can have a variable that was never even created.
* `uninitialized`: We can have a variable that's never been initialized.

#### 💡 **NOTES**: 
> 1. `typeof` : **always return string**.
> 2. function & arrays are not types of the top level they are subtypes of object,
 but when using `typeof array` = *object* while `typeof function` = *function*.
> 3. `typeof null` = *objec*t >>> it is a *bug* in JS.


![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/10221cd2-1fde-436b-a834-d22b3ea82950)


### NaN & isNaN:  
📌 NaN is Special Value and it is the only value that is ***not equal*** to itself.

📌 *Type of Nan*: NaN type is number (***invalid number***), becuase it cmoes from numeric operations


### is Nan method:

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/de47f3d2-6cdf-4185-b03d-87298947f10d)


the isNaN utility coerces values to numbers before it checks for them to be NaN. So, it's gonna coerce the string `my son's age` to a number and guess what number it's gonna coerce it to? The NaN value, so of course it's gonna back true.


