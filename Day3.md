# Day 3 🤩

## Arrays 
**Arrays** let us keep multiple values together in a single collection.

### Examples:
```javaScript
let synonyms = ["plethora", "array", "cornucopia"];
synonyms.length; // Like strings, arrays have a length

synonyms[1];
synonyms.indexOf("cornucopia"); // And each value has an index

synonyms.includes("plethora"); // check if an array contains a certain value

// Unlike strings, we can modify arrays
synonyms[1] = "variety";
let lastItem = synonyms.pop();
synonyms.push("multitude");

let mixedArray = ["pop", 6, "squish", false, document];
// Arrays can hold any type of items, or mix and match!

"Aya" == ["Aya"];      // ✅
"Aya" === ["Aya"];     // ❌
"Aya" === ["Aya"][0];  // ✅
````

## Useful array methods:
```javaScript
["c","d","a","b"].sort(); // ["a","b,"c,"d"]
[100, 2 ,50].sort(); // [100, 2 ,50] cuz JS converts the elements into strings and then sorts them alphabetically.

["lions", "tigers", "bears oh!"].join(" & "); // "lions & tigers & bears oh!"

[1, 2, 3].concat([4, 5, 6]); // [1, 2, 3, 4, 5, 6] 
```


## Mutability
In JS certian values behave differently than certian other values that we might think are similar

```javaScript
let abcArray = ["a", "b", "c"];
abcArray[1] = "d";
abcArray;  // ['a', 'd', 'c']

let abcString = "abc";
abcString[1] = "d";
abcString; // 'abc'
```

### Mutable vs. Immutable: 
* "**Mutable**" data can be edited (e.g. **Arrays**).
* "**Immutable**" data always stays the same (e.g. **strings** & **other primitives**).
 

##  Mutable & Immutable Data Exercise

### Do these do the same thing?
```javaScript
let numbers1 = [1, 2, 3];
let result1 = numbers1.push(4); 
numbers1;  // [1, 2, 3, 4]
 
let numbers2 = [1, 2, 3];
let result2 = numbers2.concat([4]);
numbers2; // [1, 2, 3]
```

#### 💡**NOTE:**
> * Some actions "**mutate**" an array, aka(called) change the array ***in-place*** (e.g. `oldArray.push(newValue)`).
> * Other actions "**do** ***not* mutate**" the original array, but instead create a new copy (e.g. `oldArray.concat(otherArray)`).


### Variables themselves can also be (im)mutable 

```javaScript
let letVariable = "original value";
letVariable = "new value";
//letVariable = "new value";

const constVariable = "original value";
constVariable = "new Value";
//error
```


## Immutable variable with mutable value 
 What happens when we use `const` with a mutable value like an *array*?
```javaScript
const operands = [4, 6];
const sum = operands[0] + operands[1]; //  10

operands[0] = 5;
const newSum = operands[0] + operands[1]; // 11
```

#### 💡**NOTE:**
> If you have the choice, using *immutable* data & variables is usually best.


## Variables & Arrays:

```javaScript
let array1 = [1,2,3,4]
let array2= array1
array1[0]=5

array1 // [5,2,3,4]
array2 // [5,2,3,4] cuz the 2 arrays are pointing to the same value

// Even if I used const the result will be the same
```


## Objects 
* **Objects** collect multiple values together to describe more complex data.
* **Objects** let us *point at* related values using *properties* in the object.

 We can access edit and add any property using "`.`":
```javaScript
const js = {
    name: "JavaScript",
    abbreviation: "JS",
    isAwesome: true,
    officialSpec: "ECMAScript",
    birthYear: 1995,
    creator: "Brendan Eich"
};
 
js.name; //"JavaScript"
js.name.startsWith("Java"); //true
let age = 2023 - js.birthYear; // age = 27
js.learn = true; // add new property >> learn
```

We can access a property in the object by using 2 ways:
```javaScript
//1. 
js.name; //"JavaScript"

