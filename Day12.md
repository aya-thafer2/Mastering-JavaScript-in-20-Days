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








