# Day 12 🤩

## Philosophy of Coercion

### **Exercise:**

**Working With Coercion**

In this exercise, you will define some validation functions that check user inputs (such as from DOM elements). You'll need to properly handle the coercions of the various value types.

**Instructions**

1. Define an `isValidName(..)` validator that takes one parameter, `name`. The validator returns `true` if all the following match the parameter (`false` otherwise):

	- must be a string
	- must be non-empty
	- must contain non-whitespace of at least 3 characters

2. Define an `hoursAttended(..)` validator that takes two parameters, `attended` and `length`. The validator returns `true` if all the following match the two parameters (`false` otherwise):

	- either parameter may only be a string or number
	- both parameters should be treated as numbers
	- both numbers must be 0 or higher
	- both numbers must be whole numbers
	- `attended` must be less than or equal to `length`

```javaScript
function isValidName(name) {
	if (
		typeof name == "string" &&
		name.trim().length >= 3
	) {
		return true;
	}

	return false;
}

function hoursAttended(attended,length) {
	if (
		typeof attended == "string" &&
		attended.trim() != ""
	) {
		attended = Number(attended);
	}
	if (
		typeof length == "string" &&
		length.trim() != ""
	) {
		length = Number(length);
	}
	if (
		typeof attended == "number" &&
		typeof length == "number" &&
		attended <= length &&
		attended >= 0 &&
		length >= 0 &&
		Number.isInteger(attended) &&
		Number.isInteger(length)
	) {
		return true;
	}

	return false;
}


// tests:
console.log(isValidName("Frank") === true);
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);

```



## Equality  == vs. ===

This is ***NOT*** true ❌:

`==` checks value (loose).

`===` checks value and type (strict).

This is ***True*** ✅:

`==` allows coercion (when types are different).

`===` disallows coercion (when types are the same).

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/3317abc5-aad5-4992-bc4b-8a76e7e3fc67)


![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/e233fecb-f678-4ccb-b3d4-df761da59445)
![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/5839b884-6e81-4ebd-af9d-b63965b5daf3)


### Coercive Equality

For the most part, you have the option of treating null and undefined as indistinguishable through coercive equality. Whether the property was ever created and has been reset back to null, or whether it's been reset back to undefined, or whether it was never created at all. Those are basically all the same condition, or at least I would argue, that's a better way to code, to treat those as indistinguishable.

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/faed8168-fe0a-4230-8af6-e048f1bcbb49)


### Double Equals Algorithm
If I had a triple equals and they were different types, it's always gonna fail. So I'm gonna have to make numbers. But if I know there can only be number or string, especially if one of them is definitely a number, then an exactly the same way as I allow this with the last things sign, several sides ago, why not also allow with the double equals, why not say that this code online for is more noisy unnecessarily so and the abstraction of the double equals it's helpful here.

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/eeebbc8f-0130-4906-8997-4c5519c43beb)

### == Summary:

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/f4cec410-1f15-48ba-8711-96ae661fb7e6)


### == Corner Cases

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/2cdf15e0-0dca-4ff0-9de1-836c9d32e9ce)
![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/9ee2d25b-8abc-4bd5-a76d-7a5d7d201ae3)

### == Corner Cases: Booleans

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/59f816de-dd0c-4c8a-b026-b4ce66ccbbdd)
![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/9be32b47-5a98-443e-bd99-5f88a42a6223)


### Corner Cases: Summary

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/133c74fe-8527-4722-93c7-298abe0b8f4f)

### The case for preferring ==

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/9fa053fc-48b1-421c-b922-55a17b412be0)


📌  If you ***know*** the type(s) in a comparison:

* If both **types** are ***the same***, `==` is identical to `===`. Using `===` would be unnecessary, so prefer the shorter `==`.
* If the **types** are ***different***, using one `===` would be broken. Prefer the more powerful `==` or don't compare at all.
* If the **types** are ***different***, the equivalent of one `==` would be two (or more!) `===` (ie, "slower"). Prefer the "faster" single `==`.
* If the **types** are ***different***, two (or more!) `===` comparisons may distract the reader Prefer the cleaner single `==`.

💡 ***Summary***: whether the types match or not, `==` is the more sensible choice.

📌 If you ***don't know*** the type(s) in a comparison:

