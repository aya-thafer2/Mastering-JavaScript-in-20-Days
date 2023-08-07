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

Some Built-in methods:
* `.indexOf()`
* `.sort()`
* `this.`

## Built in objects:

1. document
2. array
3. console : has methods : log, error 
4. Math
5. Function

## FreeCodeCamp challenges🔥:
1. [Compound Assignment With Augmented Multiplication](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-multiplication)

My solution:
```javaScript
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;
```

