# Day 4 🤩

## Functions

* `Values` ***are*** things.
* `Variables` ***point to*** things.
* `Functions` ***do*** things.

#### 💡**NOTE:**
> * `typeof NaN` = "number".
> * JS doesn't care too much about the passed arguments :
```javaScript
function add(x,y,z){
    return x+y+z;
}
add(1,2); //NaN
/*
cuz we didn't pass the 3rd argument >>> JS will take it as undefined value 
1+2+undefined= NaN >>> NaN is a number
*/
```
```javaScript
function getRandomNumber(){
    return Math.random();
}
getRandomNumber("sth"); //0.56259486521546513
/*
JS will ignore that we passed an argument even when it doesn't have parameters
*/
```

### Function Return Values

The default return value of JS functions is `undefined`, so if a function doesn't have a `return` the return value of it will be `undefined`.

### Arrow Functions
Since arrow functions are expressions, we can assign  them to a variable:

```javaScript
const add = (x,y) => x + y;
```
is **equivelant** to

```javaScript
function add (x,y){
  return  x + y; //RETURN
}
```

#### 💡**NOTE:**
> We use arrow functions when we want just a function that returns a value and doesn't do anything else - it has only one line statement that returns a value.


* For **one-parameter** functions, *parentheses* are **optional**:
```javaScript
x => x * x;
(x) => x * x;
```
* For **multiple parameters**, *parentheses* are **required**:
```javaScript
(fName , lName) => fName + " " + lName;
```

* If we need to **do more than just return a value**, we can use **curly braces** for "normal" function body. 
In this case, we still **need a `return`**.
```javaScript
const addAndLog(x, y) => {
    let sum = x + y;
    console.log('This is sum ',sum);
    return sum; //RETURN
}
```

### Exercises:  
```javaScript
// 1. multiply: given 2 numbers, return their product
const mult = (a,b)=>a*b

// 2. yell: given a lowercase string, log it in all caps to the console
const yell = (str)=> str.toUpperCase()

// 3. longerThan: given 2 arrays, return whether the first is longer than
//    the second
const longerThan = (a,b)=> a.length >= b.length
```

  
###  setAttribute() & removeAttribute() methods 
`setAttribute` : Sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.
```javaScript
setAttribute(name, value)
```

 
` removeAttribute`: removes the attribute with the specified name from the element.
```javaScript
removeAttribute(attrName)
```

### Scope
In JS it doesn't matter ***What*** variables we declare, it also matters ***Where*** we declare them.
**Scope** determines where variables are "in play".

Within each scope, you can access variables declared in a wider scope (e.g. global scope) But not those declared in a narrower scope (e.g. function scope) 

### var vs. let:
* `var`: 
If we declared the same variable in the block scope, the old variable will point to the new value - JS **will not declare** a new variable.
* `let`:
If we declared the same variable in the block scope, JS **will declare** a new variable with a new value.
```javaScript
var varVariable = "original";
let letVariable = "original";

// this is called block scope
{
    var varVariable = "changed";
    let letVariable = "changed";
}
// varVariable = "changed"
// letVariable = "original"
```

#### 💡 **NOTES:**
1. The **`Function`** object provides methods.
2. `this` keyword works differently in arrow function and normal function.
3. To set or remove any attribute for element we use `setAttribue` & `removeAttribute`.
4. The browser looks whether the disabled attribute exists or not, regardless to its value.

## Events & Handlers 

* **`.addEventListener()`** takes 2 parameters:
    1. The **name of the event** to listen to (e.g. "*click*").
    2. A **handler function** that JS calls when that event is fired on this element.

```javaScript
document.addEventListener("click", () => {
    console.log("clicked");
});
```

### Event Object

JS passes an **event object** to the handler function with information about the event. 
If we accept this as a parameter, we can use it to get details:

```javaScript
document.addEventListener("click", (event) => {
    console.log(event);
});
```


### `event.target` 
Is the element the event fired on (in this case, which element was clicked)
```javaScript
document.addEventListener("click", (event) => {
    console.log(event.target);
});
```

### Some events: 
1. `click`
2. `dblclick`
3. `mouseover`
4. `mouseout`


```javaScript
let b = document.getElementsByName("true")[0]
b.addEventListener("mouseover", () => {
    console.log("The carser is in the button")
});

b.addEventListener("mouseout", () => {
    console.log("The carser is out the button")
});
```

## Quiz Project 
The whole project is done in [Day5](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/edit/main/Day5.md).