* The uncertainty of not knowing types should be obvious to reader The most obvious signal is `===`.
* Not knowing the types is equivalent to assuming type conversion Because of corner cases, the only safe choice is `===`.

💡 ***Summary***: if you can't or won't use known and obvious types, `===` is the only reasonable choice.

#### 💡 **NOTE**: 
***Summary:*** 

making types known and obvious leads to better code. 

If types are known, `==` is best.

Otherwise, fall back to `===`.


### **Exercise:**

**Wrangling Equality**

In this exercise, you will define a `findAll(..)` function that searches an array and returns an array with all coercive matches.

**Instructions**

1. The `findAll(..)` function takes a value and an array. It returns an array.

2. The coercive matching that is allowed:

	- exact matches (`Object.is(..)`)
	- strings (except "" or whitespace-only) can match numbers
	- numbers (except `NaN` and `+/- Infinity`) can match strings (hint: watch out for `-0`!)
	- `null` can match `undefined`, and vice versa
	- booleans can only match booleans
	- objects only match the exact same object

```javaScript
function findAll(match,arr) {
  var ret = [];
  for (let v of arr) {
    if (Object.is(match,v)) {
      ret.push(v);
    }
    else if (match == null && v == null) {
      ret.push(v);
    }
    else if (typeof match == "boolean") {
      if (match === v) {
        ret.push(v);
      }
    }
    else if (typeof match == "string" && match.trim() != "" && typeof v == "number" && !Object.is(-0,v)) {
      if (match == v) {
        ret.push(v);
      }
    }
    else if (typeof match == "number" && !Object.is(match,-0) && !Object.is(match,NaN) && !Object.is(match,Infinity) && !Object.is(match,-Infinity) && typeof v == "string" && v.trim() != "") {
      if (match == v) {
        ret.push(v);
      }
    }
  }
	return ret;
}


// tests:
var myObj = { a: 2 };

var values = [
	null, undefined, -0, 0, 13, 42, NaN, -Infinity, Infinity,
	"", "0", "42", "42hello", "true", "NaN", true, false, myObj
];

console.log(setsMatch(findAll(null,values),[null,undefined]) === true);
console.log(setsMatch(findAll(undefined,values),[null,undefined]) === true);
console.log(setsMatch(findAll(0,values),[0,"0"]) === true);
console.log(setsMatch(findAll(-0,values),[-0]) === true);
console.log(setsMatch(findAll(13,values),[13]) === true);
console.log(setsMatch(findAll(42,values),[42,"42"]) === true);
console.log(setsMatch(findAll(NaN,values),[NaN]) === true);
console.log(setsMatch(findAll(-Infinity,values),[-Infinity]) === true);
console.log(setsMatch(findAll(Infinity,values),[Infinity]) === true);
console.log(setsMatch(findAll("",values),[""]) === true);
console.log(setsMatch(findAll("0",values),[0,"0"]) === true);
console.log(setsMatch(findAll("42",values),[42,"42"]) === true);
console.log(setsMatch(findAll("42hello",values),["42hello"]) === true);
console.log(setsMatch(findAll("true",values),["true"]) === true);
console.log(setsMatch(findAll(true,values),[true]) === true);
console.log(setsMatch(findAll(false,values),[false]) === true);
console.log(setsMatch(findAll(myObj,values),[myObj]) === true);

console.log(setsMatch(findAll(null,values),[null,0]) === false);
console.log(setsMatch(findAll(undefined,values),[NaN,0]) === false);
console.log(setsMatch(findAll(0,values),[0,-0]) === false);
console.log(setsMatch(findAll(42,values),[42,"42hello"]) === false);
console.log(setsMatch(findAll(25,values),[25]) === false);
console.log(setsMatch(findAll(Infinity,values),[Infinity,-Infinity]) === false);
console.log(setsMatch(findAll("",values),["",0]) === false);
console.log(setsMatch(findAll("false",values),[false]) === false);
console.log(setsMatch(findAll(true,values),[true,"true"]) === false);
console.log(setsMatch(findAll(true,values),[true,1]) === false);
console.log(setsMatch(findAll(false,values),[false,0]) === false);

// ***************************

function setsMatch(arr1,arr2) {
	if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length) {
		for (let v of arr1) {
			if (!arr2.includes(v)) return false;
		}
		return true;
	}
	return false;
}
```

