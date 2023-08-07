# Day 2 🤩

   
##  Values & Data Types 
  ### Values:
Are chunks of information we want to work with.

#### JS has 2 types of data:

 - **Primitive data types:**
  1. String.
  2. Number.
  3. Boolean.
  4. Undefined - There was supposed to be something but accidentally there is nothing.
  5. Null - I meant to be nothing here.
    
- **Objects**.

 ## Values & Data Types Exercise

We used `typeof` to determine the type of the value.

### Examples:

```javaScript
typeof(false)  // boolean
typeof("true")   // string
typeof("some string".length) // number
typeof(undefined)   // undefined
typeof(null)   // object
```

 ## Strings
### String:
Is a sequence of characters are in a specific order, each gets a number aka an "index", starting at 0.

#### Examples:
```javaScript
"ALOHA"[0];      // “A”
"ALOHA".length  // 5

"ALOHA".indexOf("L");   //1 
// What's the index of the first accourance of specific character
// if not exist will return -1

"ALOHA".includes("HA");  // true

"ALOHA".startsWith("AL"); // true
// Does this string start with some other string?

"ALOHA".indexOf("HA"); // 3
// At what index does this substring begin?

"ALOHA" + "!" // "ALOHA!";
 // Connecting strings together

"ALOHA".toLowerCase() // "aloha";
```

   
### Working with Strings Exercise:
```javaScript
// 1. Add your last name in the players listing
document.getElementById("p1-name").append(" Thafer");
//OR
document.getElementById("p1-name").textConten="Aya"+" "+"Thafer";

// 2. Retrieve the first "T" in the page title
document.title.indexOf("T");

// 3. Answer whether the page title contains the string "JavaScript"
document.title.includes("JavaScript");

// 4. Capitalize the heading "Tic Tac Toe"
document.querySelector("header h1").style.textTransform ="uppercase" ; 
//OR
document.querySelector("header h1").textContent= document.querySelector("header h1").textContent.toUpperCase();
```


## Operators 
1. **`typeof`** - which we've used earlier.
2. Arithmetic operators:
    * (`+`) Add.
    * (`-`) Subtract.
    * (`*`) Multiply.
    * (`/`) Divide.
   
💡 **NOTE**: **Plus sign (`+`)** has different uses:
   * Adding numbers - *Arithmatic operator*.
   * Concatenate strings - *at least on side is string*.


3. Comparison operators:
    * (`>`) Greater than.
    * (`<`) Less than.
    * (`>=`) Greater than or equal to.
    * (`<=`) Less than or equal to.

4. Equality operators:

| Strict | Loosey-goosey | Meaning |
| ----------- | ----------- | ----------- |
| 1 == 1  | 1 === 1 | Equals |
| !== | != | Does not equal |

## Operators Exercise:

```javaScript
// 1. The total number of siblings of your parents
3 + 5

// 2. The average number of hours you slept this week
(8*7)/7

// 3. The number of dogs you'd pet in a week if you pet 1 dog per hour while awake
1 * (24-8) * 7
```
#### Strict VS Loosy-goosy:
| Strict | output | Loosey-goosey | output |
| ----------- | ----------- | ----------- | ----------- | 
| 1 == 1  | ✅|  1 === 1 |  ✅|
| "1" === "1" | ✅ | "1" == "1"  | ✅|    
|  1 === "1" |❌ | 1 == "1" | ✅ |

5. Logical operators and even more...

## Expressions
An expression evaluates (aka resolves) to a value.

**Examples of expressions:**
```javaScript
4 / 2 * 10

"Frontend" + "Masters"

5 > 4 !== 3 > 4
```

## Variables
Variables let us **remember** values.
```javaScript
let x; //Declare a variable called x
x= "Aya"; //Assign the variable with a strig value = "Aya"
//OR
let x= "Aya"; //Declaring & Assigning at once
```
There are different keywords to declare variables:
* `var` - we can change the variable value.
* `let` - we can change the variable value.
* `const` - we can't change the variable value.

### Variable names:
Variables in JS can be named using:
* Camel Case : ayaThafer.
* Sanke Case : aya_thafer.

### What are variables?
Variables **point** to values.


```javaScript
let x = "Aya";
let y = x;
x = "Aya Thafer";
console.log(y); // "Aya"
 //The value of y won't change
```

### Statements vs. Expressions

An **expression** "asks" JS for a value.

```javaScript
myAssignedVariable  // what is the value of my variable
6 + 4               // what is the value of this summation
document.getElementById("board")
```

A **statement** "tells" JS to do something, actions we want JS to do it

```javaScript
// e.g: declare/assign a variable
let ten = 6 + 4;
myDeclaredVariable = "new value";
let board = document.getElementById("board");
```
```javaScript
function add(x, y) {
    return x + y;
}

let biggest;
if (5 > 4) {
    biggest = 5;
} else {
    biggest = 4;
}
for (let character of "string") {
    console.log(character);
}
```
 

## FreeCodeCamp challenges🔥:



