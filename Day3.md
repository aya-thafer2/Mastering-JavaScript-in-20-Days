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