### TypeScript, Flow, and type-aware linting

📌 **Benefits:**  

1. Catch type-related mistakes
2. Communicate type intent
3. Provide IDE feedback
4. validating operand types to avoid errors

📌 **Caveats:**
1. Inferencing is best-guess, not a guarantee 
2. Annotations are optional 
3. Any part of the application that isn't typed introduces uncertainty

![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/71b77e4b-6977-4543-847b-36ab4785c572)
![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/1c3900ca-ba14-476e-a928-230b0f46c6f7)
![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/7c6a1acc-6125-4d9b-bedd-56d1dcc21b7b)
![image](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/a65325ee-e16a-4b98-aa74-7accc3f8f08a)



### 💡 Summary

 **[TypeScript vs Flow](https://github.com/niieani/typescript-vs-flowtype)** 


### TypeScript & Flow: Pros and Cons

📌 **Pros:**

* They make types more obvious in code.
* Familiarity: they look like other language's type systems.
* Extremely popular these days.
* They're very sophisticated and good at what they do.

📌 **Cons:**

* They use "non-JS-standard" syntax (or code comments).
* They require* a build process, which raises the barrier to entry.
* Their sophistication can be intimidating to those without prior formal types experience.
* They focus more on "static types" (variables, parameters, returns, properties, etc) than value types.
* The only way to have confidence over the runtime behavior is to limit/eliminate dynamic typing.

# GSG Challenges🔥:


### QUESTION #1

Given the following `promisesArray`, convert the array into an object using the
`convertToObj` function.

You should apply typescript types to every promise, the input of `convertToObj`,
and the output of `convertToObj`. 

Build interfaces and types as needed.

```javascript

const sayHelloWorld = new Promise(resolve, reject => {
  resolve("Hello world!");
});

const checkBoolean = (boolean) => new Promise(resolve, reject => {
  if (boolean) {
    resolve(boolean);
  } else {
    reject(`Input is false :(`)
  }
})

const returnObj = new Promise(resolve, reject => {
  resolve({
    x: "meow",
    y: 45,
  })
})

const promisesArray = [sayHeloWorld, checkBoolean, returnObj];

const convertToObj = (array) => {
  //write your code here;
  return obj;
}

```

 **My Solution:**

```javascript

```
-------------------------------------------------------------------

### QUESTION #2:

What will be the output of the following code snippet? Pick the right choice
then **justify your answer with an explanation**.

```javascript
function testScope1() {
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
  console.log(a);
  console.log(b);
  console.log(c);
}

testScope1();

```
**Choices:**

A) `undefined`, `undefined`, `undefined`   
B) `1`, `undefined`, `ReferenceError`  
C) `1`, `ReferenceError`, `ReferenceError`   
D) `1`, `ReferenceError`

 **My Solution:**

```javascript

```
-------------------------------------------------------------------

### QUESTION #3:

What will be the output of the following code snippet? Pick the right choice
then **justify your answer with an explanation**.

```javascript
function testScope2() {
  console.log(a);
  console.log(b);
  console.log(c);
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
}

testScope2();

```

**Choices:**

A) `undefined`, `ReferenceError`   
B) `1`, `undefined`, `ReferenceError`   
C)`undefined`, `undefined`,
`ReferenceError`  
D) `1`, `ReferenceError`

 **My Solution:**

```javascript

```
-------------------------------------------------------------------

### QUESTION #4:

What will be the output of the following code snippet? Pick the right choice
then **justify your answer with an explanation**.

```javascript

function testScope3() {
  var a = 36;
  let b = 100;
  const c = 45;

  console.log([a, b, c]);

  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;

    console.log([a, b, c]);
  }

  console.log([a, b, c]);
}

testScope3();

```

**choices:**

A) `[ 36, 100, 45 ]` | `[ 1, 2, 3 ]` | `[ 36, 2, 3 ]`   
B) `[ 36, 100, 45 ]` | `[1, 2, 3 ]` | `[ 36, 100, 45 ]`   
C) `[ 36, 100, 45 ]` | `[ 1, 2, 3 ]` | `[ 1,100, 45 ]`   
D) `[ 36, 100, 45 ]` | `[ 1, 2, 3 ]` | `[ 1, 2, 3 ]`


 **My Solution:**

```javascript

```