//2.
js["name"]; //"JavaScript"
```
but unlike arrays we ***Can't*** use *indexes* to get to the property:
```javaScript
js[0]; // undefined
```

##  **Object Methods** 
Properties can point to functions too.
We call function-properties "methods" on objectsCopy
```javaScript
const dog = {
    name: "Ein",
    breed: "Corgi",
    speak: function () {
        console.log("woof woof");
    }
}
dog.speak(); //"woof woof"
```
#### 💡**NOTE:**
> `this.` is a built-in object method.



## Built-in objects:
1. document:
    * `document.title();`
2. array:
    * `arr.push();`
    * `arr.sort();`
    * `arr.indexOf();`
3. console:
    * `console.log();`
    * `console.warn();`
    * `console.error();`
    * `console.clear();`
4. Math: 
    * `Math.PI;`
    * `Math.random();`
5. strings:
    Srings are *primitive values* (not objects) but JS automatically wraps them in `String` objects.
```javaScript
const hello = "hello";
console.log(hello.length);
const yello = hello.toUpperCase(); 
// yello = "HELLO"
// hello = "hello"
```

 #### 💡 **NOTES:**
1. **typeof**: it’s an operator
2. **push** will affect the original array while **concat** don’t, it creates a new array
3. We can mute the array even if we declared it using const
4. **Objects** are mutable
5. **console** is a **built-in** **object** that has a property called **log**
6. **Strings** are ***primitive** values* (**not objects**) but JS automatically wraps them in `String` objects


## Quiz Project 
```HTML
<!DOCTYPE html>
<!-- saved from url=(0038)file:///home/sarah/Downloads/Quiz.html -->
<html lang="en-US"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <title>Quiz.js</title>
    <style>
        body {
            margin: 1rem auto;
            padding: 3rem;
            font-family: sans-serif;
        }
        header {
            width: 50%;
            margin: 1em auto;
        }
        main {
            min-width: 25rem;
            max-width: 50%;
            margin: 0px auto;
            display:flex; 
            flex-direction: column;
        }
        #statement {
            border: 1px solid black;
            border-radius: 0.5rem;
            box-shadow: 5px 5px 5px gray;
            padding: 1rem;
            font-size: x-large;
            text-align: center;
            margin: 1rem 0px;
            min-height: 2em;
        }
        #explanation {
            padding: 1rem;
            text-align: center;
        }
        #options {
            width: 100%;
            display: flex;
            flex-direction: column;
        }
        button {
            padding: 0.5rem;
            font-size: medium;
            border-radius: 5px;
        }
        .correct {
            background-color: lightgreen;
        }
        .incorrect {
            background-color: lightpink;
        }
    </style>
  </head>
  <body>
    <header>
    <h1>Quiz.js</h1>
    <p>Do you know JS? Find out!</p>
    </header>

    <main>
    <div id="statement">
        
    </div>

    <div id="options">
        <button name="true" value="true">true</button>
        <button name="false" value="false">false</button>
    </div>

    <div id="explanation">

    </div>

    </main>

  

  <script type="text/javascript">


    // TODO 1: Declare & assign variables pointing to the corresponding element(s)
    // statement should be the "statement" div
    // optionButtons should be all the elements within the "options" div
    // explanation should be the "explanation" div

    const statement = document.getElementById("statement")
    const optionButtons = document.querySelector("#options").children
    const explanation = document.getElementById("explanation")


    // TODO 2: Declare & assign a variable called fact
    // Its value should be an object with a statement, true/false answer, and explanation 
    
    let fact = {
        statement : "Arrays are like objects",
        answer : true,
        explanation :  "Arrays are a kind of object with special proprties"
    }

    
    // TODO 3: Set the text of the statement element to the fact's statement

    statement.textContent= fact.statement


  </script>

</body></html>
```



## FreeCodeCamp challenges🔥:
1. [Copy Array Items Using slice()](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice)

My solution:
```javaScript
function forecast(arr) {
  // Only change code below this line
arr = arr.slice(2, 4);
  return arr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```
2. [Combine Arrays with the Spread Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/combine-arrays-with-the-spread-operator)

My solution:
```javaScript
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment , 'is', 'fun']; // Change this line
  return sentence;
}

console.log(spreadOut());
```
3. [Profile Lookup](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup)

My solution:
```javaScript
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for(let i = 0 ; i < contacts.length ; i++)
  {
    if(contacts[i].firstName === name)
    {
      if (contacts[i][prop] != undefined)
      { 
        return contacts[i][prop];
      }else{
        return "No such property";
      }
    }
  }
   return "No such contact";
    // Only change code above this line
}
lookUpProfile("Akira", "likes");
```

4. [Write Reusable JavaScript with Functions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/write-reusable-javascript-with-functions)

My solution:
```javaScript
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();
```

5. [Understanding Undefined Value returned from a Function](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-undefined-value-returned-from-a-function)

My solution:
```javaScript
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive() {
  sum = sum + 5;
}
// Only change code above this line

addThree();
addFive();
```


