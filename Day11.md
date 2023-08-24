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

With ES6, we got a better utility, the `Number.isNan` utility. And that `Number.isNan` tells us defiantly for sure it's the NaN value or it's not. In other words ***it doesn't do any coercion*** for us.


### Negative Zero:


![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/e38c8178-4a82-4b9f-8b2c-1ce087665b1c)

📌 `Object.is( , )` : it’s built-in checker, better way for checking equality (better than ===).

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/30133e50-283f-41b3-b4f7-567a868f5f21)


We might use -0 for directons in some applecaions which the sign means direction.

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/155b7443-5484-490c-9e2d-4a4b08d1c33d)



#### 💡 **NOTE**: 
>  === failed in Nan & -0


### Type Check Excersie
```javaScript
// TODO: define polyfill for `Object.is(..)`

if (!Object.is || true){   // to disaple the built in method & build my own
    Object.is = function ObjectIs(x,y){
        const xNegZero = isItNegZero(x)
        const yNegZero = isItNegZero(y)

        if (yNegZero || xNegZero ){
            return yNegZero && xNegZero
        }else if (isItNane(x) && isItNane(y)){
            return true
        }else {
            return x===y
        }

        function isItNegZero(v){
            return v===0 && (1/v)=== -Infinity
        }

        function isItNane(v){
            return v !==v
        }
    }
} 

// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);
```

### Fundamental Objects
> aka: Built-In Objects.
> 
> aka: Native Functions.

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/55a7346a-127e-4de8-9365-8c23295226ee)


![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/b75233bf-b584-4923-bb6e-5b6296f5c6d1)


## Coercion 
aka: ***type conversion***.

### Abstract Operations: **ToPrimitive**

#### ToString: `.toString()`

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/57e87169-02a3-48b0-9b45-b04ac6d1bbe4)

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/663936e1-7e03-4124-9395-921a4d8722d0)

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/53da359e-cff4-41fa-9f11-8b53224fd7c6)

###  ToNumber: `Number(x)` 

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/2d403684-5a89-4f85-a97b-0c2763897fce)

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/4488180c-4443-4ae8-abff-0326eda6bcba)


![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/ad14513d-111b-4a96-b022-a7591a67cac2)

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/60704801-1ff6-4cd0-a856-293a66457194)

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/442a3ae5-31df-4517-b4e9-236c3b990ded)



#### Why true & false shouldn’t convert to 1&0 

```javaScript
3 > 2 > 1
(true) > 1
1 > 1 // false !!!!
```

### ToBoolean

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/d91624d4-ad76-4fba-9230-513687929eab)

### Cases of coercion: 

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/17213722-24fd-4933-add1-e454dd3e4765)
![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/c0fb2a56-7464-4785-bdb7-ca2e9c5fd611)
![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/196a9e16-08f6-4a46-a897-da9c078f4597)
![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/52d93af2-9c23-48ce-ae2b-3f3d071f40f3)
![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/93fbb8c2-482f-40ad-87d3-43727e566845)
![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/10595f00-3e95-471d-b102-a5df42b85d5a)

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/b2e0773f-9a2b-4108-a1be-8106cd800d19)
![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/de9aa565-75d4-4942-bb7d-f6febb791117)
![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/331a095c-c22f-453d-9271-678565d6e88d)
![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/679df739-12f9-489c-901a-da526da837f4)

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/d5095b2e-8f60-44d7-87e7-a4bc22f74290)
![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/5173c329-0884-4b6b-b033-88ce7edd417f)
![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/f98710f4-35f2-4c2c-99aa-c78780127188)

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/946068e6-18aa-4f08-8748-fe602ca6d86d)


### Boxing
![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/ab07c0e4-3d44-4abb-8bc0-07f631f67c2b)

### Conversion Corner Cases
![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/499ad77e-d128-4015-a797-99bea1c67e74)
![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/bef92dac-d976-4eff-99ce-b9f0babbe701)
![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/65aa3b55-1ad4-4855-912c-ede7167623dc)

# GSG Challenges🔥:

## Question 1:

Write a function called `convertStringToNumber` that converts a string to a
number using the unary plus operator. 

If the input is not a string, return an object of the input's value and type.

```javascript
function convertStringToNumber(input) {
  //write your own code here
}
```
 
 **My Solution:**

```javascript
function convertStringToNumber(input) {
  if(typeof(input)!=='string'){
      return {
          value : input,
          type : typeof(input)
      };
  }
  else return +input;
}
```
-------------------------------------------------------------------

## Question 2:

Write a function called `checkNaN` that takes a single argument and returns
`true` if the argument is `NaN` and `false` otherwise. 

```javascript
const checkNaN = (value) => {
  //write your own code here
}
```

 **My Solution:**

```javascript
const checkNaN = (value) => {
  return Number.isNaN(value);
}
```
-------------------------------------------------------------------

## Question 3: 

Write a function called `isEmptyValue` that checks if a given input is an empty value (undefined,
null, or empty string). 

```javascript
function isEmptyValue(value) {
  //write your own code here
}
```

 **My Solution:**

```javascript
function isEmptyValue(value) {
  return value === undefined || value === null || value === '';
}
```

-------------------------------------------------------------------

## Question 4: 

Write a function called `compareObjects` that takes 2 arguments of type
`"object"` and compares them. If both arguments are equal, return `true`. If
not, return `false`.

If either argument is not of type `"object"`, the function should return an
array of the arguments. 

```javascript
function compareObjects(input1, input2) {
  //write your own code here
}
```

 **My Solution:**

```javascript

```

-------------------------------------------------------------------

## Question 5: 

Write a function called `complexCoercion` that takes a single argument and
checks if its type is primitive, and if so returns a coerced value according to
the rules below.

coercion rules: 
- if input is primive and:
  - if input is a number, convert to string and then return a boolean. 
  - if input is a string, return a boolean.
  - if input is `null` or `undefined`, return `false`.

If input is not a primitive type, return the argument.

```javascript
const complexCoercion = (input) => {
  //write your own code here
}
```

 **My Solution:**

```javascript

```


