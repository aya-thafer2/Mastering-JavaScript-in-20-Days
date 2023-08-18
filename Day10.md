# Day 10 🤩

## Classes & Prototypes 

### Objects
JavaScript objects are complex data structures that allow developers to store and access data in a key-value format. An object is an unordered collection of properties, where each property has a name (or key) and a value. The keys are usually strings, but they can also be symbols, and the values can be any data type, including other objects.

## In JavaScript we can create an object in one of four ways: 
1- Object literal notation
2- Using the new Object() constructor
3- Using a constructor function
4- Using class

## JavaScript Classes
Classes are one of the features introduced in the **ES6** version of JavaScript. You can think of the class as a sketch (prototype) of an object. And then we can create many objects of that (prototype).

## Prototype
In JavaScript, a **prototype** is a mechanism that allows objects to inherit properties and methods from other objects. Every object in JavaScript has a prototype, which can be either another object or `null`. When a property or method of an object is accessed, JavaScript first looks for that property or method in the object itself. If it is not found, it looks for it in the object's prototype, and keeps looking

Every Object in JavaScript has a prototype, we need that prototype to keep track of the attributes in that object/function and to inherit those attributes to child objects.

### Prototype Chain
When a property or method of an object is accessed in JavaScript, the language first looks for that property or method in the object itself. If it is not found, it looks for it in the object's prototype, and keeps looking up the prototype chain until the property or method is found or the end of the chain is reached. 


## Object.prototype.hasOwnProperty()
The hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property (as opposed to inheriting it).


### `_proto_` VS. prototype:
Proto and prototype both are objects that help in whether creating an array, object, or function and provide access to those specific methods or objects directly without taking memory and even it will give access to its constructor and all the array methods like push, pop, etc.

`_proto_`: It is an actual object that provides a way to inherit properties from JavaScript with the help of an object which is created with `new`. Every object with behavior associated has internal property `[[prototype]]`.



**Prototype**: It is a special object which means it holds shared attributes and behaviors of instances. It is a way to inherit properties from javascript as it is available in every function declaration.


### Solutions for repeating the code: 

1. **Generate objects using a function**

**Problem**:  each time we create a new user we make space in our computer's memory for all our data and functions. But our functions are just copies.

1. **Using the prototype chain**.
2. Introducing the keyword that automates the hard work: **new** (95% of developers have no idea how it works and therefore fail interviews).
3. **The class**.


#### 💡 **Notes**:
> - All objects have a **`_proto_`** property by default which defaults to linking to a big object - Object.prototype full of (somewhat) useful functions.
> - Arrow functions override the normal `this` rules.

### functions are both objects and functions

```javaScript
function multiplyBy2(num){
 return num*2
}
multiplyBy2.stored = 5
multiplyBy2(3) // 6
multiplyBy2.stored // 5
multiplyBy2.prototype // {}
```

![Screenshot (266)](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/eeac90c1-2282-45f6-8340-5dd7f816cbfb)


We could use the fact that all functions have a default property `prototype` on their object version, (itself an 
object) - to replace our `functionStore` object.


**The new keyword automates a lot of our manual work**
```javaScript
function userCreator(name, score){
 this.name = name;
 this.score = score;
}
userCreator.prototype.increment = function(){ this.score++; };
userCreator.prototype.login = function(){ console.log("login"); };
const user1 = new userCreator(“Eva”, 9)
user1.increment()
```

![Screenshot (269)](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/4896b6ef-6961-4c09-aebf-968730e69bfa)

**The class ‘syntactic sugar’**
```javaScript
class UserCreator {
 constructor (name, score){
 this.name = name;
 this.score = score;
 }
 increment (){ this.score++; }
 login (){ console.log("login"); }
}
const user1 = new UserCreator("Eva", 9);
user1.increment();
```

![Screenshot (272)](https://github.com/aya-thafer2/Mastering-JavaScript-in-20-Days/assets/121509832/fac0da84-b594-4434-a5e2-ab9439a32667)

# GSG Challenges🔥:








 



