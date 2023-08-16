#[JavaScript: From First Steps to Professional](https://frontendmasters.com/courses/javascript-first-steps/)

# Day 1 🤩

   
## Introduction 👋
**What is JS?**
* JS is a dynamic programming language used in websites so it's called "The programming language of the web". 
* It's used to make websites interactive.
* It's used to modify and interact with HTML.

**Where do we use JS?**
1. Browsers.
2. Servers like Node.js.
3. Embedded devices like IoT.
4. Some other languages like TypeScript that get translated to JS to run in web browsers.

**HTML vs CSS vs JS:**
We can describe those as: 
- HTML is the *Noun*.
- CSS is the *Adjective*.
- JS as the *Verb*

**Where do write JS?**
- The browser's JS Console.
- Text Editor.
- IDE like VS Code.
- Online playgrounds like CodePen and CodeSandbox.

**How do we get to JS Console in the web browser?**
1. Right-click anywhere on the web page.
2. Click on **inspect** which appears at the end of the list.
3. Click on **Console** tap then start coding!✨

## DOM (Document Object Model) 🧩🧶📄
The DOM represents the structured content of a web page as a tree-like data structure, where each element in the HTML document is represented as a node in the tree.
Using the DOM, JS can access and manipulate the content, structure, and style of a web page dynamically. 

Here is an HTML document example:
```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Example</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a DOM example.</p>
</body>
</html>
```
And here is the corresponding DOM tree:
```
Document
└── html
    ├── head
    │   └── title
    │       └── "DOM Example"
    └── body
        ├── h1
        │   └── "Hello, World!"
        └── p
            └── "This is a DOM example."
```

### Finding Elements in a Web Page 🔎:

* `document.title`: Represents the **Title of the page** - *appears in the browsers' tab*.
* `document.body`: Represents the HTML **Body element**. 
* `document.body.children`: Represents **All the elements within the body**.
* `document.getElementById("board")`: Returns **Specific element with specific id**.
* `document.querySelector("#board")`: Returns **Specific element with specific id** but by using the CSS selector.
* `document.getElementsByTagName("h1")`: Returns **All the elements with the same tag**.  
* `document.querySelectorAll("h1")`: Returns **All the elements with the same tag** but by using the CSS selector.
* `document.getElementsByClassName("player")`: Returns **All the elements with the same class**. 
* `document.querySelectorAll(".player")`: Returns **All the elements with the same class** but by using the CSS selector.
* `document.getElementsByClassName("player").length`: Returns **The nubmer of the elements that are returned**.
* `document.querySelectorAll(".player").length`:  Returns **The nubmer of the elements that are returned** but by using the CSS selector.
* `document.getElementById("p1-name").textContect`: Returns the **Text element** inside of the selected element.

#### 💡**NOTE:**
> **For learning more about HTML, CSS, and JS this website is very helpful : [MDN](https://developer.mozilla.org/en-US/)🌟**.


### **Changing a Web Page using JS📄✏️:** 
There are 2 ways to manipulate the element which are:
1. Using the equals operator `=` : 
```JavaScript
document.title = "My Page" 
```
➡️ This will replace the page title with *My Page*.

2. Using `.appned(””)`:
```JavaScript
document.getElementById("p1-name").append(" & friends")
```
➡️ This will add  text to the end of the elements' current text.

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

2. [Concatenating Strings with the Plus Equals Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-the-plus-equals-operator)

My solution:
```javaScript
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
```

3. [Use Dot Notation to Access the Properties of an Object](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-dot-notation-to-access-the-properties-of-an-object)

My solution:
```javaScript
let dog = {
  name: "Spot",
  numLegs: 4
};
// Only change code below this line
console.log(dog.name);
console.log(dog.numLegs);
```

