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

